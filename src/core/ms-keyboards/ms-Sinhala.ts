/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Sinhala
 */
export default <ILayoutItem>{
  name: `ms-Sinhala`,
  lang: [`si`],
  layout: {
    default: [
      `\u0dca{ZWJ}\u0dbb 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u0dd4 \u0d85 \u0dd0 \u0dbb \u0d92 \u0dc4 \u0db8 \u0dc3 \u0daf \u0da0 \u0da4 ; {ZWJ}`,
      `\u0dca \u0dd2 \u0dcf \u0dd9 \u0da7 \u0dba \u0dc0 \u0db1 \u0d9a \u0dad . {enter}`,
      `{shift} {ZWJ} ' \u0d82 \u0da2 \u0da9 \u0d89 \u0db6 \u0db4 \u0dbd \u0d9c / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u0dbb\u0dca{ZWJ} ! @ $ $ % ^ & * ( ) _ + {bksp}`,
      `{tab} \u0dd6 \u0d8b \u0dd1 \u0d8d \u0d94 \u0dc1 \u0db9 \u0dc2 \u0db0 \u0da1 \u0da5 : {empty}`,
      `\u0ddf \u0dd3 \u0dd8 \u0dc6 \u0da8 \u0dca{ZWJ}\u0dba \u0dc5\u0dd4 \u0dab \u0d9b \u0dae , {enter}`,
      `{shift} {empty} " \u0d83 \u0da3 \u0daa \u0d8a \u0db7 \u0db5 \u0dc5 \u0d9d / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `\u0df3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0df4 {enter}`,
      `{shift} {empty} {empty} \u0d9e \u0da6 \u0dac {empty} {empty} {empty} \u0d8f \u0d9f {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
