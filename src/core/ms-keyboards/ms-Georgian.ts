/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Georgian
 */
export default <ILayoutItem>{
  name: `ms-Georgian`,
  lang: [`ka`],
  layout: {
    default: [
      `\u201e ! ? \u2116 \u00a7 % : . ; , / \u2013 = {bksp}`,
      `{tab} \u10e6 \u10ef \u10e3 \u10d9 \u10d4 \u10dc \u10d2 \u10e8 \u10ec \u10d6 \u10ee \u10ea (`,
      `\u10e4 \u10eb \u10d5 \u10d7 \u10d0 \u10de \u10e0 \u10dd \u10da \u10d3 \u10df {enter}`,
      `{shift} ( \u10ed \u10e9 \u10e7 \u10e1 \u10db \u10d8 \u10e2 \u10e5 \u10d1 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u201c 1 2 3 4 5 6 7 8 9 0 - + {bksp}`,
      `{tab} \u10e6 \u10ef \u10e3 \u10d9 \u10d4 \u10dc \u10d2 \u10e8 \u10ec \u10d6 \u10ee \u10ea )`,
      `\u10e4 \u10eb \u10d5 \u10d7 \u10d0 \u10de \u10e0 \u10dd \u10da \u10d3 \u10df {enter}`,
      `{shift} ) \u10ed \u10e9 \u10e7 \u10e1 \u10db \u10d8 \u10e2 \u10e5 \u10d1 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} \u10f1 {empty} {empty} {empty} {empty} {empty} \u10f4 {empty} {empty}`,
      `\u10f6 {empty} \u10f3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} \u10f2 {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
