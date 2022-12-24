/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Romanian (Legacy)
 */
export default <ILayoutItem>{
  name: `ms-Romanian-Legacy`,
  lang: [`ro`],
  layout: {
    default: [
      `] 1 2 3 4 5 6 7 8 9 0 + ' {bksp}`,
      `{tab} q w e r t z u i o p \u0103 \u00ee \u00e2`,
      `a s d f g h j k l \u015f \u0163 {enter}`,
      `{shift} < y x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `[ ! " # \u00a4 % & / ( ) = ? * {bksp}`,
      `{tab} Q W E R T Z U I O P \u0102 \u00ce \u00c2`,
      `A S D F G H J K L \u015e \u0162 {enter}`,
      `{shift} > Y X C V B N M ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} ~ \u02c7 ^ \u02d8 \u00b0 \u02db \` \u00b7 \u00b4 \u02dd \u00a8 \u00b8 {bksp}`,
      `{tab} \\ | {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00f7 \u00d7 {empty}`,
      `{empty} \u0111 \u0110 {empty} {empty} {empty} {empty} \u0142 \u0141 $ \u00df {enter}`,
      `{shift} \u001c {empty} {empty} {empty} @ { } \u00a7 < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
