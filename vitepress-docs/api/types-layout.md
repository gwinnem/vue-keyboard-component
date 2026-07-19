---
aside: false
---

# Component props

## IKeyboardProps

Props accepted by the `Keyboard` component.

```typescript
export interface IKeyboardProps {
  debug?: boolean;
  disableTab?: boolean;
  excludeFromLayout?: string[];
  includeInLayout?: string[];
  keyboardLayout?: ILayoutItem;
  keyboardTranslation?: IDisplay;
  selectKeyboardLanguageText?: string;
  showLayoutSelector?: boolean;
  showThemeSwitcher?: boolean;
  startTypingText?: string;
  usePhysicalKeyboard?: boolean;
}
```

::: warning
`keyboardLayout` is typed as optional, but the component throws `Error('keyboard layout not defined')`
at mount time if it isn't provided - there is currently no built-in fallback. Pass the exported
`defaultLayout` (or your own [custom layout](../guide/installation.md)) explicitly.
:::

- **`debug`** - logs significant internal state changes (layout switches, modifier toggles) to the
  console, prefixed `[Keyboard]`. Off by default.
- **`includeInLayout`** / **`excludeFromLayout`** - filter the layout-selector's option list.
  `includeInLayout` (an array of layout `name`s, e.g. `['msGerman', 'msFrench']`) restricts the
  list to only those; `excludeFromLayout` hides the given names instead. `includeInLayout` takes
  precedence when both are given. Neither affects the `keyboard-layout` prop itself - only which
  options appear in the dropdown.
- **`keyboardTranslation`** - overrides the accessible (`aria-label`) names of special/function
  keys (Backspace, Shift, Enter, etc.), keyed the same way as a layout's own `display` map (e.g.
  `{ '{bksp}': 'Retour arrière' }`). Use this to localize what screen readers announce for a
  non-English layout - it does not change the visible glyph on the key (that's still controlled by
  the layout's own `display` map).

Defaults: `disableTab: true`, `showLayoutSelector: false`, `showThemeSwitcher: true`,
`usePhysicalKeyboard: false`, `selectKeyboardLanguageText: 'Select Keyboard language:'`,
`startTypingText: 'Start typing now !'`.

### Events

`Keyboard` emits three events:

| Event | Payload | When |
| --- | --- | --- |
| `onInputChanged` | `string` (current value) | Any time the input's value changes (typing, backspace, space, tab). |
| `onEnterPressed` | `string` (current value) | The Enter key is clicked. Enter never inserts text itself - the component doesn't presume whether "Enter" means "submit a form" or something else, so it hands the current value to you to decide. |
| `onCtrlCombination` | `string` (the key token, e.g. `a` or `{space}`) | Any non-modifier key is clicked while Ctrl is held. The key is **not** inserted into the input - this mirrors how a physical keyboard's Ctrl key works (Ctrl+C doesn't type a literal "c"). |

```html
<Keyboard
  :keyboard-layout="layout"
  @on-input-changed="onInputChanged"
  @on-enter-pressed="onEnterPressed"
  @on-ctrl-combination="onCtrlCombination" />
```

### Right-to-left languages

`Keyboard` automatically renders `dir="rtl"` and `lang="<code>"` on its root element when the
active layout's `lang` metadata (see [`ILayoutItem`](./interfaces-layout.md)) identifies a
right-to-left language (Arabic, Hebrew, Persian, Urdu, Divehi, Uyghur, Pashto, Sindhi, Kurdish
Sorani, or Yiddish). This reverses the visual order of each row to match how physical keyboards
for these languages are laid out. No prop needed - it's derived entirely from the layout you pass.

### Grid navigation (roving tabindex)

Only one key is ever a Tab stop at a time - by default, the first key. Arrow keys move that Tab
stop (and real keyboard focus) between keys: Left/Right move within a row, Up/Down move to the
same column in the row above/below, clamped to that row's length if it's shorter; Home/End jump to
the first/last key in the current row. Clicking a key also moves the Tab stop there. Left/Right
automatically account for RTL layouts, matching what's on screen rather than raw data order. This
follows the [WAI-ARIA APG's](https://www.w3.org/WAI/ARIA/apg/) recommended pattern for a large set
of grouped buttons - without it, Tab-only users would need to press Tab dozens of times to reach a
specific key. A visually-hidden hint (`aria-describedby`) tells assistive technology to expect this.

## IKeyboardButtonProps

Props accepted by the internal `KeyboardButton` component (one per rendered key).
You won't normally construct these yourself - `Keyboard` renders them for you from
the active layout.

```typescript
export interface IKeyboardButtonProps {
  altShiftValue?: string;
  altValue?: string;
  ariaLabels?: IDisplay;
  buttonLayout?: string;
  debugEvents?: boolean;
  defaultValue: string;
  display: IDisplay;
  isAltClicked?: boolean;
  isCapsClicked?: boolean;
  isCtrlClicked?: boolean;
  isShiftClicked?: boolean;
  shiftValue?: string;
  tabindex?: number;
}
```

- **`ariaLabels`** - populated by `Keyboard` from its own `keyboardTranslation` prop; see above.
- **`tabindex`** - defaults to `0` (a normal Tab stop) for standalone use; `Keyboard` manages this
  per-button for its roving-tabindex grid navigation (see above).
- **`debugEvents`** - logs this button's click/keydown interactions to the console, prefixed
  `[KeyboardButton]`. Off by default.

::: warning
`buttonLayout` is rendered as a `data-button-layout` attribute (useful for custom styling or e2e
selectors) but has no other effect. `altShiftValue`, `altValue`, and `shiftValue` are likewise
rendered as `data-alt-shift-value` / `data-alt-value` / `data-shift-value` attributes only -
`Keyboard` always passes them the same value as `defaultValue`. They don't drive any different
character rendering per modifier; the character shown for Alt/Shift/Alt+Shift is determined
entirely by which row array `Keyboard` swaps in from the active layout (see
[`EKeyboardLayoutType`](./enums.md)).
:::
