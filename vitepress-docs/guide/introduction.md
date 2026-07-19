---
aside: false
footer: true
page: true
title: Introduction
---


# What is vue-virtual-keyboard ?

`vue-virtual-keyboard` is an on-screen keyboard component for Vue 3, written in TypeScript. It's built for
kiosk, touch-screen, and accessibility scenarios where a physical keyboard may not be available or convenient.

## Highlights

- **150 Microsoft keyboard layouts** included out of the box - lazily loaded on demand, so selecting a layout
  only downloads that layout's data rather than bundling all of them upfront.
- **Dark and light themes** built in, following the user's system preference by default, with a theme switcher
  that remembers the choice via local storage.
- **Accessible by default**: ARIA labels and `aria-pressed` states on every key, a labeled `role="group"`
  landmark, and properly labeled form controls throughout.
- **Right-to-left support and keyboard-only navigation**: RTL layouts (Arabic, Hebrew, Persian, Urdu, and
  others) render automatically mirrored, and only one key is ever a Tab stop at a time, with arrow keys
  moving between keys.
- **Fully typed**: `Keyboard`, `defaultLayout`, and the `ILayoutItem` / `IDisplay` / `ISelect` types are all
  exported from the package.
- **Zero runtime dependencies** (only a `vue` peer dependency) and `npm audit` reports 0 vulnerabilities.
- **Tested**: unit/component tests (Vitest + Vue Test Utils) and end-to-end tests (Playwright, including
  touch-emulated interaction) run in CI on every change.

## Where to go next

- [Installation](./installation.md) to add it to your project.
- [Supported layouts](../api/keyboard-layouts.md) for the full list of included Microsoft keyboard layouts.
- [CSS variables](../components/css-variables.md) for customizing dark/light mode.
- [Changelog](./changelog.md) for release history, including breaking changes.
