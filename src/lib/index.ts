import Keyboard from './components/Keyboard.vue';
import defaultLayoutValue from '../core/layouts/default';

// Re-exported so consumers can satisfy the required `keyboard-layout` prop
// without reaching into the package's internals. Deliberately NOT re-exporting
// the full ms-keyboards barrel here: that would statically pull all ~150
// layouts back into this entry's bundle, undoing LayoutHelper's lazy-loading
// (see core/helpers/layout-registry.ts). Types are erased at compile time and
// cost nothing at runtime, so those are exported in full.
const defaultLayout = defaultLayoutValue;

export { Keyboard, defaultLayout };
export default Keyboard;
export type { IDisplay } from '../core/interfaces/display.interfaces';
export type { ILayoutItem } from '../core/interfaces/layout.interfaces';
export type { ISelect } from '../core/interfaces/select.interfaces';
