/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Portuguese (Brazilian ABNT)
 */
export default <ILayoutItem>{
  name: `ms-Portuguese-Brazilian`,
  lang: [`pt`],
  layout: {
    default: [
      `' 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p \u00B4 [`,
      `a s d f g h j k l \u00E7 ~ ] {enter}`,
      `{shift} \\ z x c v b n m , . ; / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `" ! @ # $ % \u00A8 & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P \` {`,
      `A S D F G H J K L \u00C7 ^ } {enter}`,
      `{shift} | Z X C V B N M < > : ? {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} \u00B9 \u00B2 \u00B3 \u00A3 \u00A2 \u00AC {empty} {empty} {empty} {empty} {empty} \u00A7 {bksp}`,
      `{tab} / ? \u00B0 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00AA`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00BA {enter}`,
      `{shift} {empty} {empty} {empty} \u20A2 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00B0 {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
