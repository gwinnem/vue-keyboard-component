/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Greek
 */
export default <ILayoutItem>{
  name: `ms-Greek`,
  lang: [`el`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} ; \u03C2 \u03B5 \u03C1 \u03C4 \u03C5 \u03B8 \u03B9 \u03BF \u03C0 [ ]`,
      `\u03B1 \u03C3 \u03B4 \u03C6 \u03B3 \u03B7 \u03BE \u03BA \u03BB \u0384 ' \\ {enter}`,
      `{shift} < \u03B6 \u03C7 \u03C8 \u03C9 \u03B2 \u03BD \u03BC , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} : \u0385 \u0395 \u03A1 \u03A4 \u03A5 \u0398 \u0399 \u039F \u03A0 { }`,
      `\u0391 \u03A3 \u0394 \u03A6 \u0393 \u0397 \u039E \u039A \u039B \u00A8 " | {enter}`,
      `{shift} > \u0396 \u03A7 \u03A8 \u03A9 \u0392 \u039D \u039C < > ? {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} \u00B2 \u00B3 \u00A3 \u00A7 \u00B6 {empty} \u00A4 \u00A6 \u00B0 \u00B1 \u00BD {bksp}`,
      `{tab} {empty} {empty} \u20AC \u00AE {empty} \u00A5 {empty} {empty} {empty} {empty} \u00AB \u00BB`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0385 {empty} \u00AC {enter}`,
      `{shift} {empty} {empty} {empty} \u00A9 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
