/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Bulgarian Typewriter
 */
export default <ILayoutItem>{
  name: `ms-BulgarianTypewriter`,
  lang: [`bg`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - . {bksp}`,
      `{tab} , \u0443 \u0435 \u0438 \u0448 \u0449 \u043a \u0441 \u0434 \u0437 \u0446 ; (`,
      `\u044c \u044f \u0430 \u043e \u0436 \u0433 \u0442 \u043d \u0432 \u043c \u0447 {enter}`,
      `{shift} \\ \u044e \u0439 \u044a \u044d \u0444 \u0445 \u043f \u0440 \u043b / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! ? + " % = : / _ \u2116 \u0406 V {bksp}`,
      `{tab} \u044b \u0423 \u0415 \u0418 \u0428 \u0429 \u041a \u0421 \u0414 \u0417 \u0426 \u00a7 )`,
      `\u042c \u042f \u0410 \u041e \u0416 \u0413 \u0422 \u041d \u0412 \u041c \u0427 {enter}`,
      `{shift} | \u042e \u0419 \u042a \u042d \u0424 \u0425 \u041f \u0420 \u041b / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
