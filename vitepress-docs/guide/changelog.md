---
aside: false
page: true
title: Changelog
---

# Changelog

## v: 2.0.0 (devDependency cleanup: 46 → 28)
* __Fixed__ Pre-commit hooks were silently non-functional: `package.json` had a legacy husky
  v0-v4-style `"husky": { "hooks": {...} }` config block, but husky `^8.0.3` (what's actually
  installed) ignores that format entirely - it requires a `.husky/` directory and a `"prepare"`
  script, neither of which existed. Verified via a real test commit that the hooks now genuinely
  fire (confirmed twice: blocking a badly-formatted file, and correctly reverting to a clean state
  afterward). `npm install` / `npm ci` now both correctly auto-install the hooks via the new
  `"prepare": "husky install"` script.
* __Fixed__ `prettier` (via the `format` script and `lint-staged`'s catch-all rule) had no config
  file, so it ran with its own defaults - which actively conflict with this codebase's
  ESLint-enforced style (verified directly: it wanted to collapse the one-attribute-per-line Vue
  template formatting `vue/attributes-order` requires). Replaced both with `eslint --fix` /
  `stylelint --fix`, which already match what this codebase actually follows. Removed `prettier`,
  `eslint-plugin-prettier`, and `stylelint-config-prettier` (all now genuinely unused).
* __Removed__ 15 other devDependencies confirmed to have zero references anywhere in the project:
  `@babel/types`, `@interactjs/types`, `@types/element-resize-detector`, `@vue/theme` (confused
  with the actually-used, unrelated `vitepress/theme`), `@vue/tsconfig`, `cross-env`, `path` (the
  npm package - Node's own core module always takes resolution priority, so this was never
  actually loaded by anything), `sass-loader` (Webpack-specific; this project uses Vite),
  `ttypescript`, `postcss`, `postcss-html`, `postcss-scss`, `@vue/compiler-sfc` (already provided
  transitively by `vue` itself), and `scss` (every apparent reference was actually Vite's
  `preprocessorOptions.scss` config key or a `stylelint-scss` rule namespace, not the package).
* __Removed__ Two orphaned config files: `tsconfig.config.json` and `tsconfig.build-types.json`,
  both unreferenced by any script and both still targeting `cypress.config.*` / `*.cy.ts` patterns
  from before this session's Cypress-to-Playwright migration.
* __Correction__ Initially also removed `stylelint-config-recommended-scss` as apparently-redundant
  (confirmed `stylelint-config-standard-scss` depends on it transitively) - but `npm run lint:style`
  broke immediately after. Stylelint's config-extension resolution needs it directly resolvable,
  which the nested transitive copy doesn't satisfy; reinstalled it as a direct dependency and
  verified the fix. A reminder that "confirmed as a transitive dependency" and "safe to remove as a
  direct one" aren't always the same thing - verified by actually running the affected command
  before, not just tracing `npm ls` output.
* __Result__ 46 → 28 devDependencies. Full pipeline reverified after every single change in this
  cleanup (typecheck, lint, stylelint, 309 unit tests, build, size-check, docs build, and the full
  e2e suite against a real browser) - not just at the end.

## v: 2.0.0 (enterprise-ready markdown files)
* __Fixed__ A real license inconsistency: `LICENSE` contained the ISC License text, while
  `package.json` and the README both declared MIT - exactly the kind of mismatch automated
  license-scanning tools (FOSSA, Snyk, Mend) flag, and that can block enterprise legal approval.
  Corrected `LICENSE` to the actual MIT text.
* __Added__ `NOTICE.md` - trademark disclaimer ("Microsoft"/"Windows" aren't affiliated with this
  project) and provenance notice for the bundled keyboard layout data. Now shipped with the
  published npm package itself (added to `files`), not just the repo.
* __Added__ A root-level `CHANGELOG.md` following the [Keep a Changelog](https://keepachangelog.com)
  convention - previously the only changelog lived inside the VitePress docs site, which most
  tooling (npm's package page, Dependabot, enterprise dependency reviews) doesn't look inside for.
* __Added__ `SUPPORT.md` (GitHub surfaces this in its "Get help" community-health widget) and
  `GOVERNANCE.md` - written honestly as a single-maintainer project rather than implying a
  governance structure that doesn't exist.
* __Added__ `ARCHITECTURE.md` - directory layout and the reasoning behind the main architectural
  decisions (lazy-loaded layouts, the dual mousedown/click event handling and the bugs it caused,
  roving-tabindex navigation, theming), for enterprise code review and new contributors.
* __Fixed__ Cross-referenced all the governance/legal docs from a new "Project info" section in
  the README, and verified every internal link across all of them resolves correctly.

## v: 2.0.0 (test coverage: 99.8% statements/lines, 100% functions)
* __Fixed__ A real, previously-undiscovered bug: 3 of the 150 layouts (`msFinlandSwedenSamiExtended`,
  `msInuktitutNagittaut`, `msSetswanaSesotoSaLeboa`) had mismatched names between the layout
  registry and the layout-selector's dropdown list (e.g. dropdown said
  `msFinlandSwedenExtendedSami`, registry key was `msFinlandSwedenSamiExtended`). Since
  `LayoutHelper.changeLayout` gracefully falls back to the default layout on an unrecognized name
  rather than throwing, this wasn't a crash - it was a **silent failure**: selecting any of these
  3 layouts from the dropdown quietly loaded the default (English/US) layout instead, with no
  indication anything was wrong. Fixed by correcting the 3 mismatched names in
  `ms-layouts.select.ts` to match the registry (and the actual underlying files, which were
  already correct).
* __Added__ A comprehensive smoke test (`layout-registry.spec.ts`) exercising all 150 layout-registry
  entries: verifies every one resolves to a well-formed `ILayoutItem` (non-empty rows, consistent
  variant row counts, valid `lang`/`display` shapes where present), and cross-checks the registry
  against the dropdown's option list in both directions - this is exactly what caught the bug
  above. Also refactored `getKeyboardLayout` and grid navigation's direction handling
  (`onNavigate`) to use closed type unions instead of loose `string` parameters, removing two
  previously-unreachable `default` switch cases rather than leaving them as untested dead code.
* __Result__ `layout-registry.ts` function coverage: ~2% → 100% (150 lazy-loader closures now all
  genuinely exercised, not just the 2-3 layouts used elsewhere in the test suite). Overall:
  99.8% statements, 99.33% branches, **100% functions**, 99.8% lines across the whole `src/`
  tree - the one remaining gap is a single defensive 2-line guard against a narrow async race
  condition, judged impractical to test deterministically without exposing internal refs. 309
  unit/component tests total (up from 155).

## v: 2.0.0 (Home/End navigation, accessibility hint)
* __Added__ Home and End keys jump to the first/last key in the current row, rounding out the
  arrow-key grid navigation added earlier. Unaffected by RTL (they're logical first/last
  positions, not visually-directional like Left/Right).
* __Added__ A visually-hidden instructional hint ("Use arrow keys to move between keys once one is
  focused"), wired via `aria-describedby` on the keyboard container - tells assistive technology to
  expect arrow-key navigation. Considered changing the container's `role` to `toolbar`/`grid`
  instead, but that would need real screen-reader verification this environment can't do, and risks
  changing interaction semantics for existing users; `aria-describedby` is additive and safe by
  comparison. `aria-roledescription` was also considered and rejected - it would have duplicated
  the existing `aria-label` ("Virtual keyboard, virtual keyboard").
* __Result__ 155 unit tests, 69 e2e tests passing against a real browser (including that the new
  hint doesn't change any visual regression baseline).

## v: 2.0.0 (grid navigation bug fixes)
* __Fixed__ Clicking a key with the mouse updated the roving-tabindex `tabindex` attribute correctly, but never moved real DOM focus there - confirmed via a real browser (`document.activeElement` reported "inactive" despite the correct button showing `tabindex="0"`). Root cause: `mousedown`'s `preventDefault()` (kept intentionally to avoid focus-stealing/text-selection) also suppresses the browser's native focus-on-click for buttons. Now explicitly focuses the button in its `onClick` handler instead of relying on native behavior. (Character-inserting keys are unaffected - `Keyboard.vue` already, correctly, redirects focus back to the text input after those.)
* __Fixed__ Arrow-key navigation always moved to the next/previous button in raw DOM order, but RTL layouts mirror the *visual* row order via CSS - so ArrowRight actually moved focus visually leftward on an RTL layout (confirmed via a real browser: pressing it moved focus from x=872 to x=832). Now swaps ArrowLeft/ArrowRight before processing when the active layout is RTL, so arrow keys match what's on screen rather than DOM order. Vertical navigation (Up/Down) is unaffected.
* __Result__ Both fixes verified against a real browser, not just jsdom - including that real focus (not just the `tabindex` attribute) moves correctly in each case. 149 unit tests, 67 e2e tests passing.

## v: 2.0.0 (RTL support, i18n, real feature implementations, grid navigation)
* __Added__ Automatic right-to-left rendering: `Keyboard` now renders `dir="rtl"` and `lang="<code>"`
  based on a layout's `lang` metadata (added to the `ILayoutItem` type - it already existed as
  unused data in every one of the 150 layout files, but was never part of the type or read
  anywhere). Affects Arabic, Hebrew, Persian, Urdu, Divehi, Uyghur, Pashto, Sindhi, Kurdish Sorani,
  and Yiddish layouts (11 of the 150). Also switched the button-spacing CSS from a physical
  `margin-right` to the logical `margin-inline-end`, so spacing mirrors correctly under RTL.
* __Added__ `keyboardTranslation` now actually overrides the accessible (`aria-label`) names of
  special keys, letting consumers localize what screen readers announce - previously declared but
  never read anywhere.
* __Added__ `includeInLayout` / `excludeFromLayout` now actually filter the layout-selector's
  option list - previously declared but never read anywhere.
* __Added__ `debug` / `debugEvents` now actually log significant state changes / button
  interactions to the console (prefixed `[Keyboard]` / `[KeyboardButton]`) - previously declared
  but never read anywhere.
* __Added__ `buttonLayout` now renders as a `data-button-layout` attribute (previously declared but
  never read anywhere) - documented alongside `altValue`/`shiftValue`/`altShiftValue` as
  inspection/styling hooks only, not behavior-driving props.
* __Added__ Roving-tabindex grid navigation: only one key is ever a Tab stop; arrow keys move it
  (and real focus) between keys, clamped to each row's actual length; clicking a key also moves the
  Tab stop there. Previously, all ~50 keys were individually tabbable, making the keyboard
  impractical to navigate without a mouse. Follows the WAI-ARIA APG's recommended pattern for a
  large set of grouped buttons. Verified against a real browser (not just jsdom), including that
  focus, not just the `tabindex` attribute, actually moves.
* __Fixed__ `KeyboardButton.vue` had a template `ref="button"` with no corresponding `const button
  = ref()` ever declared in its script - a second latent dead ref, now used to expose a real
  `focus()` method for the grid navigation above.
* __Result__ `Keyboard.vue` 99.1% / `KeyboardButton.vue` 100% statement coverage; 137 unit tests, 5
  new real e2e tests for grid navigation (all passing against an actual browser).

## v: 2.0.0 (Vitest UI)
* __Added__ `@vitest/ui` and a `test:ui` script (`vitest --ui`) - a browser-based UI for exploring and re-running tests interactively during development.

## v: 2.0.0 (npm run test no longer hangs)
* __Fixed__ `"test": "vitest"` ran Vitest in interactive watch mode by default, which never exits on its own. Locally, this made `npm run test` look like it "hung" after all tests passed (it was just idling, waiting for file changes). More seriously, the `vue-compat` CI matrix job's "Unit/component tests against this Vue version" step called this exact script - meaning it would have hung in CI until GitHub's job timeout, on every push/PR, across all three Vue versions in the matrix. This escaped detection all session because every verification pass here used `npx vitest run` directly rather than the `test` npm script itself. Changed `test` to `vitest run` (runs once, exits with a real pass/fail code) and added `test:watch` for interactive development.

## v: 2.0.0 (e2e tests actually executed against a real browser)
Previously, this sandbox environment couldn't reach Playwright's browser CDN, so the e2e suite had
only ever been statically validated (typechecked, linted, discovered), never actually run. Found a
real, pre-existing Chrome for Testing binary in the environment's Puppeteer cache and pointed
Playwright at it directly (`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`, see `CONTRIBUTING.md`), which let
the whole suite run for real for the first time. It found genuine bugs that static analysis and
jsdom-based unit tests structurally could not have caught:

* __Fixed__ `onInputKeyDown` called `evt.preventDefault()` unconditionally, before even checking
  `usePhysicalKeyboard` - silently blocking all native browser behavior on the text input (typing,
  arrow-key/Home/End caret navigation, everything) regardless of that setting, which defaults to
  `false`. jsdom doesn't simulate real caret movement from key presses, so no unit test could have
  caught this; only a real browser could. Also expanded the excluded-key list to cover navigation
  keys (they were previously falling into the "insert as literal text" branch - e.g. pressing
  `ArrowRight` while `usePhysicalKeyboard` was enabled would have inserted the literal string
  "ArrowRight").
* __Fixed__ `KeyboardButton.vue`'s `onKeyDown` also called `preventDefault()` unconditionally for
  both `mousedown` and `keydown`. For `keydown`, this can suppress the browser's native synthesized
  click that fires when Space/Enter activates a focused button - which is what actually drives the
  layout-switching logic in the parent's `onClick`. In practice, this meant keyboard-only users
  (Tab + Space/Enter) could toggle a modifier's internal state, but the visual layout would never
  update to reflect it. Now only suppresses `mousedown`'s default (focus/selection side effects),
  leaving the native keydown→keyup→click cascade intact for keyboard activation.
* __Fixed__ The theme toggle's checkbox was hidden via `display: none`, which removes an element
  from the accessibility tree entirely - meaning the `role="switch"` / `aria-label` / `aria-checked`
  work from an earlier accessibility pass was completely inert to actual screen readers, despite
  being fully correct markup. Replaced with the standard visually-hidden ("sr-only") technique
  (absolute positioning + clipping, not `display: none`), which keeps the control perceivable and
  focusable for assistive technology while still being visually replaced by the styled label. The
  `:checked` sibling-selector styling is unaffected, since the element stays in the DOM/layout tree.
* __Fixed__ Several e2e tests clicked the theme toggle's checkbox input directly - which real users
  never do; they click the visible styled label, which natively delegates to its associated
  checkbox. Corrected across `theme-switcher.spec.ts`, `modifiers.spec.ts`, and `visual.spec.ts`.
* __Fixed__ `visual.spec.ts`'s chromium-only guard checked `browserName`, which reflects the
  underlying rendering engine (`mobile-chrome` also reports as `chromium`), not the Playwright
  project - so it didn't actually exclude the `mobile-chrome` project as intended. Fixed to check
  `testInfo.project.name` instead.
* __Fixed__ A couple of e2e tests repeated an earlier-discovered gotcha: after the shift-active row
  is showing, that key is rendered as `{shiftleft}`, not `{shift}` - a test clicking `{shift}` a
  second time to toggle it back off was silently timing out waiting for a button that no longer
  existed under that value.
* __Fixed__ `.gitignore` had a typo (`.viepress`, missing a "t", plus an incorrect leading path) that meant its VitePress cache-exclusion rule never actually matched anything - `vitepress-docs/.vitepress/cache/**` had been accidentally committed to the repo as a result. Fixed the pattern and removed the erroneously-tracked cache files.
* __Added__ Visual regression baseline screenshots are now generated and committed
  (`e2e/visual.spec.ts-snapshots/*.png`, chromium project only). CI now runs the full Playwright
  suite unconditionally, including visual regression.
* __Result__ 57 e2e tests genuinely pass against a real browser (chromium + mobile-chrome
  projects; firefox/webkit still require Playwright's managed browser downloads, unavailable in
  this sandbox), all 97 unit/component tests still pass, and the full typecheck/lint/build pipeline
  remains green.

## v: 2.0.0 (typescript-eslint upgrade)
* __Fixed__ `npm run lint` printed a "TypeScript version not officially supported" warning on every run - `@typescript-eslint@5.x` only supports TypeScript `<5.2.0`, but the project uses `5.9.3`. Rather than downgrading TypeScript, upgraded `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` to `^8.64.0` (supports TypeScript `>=4.8.4 <6.1.0`), which in turn required bumping `eslint` to the latest `8.x` (`^8.57.1`, typescript-eslint 8's minimum peer) - deliberately staying on ESLint 8's legacy config format rather than migrating to ESLint 9's flat config.
* __Fixed__ typescript-eslint 8 removed three formatting rules (`func-call-spacing`, `member-delimiter-style`, `space-before-function-paren`) that moved to the separate `@stylistic/eslint-plugin` project. Added `@stylistic/eslint-plugin@^2.13.0` (the last major line still supporting ESLint 8) and migrated the three rule configurations across, preserving the exact same formatting enforcement rather than dropping it.
* __Result__ `typescript` stays at `^5.9.3` (unchanged), `npm run lint` runs clean with zero errors and no version warnings, `npm audit` still reports 0 vulnerabilities.

## v: 2.0.0 (documentation rebuild)
* __Fixed__ `css-variables.md` still listed the dead duplicate `--keyboard-button-color-light` declaration (`#000000`) that was removed from the actual `themes.scss` earlier - the docs page wasn't updated at the time. Also added an explanation of the three-tier theming resolution mechanism (`[color-scheme]` attribute → `prefers-color-scheme` media query → base variable), which was previously undocumented.
* __Fixed__ Discovered and documented that `IKeyboardProps.debug` / `excludeFromLayout` / `includeInLayout` / `keyboardTranslation`, and `IKeyboardButtonProps.buttonLayout` / `debugEvents`, are declared but never read anywhere in the component - passing them currently has no effect. `altShiftValue` / `altValue` / `shiftValue` are rendered as `data-*` attributes only; the actual per-modifier character rendering is driven entirely by which row array `Keyboard` swaps in, not by these per-button props. Added explicit callouts in `types-layout.md` so this isn't mistaken for a bug, and corrected `keyboard-layouts.md`'s description, which incorrectly implied active filtering already worked.
* __Fixed__ `components/index.md`'s frontmatter `title` incorrectly said "Features" (copy-paste leftover).
* __Docs__ Synced `roadmap.md` with the more specific "Upcoming Features" already in the README, now naming exactly which props each planned feature corresponds to.
* __Docs__ Added accessibility and security (0 vulnerabilities, zero runtime dependencies) highlights to `introduction.md` and `features/index.md`, matching the actual current state of the project.
* __Verified__ Every internal markdown link and every nav/sidebar link across the docs site resolves to a real page (checked programmatically); confirmed every documented enum, interface, and CSS custom property matches the actual source exactly (only the one duplicate above was out of sync).

## v: 2.0.0 (Keyboard.vue coverage: 88.6% → 100%)
* __Refactor__ Removed 5 dead/unreachable guard clauses from `Keyboard.vue` (`switchTheme`, `onAltClicked`, `onCapsClicked`, `onCtrlClicked`, `onShiftClicked`): each duplicated a condition already enforced one layer down in `KeyboardButton.vue` before the corresponding event is ever emitted, so they could never actually trigger. Verified byte-for-byte behavior is unchanged (all existing tests still pass unmodified).
* __Refactor__ `getKeyboardLayout`'s parameter was typed as a loose `string` with a `default` switch case that could never be reached in practice (only the 4 known `EKeyboardLayoutType` values are ever passed). Tightened the parameter to `EKeyboardLayoutType` and replaced the switch with a lookup map, removing the unreachable case entirely rather than working around it with lint suppressions.
* __Tests__ Added coverage for the remaining real gaps: the SHIFT/ALT layout fallbacks when a layout has no dedicated row for them, applying a layout's own custom `display` map immediately at mount (not just after a later change), selecting a layout via the actual `<select>` element (exercising the real lazy-loading `changeLayout` path end-to-end, not just `LayoutHelper` in isolation), deleting from the middle of existing text via backspace, switching to dark theme through the real `ThemeSwitcher` child (not just testing `ThemeSwitcher` in isolation), and typing directly into the input field (the reverse `v-model` direction, previously only exercised via the virtual keys).
* __Result__ `Keyboard.vue`: 100% statements, 100% functions, 100% lines, 98.2% branches (the remaining two are a Vue-compiler artifact from a conditional listener binding, and one switch-case label among 13 that are all functionally identical no-ops - already verified via representative samples).

## v: 2.0.0 (Sass modernization)
* __Fixed__ Migrated `Keyboard.vue`'s 8 `@import` statements to `@use`, eliminating the recurring "Sass @import rules are deprecated" warnings on every dev server start and build. None of the imported stylesheets define Sass variables, mixins, or placeholders (they're plain CSS using native custom properties), so this was a zero-risk change - verified the compiled `dist/style.css` output is byte-for-byte identical before and after.

## v: 2.0.0 (security: 0 vulnerabilities)
* __Security__ `npm audit` now reports **0 vulnerabilities** (down from 44 at the start of this cleanup). The last 3 findings traced to a single high-severity Vite dev-server advisory ([GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff): `server.fs.deny` bypass on Windows, allowing arbitrary file reads from the dev machine when the server is network-exposed) affecting Vite `<=6.4.2`. `vitepress@1.6.4` (the current latest) still hard-pins `vite: ^5.4.14` with no patched release available in that range, so this was fixed via an npm `overrides` entry forcing `vite` to `^6.4.3` everywhere in the tree, including vitepress's internal copy. This is directly relevant here: both `npm run dev` and VitePress's own dev server config use `--host`/`server.host: true`, which is the specific exposure condition the advisory requires.
* __Fixed__ Bumping to Vite 6 changed the library build's output CSS filename from `style.css` to `vue-virtual-keyboard.css` (Vite 6's `build.lib.cssFileName` now defaults to matching `fileName` instead of always using `style.css`). This would have silently broken every consumer following the documented `import 'vue-virtual-keyboard/style.css'` path. Fixed by explicitly setting `cssFileName: 'style'` in `vite.config.js` to preserve the original filename.
* __Fixed__ `engines.node` incorrectly required `>=22.0.0`. In reality, every toolchain package except `lint-staged@17.x` (whose transitive `listr2@10.x` needs Node `>=22.13.0`) already supported Node 20.x. Downgraded to `lint-staged@^16.4.0` (Node `>=20.17` via `listr2@^9.0.5`, still receives the same security fixes as 17.x) and corrected `engines.node` to `>=20.17.0` to match what's actually required across the whole dependency tree. CI now tests Node 20, 22, and 24.

## v: 2.0.0 (docs)
* __Added__ A live "Examples" page (`/guide/examples`) embedding the actual `Keyboard` component directly in the docs site, mirroring the repo's own `sandbox/App.vue` demo (layout selector, theme switcher, and the `onEnterPressed`/`onCtrlCombination` events all wired up and visibly logged). Rendered client-only via VitePress's `<ClientOnly>`, consistent with the SSR guidance in the installation docs.
* __Fixed__ VitePress's own Vite config was missing the `@` path alias that `KeyboardButton.vue` uses internally, and didn't have the theme's background images available in its own `public/` directory - both surfaced as real build failures once a page tried to embed the component directly, and are now fixed.
* __Fixed__ A stale sidebar label ("EGridItemEvent," left over from an unrelated project) now correctly reads "Keyboard enums."

## v: 2.0.0 (enterprise readiness, continued)
* __Fixed__ `peerDependencies` incorrectly claimed `vue: "^3.0.0"` - our own `@vitejs/plugin-vue@5.x` actually requires `vue >= 3.2.25`, so `3.0.x`/`3.1.x` was never really a supported floor. Corrected to `"^3.2.25"` and added a CI matrix that actually installs and tests against 3.2.25, 3.2.47, and the latest 3.5.x to keep this claim honest going forward.
* __Added__ Bundle-size CI gate (`npm run size-check`) that fails the build if the main ES entry regresses past a generous budget - this is the number that would silently balloon back toward ~200 KB if the lazy-loading in `LayoutHelper` were ever accidentally undone.
* __Added__ CI now generates a CycloneDX SBOM (software bill of materials) on every run and uploads it as a build artifact.
* __Added__ Automated, provenance-attested npm publishing (`.github/workflows/publish.yml`), triggered by pushing a `v*.*.*` tag. Requires an `NPM_TOKEN` repository secret with publish access.
* __Added__ Visual regression test scaffolding (`e2e/visual.spec.ts`, Playwright screenshot comparison) for the default/dark-theme/shift-active/German-layout states. Baseline images aren't committed yet - see `CONTRIBUTING.md` for how to generate them on first real run; excluded from the default `npm run e2e:run` until then.

## v: 2.0.0 (enterprise readiness)
* __Added__ `onEnterPressed` event, emitted with the current input value when Enter is clicked. Enter still never inserts text itself - the component doesn't presume what "Enter" should do (submit, confirm, etc.), so it hands the decision to you.
* __Added__ `onCtrlCombination` event, emitted with the pressed key when any non-modifier key is clicked while Ctrl is held, instead of typing that key literally (mirrors how a physical keyboard's Ctrl key works).
* __Added__ Accessibility: `aria-label` on special/function keys (independent of whatever glyph the `display` map renders), `aria-pressed` on modifier toggle keys (Shift/Caps/Alt/Ctrl), `role="group"` + `aria-label` on the keyboard container, a proper `<label for>` association for the layout selector, an `aria-label` on the text input, and `role="switch"` + `aria-checked` + a real accessible name on the theme toggle (previously the toggle's label wrapped only a decorative icon with no text, so it had **no accessible name at all**).
* __Fixed__ Defensive guards around all `window`/`document`/`localStorage` access in `ThemeSwitcher.vue`, so the component degrades gracefully rather than throwing if ever invoked outside a browser context.
* __Docs__ Added SSR guidance recommending `<ClientOnly>` (Nuxt) or an SSR-disabled dynamic import, since a virtual keyboard has no meaningful content before it's interactive.
* __Docs__ Added `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, issue templates, and a PR template.
* __Chore__ Added Dependabot config (weekly, grouped by toolchain area) to keep dependencies from rotting again after this session's manual catch-up.

## v: 2.0.0 (toolchain update)
* __Fixed__ Background images for the light/dark themes (`ui-bg_*.png`) referenced `/public/assets/...`, which doesn't resolve to anything in the built output (files in Vite's `public/` directory are served at the root, not under `/public/`) - the theme background images were silently broken. Corrected to `/assets/...` in `themes.scss` and the matching docs.
* __Security__ Resolved 44 → 3 `npm audit` findings (all in devDependencies; this package has zero runtime dependencies, so none of these ever reached published consumers). The 3 remaining are blocked on an upstream `vitepress` release (it hard-pins `vite@^5.4.14`, whose bundled `esbuild` has a dev-server-only advisory with no fix yet).
* __Changed__ Upgraded `vite` 3→5, `vitest` 0.28→3.2 (with `@vitest/coverage-v8` replacing the deprecated `@vitest/coverage-c8`), `vue-tsc`/`typescript` 1.x/4.9→2.x/5.9, `vitepress` 1.0.0-alpha→1.6, `@vitejs/plugin-vue` 3→5, `lint-staged` 13→17, `sass` 1.58→1.93, `@types/node` 18→22.
* __Removed__ `vite-plugin-dts` and `vite-plugin-vue-markdown` - both were unused devDependencies and the latter was incompatible with Vite 5.
* __Fixed__ A latent type inaccuracy in `Keyboard.vue` (`keyboardDisplay` was typed `IDisplay | undefined` but is never actually assigned `undefined` at runtime) surfaced as a real type error under the stricter TypeScript 5.9/vue-tsc 2.x - corrected the type rather than suppressing it.

## v: 2.0.0
* __Breaking__ Renamed public CSS classes for BEM compliance: `.activeButton` &rarr; `.keyboard-button--active`, `.selectText` &rarr; `.select-text`, `.toggleWrapper` &rarr; `.toggle-wrapper`. If you override these in your own stylesheets, update the selector names.
* __Breaking__ Renamed CSS custom properties for kebab-case consistency: `--keyboard-button-activeButton-*` &rarr; `--keyboard-button-active-button-*` (and the `-light`/`-dark` variants). Update any overrides of these theming variables.
* __Breaking__ Removed Cypress; Playwright is now the e2e test runner (`npm run e2e:run`). If you depended on Cypress config from this repo, migrate to the new `playwright.config.ts` / `e2e/` structure.
* __Fixed__ Backspace no longer skips the `onInputChanged` emit when deleting from the end of the input.
* __Fixed__ Selecting "Urdu" or "US English (IBM Arabic 238L)" from the layout selector now loads the correct layout - these two were previously swapped due to a copy-paste error.
* __Fixed__ Selecting "Greenlandic" from the layout selector now works - it previously silently fell back to the default layout due to a case-mismatch bug (`msGreenLandic` vs `msGreenlandic`).
* __Fixed__ Corrected the `ms-Belarusian` layout's internal `name` field (was `ms-ABelarusian`).
* __Fixed__ Removed a duplicate `touch-action` CSS declaration and a dead/shadowed CSS custom-property declaration in the theme stylesheet (no visual change).
* __Changed__ Keyboard layouts are now lazily loaded on demand via dynamic `import()` instead of being eagerly bundled - the main ES bundle dropped from ~205 KB to ~36 KB. Selecting a layout via the layout selector now briefly clears the preview while that layout's chunk loads.
* __Changed__ `LayoutHelper.changeLayout` is now `async` (returns `Promise<ILayoutItem>`) to support lazy loading.
* __Added__ The package now exports `defaultLayout` and the `ILayoutItem` / `IDisplay` / `ISelect` types from its main entry point, so consumers can satisfy the required `keyboard-layout` prop without reaching into internals.
* __Added__ CI workflow (typecheck, lint, unit/component tests with coverage, build, Playwright e2e) running on push/PR.
* __Added__ Unit/component test suite (Vitest + Vue Test Utils) covering `Keyboard.vue`, `KeyboardButton.vue`, `ThemeSwitcher.vue`, and `LayoutHelper` - ~98% statement coverage.
* __Added__ Playwright e2e test suite covering typing, modifier keys, layout switching, theme persistence, and touch/tap interaction on an emulated mobile device.
* __Fixed__ `.eslintrc.js` renamed to `.eslintrc.cjs` to resolve a CommonJS/ESM conflict that silently broke `npm run lint` entirely.
* __Fixed__ ESLint now actually lints `.vue` files (a `tsconfig.json` gap previously excluded them from type-aware linting).

## v: 1.0.0 (2023-03-xx)
* __Codebase__ First release.
