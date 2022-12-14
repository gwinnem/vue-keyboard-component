/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Serbian (Latin)
 */
export default <ILayoutItem>{
  name: `ms-Serbian-Latin`,
  lang: [`sr`],
  layout: {
    default: [
      `\u201a 1 2 3 4 5 6 7 8 9 0 ' + {bksp}`,
      `{tab} q w e r t z u i o p \u0161 \u0111 \u017e`,
      `a s d f g h j k l \u010d \u0107 {enter}`,
      `{shift} < y x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! " # $ % & / ( ) = ? * {bksp}`,
      `{tab} Q W E R T Z U I O P \u0160 \u0110 \u017d`,
      `A S D F G H J K L \u010c \u0106 {enter}`,
      `{shift} > Y X C V B N M ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} ~ \u02c7 ^ \u02d8 \u00b0 \u02db \` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}`,
      `{tab} \\ | \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00f7 \u00d7 \u00a4`,
      `{empty} {empty} {empty} [ ] {empty} {empty} \u0142 \u0141 {empty} \u00df {enter}`,
      `{shift} {empty} {empty} {empty} {empty} @ { } \u00a7 < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
