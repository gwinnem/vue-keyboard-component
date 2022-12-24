/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Bulgarian Phonetic Traditional
 */
export default <ILayoutItem>{
  name: `ms-BulgarianPhoneticTraditional`,
  lang: [`bg`],
  layout: {
    default: [
      `\u0447 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u044f \u0432 \u0435 \u0440 \u0442 \u044a \u0443 \u0438 \u043e \u043f \u0448 \u0449 \u044e`,
      `\u0430 \u0441 \u0434 \u0444 \u0433 \u0445 \u0439 \u043a \u043b ; ' {enter}`,
      `{shift} \u044e \u0437 \u044c \u0446 \u0436 \u0431 \u043d \u043c , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u0427 ! @ \u2116 $ % \u20ac \u00a7 * ( ) _ + {bksp}`,
      `{tab} \u042f \u0412 \u0415 \u0420 \u0422 \u042a \u0423 \u0418 \u041e \u041f \u0428 \u0429 \u042e`,
      `\u0410 \u0421 \u0414 \u0424 \u0413 \u0425 \u0419 \u041a \u041b : " {enter}`,
      `{shift} \u042e \u0417 \u045d \u0426 \u0416 \u0411 \u041d \u041c < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
