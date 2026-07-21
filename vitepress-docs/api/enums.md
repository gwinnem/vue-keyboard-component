---
aside: false
---

# Enums

## EKeyboardButtonEvent

Events emitted by the `KeyboardButton` component. `NAVIGATE` is emitted (with the pressed key, one
of `ArrowUp`/`ArrowDown`/`ArrowLeft`/`ArrowRight`/`Home`/`End`) instead of the button's own click
handling - it drives `Keyboard`'s roving-tabindex grid navigation.

```typescript
export enum EKeyboardButtonEvent {
  ALT_CLICKED = `onAltClicked`,
  BACKSPACE_CLICKED = `onBackspaceClicked`,
  CAPS_CLICKED = `onCapsClicked`,
  CTRL_CLICKED = `onCtrlClicked`,
  CLICK = `onButtonClick`,
  KEY_DOWN = `onButtonDown`,
  KEY_UP = `onButtonUp`,
  NAVIGATE = `onNavigate`,
  SHIFT_CLICKED = `onShiftClicked`,
}
```

## ESpecialButton

The button-value tokens used in a layout's row strings (e.g. `` `{tab} q w e r t y u i o p [ ] #` ``)
that map to non-character keys.

```typescript
export enum ESpecialButton {
  ALT = `{alt}`,
  ALT_LEFT = `{altleft}`,
  ALT_RIGHT = `{altright}`,
  BACKSPACE = `{bksp}`,
  CAPS = `{caps}`,
  CTRL = `{ctrl}`,
  CTRL_LEFT = `{ctrlleft}`,
  CTRL_RIGHT = `{ctrlright}`,
  ENTER = `{enter}`,
  SHIFT = `{shift}`,
  SHIFT_LEFT = `{shiftleft}`,
  SHIFT_RIGHT = `{shiftright}`,
  SPACE = `{space}`,
  TAB = `{tab}`,
}
```

## EKeyboardLayoutType

The four layout variants a given `ILayoutItem.layout` can define (see [Layout interfaces](./interfaces-layout.md)).

```typescript
export enum EKeyboardLayoutType {
  DEFAULT = `default`,
  SHIFT = `shift`,
  ALT = `alt`,
  ALT_SHIFT = `altShift`,
}
```
