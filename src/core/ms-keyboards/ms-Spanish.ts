/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Spanish
 */
export default <ILayoutItem>{
  name: `ms-Spanish`,
  lang: [`es`],
  layout: {
    default: [
      `\u00BA 1 2 3 4 5 6 7 8 9 0 ' \u00A1 {bksp}`,
      `{tab} q w e r t y u i o p \` +`,
      `a s d f g h j k l \u00F1 \u00B4 \u00E7 {enter}`,
      `{shift} < z x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00AA ! " \u00B7 $ % & / ( ) = ? \u00BF {bksp}`,
      `{tab} Q W E R T Y U I O P ^ *`,
      `A S D F G H J K L \u00D1 \u00A8 \u00C7 {enter}`,
      `{shift} > Z X C V B N M ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\\ | @ # ~ \u20AC \u00AC {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ]`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
