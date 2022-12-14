/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Greenlandic
 */
export default <ILayoutItem>{
  name: `ms-Greenlandic`,
  lang: [`kl`],
  layout: {
    default: [
      `\u00bd 1 2 3 4 5 6 7 8 9 0 + \u00b4 {bksp}`,
      `{tab} q w e r t y u i o p \u00e5 \u00a8 '`,
      `a s d f g h j k l \u00e6 \u00f8 {enter}`,
      `{shift} < z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00a7 ! " # \u00a4 % & / ( ) = ? \` {bksp}`,
      `{tab} Q W E R T Y U I O P \u00c5 ^ *`,
      `A S D F G H J K L \u00c6 \u00d8 {enter}`,
      `{shift} > Z X C V B N M ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} @ \u00a3 $ \u20ac {empty} { [ ] } {empty} | {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} \u00fe {empty} ~ {empty}`,
      `{empty} \u00df \u00f0 {empty} {empty} {empty} {empty} \u0138 {empty} {empty} {empty} {enter}`,
      `{shift} \\ {empty} {empty} {empty} {empty} {empty} {empty} \u00b5 {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00de {empty} {empty} {empty}`,
      `{empty} {empty} \u00d0 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
