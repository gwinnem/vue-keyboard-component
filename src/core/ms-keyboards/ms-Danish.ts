/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Danish
 */
export default <ILayoutItem>{
  name: `ms-Danish`,
  lang: [`dk`],
  layout: {
    default: [
      `\u00BD 1 2 3 4 5 6 7 8 9 0 + \u00B4 {bksp}`,
      `{tab} q w e r t y u i o p \u00E5 \u00A8`,
      `a s d f g h j k l \u00E6 \u00F8 ' {enter}`,
      `{shift} < z x c v b n m , . - {shift}`,
      `{ctrlleft} {altleft} {space} {altright} {ctrlright}`,
    ],
    shift: [
      `\u00A7 ! \\" # \u00A4 % & / ( ) = ? \` {bksp}`,
      `{tab} Q W E R T Y U I O P \u00C5 ^`,
      `A S D F G H J K L \u00C6 \u00D8 * {enter}`,
      `{shift} > Z X C V B N M ; : _ {shift}`,
      `{ctrlleft} {altleft} {space} {altright} {ctrlright}`,
    ],
    alt: [
      `{empty} {empty} @ \u00A3 $ \u20AC {empty} { [ ] } {empty} | {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} \\ {empty} {empty} {empty} {empty} {empty} {empty} \u00B5 {empty} {empty} {empty} {shift}`,
      `{ctrlleft} {altleft} {space} {altright} {ctrlright}`,
    ],
  },
};
