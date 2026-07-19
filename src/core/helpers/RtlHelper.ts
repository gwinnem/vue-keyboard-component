// ISO 639-1/639-2 codes for languages written right-to-left, covering the RTL
// layouts included in this package (Arabic variants, Hebrew, Persian, Urdu,
// Divehi, Uyghur, Pashto, Sindhi, Kurdish Sorani, Yiddish).
const RTL_LANGUAGE_CODES = new Set<string>([
  `ar`,
  `ckb`,
  `dv`,
  `fa`,
  `he`,
  `ps`,
  `sd`,
  `ug`,
  `ur`,
  `yi`,
]);

/**
 * Whether a layout's declared language(s) should be rendered right-to-left.
 * @param lang The layout's `lang` field (ISO language codes), if any.
 */
export const isRtlLanguage = (lang?: string[]): boolean => {
  if(!lang) {
    return false;
  }
  return lang.some(code => RTL_LANGUAGE_CODES.has(code.toLowerCase()));
};
