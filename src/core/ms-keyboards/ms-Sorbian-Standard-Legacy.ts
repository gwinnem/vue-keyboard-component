/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Sorbian Standard (Legacy)
 */
export default <ILayoutItem>{
  name: `ms-Sorbian-Standard-Legacy`,
  lang: [`wen`, `dsb`, `hsb`],
  layout: {
    default: [
      `^ 1 2 3 4 5 6 7 8 9 0 \u00df \u00b4 {bksp}`,
      `{tab} q w e r t z u i o p \u00fc + \u0142`,
      `a s d f g h j k l \u00f6 \u00e4 {enter}`,
      `{shift} < y x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00b0 ! " \u00a7 $ % & / ( ) = ? \` {bksp}`,
      `{tab} Q W E R T Z U I O P \u00dc * \u0141`,
      `A S D F G H J K L \u00d6 \u00c4 {enter}`,
      `{shift} > Y X C V B N M ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} \u00bb \u00ab \u201e \u201a \u2018 \u201c { [ ] } \\ {empty} {bksp}`,
      `{tab} @ {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ #`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} | {empty} {empty} {empty} {empty} {empty} {empty} \u00b5 {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
