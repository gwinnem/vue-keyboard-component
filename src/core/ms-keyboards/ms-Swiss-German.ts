/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Swiss German
 */
export default <ILayoutItem>{
  name: `ms-Swiss-German`,
  lang: [`de`, `sv`],
  layout: {
    default: [
      `\u00A7 1 2 3 4 5 6 7 8 9 0 ' ^ {bksp}`,
      `{tab} q w e r t z u i o p \u00FC \u00A8`,
      `a s d f g h j k l \u00F6 \u00E4 $ {enter}`,
      `{shift} < y x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00B0 + " * \u00E7 % & / ( ) = ? \` {bksp}`,
      `{tab} Q W E R T Z U I O P \u00E8 !`,
      `A S D F G H J K L \u00E9 \u00E0 \u00A3 {enter}`,
      `{shift} > Y X C V B N M ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} \u00A6 @ # \u00B0 \u00A7 \u00AC | \u00A2 {empty} {empty} \u00B4 ~ {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ]`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } {enter}`,
      `{shift} \\ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
