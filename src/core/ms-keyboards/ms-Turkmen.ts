/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Turkmen
 */
export default <ILayoutItem>{
  name: `ms-Turkmen`,
  lang: [`tk`],
  layout: {
    default: [
      `\u017e 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u00e4 w e r t y u i o p \u0148 \u00f6 \u015f`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \u005c z \u00fc \u00e7 \u00fd b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u017d ! @ # $ % \u2116 & * ( ) _ + {bksp}`,
      `{tab} \u00c4 W E R T Y U I O P \u0147 \u00d6 \u015e`,
      `A S D F G H J K L : \u0022 {enter}`,
      `{shift} | Z \u00dc \u00c7 \u00dd B N M < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
