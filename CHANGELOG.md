# Changelog

All notable changes to this project are documented here, following the
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) convention. For the fuller narrative
version of each entry below - including *why*, not just *what* - see the
[documentation site's changelog](https://vue-virtual-keyboard.winnem.tech/guide/changelog).

This project uses [Semantic Versioning](https://semver.org/).

## [2.0.0] - Unreleased

### Added
- Accessibility: ARIA labels and `aria-pressed` states on every key, a labeled `role="group"`
  landmark with a visually-hidden navigation hint, and a properly labeled theme switch and layout
  selector.
- Right-to-left rendering (`dir`/`lang`) for RTL layouts (Arabic, Hebrew, Persian, Urdu, Divehi,
  Uyghur, Pashto, Sindhi, Kurdish Sorani, Yiddish), derived automatically from each layout's `lang`
  metadata.
- Roving-tabindex grid navigation: only one key is a Tab stop at a time; arrow keys (RTL-aware) and
  Home/End move it between keys.
- `onEnterPressed` and `onCtrlCombination` events.
- `keyboardTranslation` now localizes the accessible names of special keys; `includeInLayout` /
  `excludeFromLayout` now filter the layout-selector's option list; `debug` / `debugEvents` now log
  to the console - all four were previously declared props with no effect.
- A live "Examples" page and a full API reference on the documentation site.
- CI: bundle-size budget check, SBOM generation, a Vue-version compatibility matrix, a Node
  version matrix, and provenance-attested npm publishing.
- `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SUPPORT.md`, `NOTICE.md`, issue/PR
  templates, and a Dependabot configuration.

### Changed
- Upgraded the entire build toolchain (Vite, Vitest, TypeScript, vue-tsc, ESLint/typescript-eslint,
  VitePress) to current major versions.
- Migrated `Keyboard.vue`'s SCSS `@import` statements to `@use`.
- `peerDependencies.vue` corrected from `^3.0.0` to `^3.2.25` (the actual floor our own build
  tooling requires - the previous range was never genuinely supported).
- `engines.node` corrected to `>=20.17.0` (was `>=22.0.0`, stricter than actually required).

### Fixed
- Pre-commit hooks were silently non-functional (legacy husky config format, incompatible with
  the installed husky version) - fixed and verified with a real test commit.
- `prettier` had no config and actively conflicted with this codebase's ESLint-enforced style;
  replaced with `eslint --fix` / `stylelint --fix` in the `format` script and `lint-staged` config.
- Removed 17 unused devDependencies and 2 orphaned config files (`tsconfig.config.json`,
  `tsconfig.build-types.json`, both still referencing Cypress patterns from before this project's
  migration to Playwright) - see the [full changelog](https://vue-virtual-keyboard.winnem.tech/guide/changelog)
  for the complete list.
- **Security**: resolved all `npm audit` findings (44 → 0), including forcing a patched Vite via
  `overrides` for a high-severity dev-server advisory that `vitepress`'s own pinned dependency
  hadn't picked up yet.
- **Accessibility**: the theme toggle's checkbox was hidden via `display: none`, which removes an
  element from the accessibility tree entirely - its `role="switch"`/`aria-label` were valid
  markup that no screen reader could ever reach. Replaced with a visually-hidden-but-accessible
  technique.
- **Keyboard-only interaction**: `onInputKeyDown` called `preventDefault()` unconditionally,
  silently blocking native caret navigation (arrow keys, Home/End) on the text input regardless of
  the `usePhysicalKeyboard` setting. `KeyboardButton`'s `onKeyDown` had the same issue for
  `mousedown`/`keydown`, which could suppress the native click a screen-reader/keyboard user's
  Space/Enter activation relies on.
- **Grid navigation**: mouse clicks updated the roving-tabindex state but never moved real DOM
  focus (a side effect of the `mousedown` fix above); arrow-key direction wasn't RTL-aware, so
  ArrowRight moved focus visually leftward on RTL layouts.
- **Data integrity**: 3 of the 150 layouts had mismatched names between the internal registry and
  the layout-selector's dropdown list, causing those 3 to silently fall back to the default layout
  when selected, with no error shown.
- **Build output**: the CSS output filename changed from `style.css` to
  `vue-virtual-keyboard.css` when Vite was upgraded to v6 - this would have silently broken the
  documented `import 'vue-virtual-keyboard/style.css'` path for every consumer; pinned back to
  `style.css` explicitly.
- **Licensing**: the `LICENSE` file contained the ISC License, while `package.json` and the
  README both declared MIT - corrected to match.
- `npm run test` ran Vitest in interactive watch mode (never exits), which would have hung the
  `vue-compat` CI job indefinitely on every run.
- Backspace never fired `onInputChanged` when deleting from the end of the input (the most common
  case).
- Several dead/duplicated code paths removed as part of raising test coverage to ~99.8% (see the
  [full changelog](https://vue-virtual-keyboard.winnem.tech/guide/changelog) for specifics).

## [1.x]

Pre-dates this changelog's introduction. See the
[documentation site's changelog](https://vue-virtual-keyboard.winnem.tech/guide/changelog) and
git history for earlier changes, including the CSS class/custom-property renames introduced in the
2.0.0 line (`.activeButton` → `.keyboard-button--active`, etc.).
