/* eslint-disable no-console -- this is a CLI script; console output is the point */
/**
 * Bundle-size budget check.
 *
 * Only gates the main ES entry (`vue-virtual-keyboard.es.js`), since that's the file
 * that benefits from LayoutHelper's lazy-loading (see core/helpers/layout-registry.ts).
 * If someone reintroduces a static/eager import of the full ms-keyboards barrel into
 * anything that ships in this entry, this check will catch the regression before it
 * reaches a release - the ES entry would balloon from ~37 KB back toward ~205 KB.
 *
 * The UMD bundle is intentionally NOT gated here: it's a single-file format by nature
 * and can't be code-split, so a large UMD size is expected and not itself a regression
 * signal the same way the ES entry's size is.
 */
import { readFileSync, statSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(currentDir, `../dist`);
const esEntryPath = path.join(distDir, `vue-virtual-keyboard.es.js`);

// Raw and gzip budgets, in bytes. Generous headroom over the current ~37 KB raw /
// ~9.5 KB gzip baseline - intended to catch a several-times regression, not to be a
// tight ratchet that needs updating on every minor legitimate size increase.
const RAW_BUDGET_BYTES = 80 * 1024;
const GZIP_BUDGET_BYTES = 20 * 1024;

let rawBytes;
try {
  rawBytes = statSync(esEntryPath).size;
} catch(error) {
  console.error(`Bundle-size check: could not find ${esEntryPath}. Run "npm run build:only" first.`);
  throw error;
}

const gzipBytes = gzipSync(readFileSync(esEntryPath)).length;

const formatKb = bytes => `${(bytes / 1024).toFixed(2)} KB`;

console.log(`Bundle-size check: vue-virtual-keyboard.es.js`);
console.log(`  raw:  ${formatKb(rawBytes)} (budget: ${formatKb(RAW_BUDGET_BYTES)})`);
console.log(`  gzip: ${formatKb(gzipBytes)} (budget: ${formatKb(GZIP_BUDGET_BYTES)})`);

let failed = false;

if(rawBytes > RAW_BUDGET_BYTES) {
  console.error(`  ✖ Raw size exceeds budget by ${formatKb(rawBytes - RAW_BUDGET_BYTES)}.`);
  failed = true;
}

if(gzipBytes > GZIP_BUDGET_BYTES) {
  console.error(`  ✖ Gzip size exceeds budget by ${formatKb(gzipBytes - GZIP_BUDGET_BYTES)}.`);
  failed = true;
}

if(failed) {
  console.error(`\nIf this growth is expected and intentional, raise the budget in scripts/check-bundle-size.mjs.`);
  console.error(`If it's not expected, check for a reintroduced eager import of the full layout barrel`);
  console.error(`(src/core/index.ts) into anything that ships in src/lib/index.ts.`);
  process.exit(1);
}

console.log(`  ✓ Within budget.`);
