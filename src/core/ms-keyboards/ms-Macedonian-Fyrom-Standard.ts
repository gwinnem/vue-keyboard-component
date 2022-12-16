/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Macedonian (FYROM) - Standard
 */
export default <ILayoutItem>{
  name: `ms-Macedonian-Fyrom-Standard`,
  lang: [`mk`],
  layout: {
    default: [
      `\u045d 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} \u0459 \u045a \u0435 \u0440 \u0442 \u0455 \u0443 \u0438 \u043e \u043f \u0448 \u0453 \u0436`,
      `\u0430 \u0441 \u0434 \u0444 \u0433 \u0445 \u0458 \u043a \u043b \u0447 \u045c {enter}`,
      `{shift} \u0450 \u0437 \u045f \u0446 \u0432 \u0431 \u043d \u043c , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u040d ! \u201e \u201c ' % \u201a \u2018 * ( ) - + {bksp}`,
      `{tab} \u0409 \u040a \u0415 \u0420 \u0422 \u0405 \u0423 \u0418 \u041e \u041f \u0428 \u0403 \u0416`,
      `\u0410 \u0421 \u0414 \u0424 \u0413 \u0425 \u0408 \u041a \u041b \u0427 \u040c {enter}`,
      `{shift} \u0400 \u0417 \u040f \u0426 \u0412 \u0411 \u041d \u041c ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} \u00b0 @ # $ {empty} ^ & \u2026 { } \u2014 \u0301 {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] |`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
