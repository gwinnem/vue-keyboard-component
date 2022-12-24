/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Chinese Bopomofo IME
 */
export default <ILayoutItem>{
  name: `ms-ChineseBopomofo`,
  lang: [`zh`],
  layout: {
    default: [
      `\u20AC \u3105 \u3109 \u02C7 \u02CB \u3113 \u02CA \u02D9 \u311A \u311E \u3122 \u3126 = {bksp}`,
      `{tab} \u3106 \u310A \u310D \u3110 \u3114 \u3117 \u3127 \u311B \u311F \u3123 [ ] \\`,
      `\u3107 \u310B \u310E \u3111 \u3115 \u3118 \u3128 \u311C \u3120 \u3124 ' {enter}`,
      `\u3108 \u310C \u310F \u3112 \u3116 \u3119 \u3129 \u311D \u3121 \u3125`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] \\`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `~ ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { } |`,
      `A S D F G H J K L : " {enter}`,
      `{shift} Z X C V B N M < > ? {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
