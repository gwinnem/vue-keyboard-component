/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Canadian French
 */
export default <ILayoutItem>{
  name: `ms-CanadianFrench`,
  lang: [`fr-ca`],
  layout: {
    default: [
      `# 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p ^ \u00b8 <`,
      `a s d f g h j k l ; \` {enter}`,
      `{shift} \u00ab z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `| ! " / $ % ? & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P ^ \u00a8 >`,
      `A S D F G H J K L : \` {enter}`,
      `{shift} \u00bb Z X C V B N M ' . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\\ \u00b1 @ \u00a3 \u00a2 \u00a4 \u00ac \u00a6 \u00b2 \u00b3 \u00bc \u00bd \u00be {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a7 \u00b6 [ ] }`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ { {enter}`,
      `{shift} \u00b0 {empty} {empty} {empty} {empty} {empty} {empty} \u00b5 \u00af \u00ad {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
