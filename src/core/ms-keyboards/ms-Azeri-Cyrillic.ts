/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Azeri Cyrillic
 */
export default <ILayoutItem>{
  name: `ms-AzeriCyrillic`,
  lang: [`az`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u0458 \u04af \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u04bb \u0437 \u0445 \u04b9 \\`,
      `\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u049d {enter}`,
      `{shift} \\ \u04d9 \u0447 \u0441 \u043c \u0438 \u0442 \u0493 \u0431 \u04e9 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! " \u2116 ; % : ? * ( ) _ + {bksp}`,
      `{tab} \u0408 \u04ae \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u04ba \u0417 \u0425 \u04b8 /`,
      `\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u049c {enter}`,
      `{shift} | \u04d8 \u0427 \u0421 \u041c \u0418 \u0422 \u0492 \u0411 \u04e8 / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
