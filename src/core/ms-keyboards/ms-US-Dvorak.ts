/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: US-Dvorak
 */
export default <ILayoutItem>{
  name: `ms-Us-Dvorak`,
  lang: [`en`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 [ ] {bksp}`,
      `{tab} ' , . p y f g c r l / = \u005C`,
      `a o e u i d h t n s - {enter}`,
      `{shift} ; q j k x b m w v z {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ % ^ & * ( ) { } {bksp}`,
      `{tab} \u0022 < > P Y F G C R L ? + |`,
      `A O E U I D H T N S _ {enter}`,
      `{shift} : Q J K X B M W V Z {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
