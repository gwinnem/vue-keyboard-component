/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Lithuanian
 */
export default <ILayoutItem>{
  name: `ms-Lithuanian`,
  lang: [`lt`],
  layout: {
    default: [
      `\` \u0105 \u010d \u0119 \u0117 \u012f \u0161 \u0173 \u016b 9 0 - \u017e {bksp}`,
      `{tab} q w e r t y u i o p [ ] \\`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \\ z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ \u0104 \u010c \u0118 \u0116 \u012e \u0160 \u0172 \u016a ( ) _ \u017d {bksp}`,
      `{tab} Q W E R T Y U I O P { } |`,
      `A S D F G H J K L : " {enter}`,
      `{shift} | Z X C V B N M < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} 1 2 3 4 5 6 7 8 9 0 {empty} = {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} ! @ # $ % ^ & * {empty} {empty} {empty} + {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
