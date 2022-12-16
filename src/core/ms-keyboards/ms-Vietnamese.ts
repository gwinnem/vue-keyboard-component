/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Vietnamese
 */
export default <ILayoutItem>{
  name: `ms-Vietnamese`,
  lang: [`vi`],
  layout: {
    default: [
      `\` \u0103 \u00e2 \u00ea \u00f4 \u0300 \u0309 \u0303 \u0301 \u0323 \u0111 - \u20ab {bksp}`,
      `{tab} q w e r t y u i o p \u01b0 \u01a1 \u005c`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \u005c z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ \u0102 \u00c2 \u00ca \u00d4 \u0300 \u0309 \u0303 \u0301 \u0323 \u0110 _ + {bksp}`,
      `{tab} Q W E R T Y U I O P \u01af \u01a0 |`,
      `A S D F G H J K L : \u0022 {enter}`,
      `{shift} | Z X C V B N M < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] \u005c`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \u005c z x c v b n m , . {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `~ ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { } |`,
      `A S D F G H J K L : \u0022 {enter}`,
      `{shift} | Z X C V B N M < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
