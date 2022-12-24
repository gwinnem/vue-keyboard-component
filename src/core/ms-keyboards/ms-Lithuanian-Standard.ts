/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Lithuanian Standard
 */
export default <ILayoutItem>{
  name: `ms-LithuanianStandard`,
  lang: [`lt`],
  layout: {
    default: [
      `\` ! - / ; : , . = ( ) ? x {bksp}`,
      `{tab} \u0105 \u017e e r t y u i o p \u012f w q`,
      `a s d \u0161 g h j k l \u0173 \u0117 {enter}`,
      `{shift} < z \u016b c v b n m \u010d f / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ 1 2 3 4 5 6 7 8 9 0 + X {bksp}`,
      `{tab} \u0104 \u017d E R T Y U I O P \u012e W Q`,
      `A S D \u0160 G H J K L \u0172 \u0116 {enter}`,
      `{shift} > Z \u016a C V B N M \u010c F / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\u00b4 @ _ # $ \u00a7 ^ & * [ ] ' % {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } |`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} " {enter}`,
      `{shift} \u2013 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u201e \u201c {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
