/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Spanish Variation
 */
export default <ILayoutItem>{
  name: `ms-Spanish-Variation`,
  lang: [`es`],
  layout: {
    default: [
      `' 1 2 3 4 5 6 7 8 9 0 - \u00A8 {bksp}`,
      `{tab} q w e r t y u i o p \u00F7 \``,
      `a s d f g h j k l \u00F1 \u00E7 \u00B4 {enter}`,
      `{shift} < z x c v b n m , . = {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00B7 \u00AA " / ( ) \u00A1 ! \u00BF ? \u20A7 + \u00A8 {bksp}`,
      `{tab} Q W E R T Y U I O P \u00D7 \``,
      `A S D F G H J K L \u00D1 \u00C7 \u00B4 {enter}`,
      `{shift} > Z X C V B N M ; : % {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\\ | @ # \u00BC \u00BD \u00AC _ # \u00A7 \\ * ~ {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ]`,
      `$ & @ [ ] | \u00A3 \u00B1 {empty} ~ { } {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ^ {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
