/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Greek Latin 319
 */
export default <ILayoutItem>{
  name: `ms-GreekLatin319`,
  lang: [`el`],
  layout: {
    default: [
      `\\ 1 2 3 4 5 6 7 8 9 0 ' + {bksp}`,
      `{tab} q w e r t y u i o p [ ]`,
      `a s d f g h j k l \u00B4 ^ \` {enter}`,
      `{shift} < z x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `| ! " # $ % & / ( ) = ? * {bksp}`,
      `{tab} Q W E R T Y U I O P { }`,
      `A S D F G H J K L \u00A8 ~ @ {enter}`,
      `{shift} > Z X C V B N M ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
