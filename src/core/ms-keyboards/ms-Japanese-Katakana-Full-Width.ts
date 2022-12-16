/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Japanese Katakana Full Width
 */
export default <ILayoutItem>{
  name: `ms-Japanese-Katakana-Full-Width`,
  lang: [`ja`],
  layout: {
    default: [
      `\u30ed:Ro \u30cc:Nu \u30d5:Hu \u30a2:A \u30a6:U \u30a8:E \u30aa:O \u30e4:Ya \u30e6:Yu \u30e8:Yo \u30ef:Wa \u30db:Ho \u30d8:He {bksp}`,
      `{tab} \u30bf:Ta \u30c6:Te \u30a4:I \u30b9:Su \u30ab:Ka \u30f3:N \u30ca:Na \u30cb:Ni \u30e9:Ra \u30bb:Se \u309b \u309c \u30e0:Mu`,
      `\u30c1:Ti \u30c8:To \u30b7:Si \u30cf:Ha \u30ad:Ki \u30af:Ku \u30de:Ma \u30ce:No \u30ea:Ri \u30ec:Re \u30b1:Ke {enter}`,
      `{shift} \u30c4:Tu \u30b5:Sa \u30bd:So \u30d2:Hi \u30b3:Ko \u30df:Mi \u30e2:Mo \u30cd:Ne \u30eb:Ru \u30e1:Me {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u30ed:Ro \u30cc:Nu \u30d5:Hu \u30a1:a \u30a5:u \u30a7:e \u30a9:o \u30e3:ya \u30e5:yu \u30e7:yo \u30f2:Wo \u30fc \u30d8:He {bksp}`,
      `{tab} \u30bf:Ta \u30c6:Te \u30a3:i \u30b9:Su \u30ab:Ka \u30f3:N \u30ca:Na \u30cb:Ni \u30e9:Ra \u30bb:Se \u300c \u300d \u30e0:Mu`,
      `\u30c1:Ti \u30c8:To \u30b7:Si \u30cf:Ha \u30ad:Ki \u30af:Ku \u30de:Ma \u30ce:No \u30ea:Ri \u30ec:Re \u30b1:Ke {enter}`,
      `{shift} \u30c3:tu \u30b5:Sa \u30bd:So \u30d2:Hi \u30b3:Ko \u30df:Mi \u30e2:Mo \u3001 \u3002 \u30fb {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
