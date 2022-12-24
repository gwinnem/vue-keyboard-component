/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Belgian French
 */
export default <ILayoutItem>{
  name: `ms-BelgianFrench`,
  lang: [`nl-fr`, `fr`],
  layout: {
    default: [
      `\u00b2 & \u00e9 " ' ( \u00a7 \u00e8 ! \u00e7 \u00e0 ) - {bksp}`,
      `{tab} a z e r t y u i o p ^ $ \u00b5`,
      `q s d f g h j k l m \u00f9 {enter}`,
      `{shift} < w x c v b n , ; : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00b3 1 2 3 4 5 6 7 8 9 0 \u00b0 _ {bksp}`,
      `{tab} A Z E R T Y U I O P \u00a8 * \u00a3`,
      `Q S D F G H J K L M % {enter}`,
      `{shift} > W X C V B N ? . / / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} | @ # { [ ^ {empty} {empty} { } {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] {empty}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00b4 {enter}`,
      `{shift} \\ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
