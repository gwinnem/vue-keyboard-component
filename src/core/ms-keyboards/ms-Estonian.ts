/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Estonian
 */
export default <ILayoutItem>{
  name: `ms-Estonian`,
  lang: [`et`],
  layout: {
    default: [
      `\u02c7 1 2 3 4 5 6 7 8 9 0 + \u00b4 {bksp}`,
      `{tab} q w e r t y u i o p \u00fc \u00f5 '`,
      `a s d f g h j k l \u00f6 \u00e4 {enter}`,
      `{shift} < z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! " # \u00a4 % & / ( ) = ? \` {bksp}`,
      `{tab} Q W E R T Y U I O P \u00dc \u00d5 *`,
      `A S D F G H J K L \u00d6 \u00c4 {enter}`,
      `{shift} > Z X C V B N M ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} @ \u00a3 $ \u20ac {empty} { [ ] } \\ {empty} {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a7 \u00bd`,
      `{empty} \u0161 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ^ {enter}`,
      `{shift} | \u017e {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} @ \u00a3 $ {empty} {empty} { [ ] } \\ {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a7 \u00bd`,
      `{empty} \u0160 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ^ {enter}`,
      `{shift} | \u017d {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
