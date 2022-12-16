/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Armenian Eastern
 */
export default <ILayoutItem>{
  name: `ms-Armenian-Eastern`,
  lang: [`hy-e`],
  layout: {
    default: [
      `\u055d : \u0571 \u0575 \u055b , - . \u00ab \u00bb \u0585 \u057c \u056a {bksp}`,
      `{tab} \u056d \u0582 \u0567 \u0580 \u057f \u0565 \u0568 \u056b \u0578 \u057a \u0579 \u057b '`,
      `\u0561 \u057d \u0564 \u0586 \u0584 \u0570 \u0573 \u056f \u056c \u0569 \u0583 {enter}`,
      `{shift} ' \u0566 \u0581 \u0563 \u057e \u0562 \u0576 \u0574 \u0577 \u0572 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u055c 1 \u0541 \u0545 3 4 9 \u0587 ( ) \u0555 \u054c \u053a {bksp}`,
      `{tab} \u053d \u0552 \u0537 \u0550 \u054f \u0535 \u0538 \u053b \u0548 \u054a \u0549 \u054b \u055e`,
      `\u0531 \u054d \u0534 \u0556 \u0554 \u0540 \u0543 \u053f \u053c \u0539 \u0553 {enter}`,
      `{shift} \u055e \u0536 \u0551 \u0533 \u054e \u0532 \u0546 \u0544 \u0547 \u0542 / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
