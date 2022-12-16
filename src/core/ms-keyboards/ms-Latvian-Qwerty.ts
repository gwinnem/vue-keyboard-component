/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Latvian QWERTY
 */
export default <ILayoutItem>{
  name: `ms-Latvian-Qwerty`,
  lang: [`lv`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] {empty}`,
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
      `\u00ad {empty} \u00ab \u00bb \u20ac {empty} \u2019 {empty} {empty} {empty} {empty} \u2013 {empty} {bksp}`,
      `{tab} {empty} {empty} \u0113 \u0157 {empty} {empty} \u016b \u012b \u00f5 {empty} {empty} {empty} {empty}`,
      `\u0101 \u0161 {empty} {empty} \u0123 {empty} {empty} \u0137 \u013c {empty} \u00b4 {enter}`,
      `{shift} {empty} \u017e {empty} \u010d {empty} {empty} \u0146 {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} \u00a7 \u00b0 {empty} \u00b1 \u00d7 {empty} {empty} \u2014 {empty} {bksp}`,
      `{tab} {empty} {empty} \u0112 \u0156 {empty} {empty} \u016a \u012a \u00d5 {empty} {empty} {empty} {empty}`,
      `\u0100 \u0160 {empty} {empty} \u0122 {empty} {empty} \u0136 \u013b {empty} \u00a8 {enter}`,
      `{shift} {empty} \u017d {empty} \u010c {empty} {empty} \u0145 {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
