---
aside: false
---

# Layout interfaces

All three interfaces below are importable directly from the package: `import type { IDisplay, ILayoutItem, ISelect } from 'vue-virtual-keyboard';`

## ILayoutItem

Describes a keyboard layout. `layout` maps each of the four supported layout variant
names (`default`, `shift`, `alt`, `altShift` - see [EKeyboardLayoutType](./enums.md))
to an array of row strings. Only `default` is required; the others fall back to
`default` when not defined. `display` optionally overrides how special-button
tokens (e.g. `{bksp}`) are rendered - see [Display interfaces](./types-layout.md).
`lang` (ISO 639 language codes) drives automatic right-to-left rendering for
languages that need it - see [Right-to-left languages](./types-layout.md#right-to-left-languages).

```typescript
export interface ILayoutItem {
  layout: { [layoutName: string]: string[] };
  display?: IDisplay;
  lang?: string[];
}
```

## IDisplay

Maps a button's raw value (e.g. `{bksp}`, `{enter}`, or a plain character) to the
label rendered on the button.

```typescript
export interface IDisplay {
  [button: string]: string;
}
```

## ISelect

A single entry in the layout-selector dropdown's option list (see
[Supported layouts](./keyboard-layouts.md) for the full built-in list).

```typescript
export interface ISelect {
  name: string;
  title: string;
}
```
