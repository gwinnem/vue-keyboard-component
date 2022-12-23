<template>
  <div :class="mainCss">
    <div class="keyboard-rows">
      <div
        v-if="showThemeSwitcher
         || showLayoutSelector"
        class="keyboard-row--first-row">
        <div class="select-theme-switcher">
          <div
            v-if="showLayoutSelector"
            class="selectText">
            Select Keyboard language:
          </div>
          <div>
            <select
              v-if="showLayoutSelector"
              v-model="layoutName"
              @change="changeLayout">
              <option value="default">
                Default
              </option>
              <option
                v-for="item in selectValues"
                :key="item.name"
                :value="item.name">
                {{ item.title }}
              </option>
            </select>
            <ThemeSwitcher
              v-if="showThemeSwitcher"
              class="theme-switcher"
              @on-theme-switched="switchTheme"/>
          </div>
        </div>
      </div>
      <div class="keyboard-row">
        <input
          ref="keyboardInput"
          v-model="inputValue"
          class="keyboard-input"
          placeholder="Start typing now !"
          @focus="onInputFocus"
          @keydown="onInputKeyDown"/>
      </div>
      <div
        v-for="(row, rowIndex) in keyboardPreview"
        :key="rowIndex"
        class="keyboard-row"
        :data-layout-type="layoutType">
        <KeyboardButton
          v-for="(button, buttonIndex) in getRowOfButtons(row)"
          :key="buttonIndex"
          :alt-shift-value="button"
          :alt-value="button"
          :button-value="button"
          :debug-events="false"
          :default-value="button"
          :display="keyboardDisplay"
          :is-alt-clicked="isAltClicked"
          :is-caps-clicked="isCapsClicked"
          :is-ctrl-clicked="isCtrlClicked"
          :is-shift-clicked="isShiftClicked"
          :shift-value="button"
          @onAltClicked="onAltClicked"
          @onBackspaceClicked="onBackspaceClicked"
          @onButtonClick="onClick"
          @onCapsClicked="onCapsClicked"
          @onCtrlClicked="onCtrlClicked"
          @onShiftClicked="onShiftClicked"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {nextTick, ref, watch} from 'vue';
import KeyboardButton from './KeyboardButton.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import {ILayoutItem} from '../../core/interfaces/layout.interfaces';
import * as defaultLayout from '../../core/layouts/default';
import * as defaultDisplay from '../../core/keyboard-layouts/default-keyboard';
import * as selectValuesFromFile from '../../core/ms-keyboards/ms-layouts.select';
import {ESpecialButton} from '../../core/enums/KeyboardSpecialButton.enum';
import {EKeyboardLayoutType} from '../../core/enums/keyboardLayoutTypes.enum';
import {IDisplay} from '../../core/interfaces/display.interfaces';
import {ISelect} from '../../core/interfaces/select.interfaces';
import * as keyboardLayout from '../../core';

interface IKeyboardProps {
  debug?: boolean;
  debugEvents?: boolean;
  disableTab?: boolean;
  excludeFromLayout?: string[];
  includeInLayout?: string[];
  keyboardLayout?: ILayoutItem;
  keyboardTranslation?: IDisplay;
  showLayoutSelector?: boolean;
  showThemeSwitcher?: boolean;
  usePhysicalKeyboard?: boolean;
}

const props = withDefaults(defineProps<IKeyboardProps>(), {
  debug: true,
  debugEvents: false,
  disableTab: true,
  excludeFromLayout: undefined,
  includeInLayout: undefined,
  keyboardLayout: undefined,
  keyboardTranslation: undefined,
  showLayoutSelector: false,
  showThemeSwitcher: true,
  usePhysicalKeyboard: false,
});

const inputValue = ref(``);

const sendDebugMessage = (msg: string, obj?: object | string): void => {
  if (props.debug) {
    // eslint-disable-next-line no-console
    console.debug(msg, obj);
  }
};

const orgCss = `keyboard`;
const mainCss = ref<string>(`keyboard`);

const switchTheme = (value: string): void => {
  if (!props.showThemeSwitcher) {
    return;
  }
  sendDebugMessage(`switchTheme`, value);
  if (value === `dark`) {
    mainCss.value = `${orgCss} dark`;
  } else {
    mainCss.value = `${orgCss} light`;
  }
};

