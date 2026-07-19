---
aside: false
page: true
title: CSS Variables
---

# CSS Variables

`Keyboard` themes itself entirely through CSS custom properties, resolved through three
mechanisms, in this order of precedence:

1. **The `[color-scheme]` attribute** on the document root - set automatically by the built-in
   theme switcher (and persisted to `localStorage`) whenever someone toggles it.
2. **The `prefers-color-scheme` media query** - used before the theme switcher has ever been
   toggled, so the keyboard matches the visitor's OS/browser preference on first load.
3. **The base variables** (e.g. `--keyboard-background`) - the fallback values consumed directly
   by the component's own stylesheet.

Every themeable property is defined twice, as a `-light` and a `-dark` variant (e.g.
`--keyboard-background-light` / `--keyboard-background-dark`), and both mechanisms above resolve
the base variable to one of these two variants. To customize a theme, override the `-light`
and/or `-dark` variable - overriding the base variable directly will be overwritten by whichever
mechanism matches first.

## Light mode

```css
--keyboard-background-light: #eeeeee url("/assets/ui-bg_highlight-soft_100_eeeeee_1x100.png") 50% top repeat-x;
--keyboard-border-color-light: #dddddd;
--keyboard-button-active-span-color-light: red;
--keyboard-button-active-button-background-light: #726e6e;
--keyboard-button-active-button-color-light: #ffffff;
--keyboard-button-background-light: #f6f6f6 url("/assets/ui-bg_glass_100_f6f6f6_1x400.png") 50% 50% repeat-x;
--keyboard-button-border-color-light: #cccccc;
--keyboard-button-color-light: #262223;
--keyboard-button-hover-border-color-light: #fbcb09;
--keyboard-button-hover-color-light: #fdf5ce;
--keyboard-font-color-light: #000000;
--keyboard-input-background-light: #eeeeee url("/assets/ui-bg_highlight-soft_100_eeeeee_1x100.png") 50% top repeat-x;
--keyboard-input-border-bottom-light: #726e6e;
--keyboard-placeholder-font-color-light: #000000;
--keyboard-select-background-color-light: #d7d2d2;
--keyboard-select-option-color-light: #2c2a2a;
--keyboard-select-option-background-color-light: #ececec;
```

## Dark mode

```css
--keyboard-background-dark: #000000 url("/assets/ui-bg_inset-soft_25_000000_1x100.png") 50% bottom repeat-x;
--keyboard-border-color-dark: #dddddd;
--keyboard-button-active-span-color-dark: blue;
--keyboard-button-active-button-background-dark: #ff970f;
--keyboard-button-active-button-color-dark: #ffffff;
--keyboard-button-border-color-dark: #a4a4a4;
--keyboard-button-background-dark: #555555 url("/assets/ui-bg_glass_20_555555_1x400.png") 50% 50% repeat-x;
--keyboard-button-color-dark: #c7cbcc;
--keyboard-button-hover-border-color-dark: #59b4d4;
--keyboard-button-hover-color-dark: #0078a3;
--keyboard-font-color-dark: #ffffff;
--keyboard-input-background-dark: #000000 url("/assets/ui-bg_inset-soft_25_000000_1x100.png") 50% bottom repeat-x;
--keyboard-input-background-color-dark: #000000;
--keyboard-input-border-bottom-dark: #726e6e;
--keyboard-placeholder-font-color-dark: #ffffff;
--keyboard-select-background-color-dark: #726e6e;
--keyboard-select-option-color-dark: #fff;
--keyboard-select-option-background-color-dark: #726e6e;
```

## Example: overriding a color

```css
:root {
  --keyboard-button-active-button-background-light: #4caf50;
  --keyboard-button-active-button-background-dark: #2e7d32;
}
```
