/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Uyghur Legacy
 */
export default <ILayoutItem>{
  name: `ms-Uyghur-`,
  lang: [`ug`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u0686 \u06cb \u06d0 \u0631 \u062a \u064a \u06c7 \u06ad \u0648 \u067e ] [ \u005c`,
      `\u06be \u0633 \u062f \u0627 \u06d5 \u0649 \u0642 \u0643 \u0644 \u061b ' {enter}`,
      `{shift} \u0632 \u0634 \u063a \u06c8 \u0628 \u0646 \u0645 \u060c . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ % ^ & * ) ( _ + {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00bb \u00ab |`,
      `{empty} {empty} \u0698 \u06a7 \u06af \u062e \u062c \u06c6 \u0644\u0627 : \u0022 {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} > < / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
