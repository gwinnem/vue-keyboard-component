/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: German
 */
export default <ILayoutItem>{
  name: `ms-German`,
  lang: [`de`],
  layout: {
    default: [
      `^ 1 2 3 4 5 6 7 8 9 0 \u00DF \u00B4 {bksp}`,
      `{tab} q w e r t z u i o p \u00FC +`,
      `{caps} a s d f g h j k l \u00F6 \u00E4 # {enter}`,
      `{shiftleft} < y x c v b n m , . - {shiftright}`,
      `{ctrlleft} {altleft} {space} {altright} {ctrlright}`,
    ],
    shift: [
      `\u00B0 ! " \u00A7 $ % & / ( ) = ? \` {bksp}`,
      `{tab} Q W E R T Z U I O P \u00DC *`,
      `{caps} A S D F G H J K L \u00D6 \u00C4 ' {enter}`,
      `{shiftleft} > Y X C V B N M ; : _ {shiftright}`,
      `{ctrlleft} {altleft} {space} {altright} {ctrlright}`,
    ],
    alt: [
      `{empty} {empty} \u00B2 \u00B3 {empty} {empty} {empty} { [ ] } \\ {empty} {bksp}`,
      `{tab} @ {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~`,
      `{caps} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shiftleft} | {empty} {empty} {empty} {empty} {empty} {empty} \u00B5 {empty} {empty} {empty} {shiftright}`,
      `{ctrlleft} {altleft} {space} {altright} {ctrlright}`,
    ],
  },
  display: {
    // eslint-disable sort-keys
    '{alt}': `Alt`,
    '{altleft}': `Alt`,
    '{altright}': `Alt Gr`,
    '{bksp}': `\u232b`,
    '{caps}': `\u21ea`,
    '{ctrl}': `Strg`,
    '{ctrlleft}': `Strg`,
    '{ctrlright}': `Strg`,
    '{empty}': ` `,
    '{enter}': `\u21A9`,
    '{lock}': `caps \u21ea`,
    '{shift}': `\u2191`,
    '{shiftleft}': `\u2191`,
    '{shiftright}': `\u2191`,
    '{space}': ` `,
    '{tab}': `\u2b7e`,
  },
};
