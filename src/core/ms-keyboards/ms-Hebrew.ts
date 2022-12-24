/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Hebrew
 */
export default <ILayoutItem>{
  name: `ms-Hebrew`,
  lang: [`he`],
  layout: {
    default: [
      `; 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} / ' \u05e7 \u05e8 \u05d0 \u05d8 \u05d5 \u05df \u05dd \u05e4 ] [ \\`,
      `\u05e9 \u05d3 \u05d2 \u05db \u05e2 \u05d9 \u05d7 \u05dc \u05da \u05e3 , {enter}`,
      `{shift} \\ \u05d6 \u05e1 \u05d1 \u05d4 \u05e0 \u05de \u05e6 \u05ea \u05e5 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ % ^ & * ) ( _ + {bksp}`,
      `{tab} Q W E R T Y U I O P } { |`,
      `A S D F G H J K L : " {enter}`,
      `{shift} | Z X C V B N M > < / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} \u20aa {empty} {empty} {empty} {empty} {empty} {empty} \u05bf {empty} {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} \u05f0 {empty} {empty} {empty} {empty} {empty} {empty}`,
      `{empty} {empty} {empty} {empty} {empty} \u05f2 \u05f1 {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
