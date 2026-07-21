# Contributing

Thanks for considering a contribution! This is a small project maintained in spare time, so please
be patient with review turnaround.

## Getting started

```bash
git clone https://github.com/gwinnem/vue-keyboard-component.git
cd vue-virtual-keyboard
npm install
npm run dev
```

This starts the sandbox app (`sandbox/App.vue`) at `http://localhost:9090`, with the layout
selector and theme switcher both enabled - useful for manually exercising changes.

`npm install` automatically sets up a pre-commit hook (via Husky) that runs `eslint --fix` /
`stylelint --fix` on staged files - so most style issues get caught before you even open a PR.

## Before opening a PR

Run the full check suite locally - this is exactly what CI runs:

```bash
npm run typecheck
npm run lint
npm run lint:style
npm run test:coverage
npm run build:only
npm run build:types
```

For changes touching component behavior, also run the end-to-end suite:

```bash
npm run e2e:install   # one-time, downloads browser binaries
npm run e2e:run
```

`npm run e2e:run` excludes visual regression tests by default (see below). Run
`npm run e2e:visual` separately.

For substantial logic changes to `LayoutHelper.ts`, `RtlHelper.ts`, `ThemeSwitcher.vue`,
`KeyboardButton.vue`, or `Keyboard.vue`, consider also running mutation testing
(`npm run test:mutation`) - it catches cases where a test executes a line but wouldn't actually
notice if its logic were wrong. This isn't part of the required PR checklist above (it's slow, and
runs separately in CI on a weekly schedule rather than per-PR), but is worth a look for anything
non-trivial. See [`COVERAGE.md`](./COVERAGE.md) for details, current numbers, and a known Vue SFC
compiler compatibility fix if you're adding a new component with `withDefaults(defineProps())`.

If Playwright's own browser CDN (`cdn.playwright.dev`) is unreachable from your network, you can
point Playwright at an already-installed Chrome/Chromium binary instead via
`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` (applies to the `chromium` and `mobile-chrome` projects only -
`firefox`/`webkit` still need Playwright's own managed browsers):

```bash
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/path/to/chrome npx playwright test --project=chromium --project=mobile-chrome
```

### Visual regression baselines

`e2e/visual.spec.ts` uses Playwright's screenshot comparison, maintained only for the `chromium`
project (`e2e/visual.spec.ts-snapshots/*.png`, committed to the repo) - not per-browser, since this
component has no complex cross-engine rendering differences worth tracking separately. If you
intentionally change the keyboard's appearance, regenerate and re-commit the affected snapshots:

```bash
npx playwright test e2e/visual.spec.ts --project=chromium --update-snapshots
```

## What we're looking for in a PR

- **Tests for behavior changes.** New logic in `Keyboard.vue`, `KeyboardButton.vue`, or
  `ThemeSwitcher.vue` should come with unit/component tests (`src/lib/components/__tests__/`).
  User-facing interaction changes should also get an e2e test (`e2e/`).
- **No new `devDependencies` without a reason.** This package intentionally ships with zero
  runtime dependencies; keep the dev toolchain lean too.
- **Keep the lazy-loading intact.** `LayoutHelper` dynamically imports each of the 150 keyboard
  layouts individually (see `src/core/helpers/layout-registry.ts`) so consumers only download the
  layouts they actually use. Don't reintroduce a static/eager import of the full layout barrel
  (`src/core/index.ts`) into `src/lib/index.ts` or any other code that ships in the build - that
  would silently balloon the published bundle back to ~200 KB.
- **Breaking changes** (renamed props, renamed CSS classes/custom properties, changed default
  behavior) need a note in the [changelog](./CHANGELOG.md) under a new major
  version heading.

## Adding or fixing a keyboard layout

See [`docs/sample-layout.md`](./docs/sample-layout.md) for the `ILayoutItem` shape, and
[`docs/keyboard-layouts.md`](./docs/keyboard-layouts.md) for the full list of layouts already
included, in case yours already exists under a different expected name.

## Reporting bugs / requesting features

Use [GitHub Issues](https://github.com/gwinnem/vue-keyboard-component/issues). For security
vulnerabilities, see [`SECURITY.md`](./SECURITY.md) instead - please don't file those as public
issues.

## Code of conduct

This project follows the [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you're
expected to uphold it.
