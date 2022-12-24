/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Arabic 102
 */
export default <ILayoutItem>{
  name: `ms-Arabic102`,
  lang: [`ar`],
  layout: {
    default: [
      `> 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u0636 \u0635 \u062B \u0642 \u0641 \u063A \u0639 \u0647 \u062E \u062D \u062C \u062F {enter}`,
      `\u0634 \u0633 \u064A \u0628 \u0644 \u0627 \u062A \u0646 \u0645 \u0643 \u0637 \u0630 `,
      `{shift} \u0640 \u0626 \u0621 \u0624 \u0631 \u0644\u0627 \u0649 \u0629 \u0648 \u0632 \u0638 {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `< ! @ # $ % ^ & * ) ( _ + {bksp}`,
      `{tab} \u064E \u064B \u064F \u064C \u0644\u0625 \u0625 \u2018 \u00F7 \u00D7 \u061B } { {enter}`,
      `\\ {empty} ] [ \u0644\u0623 \u0623 \u0640 \u060C / : " \u0651 `,
      `{shift} | ~ \u0652 \u0650 \u064D \u0644\u0622 \u0622 \u2019 , . \u061F {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} \u00A4 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} \u0651\u064E \u0651\u064B \u0651\u064F \u0651\u064C {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} `,
      `{shift} {empty} {empty} {empty} \u0651\u0650 \u0651\u064D {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
