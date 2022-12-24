/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Italian
 */
export default <ILayoutItem>{
  name: `ms-Italian`,
  lang: [`it`],
  layout: {
    default: [
      `\\ 1 2 3 4 5 6 7 8 9 0 ' \u00EC {bksp}`,
      `{tab} q w e r t y u i o p \u00E8 +`,
      `a s d f g h j k l \u00F2 \u00E0 \u00F9 {enter}`,
      `{shift} < z x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `| ! " \u00A3 $ % & / ( ) = ? ^ {bksp}`,
      `{tab} Q W E R T Y U I O P \u00E9 *`,
      `A S D F G H J K L \u00E7 \u00B0 \u00A7 {enter}`,
      `{shift} > Z X C V B N M ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ]`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} @ # {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { }`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
