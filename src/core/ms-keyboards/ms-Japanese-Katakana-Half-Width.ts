/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Japanese Katakana Half Width
 */
export default <ILayoutItem>{
  name: `ms-Japanese-Katakana-Half-Width`,
  lang: [`ja`],
  layout: {
    default: [
      `\uff9b:Ro \uff87:Nu \uff8c:Hu \uff71:A \uff73:U \uff74:E \uff75:O \uff94:Ya \uff95:Yu \uff96:Yo \uff9c:Wa \uff8e:Ho \uff8d:He {bksp}`,
      `{tab} \uff80:Ta \uff83:Te \uff72:I \uff7d:Su \uff76:Ka \uff9d:N \uff85:Na \uff86:Ni \uff97:Ra \uff7e:Se \uff9e \uff9f \uff91:Mu`,
      `\uff81:Ti \uff84:To \uff7c:Si \uff8a:Ha \uff77:Ki \uff78:Ku \uff8f:Ma \uff89:No \uff98:Ri \uff9a:Re \uff79:Ke {enter}`,
      `{shift} \uff82:Tu \uff7b:Sa \uff7f:So \uff8b:Hi \uff7a:Ko \uff90:Mi \uff93:Mo \uff88:Ne \uff99:Ru \uff92:Me {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\uff9b:Ro \uff87:Nu \uff8c:Hu \uff67:a \uff69:u \uff6a:e \uff6b:o \uff6c:ya \uff6d:yu \uff6e:yo \uff66:Wo \uff70 \uff8d:He {bksp}`,
      `{tab} \uff80:Ta \uff83:Te \uff68:i \uff7d:Su \uff76:Ka \uff9d:N \uff85:Na \uff86:Ni \uff97:Ra \uff7e:Se \u300c \u300d \uff91:Mu`,
      `\uff81:Ti \uff84:To \uff7c:Si \uff8a:Ha \uff77:Ki \uff78:Ku \uff8f:Ma \uff89:No \uff98:Ri \uff9a:Re \uff79:Ke {enter}`,
      `{shift} \uff6f:tu \uff7b:Sa \uff7f:So \uff8b:Hi \uff7a:Ko \uff90:Mi \uff93:Mo \u3001 \u3002 \u30fb {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
