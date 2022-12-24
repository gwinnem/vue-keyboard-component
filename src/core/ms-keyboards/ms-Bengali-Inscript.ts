/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Bengali Inscript
 */
export default <ILayoutItem>{
  name: `ms-BengaliInscript`,
  lang: [`bn`],
  layout: {
    default: [
      `\u09e7 \u09e8 \u09e9 \u09ea \u09eb \u09ec \u09ed \u09ee \u09ef \u09e6 - \u09c3 {bksp}`,
      `{tab} \u09cc \u09c8 \u09be \u09c0 \u09c2 \u09ac \u09b9 \u0997 \u09a6 \u099c \u09a1 \u09bc`,
      `\u09cb \u09c7 \u09cd \u09bf \u09c1 \u09aa \u09b0 \u0995 \u09a4 \u099a \u099f {enter}`,
      `{shift} \u0982 \u09ae \u09a8 \u09ac \u09b2 \u09b8 , . \u09df {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `! @ {empty} \u09b0\u09cd \u099c\u09cd\u099e \u09a4\u09cd\u09b0 \u0995\u09cd\u09b7 \u09b6\u09cd\u09b0 ( ) \u0983 \u098b {bksp}`,
      `{tab} \u0994 \u0990 \u0986 \u0988 \u098a \u09ad \u0999 \u0998 \u09a7 \u099d \u09a2 \u099e`,
      `\u0993 \u098f \u0985 \u0987 \u0989 \u09ab {empty} \u0996 \u09a5 \u099b \u09a0 {enter}`,
      `{shift} \u0981 \u09a3 {empty} {empty} {empty} \u09b6 \u09b7 {empty} \u09af {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
