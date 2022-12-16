/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Norwegian
 */
export default <ILayoutItem>{
  name: `ms-Norwegian`,
  lang: [`no`],
  layout: {
    default: [
      `| 1 2 3 4 5 6 7 8 9 0 + \\ {bksp}`,
      `{tab} q w e r t y u i o p \u00E5 \u00A8`,
      `{caps} a s d f g h j k l \u00F8 \u00E6 ' {enter}`,
      `{shift} < z x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00A7 ! " # \u00A4 % & / ( ) = ? \` {bksp}`,
      `{tab} Q W E R T Y U I O P \u00C5 ^`,
      `{caps} A S D F G H J K L \u00D8 \u00C6 * {enter}`,
      `{shift} > Z X C V B N M ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} @ \u00A3 $ \u20AC {empty} { [ ] } {empty} \u00B4 {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~`,
      `{caps}  {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00B5 {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
