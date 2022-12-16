import { ILayoutItem } from '../interfaces/layout.interfaces';

/**
 * Layout: Default
 */
export default <ILayoutItem>{
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] #`,
      `{caps} a s d f g h j k l ; ' {enter}`,
      `{shift} \u005c z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00ac ! \u0022 \u00a3 $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { } ~`,
      `{caps} A S D F G H J K L : @ {enter}`,
      `{shift} | Z X C V B N M < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
