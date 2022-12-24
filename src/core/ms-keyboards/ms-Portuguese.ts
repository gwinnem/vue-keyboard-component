/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Portuguese
 */
export default <ILayoutItem>{
  name: `ms-Portuguese`,
  lang: [`pt`],
  layout: {
    default: [
      `\\ 1 2 3 4 5 6 7 8 9 0 ' \u00AB {bksp}`,
      `{tab} q w e r t y u i o p + \u00B4`,
      `a s d f g h j k l \u00E7 \u00BA ~ {enter}`,
      `{shift} < z x c v b n m , . - {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `| ! \\" # $ % & / ( ) = ? \u00BB {bksp}`,
      `{tab} Q W E R T Y U I O P * \``,
      `A S D F G H J K L \u00C7 \u00AA ^ {enter}`,
      `{shift} > Z X C V B N M ; : _ {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
