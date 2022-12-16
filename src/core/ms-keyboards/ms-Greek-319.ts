/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Greek 319
 */
export default <ILayoutItem>{
  name: `ms-Greek319`,
  lang: [`el`],
  layout: {
    default: [
      `\u00BD 1 2 3 4 5 6 7 8 9 0 ' + {bksp}`,
      `{tab} \u00B7 \u03C2 \u03B5 \u03C1 \u03C4 \u03C5 \u03B8 \u03B9 \u03BF \u03C0 [ ]`,
      `\u03B1 \u03C3 \u03B4 \u03C6 \u03B3 \u03B7 \u03BE \u03BA \u03BB \u0384 \u2019 \u00B2 {enter}`,
      `{shift} \u00A7 \u03B6 \u03C7 \u03C8 \u03C9 \u03B2 \u03BD \u03BC , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00B1 ! " \u00A3 $ % \u00AC / ( ) = \u00B0 * {bksp}`,
      `{tab} \u2015 \u00A6 \u0395 \u03A1 \u03A4 \u03A5 \u0398 \u0399 \u039F \u03A0 \u00AB \u00BB`,
      `\u0391 \u03A3 \u0394 \u03A6 \u0393 \u0397 \u039E \u039A \u039B \u00A8 \u2018 \u00B3 {enter}`,
      `{shift} \u00A9 \u0396 \u03A7 \u03A8 \u03A9 \u0392 \u039D \u039C ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0385 {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
