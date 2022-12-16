/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Czech QWERTY
 */
export default <ILayoutItem>{
  name: `ms-CzechQwerty`,
  lang: [`cs`],
  layout: {
    default: [
      `; + \u011b \u0161 \u010d \u0159 \u017e \u00fd \u00e1 \u00ed \u00e9 = \u00b4 {bksp}`,
      `{tab} q w e r t y u i o p \u00fa ) {empty}`,
      `a s d f g h j k l \u016f \u00a7 {enter}`,
      `{shift} \\ z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00b0 1 2 3 4 5 6 7 8 9 0 % \u02c7 {bksp}`,
      `{tab} Q W E R T Y U I O P / ( '`,
      `A S D F G H J K L " ! {enter}`,
      `{shift} | Z X C V B N M ? : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\` ! @ # $ % ^ & * ( ) - = {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] \\`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ; \u00a4 {enter}`,
      `{shift} \u00df {empty} {empty} {empty} {empty} {empty} {empty} {empty} < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `~ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} _ + {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } |`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} : ^ {enter}`,
      `{shift} \u02dd {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00d7 \u00f7 {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
