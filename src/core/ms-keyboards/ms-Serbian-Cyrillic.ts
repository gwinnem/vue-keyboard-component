/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Serbian (Cyrillic)
 */
export default <ILayoutItem>{
  name: `ms-Serbian-Cyrillic`,
  lang: [`sr`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 ' + {bksp}`,
      `{tab} \u0459 \u045a \u0435 \u0440 \u0442 \u0437 \u0443 \u0438 \u043e \u043f \u0448 \u0452 \u0436`,
      `\u0430 \u0441 \u0434 \u0444 \u0433 \u0445 \u0458 \u043a \u043b \u0447 \u045b {enter}`,
      `{shift} < \u0455 \u045f \u0446 \u0432 \u0431 \u043d \u043c , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! " # $ % & / ( ) = ? * {bksp}`,
      `{tab} \u0409 \u040a \u0415 \u0420 \u0422 \u0417 \u0423 \u0418 \u041e \u041f \u0428 \u0402 \u0416`,
      `\u0410 \u0421 \u0414 \u0424 \u0413 \u0425 \u0408 \u041a \u041b \u0427 \u040b {enter}`,
      `{shift} > \u0405 \u040f \u0426 \u0412 \u0411 \u041d \u041c ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
