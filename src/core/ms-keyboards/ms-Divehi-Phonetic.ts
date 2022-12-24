/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Divehi Phonetic
 */
export default <ILayoutItem>{
  name: `ms-DivehiPhonetic`,
  lang: [`dv`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u07b0 \u0787 \u07ac \u0783 \u078c \u0794 \u07aa \u07a8 \u07ae \u0795 ] [ \\`,
      `\u07a6 \u0790 \u078b \u078a \u078e \u0780 \u0796 \u0786 \u078d \u061b ' {enter}`,
      `{shift} \\ \u0792 \u00d7 \u0797 \u0788 \u0784 \u0782 \u0789 \u060c . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ % ^ & * ) ( _ + {bksp}`,
      `{tab} \u07a4 \u07a2 \u07ad \u079c \u0793 \u07a0 \u07ab \u07a9 \u07af \u00f7 } { |`,
      `\u07a7 \u0781 \u0791 \ufdf2 \u07a3 \u0799 \u079b \u079a \u0785 : " {enter}`,
      `{shift} | \u07a1 \u0798 \u079d \u07a5 \u079e \u078f \u079f > < / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ; {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {ZWJ} {ZWNJ} {LRM} {RLM} , {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
