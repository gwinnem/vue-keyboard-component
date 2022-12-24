/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Polish (Programmers)
 */
export default <ILayoutItem>{
  name: `ms-Polish-214`,
  lang: [`pl`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ]`,
      `a s d f g h j k l ; ' \\ {enter}`,
      `{shift} z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { }`,
      `A S D F G H J K L : " | {enter}`,
      `{shift} Z X C V B N M < > ? {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u0119 {empty} {empty} {empty} \u20AC {empty} \u00F3 {empty} {empty} {empty}`,
      `\u0105 \u015B {empty} {empty} {empty} {empty} {empty} {empty} \u0142 {empty} {empty} {empty} {enter}`,
      `{shift} \u017C \u017A \u0107 {empty} {empty} \u0144 {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u0118 {empty} {empty} {empty} {empty} {empty} \u00D3 {empty} {empty} {empty}`,
      `\u0104 \u015A {empty} {empty} {empty} {empty} {empty} {empty} \u0141 {empty} {empty} {empty} {enter}`,
      `{shift} \u017B \u0179 \u0106 {empty} {empty} \u0143 {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