const onInputKeyDown = (evt: KeyboardEvent): void => {
  evt.preventDefault();
  if (!props.usePhysicalKeyboard) {
    return;
  }
  switch (evt.code) {
    case `Caps`:
    case `Delete`:
    case `Shift`:
    case `ShiftLeft`:
    case `ShiftRight`:
    case `Alt`:
    case `AltLeft`:
    case `AltRight`:
    case `Control`:
    case `ControlLeft`:
    case `ControlRight`:
    case `Context`:
    case `MetaLeft`:
    case `MetaRight`: {
      break;
    }
    default: {
      inputValue.value += evt.key;
    }
  }
  sendDebugMessage(`Keyboard - onInputKeyDown`, evt);
};

const onInputFocus = (evt: FocusEvent): void => {
  evt.preventDefault();
  sendDebugMessage(`Keyboard - onInputFocus`, evt);
  // TODO maybe remove this before publishing since it is not used.
};

const layout = ref<ILayoutItem>(defaultLayout.default);
if (props.keyboardLayout) {
  layout.value = props.keyboardLayout;
} else {
  throw new Error(`keyboard layout not defined`);
}

const layoutName = ref(`default`);
const selectValues: ISelect[] = selectValuesFromFile.default;

const keyboardDisplay = ref<IDisplay | undefined>(defaultDisplay.display);
if (layout.value.display) {
  keyboardDisplay.value = layout.value.display;
}

const getKeyboardLayout = (value: string): string[] => {
  sendDebugMessage(`Keyboard - getKeyboardDisplay`, value);

  if (layout.value.display) {
    keyboardDisplay.value = layout.value.display;
  } else {
    keyboardDisplay.value = defaultDisplay.display;
  }
  switch (value) {
    case EKeyboardLayoutType.DEFAULT: {
      return layout.value.layout.default;
    }
    case EKeyboardLayoutType.SHIFT: {
      if (layout.value.layout.shift) {
        return layout.value.layout.shift;
      }
      return layout.value.layout.default;
    }
    case EKeyboardLayoutType.ALT: {
      if (layout.value.layout.alt) {
        return layout.value.layout.alt;
      }
      return layout.value.layout.default;
    }
    case EKeyboardLayoutType.ALT_SHIFT: {
      if (layout.value.layout.altShift) {
        return layout.value.layout.altShift;
      }
      return layout.value.layout.default;
    }
    default: {
      return layout.value.layout.default;
    }
  }
};

const keyboardPreview = ref<string[]>();
const layoutType = ref(EKeyboardLayoutType.DEFAULT);

keyboardPreview.value = getKeyboardLayout(layoutType.value);

