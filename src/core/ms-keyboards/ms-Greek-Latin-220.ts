/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Greek Latin 220
 */
export default <ILayoutItem>{
  name: `ms-GreekLatin220`,
  lang: [`el`],
  layout: {
    default: [
      `\\ 1 2 3 4 5 6 7 8 9 0 ' ] {bksp}`,
      `{tab} q w e r t y u i o p + }`,
      `a s d f g h j k l \u0384 \u00A8 # {enter}`,
      `{shift} < z x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `| ! " # $ % & / ( ) = ? [ {bksp}`,
      `{tab} Q W E R T Y U I O P * {`,
      `A S D F G H J K L \u00A8 \u0385 @ {enter}`,
      `{shift} > Z X C V B N M ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} \u00B2 \u00B3 \u00A3 \u00A7 \u00B6 {empty} \u00A4 \u00A6 \u00B0 \u00B1 \u00BD {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00AB \u00BB`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0385 \u0385 \u00AC {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
