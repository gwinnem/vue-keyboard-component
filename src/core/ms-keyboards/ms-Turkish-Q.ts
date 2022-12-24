/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Turkish Q
 */
export default <ILayoutItem>{
  name: `ms-Turkish-Q`,
  lang: [`tr`],
  layout: {
    default: [
      `\u0022 1 2 3 4 5 6 7 8 9 0 * - {bksp}`,
      `{tab} q w e r t y u \u0131 o p \u011F \u00FC`,
      `a s d f g h j k l \u015F i , {enter}`,
      `{shift} < z x c v b n m \u00F6 \u00E7 . {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00E9 ! ' ^ + % & / ( ) = ? _ {bksp}`,
      `{tab} Q W E R T Y U I O P \u011E \u00DC`,
      `A S D F G H J K L \u015E \u0130 ; {enter}`,
      `{shift} > Z X C V B N M \u00D6 \u00C7 : {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `< > \u00A3 # $ \u00BD {empty} { [ ] } \u005C | {bksp}`,
      `{tab} @ {empty} \u20AC {empty} {empty} {empty} {empty} i {empty} {empty} \u00A8 ~`,
      `\u00E6 \u00DF {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00B4 {empty} \` {enter}`,
      `{shift} | {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0130 {empty} {empty} {empty} {empty}`,
      `\u00C6 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
