/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Slovakian (QWERTY)
 */
export default <ILayoutItem>{
  name: `ms-Slovakian-Qwerty`,
  lang: [`sk`],
  layout: {
    default: [
      `; + \u013e \u0161 \u010d \u0165 \u017e \u00fd \u00e1 \u00ed \u00e9 = \u00b4 {bksp}`,
      `{tab} q w e r t y u i o p \u00fa \u00e4 \u0148`,
      `a s d f g h j k l \u00f4 \u00a7 {enter}`,
      `{shift} & z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00b0 1 2 3 4 5 6 7 8 9 0 % \u02c7 {bksp}`,
      `{tab} Q W E R T Y U I O P / ( )`,
      `A S D F G H J K L " ! {enter}`,
      `{shift} * Z X C V B N M ? : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} ~ \u02c7 ^ \u02d8 \u00b0 \u02db \` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}`,
      `{tab} \\ | \u20ac {empty} {empty} {empty} {empty} {empty} {empty} ' \u00f7 \u00d7 \u00a4`,
      `{empty} \u0111 \u0110 [ ] {empty} {empty} \u0142 \u0141 $ \u00df {enter}`,
      `{shift} < > # & @ { } {empty} < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
