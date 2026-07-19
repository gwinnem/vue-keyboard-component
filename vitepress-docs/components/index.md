---
aside: true
page: true
title: Components
---

# Components

This package exports a single top-level component:

* `Keyboard` - the full on-screen keyboard. Accepts a required `keyboard-layout` prop
  and renders the input, key rows, optional layout selector, and optional theme switcher.
  Exposes `role="group"` with a labeled landmark, `aria-pressed` on modifier keys, and
  labeled form controls throughout. See [Component props](../api/types-layout.md) for the
  full prop list.

Two supporting components exist internally but are not exported, since they're only
meant to be used by `Keyboard` itself:

* `KeyboardButton` - renders a single key and handles its click/keydown behavior.
* `ThemeSwitcher` - the dark/light toggle rendered inside `Keyboard` when `show-theme-switcher` is `true`.

