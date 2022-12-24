/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: US-Dvorak for right hand
 */
export default <ILayoutItem>{
  name: `ms-Us-Dvorak-Right-Hand`,
  lang: [`en`],
  layout: {
    default: [
      `\` 1 2 3 4 j l m f p / [ ] {bksp}`,
      `{tab} 5 6 q . o r s u y b ; = \u005C`,
      `7 8 z a e h t d c k - {enter}`,
      `{shift} 9 0 x , i n w v g ' {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ J L M F P ? { } {bksp}`,
      `{tab} % ^ Q > O R S U Y B : + |`,
      `& * Z A E H T D C K _ {enter}`,
      `{shift} ( ) X < I N W V G \u0022 {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
