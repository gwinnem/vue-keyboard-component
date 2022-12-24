/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Azeri Latin
 */
export default <ILayoutItem>{
  name: `ms-AzeriLatin`,
  lang: [`az`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q \u00fc e r t y u i o p \u00f6 \u011f \\`,
      `a s d f g h j k l \u0131 \u0259 {enter}`,
      `{shift} \\ z x c v b n m \u00e7 \u015f / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! " \u2166 ; % : ? * ( ) _ + {bksp}`,
      `{tab} Q \u00dc E R T Y U \u0130 O P \u00d6 \u011e /`,
      `A S D F G H J K L I \u018f {enter}`,
      `{shift} / Z X C V B N M \u00c7 \u015e / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
