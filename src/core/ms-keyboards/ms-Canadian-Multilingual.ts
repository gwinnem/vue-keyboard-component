/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Canadian Multilingual Standard
 */
export default <ILayoutItem>{
  name: `ms-CanadianMultilingual`,
  lang: [`en-ca`],
  layout: {
    default: [
      `/ 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p ^ \u00E7 {enter}`,
      `a s d f g h j k l ; \u00E8 \u00E0 `,
      `{shift} \u00F9 z x c v b n m , . \u00E9 {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\\ ! @ # $ % ? & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P \u00A8 \u00C7 {enter}`,
      `A S D F G H J K L : \u00C8 \u00C0 `,
      `{shift} \u00D9 Z X C V B N M ' " \u00C9 {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `| {empty} {empty} {empty} {empty} {empty} {empty} { } [ ] {empty} \u00AC {bksp}`,
      `{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \` ~ {enter}`,
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00B0 {empty} {empty} `,
      `{shift} {empty} \u00AB \u00BB {empty} {empty} {empty} {empty} {empty} < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