const changeLayout = (): void => {
  switch (layoutName.value) {
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
      break;
    }
    case `msKannada`: {
      layout.value = keyboardLayout.msKannada.default;
      break;
    }
    case `msKazakh`: {
      layout.value = keyboardLayout.msKazakh.default;
      break;
    }
    case `msKorean`: {
      layout.value = keyboardLayout.msKorean.default;
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
      layout.value = keyboardLayout.msPashtoAfghanistan.default;
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
      layout.value = keyboardLayout.msSlovakianQwerty.default;
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
  if (layout.value.display) {
    keyboardDisplay.value = layout.value.display;
  }
  keyboardPreview.value = getKeyboardLayout(EKeyboardLayoutType.DEFAULT);
};

sendDebugMessage(`Keyboard - keyboardPreview`, keyboardPreview.value);

watch(() => props.keyboardLayout, newValue => {
  if (newValue) {
    layout.value = newValue;
  }
  keyboardPreview.value = getKeyboardLayout(EKeyboardLayoutType.DEFAULT);
});

const isAltClicked = ref(false);
const isCapsClicked = ref(false);
const isCtrlClicked = ref(false);
const isShiftClicked = ref(false);

/**
 * Converts the row string to a string[]
 * @param value {string} Space separated list of button types.
 * @return string[] An array of buttons.
 */
const getRowOfButtons = (value: string): string[] => {
  sendDebugMessage(`Keyboard - getRowOfButtons`, value);
  return value.split(` `);
};

const keyboardInput = ref<HTMLInputElement | null>(null);

/**
 * Event handlers for KeyboardButton events
 */
const onAltClicked = (): void => {
  if (isCapsClicked.value) {
    return;
  }
  isAltClicked.value = !isAltClicked.value;
};

const onBackspaceClicked = (): void => {
  const el = keyboardInput.value;

  if (el?.selectionStart === 0 && inputValue.value.length === 0) {
    return;
  }

  if (el?.selectionStart === inputValue.value.length) {
    inputValue.value = inputValue.value.substring(0, inputValue.value.length - 1);
    return;
  }

  const start = el?.selectionStart;
  const end = el?.selectionEnd;
  let startString = ``;
  let endString = ``;
  if (start && start > 0) {
    startString = inputValue.value.substring(0, start - 1);
  }
  if (end && end > 0) {
    endString = inputValue.value.substring(end, inputValue.value.length);
  }
  inputValue.value = `${startString}${endString}`;
  nextTick(() => {
    if (start) {
      el?.focus();
      el?.setSelectionRange(start - 1, start - 1);
    }
  });
};

const onCapsClicked = (): void => {
  if (isShiftClicked.value || isAltClicked.value) {
    return;
  }
  isCapsClicked.value = !isCapsClicked.value;
};

const onCtrlClicked = (): void => {
  isCtrlClicked.value = !isCtrlClicked.value;
};

const onShiftClicked = (): void => {
  if (isCapsClicked.value) {
    return;
  }
  isShiftClicked.value = !isShiftClicked.value;
};

/**
 * Event handler for the KeyboardButton onButtonClick event.
 * @param newValue {string}
 */
const onClick = (newValue: string): void => {
  let value = newValue;
  switch (value) {
    case ESpecialButton.CAPS: {
      if (isShiftClicked.value || isAltClicked.value) {
        return;
      }

      if (isCapsClicked.value) {
        layoutType.value = EKeyboardLayoutType.SHIFT;
      } else {
        layoutType.value = EKeyboardLayoutType.DEFAULT;
      }
      keyboardPreview.value = getKeyboardLayout(layoutType.value);
      return;
    }
    case ESpecialButton.ALT:
    case ESpecialButton.ALT_LEFT:
    case ESpecialButton.ALT_RIGHT: {
      if (isCapsClicked.value) {
        return;
      }
      if (isAltClicked.value) {
        layoutType.value = EKeyboardLayoutType.ALT;
      } else {
        layoutType.value = EKeyboardLayoutType.DEFAULT;
      }
      keyboardPreview.value = getKeyboardLayout(layoutType.value);
      return;
    }
    case ESpecialButton.BACKSPACE: {
      return;
    }
    case ESpecialButton.CTRL:
    case ESpecialButton.CTRL_LEFT:
    case ESpecialButton.CTRL_RIGHT: {
      // TODO Implement at some later time
      return;
    }
    case ESpecialButton.ENTER: {
      // TODO complete this option
      return;
    }
    case ESpecialButton.SHIFT:
    case ESpecialButton.SHIFT_LEFT:
    case ESpecialButton.SHIFT_RIGHT: {
      if (isCapsClicked.value) {
        return;
      }
      if (isAltClicked.value) {
        layoutType.value = EKeyboardLayoutType.ALT_SHIFT;
        keyboardPreview.value = getKeyboardLayout(layoutType.value);
        return;
      }
      if (isShiftClicked.value) {
        layoutType.value = EKeyboardLayoutType.SHIFT;
      } else {
        layoutType.value = EKeyboardLayoutType.DEFAULT;
      }
      keyboardPreview.value = getKeyboardLayout(layoutType.value);
      return;
    }
    case ESpecialButton.SPACE: {
      value = ` `;
      break;
    }
    case ESpecialButton.TAB: {
      if (props.disableTab) {
        value = ``;
      } else {
        value = `  `;
      }
      break;
    }
    default: {
      // We do nothing
      break;
    }
  }

  const el = keyboardInput.value;
  if (el?.selectionStart === inputValue.value.length) {
    inputValue.value = `${inputValue.value}${value}`;
    return;
  }

  const start = el?.selectionStart;
  if (start) {
    const startString = inputValue.value.substring(0, start);
    const endString = inputValue.value.substring(start, inputValue.value.length);
    inputValue.value = `${startString}${value}${endString}`;
    nextTick(() => {
      if (start) {
        el?.focus();
        el?.setSelectionRange(start + 1, start + 1);
      }
    });
  }
};
</script>

<style lang="scss">
@import '../../css/themes';
@import '../../css/keyboard';
@import '../../css/keyboard-button';
@import '../../css/keyboard-rows';
@import '../../css/button-sizes';
@import '../../css/select';
@import '../../css/scrollbar';
@import '../../css/media-queries';

.select-theme-switcher {
  margin: 15px 5px 0 5px;
}

.theme-switcher {
  float: right !important;
  margin-top: 3px;
}
</style>
