/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Syriac
 */
export default <ILayoutItem>{
  name: `ms-Syriac`,
  lang: [`syr`],
  layout: {
    default: [
      `\u070f 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u0714 \u0728 \u0716 \u0729 \u0726 \u071c \u0725 \u0717 \u071e \u071a \u0713 \u0715 \u0706`,
      `\u072b \u0723 \u071d \u0712 \u0720 \u0710 \u072c \u0722 \u0721 \u071f \u071b {enter}`,
      `{shift} \u0706 ] [ \u0724 \u072a \u0727 \u0700 . \u0718 \u0719 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u032e ! \u030a \u0325 \u0749 \u2670 \u2671 \u070a \u00bb ) ( \u00ab + {bksp}`,
      `{tab} \u0730 \u0733 \u0736 \u073a \u073d \u0740 \u0741 \u0308 \u0304 \u0307 \u0303 \u074a :`,
      `\u0731 \u0734 \u0737 \u073b \u073e \u0711 \u0640 \u0324 \u0331 \u0323 \u0330 {enter}`,
      `{shift} : \u0732 \u0735 \u0738 \u073c \u073f \u0739 \u0742 \u060c \u061b / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\u0651 \u0701 \u0702 \u0703 \u0704 \u0705 \u0708 \u0709 \u070b \u070c \u070d \u250c \u2510 {bksp}`,
      `{tab} \u064e \u064b \u064f \u064c \u0653 \u0654 \u0747 \u0743 \u0745 \u032d {empty} {empty} {empty}`,
      `\u0650 \u064d {empty} \u0621 \u0655 \u0670 \u0748 \u0744 \u0746 {empty} {empty} {enter}`,
      `{shift} {empty} {empty} \u0652 {empty} {ZWJ} {ZWNJ} {LRM} {RLM} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
