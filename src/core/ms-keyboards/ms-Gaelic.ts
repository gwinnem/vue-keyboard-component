/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Gaelic
 */
export default <ILayoutItem>{
  name: `ms-Gaelic`,
  lang: [`gd`],
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ]`,
      `a s d f g h j k l ; ' # {enter}`,
      `{shift} \\ z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\` ! " \u00A3 $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { }`,
      `A S D F G H J K L : @ ~ {enter}`,
      `{shift} | Z X C V B N M < > ? {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `\u00A6 {empty} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u00E9 {empty} {empty} \u00FD \u00FA \u00ED \u00F3 {empty} {empty} {empty}`,
      `\u00E1 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ' {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `\u00AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}`,
      `{tab} {empty} {empty} \u00C9 {empty} {empty} \u00DD \u00DA \u00CD \u00D3 {empty} {empty} {empty}`,
      `\u00C1 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}`,
      `{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
