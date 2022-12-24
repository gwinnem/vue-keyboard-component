/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Norwegian extended Sami
 */
export default <ILayoutItem>{
  name: `ms-Norwegian-Sami-Extended`,
  lang: [`se`],
  layout: {
    default: [
      `| 1 2 3 4 5 6 7 8 9 0 + \\ {bksp}`,
      `{tab} \u00e1 \u0161 e r t \u0167 u i o p \u00e5 \u014b \u0111`,
      `a s d f g h j k l \u00f8 \u00e6 {enter}`,
      `{shift} \u017e z \u010d c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00a7 ! " # \u00a4 % & / ( ) = ? \` {bksp}`,
      `{tab} \u00c1 \u0160 E R T \u0166 U I O P \u00c5 \u014a \u0110`,
      `A S D F G H J K L \u00d8 \u00c6 {enter}`,
      `{shift} \u017d Z \u010c C V B N M ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} @ \u00a3 $ \u20ac {empty} { [ ] } {empty} \u00b4 {bksp}`,
      `{tab} q w \u20ac {empty} {empty} y {empty} \u00ef \u00f5 {empty} \u00a8 ~ '`,
      `\u00e2 {empty} {empty} {empty} \u01e7 \u01e5 {empty} \u01e9 {empty} \u00f6 \u00e4 {enter}`,
      `{shift} \u01ef \u0292 x {empty} {empty} {empty} {empty} \u00b5 < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} Q W {empty} {empty} {empty} Y {empty} \u00cf \u00d5 {empty} ^ \u02c7 *`,
      `\u00c2 {empty} {empty} {empty} \u01e6 \u01e4 {empty} \u01e8 {empty} \u00d6 \u00c4 {enter}`,
      `{shift} \u01ee \u01b7 X {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
