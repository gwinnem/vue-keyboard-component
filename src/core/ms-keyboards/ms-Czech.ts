/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Czech
 */
export default <ILayoutItem>{
  name: `ms-Czech`,
  lang: [`cs`],
  layout: {
    default: [
      `; + \u011b \u0161 \u010d \u0159 \u017e \u00fd \u00e1 \u00ed \u00e9 = \u00b4 {bksp}`,
      `{tab} q w e r t z u i o p \u00fa ) {empty}`,
      `a s d f g h j k l \u016f \u00a7 {enter}`,
      `{shift} \\ y x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u0912 \u090d \u0945 \u094d\u0930 \u0930\u094d \u091c\u094d\u091e \u0924\u094d\u0930 \u0915\u094d\u0937 \u0936\u094d\u0930 ( ) \u0903 \u090b {bksp}`,
      `{tab} \u0914 \u0910 \u0906 \u0908 \u090a \u092d \u0919 \u0918 \u0927 \u091d \u0922 \u091e \u0911`,
      `\u0913 \u090f \u0905 \u0907 \u0909 \u092b \u0931 \u0916 \u0925 \u091b \u0920 {enter}`,
      `{shift} \u0911 \u090e \u0901 \u0923 \u0929 \u0934 \u0933 \u0936 \u0937 \u0964 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} ~ \u02c7 ^ \u02d8 \u00b0 \u02db \` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}`,
      `{tab} \\ | \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00f7 \u00d7 \u00a4`,
      `{empty} \u0111 \u0110 [ ] {empty} {empty} \u0142 \u0141 $ \u00df {enter}`,
      `{shift} {empty} {empty} # & @ { } {empty} < > {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
