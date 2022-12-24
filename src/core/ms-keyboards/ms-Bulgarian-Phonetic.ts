/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Bulgarian Phonetic
 */
export default <ILayoutItem>{
  name: `ms-BulgarianPhonetic`,
  lang: [`bg`],
  layout: {
    default: [
      `\u044e 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u0447 \u0448 \u0435 \u0440 \u0442 \u044a \u0443 \u0438 \u043e \u043f \u044f \u0449 \u044c`,
      `\u0430 \u0441 \u0434 \u0444 \u0433 \u0445 \u0439 \u043a \u043b ; ' {enter}`,
      `{shift} \u045d \u0437 \u0436 \u0446 \u0432 \u0431 \u043d \u043c , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u042e ! @ \u2116 $ % \u20ac \u00a7 * ( ) \u2013 + {bksp}`,
      `{tab} \u0427 \u0428 \u0415 \u0420 \u0422 \u042a \u0423 \u0418 \u041e \u041f \u042f \u0429 \u045d`,
      `\u0410 \u0421 \u0414 \u0424 \u0413 \u0425 \u0419 \u041a \u041b : " {enter}`,
      `{shift} \u040d \u0417 \u0416 \u0426 \u0412 \u0411 \u041d \u041c \u201e \u201c / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
