/**
 * The set of keys that trigger roving-tabindex grid navigation in KeyboardButton's
 * onKeyDown, and are handled by Keyboard's onNavigate. Kept as a single shared type
 * so both sides stay in sync, and so Keyboard's navigation switch can be exhaustive
 * instead of needing an unreachable default case.
 */
export type TNavigationKey = `ArrowUp` | `ArrowDown` | `ArrowLeft` | `ArrowRight` | `Home` | `End`;
