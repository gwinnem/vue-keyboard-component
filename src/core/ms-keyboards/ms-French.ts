/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: French
 */
export default <ILayoutItem>{
  name: `ms-French`,
  lang: [`fr`],
  layout: {
    default: [
      `\u00B2 & \u00E9 " ' ( - \u00E8 _ \u00E7 \u00E0 ) = {bksp}`,
      `{tab} a z e r t y u i o p ^ $`,
      `q s d f g h j k l m \u00F9 * {enter}`,
      `{shift} < w x c v b n , ; : ! {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      ` 1 2 3 4 5 6 7 8 9 0 \u00B0 + {bksp}`,
      `{tab} A Z E R T Y U I O P \u00A8 \u00A3`,
      `Q S D F G H J K L M % \u00B5 {enter}`,
      `{shift} > W X C V B N ? . / \u00A7 {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} {empty} ~ # { [ | \` \\ ^ @ ] } {bksp}`,
      `{tab} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00A4`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
