## Exported interfaces

***
### IDisplay
Used for the displayed keyboard buttons. [See the default display options](./sample-keyboard.md)
```typescript
export interface IDisplay {
  [button: string]: string;
}
```

### ILayoutItem
Used for the different layouts. The Keyboard support 4 different layout names:
* default => Displayed when none of the function buttons are clicked.
* shift => Displayed when <strong>caps</strong> or <strong>shift</strong> is clicked.
* alt => Displayed when <strong>alt</strong> is clicked. If layout name is not defined, it fall back to default layout.
* altShift => Displayed when <strong>alt</strong> and <strong>shift</strong> is clicked. If layout name is not defined, it fall back to default layout.

```typescript
export interface ILayoutItem {
  layout: { [layoutName: string]: string[] };
  display?: IDisplay;
}
```

### ISelect
Used for the select dropdown options list. [See the full option list](./complete-select-option-list.md)
```typescript
export interface ISelect {
  name: string;
  title: string;
}
```
