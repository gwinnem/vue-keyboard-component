/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Latin American
 */
export default <ILayoutItem>{
  name: `ms-Latin-American`,
  lang: [`es`],
  layout: {
    default: [
      `| 1 2 3 4 5 6 7 8 9 0 ' \u00BF {bksp}`,
      `{tab} q w e r t y u i o p \u00B4 +`,
      `a s d f g h j k l \u00F1 { } {enter}`,
      `{shift} < z x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00B0 ! " # $ % & / ( ) = ? \u00A1 {bksp}`,
      `{tab} Q W E R T Y U I O P \u00A8 *`,
      `A S D F G H J K L \u00D1 [ ] {enter}`,
      `{shift} > Z X C V B N M ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\u00AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \\ {empty} {bksp}`,
      `{tab} @ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ^ \` {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
