/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Greek Latin
 */
export default <ILayoutItem>{
  name: `ms-GreekLatin`,
  lang: [`el`],
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
      `{empty} \u00A1 \u00B2 \u00B3 \u00A4 \u20AC \u00BC \u00BD \u00BE \u2018 \u2019 \u00A5 \u00D7 {bksp}`,
      `{tab} \u00E4 \u00E5 \u00E9 \u00AE \u00FE \u00FC \u00FA \u00ED \u00F3 \u00F6 \u00AB \u00BB`,
      `\u00E1 \u00DF \u00F0 {empty} {empty} {empty} {empty} {empty} \u00F8 \u00B6 \u00B4 \u00AC {enter}`,
      `{shift} \u00E6 {empty} \u00A9 {empty} {empty} \u00F1 \u00B5 \u00E7 {empty} \u00BF {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} \u00B9 {empty} {empty} \u00A3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00F7 {bksp}`,
      `{tab} \u00C4 \u00C5 \u00C9 {empty} \u00DE \u00DC \u00DA \u00CD \u00D3 \u00D6 {empty} {empty}`,
      `\u00C1 \u00A7 \u00D0 {empty} {empty} {empty} {empty} {empty} \u00D8 \u00B0 \u00A8 \u00A6 {enter}`,
      `{shift} \u00C6 {empty} \u00A2 {empty} {empty} \u00D1 {empty} \u00C7 {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
