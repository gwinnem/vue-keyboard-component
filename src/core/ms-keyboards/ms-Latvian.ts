/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Latvian
 */
export default <ILayoutItem>{
  name: `ms-Latvian`,
  lang: [`lv`],
  layout: {
    default: [
      `\u00ad 1 2 3 4 5 6 7 8 9 0 - f {bksp}`,
      `{tab} \u016b g j r m v n z \u0113 \u010d \u017e h \u0137`,
      `\u0161 u s i l d a t e c \u00b4 {enter}`,
      `{shift} \u0123 \u0146 b \u012b k p o \u0101 , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `? ! \u00ab \u00bb $ % / & \u00d7 ( ) _ F {bksp}`,
      `{tab} \u016a G J R M V N Z \u0112 \u010c \u017d H \u0136`,
      `\u0160 U S I L D A T E C \u00b0 {enter}`,
      `{shift} \u0122 \u0145 B \u012a K P O \u0100 ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} \u00ab {empty} {empty} \u20ac " \u2019 {empty} : {empty} {empty} \u2013 = {bksp}`,
      `{tab} q \u0123 {empty} \u0157 w y {empty} {empty} {empty} {empty} [ ] {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u20ac {empty} \u00b4 {enter}`,
      `{shift} \\ {empty} x {empty} \u0137 {empty} \u00f5 {empty} < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} @ # $ ~ ^ \u00b1 {empty} {empty} {empty} \u2014 ; {bksp}`,
      `{tab} Q \u0122 {empty} \u0156 W Y {empty} {empty} {empty} {empty} { } {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a8 {enter}`,
      `{shift} | {empty} X {empty} \u0136 {empty} \u00d5 {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
