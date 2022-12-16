/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Lithuanian IBM
 */
export default <ILayoutItem>{
  name: `ms-LithuanianIbm`,
  lang: [`lt`],
  layout: {
    default: [
      `\` ! " / ; : , . ? ( ) _ + {bksp}`,
      `{tab} \u0105 \u017e e r t y u i o p \u012f \u201c |`,
      `a s d f g h j k l \u0173 \u0117 {enter}`,
      `{shift} \\ z \u016b c v b n m \u010d \u0161 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u0104 \u017d E R T Y U I O P \u012e \u201d \\`,
      `A S D F G H J K L \u0172 \u0116 {enter}`,
      `{shift} | Z \u016a C V B N M \u010c \u0160 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} { [ ] } {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
