/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Romanian (Programmers)
 */
export default <ILayoutItem>{
  name: `ms-Romanian-Programmers`,
  lang: [`ro`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] \\`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \\ z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { } |`,
      `A S D F G H J K L : " {enter}`,
      `{shift} | Z X C V B N M < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} ~ \u02c7 ^ \u02d8 \u00b0 \u02db \` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}`,
      `{tab} \u00e2 \u00df \u20ac {empty} \u021b {empty} {empty} \u00ee {empty} \u00a7 \u201e \u201d {empty}`,
      `\u0103 \u0219 \u0111 {empty} {empty} {empty} {empty} {empty} \u0142 {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} \u00a9 {empty} {empty} {empty} {empty} \u00ab \u00bb {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u2013 \u00b1 {bksp}`,
      `{tab} \u00c2 {empty} {empty} {empty} \u021a {empty} {empty} \u00ce {empty} {empty} {empty} {empty} {empty}`,
      `\u0102 \u0218 \u0110 {empty} {empty} {empty} {empty} {empty} \u0141 {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
