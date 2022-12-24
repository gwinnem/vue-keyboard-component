/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Divehi Typewriter
 */
export default <ILayoutItem>{
  name: `ms-DivehiTypewriter`,
  lang: [`dv`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u07ab \u07ae \u07a7 \u07a9 \u07ad \u078e \u0783 \u0789 \u078c \u0780 \u078d [ ]`,
      `\u07a8 \u07aa \u07b0 \u07a6 \u07ac \u0788 \u0787 \u0782 \u0786 \u078a \ufdf2 {enter}`,
      `{shift} \\ \u0792 \u0791 \u0790 \u0794 \u0785 \u078b \u0784 \u0781 \u0793 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! @ # $ % ^ & * ) ( _ + {bksp}`,
      `{tab} \u00d7 \u2019 \u201c / : \u07a4 \u079c \u07a3 \u07a0 \u0799 \u00f7 { }`,
      `< > . \u060c " \u07a5 \u07a2 \u0798 \u079a \u07a1 \u061b {enter}`,
      `{shift} | \u0796 \u0795 \u078f \u0797 \u079f \u079b \u079d \\ \u079e / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `{empty} {empty} {empty} , {empty} {empty} {empty} {empty} {empty} {empty} ; {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {ZWJ} {ZWNJ} {LRM} {RLM} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
