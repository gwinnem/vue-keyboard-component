/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Georgian Ergonomic
 */
export default <ILayoutItem>{
  name: `ms-GeorgianErgonomic`,
  lang: [`ka`],
  layout: {
    default: [
      `\u201e ! \u2116 , ; % : ? . ( ) - \u201c {bksp}`,
      `{tab} \u10e9 \u10de \u10e3 \u10eb \u10ed \u10e2 \u10d7 \u10dc \u10d5 \u10e8 \u10d9 \u10e5 /`,
      `\u10ee \u10d8 \u10d0 \u10d4 \u10dd \u10d3 \u10db \u10e1 \u10e0 \u10d1 \u10d2 {enter}`,
      `{shift} \\ \u10ef \u10f0 \u10e7 \u10e6 \u10df \u10d6 \u10ea \u10da \u10e4 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `' 1 2 3 4 5 6 7 8 9 0 + = {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a7`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} / {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\` ! @ # $ \u20ac ^ & * ( ) \u2014 = {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u10fc \u10f3 {empty} [ ] \\`,
      `\u10f4 \u10f2 \u10fa \u10f1 {empty} {empty} {empty} {empty} {empty} {empty} \u10f9 {enter}`,
      `{shift} {empty} {empty} \u10f5 \u10f8 \u10f7 {empty} {empty} {empty} {empty} \u10f6 {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `~ {empty} {empty} \u00a7 {empty} {empty} {empty} {empty} \u00b0 \u00ab \u00bb _ {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} I {empty} {empty} { } |`,
      `{empty} {empty} D {empty} {empty} {empty} {empty} {empty} L {empty} " {enter}`,
      `{shift} {empty} {empty} X C V {empty} {empty} M < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
