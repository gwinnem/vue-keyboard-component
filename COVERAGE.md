# Test Coverage

## Current numbers

| | Statements | Branches | Functions | Lines |
| --- | --- | --- | --- | --- |
| **All covered files** | 99.8% | 99.33% | 100% | 99.8% |

Generate this yourself, with a per-file breakdown:

```bash
npm run test:coverage
```

This opens/writes an HTML report to `coverage/index.html` in addition to the terminal summary.

## Enforcement

CI fails if coverage drops below these thresholds (`vite.config.js`'s `test.coverage.thresholds`,
checked by the same `npm run test:coverage` command CI runs):

| Statements | Branches | Functions | Lines |
| --- | --- | --- | --- |
| 99% | 98% | 100% | 99% |

These are set with a small buffer below the actual current numbers above, so minor fluctuation
(e.g. adding a small, less-than-fully-tested helper) doesn't immediately break CI, while a genuine
regression still fails the build. Verified directly, not just configured: temporarily raising a
threshold above the actual number does fail the check with a clear error
(`ERROR: Coverage for statements (99.8%) does not meet global threshold (99.9%)`), and reverting
passes again.

## Scope

Coverage is measured over `src/core/enums`, `src/core/helpers`, `src/core/keyboard-layouts`,
`src/core/layouts`, and `src/lib/components` (see `vite.config.js`'s `test.coverage.include`).
`src/core/ms-keyboards` (the 150 bundled layout data files) is excluded from the percentage itself,
since they're data, not logic - but every one of them is still exercised by
`layout-registry.spec.ts`'s smoke test (see [`ARCHITECTURE.md`](./ARCHITECTURE.md)), which is how a
real, previously-existing bug in 3 of them was caught even though it wouldn't have shown up as a
coverage gap.

## The one known, accepted gap

`Keyboard.vue` sits at 99.56% statements (2 uncovered lines) rather than 100%. Those two lines are
a defensive guard in the grid-navigation handler (`if(!rows || rows.length === 0) { return; }`),
protecting against a narrow window where the keyboard preview is briefly `undefined` during an
async layout load. Reaching it deterministically in a test would require exposing internal refs
purely for test access, which was judged worse than the gap itself - see the code comment at that
exact line for the full reasoning.

## What line coverage doesn't catch

A high percentage measures whether a line *executed* during the test suite, not whether the
*right* scenario was tested. Several real bugs found during this project's development were only
caught by adding tests for scenarios that were completely unexercised - not by chasing the
coverage number itself:

- A race condition in async layout switching (rapid selection resolving out of order).
- A real responsive-design overflow bug at narrow viewports.
- Real-browser-only issues line coverage can't see at all: native focus behavior, keyboard-only
  activation, and touch interaction - all only verified against an actual browser (Playwright), not
  jsdom.

See [`CHANGELOG.md`](./CHANGELOG.md) for specifics. If you're adding a feature, a passing coverage
number on its own isn't sufficient signal that it's correctly tested - think about what scenario
might exist that no test currently exercises, the same way these were found.

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

This is configured for the logic-bearing files (excluding the 150-entry layout registry, already
validated by its own dedicated smoke test rather than mutation - see
[`ARCHITECTURE.md`](./ARCHITECTURE.md)): `LayoutHelper.ts`, `RtlHelper.ts`, `ThemeSwitcher.vue`,
`KeyboardButton.vue`, `Keyboard.vue`.

**Known compatibility fix**: mutating the object literal inside `withDefaults(defineProps<T>(),
{...})` breaks Vue's SFC compiler (`defineProps()` can't reference Stryker's injected
mutation-coverage helper functions from within its macro expansion) - a real, confirmed
incompatibility, not a theoretical one. Both `Keyboard.vue` and `KeyboardButton.vue` wrap that
specific block in `// Stryker disable all` / `// Stryker restore all` comments; the rest of each
file mutates normally. If you add a new component with `withDefaults(defineProps())`, it will need
the same treatment.

**Current numbers** (`LayoutHelper.ts`, `RtlHelper.ts`, `ThemeSwitcher.vue` - fully run and
verified):

| | Mutation score |
| --- | --- |
| `RtlHelper.ts` | 100% |
| `LayoutHelper.ts` | 77.78% |
| `ThemeSwitcher.vue` | 84.62% |

`LayoutHelper.ts`'s two surviving mutants are both the same finding: `changeLayout`'s explicit
`layoutName === 'default'` check is provably redundant (`'default'` is never an actual registry
key, so the fallback would trigger via `!layoutRegistry[layoutName]` alone regardless) - kept as-is
for readability/intent rather than "fixed", since removing it wouldn't change behavior, only
obscure why the sentinel value works.

`Keyboard.vue` and `KeyboardButton.vue` are configured and confirmed working (verified running
partially - real mutants generated and tested with no config or compiler errors), but a full run
of either takes 10+ minutes even on a single CPU core, which didn't fit this project's development
environment in one sitting. **Run `npm run test:mutation` locally or in CI for a real baseline
before trusting a specific number for these two** - the `thresholds.break: 60` in
`stryker.config.json` is deliberately conservative until that baseline exists; raise it once you
have real numbers to calibrate against, the same way `vite.config.js`'s coverage thresholds were
calibrated against actual measured coverage rather than guessed.

CI runs this separately from the main pipeline (`.github/workflows/mutation.yml`) - weekly and
on-demand (`workflow_dispatch`), not on every PR, since it's far slower than the rest of CI
combined and doesn't need to gate merges the way typecheck/lint/coverage do.
