import {ILayoutItem} from '../interfaces/layout.interfaces';
import * as keyboardLayout from '../';

export class LayoutHelper {


  public static changeLayout(layoutName: string): ILayoutItem {
    switch (layoutName) {
      case `msAlbanian`: {
        return keyboardLayout.msAlbanian.default;
      }
      case `msArabic101`: {
        return keyboardLayout.msArabic101.default;
      }
      case `msArabic102`: {
        return keyboardLayout.msArabic102.default;
      }
      case `msArabic102Azerty`: {
        return keyboardLayout.msArabic102Azerty.default;
      }
      case `msArmenianEastern`: {
        return keyboardLayout.msArmenianEastern.default;
      }
      case `msArmenianWestern`: {
        return keyboardLayout.msArmenianWestern.default;
      }
      case `msAssameseInscript`: {
        return keyboardLayout.msAssameseInscript.default;
      }
      case `msAzeriCyrillic`: {
        return keyboardLayout.msAzeriCyrillic.default;
      }
      case `msAzeriLatin`: {
        return keyboardLayout.msAzeriLatin.default;
      }
      case `msBashir`: {
        return keyboardLayout.msBashir.default;
      }
      case `msBosnianCyrillic`: {
        return keyboardLayout.msBosnianCyrillic.default;
      }
      case `msBelarusian`: {
        return keyboardLayout.msBelarusian.default;
      }
      case `msBelgianComma`: {
        return keyboardLayout.msBelgianComma.default;
      }
      case `msBelgianFrench`: {
        return keyboardLayout.msBelgianFrench.default;
      }
      case `msBengali`: {
        return keyboardLayout.msBengali.default;
      }
      case `msBengaliInscript`: {
        return keyboardLayout.msBengaliInscript.default;
      }
      case `msBulgarianPhoneticTraditional`: {
        return keyboardLayout.msBulgarianPhoneticTraditional.default;
      }
      case `msBulgarianPhonetic`: {
        return keyboardLayout.msBulgarianPhonetic.default;
      }
      case `msBulgarianTypewriter`: {
        return keyboardLayout.msBulgarianTypewriter.default;
      }
      case `msCanadianFrench`: {
        return keyboardLayout.msCanadianFrench.default;
      }
      case `msCanadianFrenchLegacy`: {
        return keyboardLayout.msCanadianFrenchLegacy.default;
      }
      case `msCanadianMultilingual`: {
        return keyboardLayout.msCanadianMultilingual.default;
      }
      case `msChineseBopomofo`: {
        return keyboardLayout.msChineseBopomofo.default;
      }
      case `msChineseChaJei`: {
        return keyboardLayout.msChineseChaJei.default;
      }
      case `msCzech`: {
        return keyboardLayout.msCzech.default;
      }
      case `msCzechQwerty`: {
        return keyboardLayout.msCzechQwerty.default;
      }
      case `msCzechProgrammers`: {
        return keyboardLayout.msCzechProgrammers.default;
      }
      case `msDanish`: {
        return keyboardLayout.msDanish.default;
      }
      case `msDevangariInscript`: {
        return keyboardLayout.msDevangariInscript.default;
      }
      case `msDivehiPhonetic`: {
        return keyboardLayout.msDivehiPhonetic.default;
      }
      case `msDivehiTypewriter`: {
        return keyboardLayout.msDivehiTypewriter.default;
      }
      case `msDutch`: {
        return keyboardLayout.msDutch.default;
      }
      case `msEstonian`: {
        return keyboardLayout.msEstonian.default;
      }
      case `msFinlandSwedenSamiExtended`: {
        return keyboardLayout.msFinlandSwedenSamiExtended.default;
      }
      case `msFinnish`: {
        return keyboardLayout.msFinnish.default;
      }
      case `msFaeroese`: {
        return keyboardLayout.msFaeroese.default;
      }
      case `msFrench`: {
        return keyboardLayout.msFrench.default;
      }
      case `msGaelic`: {
        return keyboardLayout.msGaelic.default;
      }
      case `msGeorgian`: {
        return keyboardLayout.msGeorgian.default;
      }
      case `msGeorgianErgonomic`: {
        return keyboardLayout.msGeorgianErgonomic.default;
      }
      case `msGeorgianQwerty`: {
        return keyboardLayout.msGeorgianQwerty.default;
      }
      case `msGerman`: {
        return keyboardLayout.msGerman.default;
      }
      case `msGreek`: {
        return keyboardLayout.msGreek.default;
      }
      case `msGreekLatin`: {
        return keyboardLayout.msGreekLatin.default;
      }
      case `msGreek220`: {
        return keyboardLayout.msGreek220.default;
      }
      case `msGreekLatin220`: {
        return keyboardLayout.msGreekLatin220.default;
      }
      case `msGreek319`: {
        return keyboardLayout.msGreek319.default;
      }
      case `msGreekLatin319`: {
        return keyboardLayout.msGreekLatin319.default;
      }
      case `msGreekPolytonic`: {
        return keyboardLayout.msGreekPolytonic.default;
      }
      case `msGreenLandic`: {
        return keyboardLayout.msGreenlandic.default;
      }
      case `msGujarati`: {
        return keyboardLayout.msGujarati.default;
      }
      case `msHausa`: {
        return keyboardLayout.msHausa.default;
      }
      case `msHebrew`: {
        return keyboardLayout.msHebrew.default;
      }
      case `msHindi`: {
        return keyboardLayout.msHindi.default;
      }
      case `msHungarian`: {
        return keyboardLayout.msHungarian.default;
      }
      case `msHungarian101`: {
        return keyboardLayout.msHungarian101.default;
      }
      case `msIcelandic`: {
        return keyboardLayout.msIcelandic.default;
      }
      case `msIgbo`: {
        return keyboardLayout.msIgbo.default;
      }
      case `msInuktitutLatin`: {
        return keyboardLayout.msInuktitutLatin.default;
      }
      case `msInuktitutNagittaut`: {
        return keyboardLayout.msInuktitutNagittaut.default;
      }
      case `msIrish`: {
        return keyboardLayout.msIrish.default;
      }
      case `msItalian`: {
        return keyboardLayout.msItalian.default;
      }
      case `msJapaneseEnglishFullWidth`: {
        return keyboardLayout.msJapaneseEnglishFullWidth.default;
      }
      case `msJapaneseEnglishHalfWidth`: {
        return keyboardLayout.msJapaneseEnglishHalfWidth.default;
      }
      case `msJapaneseHiragana`: {
        return keyboardLayout.msJapaneseHiragana.default;
      }
      case `msJapaneseKatakanaFullWidth`: {
        return keyboardLayout.msJapaneseKatakanaFullWidth.default;
      }
      case `msJapaneseKatakanaHalfWidth`: {
        return keyboardLayout.msJapaneseKatakanaHalfWidth.default;
      }
      case `msKannada`: {
        return keyboardLayout.msKannada.default;
      }
      case `msKazakh`: {
        return keyboardLayout.msKazakh.default;
      }
      case `msKorean`: {
        return keyboardLayout.msKorean.default;
      }
      case `msKyrgyzCyrillic`: {
        return keyboardLayout.msKyrgyzCyrillic.default;
      }
      case `msLao`: {
        return keyboardLayout.msLao.default;
      }
      case `msLatinAmerican`: {
        return keyboardLayout.msLatinAmerican.default;
      }
      case `msLatvian`: {
        return keyboardLayout.msLatvian.default;
      }
      case `msLatvianQwerty`: {
        return keyboardLayout.msLatvianQwerty.default;
      }
      case `msLithuanian`: {
        return keyboardLayout.msLithuanian.default;
      }
      case `msLithuanianIbm`: {
        return keyboardLayout.msLithuanianIbm.default;
      }
      case `msLithuanianStandard`: {
        return keyboardLayout.msLithuanianStandard.default;
      }
      case `msLuxembourgish`: {
        return keyboardLayout.msLuxembourgish.default;
      }
      case `msMacedonianFyrom`: {
        return keyboardLayout.msMacedonianFyrom.default;
      }
      case `msMacedonianFyromStandard`: {
        return keyboardLayout.msMacedonianFyromStandard.default;
      }
      case `msMalayalam`: {
        return keyboardLayout.msMalayalam.default;
      }
      case `msMaltese47Key`: {
        return keyboardLayout.msMaltese47Key.default;
      }
      case `msMaltese48Key`: {
        return keyboardLayout.msMaltese48Key.default;
      }
      case `msMaori`: {
        return keyboardLayout.msMaori.default;
      }
      case `msMarathi`: {
        return keyboardLayout.msMarathi.default;
      }
      case `msMongolianCyrillic`: {
        return keyboardLayout.msMongolianCyrillic.default;
      }
      case `msMongolianScript`: {
        return keyboardLayout.msMongolianScript.default;
      }
      case `msNepali`: {
        return keyboardLayout.msNepali.default;
      }
      case `msNorwegian`: {
        return keyboardLayout.msNorwegian.default;
      }
      case `msNorwegianSami`: {
        return keyboardLayout.msNorwegianSami.default;
      }
      case `msNorwegianSamiExtended`: {
        return keyboardLayout.msNorwegianSamiExtended.default;
      }
      case `msOriya`: {
        return keyboardLayout.msOriya.default;
      }
      case `msPashtoAfghanistan`: {
        return keyboardLayout.msPashtoAfghanistan.default;
      }
      case `msPersian`: {
        return keyboardLayout.msPersian.default;
      }
      case `msPolish214`: {
        return keyboardLayout.msPolish214.default;
      }
      case `msPolishProgrammers`: {
        return keyboardLayout.msPolishProgrammers.default;
      }
      case `msPortuguese`: {
        return keyboardLayout.msPortuguese.default;
      }
      case `msPortugueseBrazilian`: {
        return keyboardLayout.msPortugueseBrazilian.default;
      }
      case `msPunjabi`: {
        return keyboardLayout.msPunjabi.default;
      }
      case `msRomanianLegacy`: {
        return keyboardLayout.msRomanianLegacy.default;
      }
      case `msRomanianProgrammers`: {
        return keyboardLayout.msRomanianProgrammers.default;
      }
      case `msRomanianStandard`: {
        return keyboardLayout.msRomanianStandard.default;
      }
      case `msRussian`: {
        return keyboardLayout.msRussian.default;
      }
      case `msRussianTypewriter`: {
        return keyboardLayout.msRussianTypewriter.default;
      }
      case `msSerbianCyrillic`: {
        return keyboardLayout.msSerbianCyrillic.default;
      }
      case `msSerbianLatin`: {
        return keyboardLayout.msSerbianLatin.default;
      }
      case `msSetswana`: {
        return keyboardLayout.msSetswana.default;
      }
      case `msSetswanaSesotoSaLeboa`: {
        return keyboardLayout.msSetswanaSesotoSaLeboa.default;
      }
      case `msSinhala`: {
        return keyboardLayout.msSinhala.default;
      }
      case `msSinhalaWij9`: {
        return keyboardLayout.msSinhalaWij9.default;
      }
      case `msSlovakian`: {
        return keyboardLayout.msSlovakian.default;
      }
      case `msSlovakianQwerty`: {
        return keyboardLayout.msSlovakianQwerty.default;
      }
      case `msSlovenian`: {
        return keyboardLayout.msSlovenian.default;
      }
      case `msSorbianExtended`: {
        return keyboardLayout.msSorbianExtended.default;
      }
      case `msSorbianStandard`: {
        return keyboardLayout.msSorbianStandard.default;
      }
      case `msSorbianStandardLegacy`: {
        return keyboardLayout.msSorbianStandardLegacy.default;
      }
      case `msSpanish`: {
        return keyboardLayout.msSpanish.default;
      }
      case `msSpanishVariation`: {
        return keyboardLayout.msSpanishVariation.default;
      }
      case `msSwedish`: {
        return keyboardLayout.msSwedish.default;
      }
      case `msSwissGerman`: {
        return keyboardLayout.msSwissGerman.default;
      }
      case `msSyriac`: {
        return keyboardLayout.msSyriac.default;
      }
      case `msSyriacPhonetic`: {
        return keyboardLayout.msSyriacPhonetic.default;
      }
      case `msTajik`: {
        return keyboardLayout.msTajik.default;
      }
      case `msTamil`: {
        return keyboardLayout.msTamil.default;
      }
      case `msTatar`: {
        return keyboardLayout.msTatar.default;
      }
      case `msTelugu`: {
        return keyboardLayout.msTelugu.default;
      }
      case `msThaiKedmanee`: {
        return keyboardLayout.msThaiKedmanee.default;
      }
      case `msThaiPattachote`: {
        return keyboardLayout.msThaiPattachote.default;
      }
      case `msTibetanPrc`: {
        return keyboardLayout.msTibetanPrc.default;
      }
      case `msTurkishF`: {
        return keyboardLayout.msTurkishF.default;
      }
      case `msTurkishQ`: {
        return keyboardLayout.msTurkishQ.default;
      }
      case `msTurkmen`: {
        return keyboardLayout.msTurkmen.default;
      }
      case `msUkranian`: {
        return keyboardLayout.msUkranian.default;
      }
      case `msUkranianEnhanced`: {
        return keyboardLayout.msUkranianEnhanced.default;
      }
      case `msUnitedKingdom`: {
        return keyboardLayout.msUnitedKingdom.default;
      }
      case `msUrdu`: {
        return keyboardLayout.msUrdu.default;
      }
      case `msUsEnglishIBMArabic238L`: {
        return keyboardLayout.msUsEnglishIBMArabic238L.default;
      }
      case `msUsDvorak`: {
        return keyboardLayout.msUsDvorak.default;
      }
      case `msUsDvorakLeftHand`: {
        return keyboardLayout.msUsDvorakLeftHand.default;
      }
      case `msUsDvorakRightHand`: {
        return keyboardLayout.msUsDvorakRightHand.default;
      }
      case `msUsEnglishLatin`: {
        return keyboardLayout.msUsEnglishLatin.default;
      }
      case `msUsInternational`: {
        return keyboardLayout.msUsInternational.default;
      }
      case `msUyghur`: {
        return keyboardLayout.msUyghur.default;
      }
      case `msUyghurLegacy`: {
        return keyboardLayout.msUyghurLegacy.default;
      }
      case `msUzbekCyrillic`: {
        return keyboardLayout.msUzbekCyrillic.default;
      }
      case `msVietnamese`: {
        return keyboardLayout.msVietnamese.default;
      }
      case `msWolof`: {
        return keyboardLayout.msWolof.default;
      }
      case `msYakut`: {
        return keyboardLayout.msYakut.default;
      }
      case `msYoruba`: {
        return keyboardLayout.msYoruba.default;
      }
      case `default`: {
        return keyboardLayout.defaultLayout.default;
      }
      default: {
        return keyboardLayout.defaultLayout.default;
      }
    }
  }
}
