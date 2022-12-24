/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Devanagari - INSCRIPT
 */
export default <ILayoutItem>{
  name: `ms-DevanagariInscript`,
  lang: [`hi`, `ne`, `mr`, `kok`, `bodo`, `mai`],
  layout: {
    default: [
      `\u094a 1 2 3 4 5 6 7 8 9 0 - \u0943 {bksp}`,
      `{tab} \u094c \u0948 \u093e \u0940 \u0942 \u092c \u0939 \u0917 \u0926 \u091c \u0921 \u093c \u0949`,
      `\u094b \u0947 \u094d \u093f \u0941 \u092a \u0930 \u0915 \u0924 \u091a \u091f {enter}`,
      `{shift} \u0949 \u0946 \u0902 \u092e \u0928 \u0935 \u0932 \u0938 , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00b0 1 2 3 4 5 6 7 8 9 0 % \u02c7 {bksp}`,
      `{tab} Q W E R T Z U I O P / ( '`,
      `A S D F G H J K L " ! {enter}`,
      `{shift} | Y X C V B N M ? : / {shift}`,
      `{alt} {space} {alt}`,
    ],
    alt: [
      `{empty} \u0967 \u0968 \u0969 \u096a \u096b \u096c \u096d \u096e \u096f \u0966 {empty} \u0944 {bksp}`,
      `{tab} {empty} {empty} {empty} \u0963 {empty} {empty} {empty} \u095a {empty} \u095b \u095c {empty} {empty}`,
      `{empty} {empty} {empty} \u0962 {empty} {empty} {empty} \u0958 {empty} \u0952 {empty} {enter}`,
      `{shift} {empty} \u0953 {empty} \u0954 {empty} {empty} {empty} {empty} \u0970 \u0965 {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
    altShift: [
      `{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0960 {bksp}`,
      `{tab} {empty} {empty} {empty} \u0961 {empty} {empty} {empty} {empty} {empty} {empty} \u095d {empty} {empty}`,
      `{empty} {empty} {empty} \u090c {empty} \u095e {empty} \u0959 {empty} {empty} \u0951 {enter}`,
      `{shift} {empty} {empty} \u0950 {empty} {empty} {empty} {empty} {empty} {empty} \u093d {empty} {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
