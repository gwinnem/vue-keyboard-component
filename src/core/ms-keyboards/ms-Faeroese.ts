/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Faeroese
 */
export default <ILayoutItem>{
  name: `ms-Faeroese`,
  lang: [`fo`],
  layout: {
    default: [
      `\u00BD 1 2 3 4 5 6 7 8 9 0 + \u00B4 {bksp}`,
      `{tab} q w e r t y u i o p \u00E5 \u00F0 {enter}`,
      `a s d f g h j k l \u00E6 \u00F8 ' `,
      `{shift} < z x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00A7 ! " # \u00A4 % & / ( ) = ? \` {bksp}`,
      `{tab} Q W E R T Y U I O P \u00C5 \u00D0 {enter}`,
      `A S D F G H J K L \u00C6 \u00D8 * `,
      `{shift} > Z X C V B N M ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} @ \u00A3 $ \u20AC {empty} { [ ] } {empty} | {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00A8 ~ {enter}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ^ {empty} `,
      `{shift} \\ {empty} {empty} {empty} {empty} {empty} {empty} \u00B5 {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
