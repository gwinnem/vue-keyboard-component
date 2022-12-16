/* eslint-disable sort-keys */
import { ILayoutItem } from '@/core/interfaces/layout.interfaces';

/**
 * Layout: Thai Pattachote
 */
export default <ILayoutItem>{
  name: `ms-Thai-Pattachote`,
  lang: [`th`],
  layout: {
    default: [
      `_ = \u0E52 \u0E53 \u0E54 \u0E55 \u0E39 \u0E57 \u0E58 \u0E59 \u0E50 \u0E51 \u0E56 {bksp}`,
      `{tab} \u0E47 \u0E15 \u0E22 \u0E2D \u0E23 \u0E48 \u0E14 \u0E21 \u0E27 \u0E41 \u0E43 \u0E0C \uF8C7`,
      `\u0E49 \u0E17 \u0E07 \u0E01 \u0E31 \u0E35 \u0E32 \u0E19 \u0E40 \u0E44 \u0E02 {enter}`,
      `{shift} \u0E1A \u0E1B \u0E25 \u0E2B \u0E34 \u0E04 \u0E2A \u0E30 \u0E08 \u0E1E {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u0E3F + \u0022 / , ? \u0E38 _ . ( ) - % {bksp}`,
      `{tab} \u0E4A \u0E24 \u0E46 \u0E0D \u0E29 \u0E36 \u0E1D \u0E0B \u0E16 \u0E12 \u0E2F \u0E26 \u0E4D`,
      `\u0E4B \u0E18 \u0E33 \u0E13 \u0E4C \u0E37 \u0E1C \u0E0A \u0E42 \u0E06 \u0E11 {enter}`,
      `{shift} \u0E0E \u0E0F \u0E10 \u0E20 \u0E31 \u0E28 \u0E2E \u0E1F \u0E09 \u0E2C {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
