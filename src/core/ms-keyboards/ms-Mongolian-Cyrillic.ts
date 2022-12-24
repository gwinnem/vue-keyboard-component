/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Mongolian Cyrillic
 */
export default <ILayoutItem>{
  name: `ms-MongolianCyrillic`,
  lang: [`mn`],
  layout: {
    default: [
      `= \u2116 - " \u20ae : . _ , % ? \u0435 \u0449 {bksp}`,
      `{tab} \u0444 \u0446 \u0443 \u0436 \u044d \u043d \u0433 \u0448 \u04af \u0437 \u043a \u044a \\`,
      `\u0439 \u044b \u0431 \u04e9 \u0430 \u0445 \u0440 \u043e \u043b \u0434 \u043f {enter}`,
      `{shift} \\ \u044f \u0447 \u0451 \u0441 \u043c \u0438 \u0442 \u044c \u0432 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `+ 1 2 3 4 5 6 7 8 9 0 \u0415 \u0429 {bksp}`,
      `{tab} \u0424 \u0426 \u0423 \u0416 \u042d \u041d \u0413 \u0428 \u04ae \u0417 \u041a \u042a |`,
      `\u0419 \u042b \u0411 \u04e8 \u0410 \u0425 \u0420 \u041e \u041b \u0414 \u041f {enter}`,
      `{shift} | \u042f \u0427 \u0401 \u0421 \u041c \u0418 \u0422 \u042c \u0412 / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
