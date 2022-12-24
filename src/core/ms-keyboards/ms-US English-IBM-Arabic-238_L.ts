/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: US-English (IBM Arabic 238_L)
 */
export default <ILayoutItem>{
  name: `ms-Us-English-IBM-Arabic-238_L`,
  lang: [`en`],
  layout: {
    default: [
      `< 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] \``,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \u005C z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `> ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { } ~`,
      `A S D F G H J K L : \u0022 {enter}`,
      `{shift} | Z X C V B N M , . ? {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
