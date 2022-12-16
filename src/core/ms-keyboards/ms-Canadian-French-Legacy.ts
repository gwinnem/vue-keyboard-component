/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Canadian French Legacy
 */
export default <ILayoutItem>{
  name: `ms-CanadianFrenchLegacy`,
  lang: [`fr-ca`],
  layout: {
    default: [
      `\u00b0 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p ^ \u00e7 \u00e0`,
      `a s d f g h j k l ; \u00e8 {enter}`,
      `{shift} \u00f9 z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00b0 ! " # $ % ? & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P ^ \u00c7 \u00c0`,
      `A S D F G H J K L : \u00c8 {enter}`,
      `{shift} \u00d9 Z X C V B N M ' . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\u00ac \u00b9 @ \u00b3 \u00bc \u00bd \u00be { [ ] } | \u00b8 {bksp}`,
      `{tab} {empty} {empty} {empty} \u00b6 {empty} \u00a5 {empty} {empty} \u00f8 \u00fe \u00b0 ~ {empty}`,
      `\u00e6 \u00df \u00f0 \u00aa {empty} {empty} {empty} {empty} {empty} \u00b4 {empty} {enter}`,
      `{shift} \\ \u00ab \u00bb \u00a2 {empty} {empty} {empty} \u00b5 < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} \u00a1 \u00b2 \u00a3 \u00a4 {empty} {empty} {empty} {empty} \u00b1 {empty} \u00bf {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} \u00ae {empty} {empty} {empty} {empty} \u00d8 \u00de {empty} \u00a8 {empty}`,
      `\u00c6 \u00a7 \u00d0 {empty} {empty} {empty} {empty} {empty} {empty} \u00b4 {empty} {enter}`,
      `{shift} | {empty} {empty} \u00a9 {empty} {empty} {empty} \u00ba {empty} {empty} {empty} {shift}`,
      `{shift} \u00b0 {empty} {empty} {empty} {empty} {empty} {empty} \u00b5 \u00af \u00ad {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
