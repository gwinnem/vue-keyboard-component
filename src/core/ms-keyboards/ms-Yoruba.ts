/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Yoruba
 */
export default <ILayoutItem>{
  name: `ms-Yoruba`,
  lang: [`yo`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] {empty}`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \u005c z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { } |`,
      `A S D F G H J K L : \u0022 {enter}`,
      `{shift} | Z X C V B N M < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} \u20ac {empty} {empty} {empty} \u2018 \u2019 {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `\u1ecd\u0301 \u1ecd\u0300 {empty} {empty} {empty} {empty} {empty} \u1eb9\u0301 \u1eb9\u0300 \u00b6 {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a6`,
      `\u1ecc\u0301 \u1ecc\u0300 {empty} {empty} {empty} {empty} {empty} \u1eb8\u0301 \u1eb8\u0300 {empty} \u00a8 {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
