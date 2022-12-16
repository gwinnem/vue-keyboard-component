/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Japanese Hiragana
 */
export default <ILayoutItem>{
  name: `ms-Japanese-Hiragana`,
  lang: [`ja`],
  layout: {
    default: [
      `\u308d:Ro \u306c:Nu \u3075:Hu \u3042:A \u3046:U \u3048:E \u304a:O \u3084:Ya \u3086:Yu \u3088:Yo \u308f:Wa \u307b:Ho \u3078:He {bksp}`,
      `{tab} \u305f:Ta \u3066:Te \u3044:I \u3059:Su \u304b:Ka \u3093:N \u306a:Na \u306b:Ni \u3089:Ra \u305b:Se \u309b \u309c \u3080:Mu`,
      `\u3061:Ti \u3068:To \u3057:Si \u306f:Ha \u304D:Ki \u304f:Ku \u307e:Ma \u306e:No \u308a:Ri \u308c:Re \u3051:Ke {enter}`,
      `{shift} \u3064:Tu \u3055:Sa \u305d:So \u3072:Hi \u3053:Ko \u307f:Mi \u3082:Mo \u306d:Ne \u308b:Ru \u3081:Me {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u308d:Ro \u306c:Nu \u3075:Hu \u3041:a \u3045:u \u3047:e \u3049:o \u3083:ya \u3085:yu \u3087:yo \u3092:Wo \u30fc \u3078:He {bksp}`,
      `{tab} \u305f:Ta \u3066:Te \u3043:i \u3059:Su \u304b:Ka \u3093:N \u306a:Na \u306b:Ni \u3089:Ra \u305b:Se \u300c \u300d \u3080:Mu`,
      `\u3061:Ti \u3068:To \u3057:Si \u306f:Ha \u304D:Ki \u304f:Ku \u307e:Ma \u306e:No \u308a:Ri \u308c:Re \u3051:Ke {enter}`,
      `{shift} \u3063:tu \u3055:Sa \u305d:So \u3072:Hi \u3053:Ko \u307f:Mi \u3082:Mo \u3001 \u3002 \u30fb {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
