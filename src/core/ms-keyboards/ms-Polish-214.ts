/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Polish (214)
 */
export default <ILayoutItem>{
  name: `ms-Polish-214`,
  lang: [`pl`],
  layout: {
    default: [
      `\u02DB 1 2 3 4 5 6 7 8 9 0 + ' {bksp}`,
      `{tab} q w e r t z u i o p \u017C \u015B`,
      `a s d f g h j k l \u0142 \u0105 \u00F3 {enter}`,
      `{shift} < y x c v b n m , . - {shift}`,
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
      `{empty} ~ \u02C7 ^ \u02D8 \u00B0 \u02DB \` \u00B7 \u00B4 \u02DD \u00A8 \u00B8 {bksp}`,
      `{tab} \\ \u00A6 {empty} {empty} {empty} {empty} \u20AC {empty} {empty} {empty} \u00F7 \u00D7`,
      `{empty} \u0111 \u0110 {empty} {empty} {empty} {empty} {empty} {empty} $ \u00DF {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} @ { } \u00A7 < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
