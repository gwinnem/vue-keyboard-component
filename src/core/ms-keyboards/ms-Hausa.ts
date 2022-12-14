/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Hausa
 */
export default <ILayoutItem>{
  name: `ms-Hausa`,
  lang: [`ha`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] \\`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \\ z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { } |`,
      `A S D F G H J K L : " {enter}`,
      `{shift} | Z X C V B N M < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} \u20ac {empty} {empty} {empty} \u2018 \u2019 {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} \u01b4 {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `{empty} {empty} \u0257 {empty} {empty} {empty} {empty} \u0199 {empty} \u00b6 \u2019 {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} \u0253 {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} \u01b3 {empty} {empty} {empty} {empty} {empty} {empty} \u00a6`,
      `{empty} {empty} \u018a {empty} {empty} {empty} {empty} \u0198 {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} \u0181 {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
