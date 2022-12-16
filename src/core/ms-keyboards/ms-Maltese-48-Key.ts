/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Maltese 48-Key
 */
export default <ILayoutItem>{
  name: `ms-Maltese-48-Key`,
  lang: [`mt`],
  layout: {
    default: [
      `\u010b 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p \u0121 \u0127 #`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \u017c z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u010a ! " \u20ac $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P \u0120 \u0126 ~`,
      `A S D F G H J K L : @ {enter}`,
      `{shift} \u017b Z X C V B N M < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\` {empty} {empty} \u00a3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u00e8 {empty} {empty} {empty} \u00f9 \u00ec \u00f2 {empty} [ ] {empty}`,
      `\u00e0 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} \\ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `\u00ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u00c8 {empty} {empty} {empty} \u00d9 \u00cc \u00d2 {empty} { } {empty}`,
      `\u00c0 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} | {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
