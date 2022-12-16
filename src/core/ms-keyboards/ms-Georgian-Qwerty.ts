/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Georgian QWERTY
 */
export default <ILayoutItem>{
  name: `ms-GeorgianQwerty`,
  lang: [`ka`],
  layout: {
    default: [
      `\u201e 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u10e5 \u10ec \u10d4 \u10e0 \u10e2 \u10e7 \u10e3 \u10d8 \u10dd \u10de [ ] ~`,
      `\u10d0 \u10e1 \u10d3 \u10e4 \u10d2 \u10f0 \u10ef \u10d9 \u10da ; ' {enter}`,
      `{shift} \\ \u10d6 \u10ee \u10ea \u10d5 \u10d1 \u10dc \u10db , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u201c ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} {empty} \u10ed {empty} \u10e6 \u10d7 {empty} {empty} {empty} {empty} {empty} { } |`,
      `{empty} \u10e8 {empty} {empty} {empty} {empty} \u10df {empty} {empty} : " {enter}`,
      `{shift} {empty} \u10eb {empty} \u10e9 {empty} {empty} N {empty} < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} \u201e \u201c {empty} \u20ac {empty} {empty} \u00b0 {empty} {empty} \u2014 \u2013 {bksp}`,
      `{tab} {empty} {empty} \u10f1 \u00ae {empty} \u10f8 {empty} \u10f2 {empty} {empty} {empty} {empty} {empty}`,
      `\u10fa {empty} {empty} \u10f6 \u10f9 \u10f5 \u10f7 {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} \u10f4 \u00a9 \u10f3 {empty} \u10fc {empty} \u00ab \u00bb {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
