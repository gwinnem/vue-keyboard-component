/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Hungarian 101
 */
export default <ILayoutItem>{
  name: `ms-Hungarian-101`,
  lang: [`hu`],
  layout: {
    default: [
      `\u00ED 1 2 3 4 5 6 7 8 9 \u00F6 \u00FC \u00F3 {bksp}`,
      `{tab} q w e r t y u i o p \u0151 \u00FA`,
      `a s d f g h j k l \u00E9 \u00E1 \u0171 {enter}`,
      `{shift} \u00ED z x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00CD ' " + ! % / = ( ) \u00D6 \u00DC \u00D3 {bksp}`,
      `{tab} Q W E R T Y U I O P \u0150 \u00DA`,
      `A S D F G H J K L \u00C9 \u00C1 \u0170 {enter}`,
      `{shift} \u00CD Z X C V B N M ? : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `0 ~ \u02C7 ^ \u02D8 \u00B0 \u02DB \` \u02D9 \u00B4 \u02DD {empty} {empty} {bksp}`,
      `{tab} \\ | \u00C4 \u00A7 \u00A4 {empty} \u20AC \u00CD {empty} {empty} \u00F7 \u00D7`,
      `\u00E4 \u0111 \u0110 [ ] {empty} \u00ED \u0142 \u0141 $ \u00DF \\ {enter}`,
      `{shift} < > # & @ { } < ; > * {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
