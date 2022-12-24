/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Wolof
 */
export default <ILayoutItem>{
  name: `ms-Wolof`,
  lang: [`wo`],
  layout: {
    default: [
      `\u00e3 & \u00e9 \u0022 ' ( - \u00f1 _ \u014b \u00e0 ) = {bksp}`,
      `{tab} a z e r t y u i o p ^ \u00f3 *`,
      `q s d f g h j k l m \u00f9 {enter}`,
      `{shift} < w x c v b n , ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00c3 1 2 3 4 5 6 7 8 9 0 \u00c9 + {bksp}`,
      `{tab} A Z E R T Y U I O P \u00a8 \u00d3 \u00d1`,
      `Q S D F G H J K L M \u00c0 {enter}`,
      `{shift} > W X C V B N ? . / / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} ~ # { [ | \` \u005c ^ @ ] } {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a4 {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
