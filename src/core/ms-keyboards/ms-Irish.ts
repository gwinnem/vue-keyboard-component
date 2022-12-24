/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Irish
 */
export default <ILayoutItem>{
  name: `ms-Irish`,
  lang: [`ga`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] #`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \\ z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00ac ! " \u00a3 $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { } ~`,
      `A S D F G H J K L : @ {enter}`,
      `{shift} | Z X C V B N M < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\u00a6 {empty} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u00e9 {empty} {empty} {empty} \u00fa \u00ed \u00f3 {empty} {empty} {empty} {empty}`,
      `\u00e1 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00b4 {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `\u00a6 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u00c9 {empty} {empty} {empty} \u00da \u00cd \u00d3 {empty} {empty} {empty} {empty}`,
      `\u00c1 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \` {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
