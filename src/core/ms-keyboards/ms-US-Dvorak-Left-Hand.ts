/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: US-Dvorak for left hand
 */
export default <ILayoutItem>{
  name: `ms-Us-Dvorak-Left-Hand`,
  lang: [`en`],
  layout: {
    default: [
      `\` [ ] / p f m l j 4 3 2 1 {bksp}`,
      `{tab} ; q b y u r s o . 6 5 = \u005C`,
      `- k c d t h e a z 8 7 {enter}`,
      `{shift} ' x g v w n i , 0 9 {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ { } ? P F M L J $ # @ ! {bksp}`,
      `{tab} : Q B Y U R S O > ^ % + |`,
      `_ K C D T H E A Z * & {enter}`,
      `{shift} \u0022 X G V W N I < ) ( {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
