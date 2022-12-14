/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Norwegian with Sami
 */
export default <ILayoutItem>{
  name: `ms-Norwegian-Sami`,
  lang: [`no`],
  layout: {
    default: [
      `| 1 2 3 4 5 6 7 8 9 0 + \\ {bksp}`,
      `{tab} q w e r t y u i o p \u00e5 \u00a8 '`,
      `a s d f g h j k l \u00f8 \u00e6 {enter}`,
      `{shift} < z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00a7 ! " # \u00a4 % & / ( ) = ? \` {bksp}`,
      `{tab} Q W E R T Y U I O P \u00c5 ^ *`,
      `A S D F G H J K L \u00d8 \u00c6 {enter}`,
      `{shift} > Z X C V B N M ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} @ \u00a3 $ \u20ac {empty} { [ ] } {empty} \u00b4 {bksp}`,
      `{tab} \u00e2 {empty} \u20ac {empty} \u0167 {empty} {empty} \u00ef \u00f5 {empty} {empty} ~ {empty}`,
      `\u00e1 \u0161 \u0111 \u01e5 \u01e7 \u021f {empty} \u01e9 {empty} \u00f6 \u00e4 {enter}`,
      `{shift} {empty} \u017e {empty} \u010d \u01ef \u0292 \u014b \u00b5 {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} \u00c2 {empty} {empty} {empty} \u0166 {empty} {empty} \u00cf \u00d5 {empty} {empty} {empty} {empty}`,
      `\u00c1 \u0160 \u0110 \u01e4 \u01e6 \u021e {empty} \u01e8 {empty} \u00d6 \u00c4 {enter}`,
      `{shift} {empty} \u017d {empty} \u010c \u01ee \u01b7 \u014a {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
