/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Japanese English Full Width
 */
export default <ILayoutItem>{
  name: `ms-Japanese-English-Full-Width`,
  lang: [`ja`],
  layout: {
    default: [
      `\uff40 \uff11 \uff12 \uff13 \uff14 \uff15 \uff16 \uff17 \uff18 \uff19 \uff10 \uff0d \uff1d {bksp}`,
      `{tab} \uff51 \uff57 \uff45 \uff52 \uff54 \uff59 \uff55 \uff49 \uff4f \uff50 \uff3b \uff3d \uffe5`,
      `\uff41 \uff53 \uff44 \uff46 \uff47 \uff48 \uff4a \uff4b \uff4c \uff1b \uff07 {enter}`,
      `{shift} \uff5a \uff58 \uff43 \uff56 \uff42 \uff4e \uff4d \uff0c \uff0e \uff0f {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\uff5e \uff01 \uff20 \uff03 \uff04 \uff05 \uff3e \uff06 \uff0a \uff08 \uff09 \uff3f \uff0b {bksp}`,
      `{tab} \uff31 \uff37 \uff25 \uff32 \uff34 \uff39 \uff35 \uff29 \uff2f \uff30 \uff5b \uff5d \uff5c`,
      `\uff21 \uff33 \uff24 \uff26 \uff27 \uff28 \uff2a \uff2b \uff2c \uff1a \uff02 {enter}`,
      `{shift} \uff3a \uff38 \uff23 \uff36 \uff22 \uff2e \uff2d \uff1c \uff1e \uff1f {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
