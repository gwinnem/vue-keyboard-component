/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Chinese ChaJei IME
 */
export default <ILayoutItem>{
  name: `ms-ChineseChaJei`,
  lang: [`zh`],
  layout: {
    default: [
      `\u20AC 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u624B \u7530 \u6C34 \u53E3 \u5EFF \u535C \u5C71 \u6208 \u4EBA \u5FC3 [ ] \\`,
      `\u65E5 \u5C38 \u6728 \u706B \u571F \u7AF9 \u5341 \u5927 \u4E2D ; ' {enter}`,
      `\uFF3A \u96E3 \u91D1 \u5973 \u6708 \u5F13 \u4E00 , . /`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] \\`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `~ ! @ # $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { } |`,
      `A S D F G H J K L : " {enter}`,
      `{shift} Z X C V B N M < > ? {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
