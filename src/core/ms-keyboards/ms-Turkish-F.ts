/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Turkish F
 */
export default <ILayoutItem>{
  name: `ms-Turkish-F`,
  lang: [`tr`],
  layout: {
    default: [
      `+ 1 2 3 4 5 6 7 8 9 0 / - {bksp}`,
      `{tab} f g \u011F \u0131 o d r n h p q w`,
      `u i e a \u00FC t k m l y \u015F x {enter}`,
      `{shift} < j \u00F6 v c \u00E7 z s b . , {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `* ! \u0022 ^ $ % & ' ( ) = ? _ {bksp}`,
      `{tab} F G \u011E I O D R N H P Q W`,
      `U \u0130 E A \u00DC T K M L Y \u015E X {enter}`,
      `{shift} > J \u00D6 V C \u00C7 Z S B : ; {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\u00AC \u00B9 \u00B2 # \u00BC \u00BD \u00BE { [ ] } \u005C | {bksp}`,
      `{tab} @ {empty} {empty} \u00B6 {empty} \u00A5 {empty} {empty} \u00F8 \u00A3 \u00A8 ~`,
      `\u00E6 \u00DF \u20AC {empty} {empty} {empty} {empty} {empty} {empty} \u00B4 {empty} \` {enter}`,
      `{shift} | \u00AB \u00BB \u00A2 {empty} {empty} {empty} \u00B5 \u00D7 \u00F7 \u00AD {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} \u00A1 {empty} \u00B3 \u00A4 {empty} {empty} {empty} {empty} {empty} {empty} \u00BF {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} \u00AE {empty} {empty} {empty} {empty} \u00D8 {empty} {empty} {empty}`,
      `\u00C6 \u00A7 {empty} \u00AA {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} \u00A6 < > \u00A9 {empty} {empty} {empty} \u00BA {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
