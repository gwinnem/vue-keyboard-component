# Architecture

## Directory layout

```
src/
  lib/
    index.ts                   Package entry point - exports Keyboard, defaultLayout, and types
    components/
      Keyboard.vue              Top-level component: input, layout selector, theme switcher, grid
      KeyboardButton.vue         A single key: click/keydown handling, accessibility, navigation
      ThemeSwitcher.vue          The dark/light toggle
  core/
    enums/                      EKeyboardLayoutType, ESpecialButton, EKeyboardButtonEvent
    interfaces/                 ILayoutItem, IDisplay, ISelect, TNavigationKey
    helpers/
      LayoutHelper.ts            Resolves a layout name to its data (via the registry below)
      layout-registry.ts         150 lazy `import()` entries, one per bundled keyboard layout
      RtlHelper.ts                RTL language detection from a layout's `lang` metadata
    layouts/default.ts          The built-in fallback layout (also the exported `defaultLayout`)
    keyboard-layouts/            The default `display` map (special-key labels)
    ms-keyboards/                 The 150 bundled layout data files, plus the selector's option list
  css/                          Plain CSS (via `@use`), themed entirely through custom properties
```

## Key decisions

### Lazy-loaded layouts

`layout-registry.ts` maps each layout name to its own `() => import(...)`, so Vite/Rollup code-splits
every layout into its own chunk. `LayoutHelper.changeLayout` is the only consumer - it looks up the
registry, awaits the dynamic import, and falls back to `defaultLayout` for an unrecognized name. A
consumer who never opens the layout selector downloads none of the other 149 layouts; selecting one
downloads only that one. See `layout-registry.spec.ts` for the smoke test that validates every entry
resolves to well-formed data and stays in sync with the selector's option list
(`ms-layouts.select.ts`) - these two files are maintained by hand and can drift, which is exactly
what that test is for.

### Two event listeners per key (`mousedown` + `click`)

`KeyboardButton` listens to both. `mousedown` (shared with `keydown`, via one handler) toggles
modifier refs (`isShiftClicked`, etc.) so the *visual* "active" styling responds immediately, before
the corresponding `click` (or Space/Enter-triggered synthetic click) fires and drives the actual
layout-switching logic in `Keyboard.vue`'s `onClick`. This mirrors how a physical keyboard's
modifier keys feel immediate. It's a source of subtlety - see the changelog for two bugs this
duality caused (`preventDefault` on `keydown` suppressing the native click for keyboard-only
activation; `preventDefault` on `mousedown` suppressing native focus-on-click) - and is a candidate
for simplification if you're looking for a larger refactor to take on.

### Roving-tabindex grid navigation

`Keyboard.vue` tracks a single `(activeRow, activeCol)` position; every `KeyboardButton` gets
`tabindex="0"` only at that position, `-1` everywhere else. Arrow keys (and Home/End) move the
position and call `.focus()` via each button's `defineExpose`-d `focus()` method (through a plain
`buttonRefs` array populated by function refs in the `v-for`, not a reactive `ref()` - focus
management is imperative, not state to re-render on). Left/Right are swapped when the active
layout is RTL, so they match what's on screen rather than raw DOM order.

### Theming

Every themeable CSS property is defined twice (`-light` / `-dark` suffixed custom properties).
`ThemeSwitcher` sets `[color-scheme]` on the document root and persists the choice to
`localStorage`; before it's ever toggled, a `prefers-color-scheme` media query picks between the
two variants instead. See the documentation site's CSS Variables page for the full list and an
override example.

### Zero runtime dependencies

Only a `vue` peer dependency. Everything else (the 150 layouts, the theming, the accessibility
work) is implemented directly rather than pulled in from a library, keeping the published package's
own footprint small (see the `size-check` CI step, which gates the main ES bundle's size).

## Testing strategy

- **Unit/component** (Vitest + Vue Test Utils): the bulk of coverage (~99.8% statements across
  `src/`). Includes the layout-registry smoke test above, and deliberate tests for accessibility
  attributes, RTL behavior, and grid navigation.
- **End-to-end** (Playwright): real-browser verification of everything jsdom can't simulate
  faithfully - actual focus movement, native keyboard activation (Space/Enter), touch emulation,
  and visual regression (chromium project only, screenshots committed under `e2e/*-snapshots/`).
  Several real bugs in this codebase were only ever caught here, not in unit tests - see the
  changelog for specifics.
