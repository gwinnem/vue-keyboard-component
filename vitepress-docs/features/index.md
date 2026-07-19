---
aside: false
page: true
title: Features
---

# Features

* Vue 3 with TypeScript, `Keyboard`/`defaultLayout`/`ILayoutItem`/`IDisplay`/`ISelect` all exported and typed.
* Vite used as dev server and bundler.
* VitePress used for documentation.
* 150 Microsoft keyboard layouts, each lazily loaded on demand via dynamic `import()` - selecting
  a layout only downloads that layout's data instead of bundling all of them upfront.
* Dark and light theme built in, following the visitor's system preference by default, with a
  built-in theme switcher that persists the choice.
* `onEnterPressed` and `onCtrlCombination` events, alongside `onInputChanged` - see
  [Component props](../api/types-layout.md#events).
* Accessible by default: ARIA labels and `aria-pressed` states on every key, a labeled
  `role="group"` landmark, and a properly labeled theme switch and layout selector.
* Automatic right-to-left rendering for RTL layouts, localizable accessible key names via
  `keyboardTranslation`, and roving-tabindex grid navigation (only one key is ever a Tab stop,
  with arrow keys moving between keys) - see [Component props](../api/types-layout.md).
* Zero runtime dependencies - only a `vue` peer dependency.
* `npm audit` reports 0 vulnerabilities.
* Unit/component tests (Vitest + Vue Test Utils) and end-to-end tests (Playwright, including
  touch-emulated interaction) run in CI on every change, alongside a bundle-size budget check.
