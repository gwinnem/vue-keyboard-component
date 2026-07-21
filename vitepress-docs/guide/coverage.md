---
aside: false
page: true
title: Test Coverage
---

# Test Coverage

## Current numbers

| | Statements | Branches | Functions | Lines |
| --- | --- | --- | --- | --- |
| **All covered files** | 99.8% | 99.33% | 100% | 99.8% |

Generate this yourself, with a per-file breakdown:

```bash
npm run test:coverage
```

This writes an HTML report to `coverage/index.html` in addition to the terminal summary.

## Enforcement

CI fails if coverage drops below these thresholds (`vite.config.js`'s `test.coverage.thresholds`,
checked by the same `npm run test:coverage` command CI runs):

| Statements | Branches | Functions | Lines |
| --- | --- | --- | --- |
| 99% | 98% | 100% | 99% |

These sit with a small buffer below the actual numbers above, so minor fluctuation doesn't
immediately break CI, while a genuine regression still fails the build.

## Scope

Coverage is measured over `src/core/enums`, `src/core/helpers`, `src/core/keyboard-layouts`,
`src/core/layouts`, and `src/lib/components`. `src/core/ms-keyboards` (the 150 bundled layout data
files) is excluded from the percentage itself, since they're data, not logic - but every one of
them is still exercised by a dedicated smoke test (`layout-registry.spec.ts`), which validates each
resolves to well-formed data and cross-checks the registry against the layout-selector's option
list in both directions.

## The one known, accepted gap

`Keyboard.vue` sits at 99.56% statements (2 uncovered lines) rather than 100%. Those two lines are
a defensive guard in the grid-navigation handler, protecting against a narrow window where the
keyboard preview is briefly `undefined` during an async layout load. Reaching it deterministically
in a test would require exposing internal refs purely for test access - judged worse than the gap
itself.

## What line coverage doesn't catch

A high percentage measures whether a line *executed* during the test suite, not whether the
*right* scenario was tested. Several real bugs in this project were only caught by adding tests
for scenarios that were completely unexercised, not by chasing the coverage number itself - a race
condition in async layout switching, and a real responsive-design overflow bug at narrow
viewports, among others. See the [changelog](./changelog.md) for specifics. A passing coverage
number on its own isn't sufficient signal that a change is correctly tested.

## Mutation testing

Line/branch coverage measures whether a line *executed* during the test suite - not whether the
tests would actually notice if the logic on that line were subtly wrong. Mutation testing
(Stryker) closes that gap: it makes small, deliberate changes to the actual source ("mutants" -
e.g. flipping a `||` to `&&`, changing a string literal, negating a condition) and reruns the
tests. A mutant that "survives" (no test fails) means there's a logic change on that line no test
would catch.

```bash
npm run test:mutation
```

This is configured for the logic-bearing files, excluding the 150-entry layout registry (already
validated by its own dedicated smoke test rather than mutation): `LayoutHelper.ts`, `RtlHelper.ts`,
`ThemeSwitcher.vue`, `KeyboardButton.vue`, `Keyboard.vue`.

**Known compatibility fix**: mutating the object literal inside `withDefaults(defineProps<T>(),
{...})` breaks Vue's SFC compiler - `defineProps()` can't reference Stryker's injected
mutation-coverage helper functions from within its macro expansion. Both `Keyboard.vue` and
`KeyboardButton.vue` wrap that specific block in `// Stryker disable all` / `// Stryker restore
all` comments; the rest of each file mutates normally.

**Current numbers** (`LayoutHelper.ts`, `RtlHelper.ts`, `ThemeSwitcher.vue` - fully run and
verified):

| | Mutation score |
| --- | --- |
| `RtlHelper.ts` | 100% |
| `LayoutHelper.ts` | 77.78% |
| `ThemeSwitcher.vue` | 84.62% |

`LayoutHelper.ts`'s two surviving mutants are both the same finding: `changeLayout`'s explicit
`layoutName === 'default'` check is provably redundant (`'default'` is never an actual registry
key), kept for readability rather than "fixed."

`Keyboard.vue` and `KeyboardButton.vue` are configured and confirmed working, but a full run of
either takes 10+ minutes even on a single CPU core - run `npm run test:mutation` locally or in CI
for a real baseline before trusting a specific number for these two. CI runs this separately from
the main pipeline, weekly and on-demand, not on every PR.
