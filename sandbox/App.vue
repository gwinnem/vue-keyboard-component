<template>
  <div id="app">

    <div
      class="center-vertical">
      <span style="margin-bottom: 20px;">
        Select keyboard layout
        <select
          v-model="layoutName"
          style="margin-left: 20px; margin-bottom: 10px;"
          @change="changeLayout">
        <option value="default">
          Default
        </option>
        <option value="msAlbanian">
          Albanian
        </option>
        <option value="msArabic101">
          Arabic 101
        </option>
        <option value="msArabic102">
          Arabic 102
        </option>
        <option value="msArabic102Azerty">
          Arabic 102 Azerty
        </option>
        <option value="msArmenianEastern">
          Armenian Eastern
        </option>
        <option value="msArmenianWestern">
          Armenian Western
        </option>
        <option value="msAssameseInscript">
          Assamese Inscript
        </option>
        <option value="msAzeriCyrillic">
          Azeri Cyrillic
        </option>
        <option value="msAzeriLatin">
          Azeri Latin
        </option>
        <option value="msBashir">
          Bashir
        </option>
        <option value="msBosnianCyrillic">
          Bosnian Cyrillic
        </option>
        <option value="msBelarusian">
          Belarusian
        </option>
        <option value="msBelgianComma">
          Belgian Comma
        </option>
        <option value="msBelgianFrench">
          Belgian French
        </option>
        <option value="msBengali">
          Bengali
        </option>
        <option value="msBengaliInscript">
          Bengali Inscript
        </option>
        <option value="msBulgarianPhoneticTraditional">
          Bulgarian Phonetic Traditional
        </option>
        <option value="msBulgarianPhonetic">
          Bulgarian Phonetic
        </option>
        <option value="msBulgarianTypewriter">
          Bulgarian Typewriter
        </option>
        <option value="msCanadianFrench">
          Canadian French
        </option>
        <option value="msCanadianFrenchLegacy">
          Canadian French Legacy
        </option>
        <option value="msCanadianMultilingual">
          Canadian Multilingual
        </option>
        <option value="msChineseBopomofo">
          Chinese Bopomofo
        </option>
        <option value="msChineseChaJei">
          Chinese ChaJei
        </option>
        <option value="msCzech">
          Czech
        </option>
        <option value="msCzechQwerty">
          Czech QWERTY
        </option>
        <option value="msCzechProgrammers">
          Czech Programmers
        </option>
        <option value="msDanish">
          Danish
        </option>
        <option value="msDevangariInscript">
          Devanagari INSCRIPT
        </option>
        <option value="msDivehiPhonetic">
          Divehi Phonetic
        </option>
        <option value="msDivehiTypewriter">
          Divehi Typewriter
        </option>
        <option value="msDutch">
          Dutch
        </option>
        <option value="msEstonian">
          Estonian
        </option>
        <option value="msFaeroese">
          Faeroese
        </option>
        <option value="msFinlandSwedenExtended">
          Sami Extended Finland-Sweden
        </option>
        <option value="msFinnish">
          Finnish
        </option>
        <option value="msFrench">
          French
        </option>
        <option value="msGaelic">
          Gaelic
        </option>
        <option value="msGeorgian">
          Georgian
        </option>
        <option value="msGeorgianErgonomic">
          Georgian Ergonomic
        </option>
        <option value="msGeorgianQwerty">
          Georgian QWERTY
        </option>
        <option value="msGerman">
          German
        </option>
        <option value="msGreek">
          Greek
        </option>
        <option value="msGreekLatin">
          Greek Latin
        </option>
        <option value="msGreek220">
          Greek 220
        </option>
        <option value="msGreekLatin220">
          Greek 220 Latin
        </option>
        <option value="msGreek319">
          Greek 319
        </option>
        <option value="msGreekLatin319">
          Greek 319 Latin
        </option>
        <option value="msGreekPolytonic">
          Greek Polytonic
        </option>
        <option value="msGreenlandic">
          Greenlandic
        </option>
        <option value="msGujarati">
          Gujarati
        </option>
        <option value="msHausa">
          Hausa
        </option>
        <option value="msHebrew">
          Hebrew
        </option>
        <option value="msHindi">
          Hindi
        </option>
        <option value="msHungarian">
          Hungarian
        </option>
        <option value="msHungarian101">
          Hungarian 101
        </option>
        <option value="msIcelandic">
          Icelandic
        </option>
        <option value="msIgbo">
          Igbo
        </option>
        <option value="msInuktitutLatin">
          Inuktitut Latin
        </option>
        <option value="msInuktitutNaqittaut">
          Inuktitut Naqittaut
        </option>
        <option value="msIrish">
          Irish
        </option>
        <option value="msItalian">
          Italian
        </option>
        <option value="msJapaneseEnglishFullWidth">
          Japanese English Full Width
        </option>
        <option value="msJapaneseEnglishHalfWidth">
          Japanese English Half Width
        </option>
        <option value="msJapaneseHiragana">
          Japanese Hiragana
        </option>
        <option value="msJapaneseKatakanaFullWidth">
          Japanese Katakana Full Width
        </option>
        <option value="msJapaneseKatakanaHalfWidth">
          Japanese Katakana Half Width
        </option>
        <option value="msKannada">
          Kannada
        </option>
        <option value="msKazakh">
          Kazakh
        </option>
        <option value="msKorean">
          Korean
        </option>
        <option value="msKyrgyzCyrillic">
          Kyrgyz Cyrillic
        </option>
        <option value="msLao">
          Lao
        </option>
        <option value="msLatinAmerican">
          Latin American
        </option>
        <option value="msLatvian">
          Latvian
        </option>
        <option value="msLatvianQwerty">
          Latvian QWERTY
        </option>
        <option value="msLithuanian">
          Lithuanian
        </option>
        <option value="msLithuanianIbm">
          Lithuanian IBM
        </option>
        <option value="msLithuanianStandard">
          Lithuanian Standard
        </option>
        <option value="msLuxembourgish">
          Luxembourgish
        </option>
        <option value="msMacedonianFyrom">
          Macedonian (FYROM)
        </option>
        <option value="msMacedonianFyromStandard">
          Macedonian (FYROM) - Standard
        </option>
        <option value="msMalayalam">
          Malayalam
        </option>
        <option value="msMaltese47Key">
          Maltese 47-Key Keyboard
        </option>
        <option value="msMaltese48Key">
          Maltese 48-Key Keyboard
        </option>
        <option value="msMaori">
          Maori
        </option>
        <option value="msMarathi">
          Marathi
        </option>
        <option value="msMongolianCyrillic">
          Mongolian Cyrillic
        </option>
        <option value="msMongolianScript">
          Mongolian (Mongolian Script)
        </option>
        <option value="msNepali">
          Nepali
        </option>
        <option value="msNorwegian">
          Norwegian
        </option>
        <option value="msNorwegianSami">
          Norwegian with Sami
        </option>
        <option value="msNorwegianSamiExtended">
          Norwegian Extended Sami
        </option>
        <option value="msOriya">
          Oriya
        </option>
        <option value="msPashtoAfghanistan">
          Pashto (Afghanistan)
        </option>
        <option value="msPersian">
          Persian
        </option>
        <option value="msPolish214">
          Polish (214)
        </option>
        <option value="msPolishProgrammers">
          Polish Programmers
        </option>
        <option value="msPortuguese">
          Portuguese
        </option>
        <option value="msPortugueseBrazilian">
          Portuguese (Brazilian ABNT)
        </option>
        <option value="msPunjabi">
          Punjabi
        </option>
        <option value="msRomanianLegacy">
          Romanian (Legacy)
        </option>
        <option value="msRomanianProgrammers">
          Romanian (Programmers)
        </option>
        <option value="msRomanianStandard">
          Romanian (Standard)
        </option>
        <option value="msRussian">
          Russian
        </option>
        <option value="msRussianTypewriter">
          Russian Typewriter
        </option>
        <option value="msSerbianCyrillic">
          Serbian (Cyrillic)
        </option>
        <option value="msSerbianLatin">
          Serbian (Latin)
        </option>
        <option value="msSetswana">
          Setswana
        </option>
        <option value="msSetswanaSaLeboa">
          Setswana (Sesotho sa Leboa)
        </option>
        <option value="msSinhala">
          Sinhala
        </option>
        <option value="msSinhalaWij9">
          Sinhala Wij 9
        </option>
        <option value="msSlovakian">
          Slovakian
        </option>
        <option value="msSlovakianQwerty">
          Slovakian (QWERTY)
        </option>
        <option value="msSlovenian">
          Slovenian
        </option>
        <option value="msSorbianExtended">
          Sorbian Extended
        </option>
        <option value="msSorbianStandard">
          Sorbian Standard
        </option>
        <option value="msSorbianStandardLegacy">
          Sorbian Standard (Legacy)
        </option>
        <option value="msSpanish">
          Spanish
        </option>
        <option value="msSpanishVariation">
          Spanish Variation
        </option>
        <option value="msSwedish">
          Swedish
        </option>
        <option value="msSwissGerman">
          Swiss German
        </option>
        <option value="msSyriac">
          Syriac
        </option>
        <option value="msSyriacPhonetic">
          Syriac Phonetic
        </option>
        <option value="msTajik">
          Tajik
        </option>
        <option value="msTamil">
          Tamil
        </option>
        <option value="msTatar">
          Tatar
        </option>
        <option value="msTelugu">
          Telugu
        </option>
        <option value="msThaiKedmanee">
          Thai Kedmanee
        </option>
        <option value="msThaiPattachote">
          Thai Pattachote
        </option>
        <option value="msTibetanPrc">
          Tibetan (PRC)
        </option>
        <option value="msTurkishF">
          Turkish F
        </option>
        <option value="msTurkishQ">
          Turkish Q
        </option>
        <option value="msTurkmen">
          Turkmen
        </option>
        <option value="msUkranian">
          Ukranian
        </option>
        <option value="msUkranianEnhanced">
          Ukranian (Enhanced)
        </option>
        <option value="msUnitedKingdom">
          United Kingdom
        </option>
        <option value="msUrdu">
          Urdu
        </option>
        <option value="msUsEnglishIBMArabic238L">
          US English (IBM Arabic 238_L)
        </option>
        <option value="msUsDvorak">
          US-Dvorak
        </option>
        <option value="msUsDvorakLeftHand">
          US-Dvorak for left hand
        </option>
        <option value="msUsDvorakRightHand">
          US-Dvorak for right hand
        </option>
        <option value="msUsEnglishLatin">
          US English (Latin)
        </option>
        <option value="msUsInternational">
          US-International
        </option>
        <option value="msUyghur">
          Uyghur
        </option>
        <option value="msUyghurLegacy">
          Uyghur (Legacy)
        </option>
        <option value="msUzbekCyrillic">
          Uzbek Cyrillic
        </option>
        <option value="msVietnamese">
          Vietnamese
        </option>
        <option value="msWolof">
          Wolof
        </option>
        <option value="msYakut">
          Yakut
        </option>
        <option value="msYoruba">
          Yoruba
        </option>
      </select>
      </span>
    </div>
    <!--    <input-->
    <!--      class="input"-->
    <!--      placeholder="Type then hit enter to hide the keyboard"-->
    <!--      style="margin-top: 30px;"-->
    <!--      :value="input"-->
    <!--      @click="isKeyboardOpen = true" />-->
    <Keyboard
      class="center-vertical"
      :debug="true"
      :debug-events="false"
      :keyboard-layout="layout"
      :show-layout-selector="true" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Keyboard from '../src/lib/components/Keyboard.vue';
  import * as keyboardLayout from '../src/core';
  import { IDisplay } from '../src/core/interfaces/display.interfaces';
  import { ILayoutItem } from '../src/core/interfaces/layout.interfaces';

  const input = ref<string>(``);
  const isKeyboardOpen = ref<boolean>(true);
  const layoutName = ref<string>(`default`);
  const layout = ref<ILayoutItem>(keyboardLayout.defaultLayout.default);
  const layoutDisplay = ref<IDisplay>();

  const changeLayout = (): void => {
    switch(layoutName.value) {
      case `msAlbanian`: {
        layout.value = keyboardLayout.msAlbanian.default;
        break;
      }
      case `msArabic101`: {
        layout.value = keyboardLayout.msArabic101.default;
        break;
      }
      case `msArabic102`: {
        layout.value = keyboardLayout.msArabic102.default;
        break;
      }
      case `msArabic102Azerty`: {
        layout.value = keyboardLayout.msArabic102Azerty.default;
        break;
      }
      case `msArmenianEastern`: {
        layout.value = keyboardLayout.msArmenianEastern.default;
        break;
      }
      case `msArmenianWestern`: {
        layout.value = keyboardLayout.msArmenianWestern.default;
        break;
      }
      case `msAssameseInscript`: {
        layout.value = keyboardLayout.msAssameseInscript.default;
        break;
      }
      case `msAzeriCyrillic`: {
        layout.value = keyboardLayout.msAzeriCyrillic.default;
        break;
      }
      case `msAzeriLatin`: {
        layout.value = keyboardLayout.msAzeriLatin.default;
        break;
      }
      case `msBashir`: {
        layout.value = keyboardLayout.msBashir.default;
        break;
      }
      case `msBosnianCyrillic`: {
        layout.value = keyboardLayout.msBosnianCyrillic.default;
        break;
      }
      case `msBelarusian`: {
        layout.value = keyboardLayout.msBelarusian.default;
        break;
      }
      case `msBelgianComma`: {
        layout.value = keyboardLayout.msBelgianComma.default;
        break;
      }
      case `msBelgianFrench`: {
        layout.value = keyboardLayout.msBelgianFrench.default;
        break;
      }
      case `msBengali`: {
        layout.value = keyboardLayout.msBengali.default;
        break;
      }
      case `msBengaliInscript`: {
        layout.value = keyboardLayout.msBengaliInscript.default;
        break;
      }
      case `msBulgarianPhoneticTraditional`: {
        layout.value = keyboardLayout.msBulgarianPhoneticTraditional.default;
        break;
      }
      case `msBulgarianPhonetic`: {
        layout.value = keyboardLayout.msBulgarianPhonetic.default;
        break;
      }
      case `msBulgarianTypewriter`: {
        layout.value = keyboardLayout.msBulgarianTypewriter.default;
        break;
      }
      case `msCanadianFrench`: {
        layout.value = keyboardLayout.msCanadianFrench.default;
        break;
      }
      case `msCanadianFrenchLegacy`: {
        layout.value = keyboardLayout.msCanadianFrenchLegacy.default;
        break;
      }
      case `msCanadianMultilingual`: {
        layout.value = keyboardLayout.msCanadianMultilingual.default;
        break;
      }
      case `msChineseBopomofo`: {
        layout.value = keyboardLayout.msChineseBopomofo.default;
        break;
      }
      case `msChineseChaJei`: {
        layout.value = keyboardLayout.msChineseChaJei.default;
        break;
      }
      case `msCzech`: {
        layout.value = keyboardLayout.msCzech.default;
        break;
      }
      case `msCzechQwerty`: {
        layout.value = keyboardLayout.msCzechQwerty.default;
        break;
      }
      case `msCzechProgrammers`: {
        layout.value = keyboardLayout.msCzechProgrammers.default;
        break;
      }
      case `msDanish`: {
        layout.value = keyboardLayout.msDanish.default;
        break;
      }
      case `msDevangariInscript`: {
        layout.value = keyboardLayout.msDevangariInscript.default;
        break;
      }
      case `msDivehiPhonetic`: {
        layout.value = keyboardLayout.msDivehiPhonetic.default;
        break;
      }
      case `msDivehiTypewriter`: {
        layout.value = keyboardLayout.msDivehiTypewriter.default;
        break;
      }
      case `msDutch`: {
        layout.value = keyboardLayout.msDutch.default;
        break;
      }
      case `msEstonian`: {
        layout.value = keyboardLayout.msEstonian.default;
        break;
      }
      case `msFinlandSwedenSamiExtended`: {
        layout.value = keyboardLayout.msFinlandSwedenSamiExtended.default;
        break;
      }
      case `msFinnish`: {
        layout.value = keyboardLayout.msFinnish.default;
        break;
      }
      case `msFaeroese`: {
        layout.value = keyboardLayout.msFaeroese.default;
        break;
      }
      case `msFrench`: {
        layout.value = keyboardLayout.msFrench.default;
        break;
      }
      case `msGaelic`: {
        layout.value = keyboardLayout.msGaelic.default;
        break;
      }
      case `msGeorgian`: {
        layout.value = keyboardLayout.msGeorgian.default;
        break;
      }
      case `msGeorgianErgonomic`: {
        layout.value = keyboardLayout.msGeorgianErgonomic.default;
        break;
      }
      case `msGeorgianQwerty`: {
        layout.value = keyboardLayout.msGeorgianQwerty.default;
        break;
      }
      case `msGerman`: {
        layout.value = keyboardLayout.msGerman.default;
        break;
      }
      case `msGreek`: {
        layout.value = keyboardLayout.msGreek.default;
        break;
      }
      case `msGreekLatin`: {
        layout.value = keyboardLayout.msGreekLatin.default;
        break;
      }
      case `msGreek220`: {
        layout.value = keyboardLayout.msGreek220.default;
        break;
      }
      case `msGreekLatin220`: {
        layout.value = keyboardLayout.msGreekLatin220.default;
        break;
      }
      case `msGreek319`: {
        layout.value = keyboardLayout.msGreek319.default;
        break;
      }
      case `msGreekLatin319`: {
        layout.value = keyboardLayout.msGreekLatin319.default;
        break;
      }
      case `msGreekPolytonic`: {
        layout.value = keyboardLayout.msGreekPolytonic.default;
        break;
      }
      case `msGreenLandic`: {
        layout.value = keyboardLayout.msGreenlandic.default;
        break;
      }
      case `msGujarati`: {
        layout.value = keyboardLayout.msGujarati.default;
        break;
      }
      case `msHausa`: {
        layout.value = keyboardLayout.msHausa.default;
        break;
      }
      case `msHebrew`: {
        layout.value = keyboardLayout.msHebrew.default;
        break;
      }
      case `msHindi`: {
        layout.value = keyboardLayout.msHindi.default;
        break;
      }
      case `msHungarian`: {
        layout.value = keyboardLayout.msHungarian.default;
        break;
      }
      case `msHungarian101`: {
        layout.value = keyboardLayout.msHungarian101.default;
        break;
      }
      case `msIcelandic`: {
        layout.value = keyboardLayout.msIcelandic.default;
        break;
      }
      case `msIgbo`: {
        layout.value = keyboardLayout.msIgbo.default;
        break;
      }
      case `msInuktitutLatin`: {
        layout.value = keyboardLayout.msInuktitutLatin.default;
        break;
      }
      case `msInuktitutNagittaut`: {
        layout.value = keyboardLayout.msInuktitutNagittaut.default;
        break;
      }
      case `msIrish`: {
        layout.value = keyboardLayout.msIrish.default;
        break;
      }
      case `msItalian`: {
        layout.value = keyboardLayout.msItalian.default;
        break;
      }
      case `msJapaneseEnglishFullWidth`: {
        layout.value = keyboardLayout.msJapaneseEnglishFullWidth.default;
        break;
      }
      case `msJapaneseEnglishHalfWidth`: {
        layout.value = keyboardLayout.msJapaneseEnglishHalfWidth.default;
        break;
      }
      case `msJapaneseHiragana`: {
        layout.value = keyboardLayout.msJapaneseHiragana.default;
        break;
      }
      case `msJapaneseKatakanaFullWidth`: {
        layout.value = keyboardLayout.msJapaneseKatakanaFullWidth.default;
        break;
      }
      case `msJapaneseKatakanaHalfWidth`: {
        layout.value = keyboardLayout.msJapaneseKatakanaHalfWidth.default;
        layoutDisplay.value = keyboardLayout.defaultKeyboard.display;
        break;
      }
      case `msKannada`: {
        layout.value = keyboardLayout.msKannada.default;
        layoutDisplay.value = keyboardLayout.defaultKeyboard.display;
        break;
      }
      case `msKazakh`: {
        layout.value = keyboardLayout.msKazakh.default;
        layoutDisplay.value = keyboardLayout.defaultKeyboard.display;
        break;
      }
      case `msKorean`: {
        layout.value = keyboardLayout.msKorean.default;
        layoutDisplay.value = keyboardLayout.defaultKeyboard.display;
        break;
      }
      case `msKyrgyzCyrillic`: {
        layout.value = keyboardLayout.msKyrgyzCyrillic.default;
        break;
      }
      case `msLao`: {
        layout.value = keyboardLayout.msLao.default;
        break;
      }
      case `msLatinAmerican`: {
        layout.value = keyboardLayout.msLatinAmerican.default;
        break;
      }
      case `msLatvian`: {
        layout.value = keyboardLayout.msLatvian.default;
        break;
      }
      case `msLatvianQwerty`: {
        layout.value = keyboardLayout.msLatvianQwerty.default;
        break;
      }
      case `msLithuanian`: {
        layout.value = keyboardLayout.msLithuanian.default;
        break;
      }
      case `msLithuanianIbm`: {
        layout.value = keyboardLayout.msLithuanianIbm.default;
        break;
      }
      case `msLithuanianStandard`: {
        layout.value = keyboardLayout.msLithuanianStandard.default;
        break;
      }
      case `msLuxembourgish`: {
        layout.value = keyboardLayout.msLuxembourgish.default;
        break;
      }
      case `msMacedonianFyrom`: {
        layout.value = keyboardLayout.msMacedonianFyrom.default;
        break;
      }
      case `msMacedonianFyromStandard`: {
        layout.value = keyboardLayout.msMacedonianFyromStandard.default;
        break;
      }
      case `msMalayalam`: {
        layout.value = keyboardLayout.msMalayalam.default;
        break;
      }
      case `msMaltese47Key`: {
        layout.value = keyboardLayout.msMaltese47Key.default;
        break;
      }
      case `msMaltese48Key`: {
        layout.value = keyboardLayout.msMaltese48Key.default;
        break;
      }
      case `msMaori`: {
        layout.value = keyboardLayout.msMaori.default;
        break;
      }
      case `msMarathi`: {
        layout.value = keyboardLayout.msMarathi.default;
        break;
      }
      case `msMongolianCyrillic`: {
        layout.value = keyboardLayout.msMongolianCyrillic.default;
        break;
      }
      case `msMongolianScript`: {
        layout.value = keyboardLayout.msMongolianScript.default;
        break;
      }
      case `msNepali`: {
        layout.value = keyboardLayout.msNepali.default;
        break;
      }
      case `msNorwegian`: {
        layout.value = keyboardLayout.msNorwegian.default;
        break;
      }
      case `msNorwegianSami`: {
        layout.value = keyboardLayout.msNorwegianSami.default;
        break;
      }
      case `msNorwegianSamiExtended`: {
        layout.value = keyboardLayout.msNorwegianSamiExtended.default;
        break;
      }
      case `msOriya`: {
        layout.value = keyboardLayout.msOriya.default;
        break;
      }
      case `msPashtoAfghanistan`: {
        layout.value =keyboardLayout. msPashtoAfghanistan.default;
        break;
      }
      case `msPersian`: {
        layout.value = keyboardLayout.msPersian.default;
        break;
      }
      case `msPolish214`: {
        layout.value = keyboardLayout.msPolish214.default;
        break;
      }
      case `msPolishProgrammers`: {
        layout.value = keyboardLayout.msPolishProgrammers.default;
        break;
      }
      case `msPortuguese`: {
        layout.value = keyboardLayout.msPortuguese.default;
        break;
      }
      case `msPortugueseBrazilian`: {
        layout.value = keyboardLayout.msPortugueseBrazilian.default;
        break;
      }
      case `msPunjabi`: {
        layout.value = keyboardLayout.msPunjabi.default;
        break;
      }
      case `msRomanianLegacy`: {
        layout.value = keyboardLayout.msRomanianLegacy.default;
        break;
      }
      case `msRomanianProgrammers`: {
        layout.value = keyboardLayout.msRomanianProgrammers.default;
        break;
      }
      case `msRomanianStandard`: {
        layout.value = keyboardLayout.msRomanianStandard.default;
        break;
      }
      case `msRussian`: {
        layout.value = keyboardLayout.msRussian.default;
        break;
      }
      case `msRussianTypewriter`: {
        layout.value = keyboardLayout.msRussianTypewriter.default;
        break;
      }
      case `msSerbianCyrillic`: {
        layout.value = keyboardLayout.msSerbianCyrillic.default;
        break;
      }
      case `msSerbianLatin`: {
        layout.value = keyboardLayout.msSerbianLatin.default;
        break;
      }
      case `msSetswana`: {
        layout.value = keyboardLayout.msSetswana.default;
        break;
      }
      case `msSetswanaSesotoSaLeboa`: {
        layout.value = keyboardLayout.msSetswanaSesotoSaLeboa.default;
        break;
      }
      case `msSinhala`: {
        layout.value = keyboardLayout.msSinhala.default;
        break;
      }
      case `msSinhalaWij9`: {
        layout.value = keyboardLayout.msSinhalaWij9.default;
        break;
      }
      case `msSlovakian`: {
        layout.value = keyboardLayout.msSlovakian.default;
        break;
      }
      case `msSlovakianQwerty`: {
        layout.value =keyboardLayout. msSlovakianQwerty.default;
        break;
      }
      case `msSlovenian`: {
        layout.value = keyboardLayout.msSlovenian.default;
        break;
      }
      case `msSorbianExtended`: {
        layout.value = keyboardLayout.msSorbianExtended.default;
        break;
      }
      case `msSorbianStandard`: {
        layout.value = keyboardLayout.msSorbianStandard.default;
        break;
      }
      case `msSorbianStandardLegacy`: {
        layout.value = keyboardLayout.msSorbianStandardLegacy.default;
        break;
      }
      case `msSpanish`: {
        layout.value = keyboardLayout.msSpanish.default;
        break;
      }
      case `msSpanishVariation`: {
        layout.value = keyboardLayout.msSpanishVariation.default;
        break;
      }
      case `msSwedish`: {
        layout.value = keyboardLayout.msSwedish.default;
        break;
      }
      case `msSwissGerman`: {
        layout.value = keyboardLayout.msSwissGerman.default;
        break;
      }
      case `msSyriac`: {
        layout.value = keyboardLayout.msSyriac.default;
        break;
      }
      case `msSyriacPhonetic`: {
        layout.value = keyboardLayout.msSyriacPhonetic.default;
        break;
      }
      case `msTajik`: {
        layout.value = keyboardLayout.msTajik.default;
        break;
      }
      case `msTamil`: {
        layout.value = keyboardLayout.msTamil.default;
        break;
      }
      case `msTatar`: {
        layout.value = keyboardLayout.msTatar.default;
        break;
      }
      case `msTelugu`: {
        layout.value = keyboardLayout.msTelugu.default;
        break;
      }
      case `msThaiKedmanee`: {
        layout.value = keyboardLayout.msThaiKedmanee.default;
        break;
      }
      case `msThaiPattachote`: {
        layout.value = keyboardLayout.msThaiPattachote.default;
        break;
      }
      case `msTibetanPrc`: {
        layout.value = keyboardLayout.msTibetanPrc.default;
        break;
      }
      case `msTurkishF`: {
        layout.value = keyboardLayout.msTurkishF.default;
        break;
      }
      case `msTurkishQ`: {
        layout.value = keyboardLayout.msTurkishQ.default;
        break;
      }
      case `msTurkmen`: {
        layout.value = keyboardLayout.msTurkmen.default;
        break;
      }
      case `msUkranian`: {
        layout.value = keyboardLayout.msUkranian.default;
        break;
      }
      case `msUkranianEnhanced`: {
        layout.value = keyboardLayout.msUkranianEnhanced.default;
        break;
      }
      case `msUnitedKingdom`: {
        layout.value = keyboardLayout.msUnitedKingdom.default;
        break;
      }
      case `msUrdu`: {
        layout.value = keyboardLayout.msUrdu.default;
        break;
      }
      case `msUsEnglishIBMArabic238L`: {
        layout.value = keyboardLayout.msUsEnglishIBMArabic238L.default;
        break;
      }
      case `msUsDvorak`: {
        layout.value = keyboardLayout.msUsDvorak.default;
        break;
      }
      case `msUsDvorakLeftHand`: {
        layout.value = keyboardLayout.msUsDvorakLeftHand.default;
        break;
      }
      case `msUsDvorakRightHand`: {
        layout.value = keyboardLayout.msUsDvorakRightHand.default;
        break;
      }
      case `msUsEnglishLatin`: {
        layout.value = keyboardLayout.msUsEnglishLatin.default;
        break;
      }
      case `msUsInternational`: {
        layout.value = keyboardLayout.msUsInternational.default;
        break;
      }
      case `msUyghur`: {
        layout.value = keyboardLayout.msUyghur.default;
        break;
      }
      case `msUyghurLegacy`: {
        layout.value = keyboardLayout.msUyghurLegacy.default;
        break;
      }
      case `msUzbekCyrillic`: {
        layout.value = keyboardLayout.msUzbekCyrillic.default;
        break;
      }
      case `msVietnamese`: {
        layout.value = keyboardLayout.msVietnamese.default;
        break;
      }
      case `msWolof`: {
        layout.value = keyboardLayout.msWolof.default;
        break;
      }
      case `msYakut`: {
        layout.value = keyboardLayout.msYakut.default;
        break;
      }
      case `msYoruba`: {
        layout.value = keyboardLayout.msYoruba.default;
        break;
      }
      case `default`: {
        layout.value = keyboardLayout.defaultLayout.default;
        break;
      }
      default: {
        layout.value = keyboardLayout.defaultLayout.default;
      }
    }
  };

  // const onChange = (value: string): void => {
  //   input.value = value;
  // };
  //
  // const onKeyPress = (button: string): void => {
  //   if(button === `{enter}`) {
  //     // isKeyboardOpen.value = false;
  //   }
  // };

</script>

<style lang="scss" scoped>
#app {
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 420px;
  max-width: 850px;
  margin: auto;
  width: 50%;
  height: 50%;
  border: 3px solid red;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.center-vertical {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>
