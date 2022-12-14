/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Finnish
 */
export default <ILayoutItem>{
  name: `ms-Finnish`,
  lang: [`fi`],
  layout: {
    default: [
      `\u00A7 1 2 3 4 5 6 7 8 9 0 + \u00B4 {bksp}`,
      `{tab} q w e r t y u i o p \u00E5 \u00A8 {enter}`,
      `a s d f g h j k l \u00F6 \u00E4 ' `,
      `{shift} < z x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00BD ! " # \u00A4 % & / ( ) = ? \` {bksp}`,
      `{tab} Q W E R T Y U I O P \u00C5 ^ {enter}`,
      `A S D F G H J K L \u00D6 \u00C4 * `,
      `{shift} > Z X C V B N M ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} @ \u00A3 $ \u20AC {empty} { [ ] } \\ {empty} {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ {enter}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} `,
      `{shift} | {empty} {empty} {empty} {empty} {empty} {empty} \u00B5 {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
