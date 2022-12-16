/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Romanian (Standard)
 */
export default <ILayoutItem>{
  name: `ms-Romanian-Standard`,
  lang: [`ro`],
  layout: {
    default: [
      `\u201e 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p \u0103 \u00ee \u00e2`,
      `a s d f g h j k l \u0219 \u021b {enter}`,
      `{shift} \\ z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u201d ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P \u0102 \u00ce \u00c2`,
      `A S D F G H J K L \u0218 \u021a {enter}`,
      `{shift} | Z X C V B N M ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\` ~ \u02c7 ^ \u02d8 \u00b0 \u02db \` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} \u00a7 [ ] \\`,
      `{empty} \u00df \u0111 {empty} {empty} {empty} {empty} {empty} \u0142 ; ' {enter}`,
      `{shift} {empty} {empty} {empty} \u00a9 {empty} {empty} {empty} {empty} < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `~ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u2013 \u00b1 {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } |`,
      `{empty} {empty} \u0110 {empty} {empty} {empty} {empty} {empty} \u0141 : " {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00ab \u00bb {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
