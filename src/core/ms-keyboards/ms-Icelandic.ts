/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Icelandic
 */
export default <ILayoutItem>{
  name: `ms-Icelandic`,
  lang: [`is`],
  layout: {
    default: [
      `\u00B0 1 2 3 4 5 6 7 8 9 0 \u00F6 - {bksp}`,
      `{tab} q w e r t y u i o p \u00F0 '`,
      `a s d f g h j k l \u00E6 \u00B4 + {enter}`,
      `{shift} < z x c v b n m , . \u00FE {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00A8 ! " # $ % & / ( ) = \u00D6 _ {bksp}`,
      `{tab} Q W E R T Y U I O P \u00D0 ?`,
      `A S D F G H J K L \u00C6 ' * {enter}`,
      `{shift} > Z X C V B N M ; : \u00DE {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\u00B0 {empty} {empty} {empty} {empty} \u20AC {empty} { [ ] } \\ {empty} {bksp}`,
      `{tab} @ {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ^ \` {enter}`,
      `{shift} | {empty} {empty} {empty} {empty} {empty} {empty} \u00B5 {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
