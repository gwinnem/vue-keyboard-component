/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Albanian
 */
export default <ILayoutItem>{
  name: `ms-Albanian`,
  lang: [`sq`],
  layout: {
    default: [
      `\\ 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t z u i o p \u00e7 @`,
      `{caps} a s d f g h j k l \u00eb [ ] {enter}`,
      `{shift} < y x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `| ! " # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Z U I O P \u00c7 '`,
      `{caps} A S D F G H J K L \u00cb { } {enter}`,
      `{shift} > Y X C V B N M ; : ? {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} ~ \u02c7 ^ \u02d8 \u00b0 \u02db \` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}`,
      `{tab} \\ | {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00f7 \u00d7`,
      `{caps} {empty} \u0111 \u0110 [ ] {empty} {empty} \u0142 \u0141 $ \u00df \u00a4 {enter}`,
      `{shift} {empty} {empty} {empty} {empty} @ { } \u00a7 < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
