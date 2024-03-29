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
            {{ props.selectKeyboardLanguageText }}
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
              @on-theme-switched="switchTheme" />
          </div>
        </div>
      </div>
      <div class="keyboard-row">
        <input
          ref="keyboardInput"
          v-model="inputValue"
          class="keyboard-input"
          :placeholder="props.startTypingText"
          @keydown="onInputKeyDown" />
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
          @onShiftClicked="onShiftClicked" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { nextTick, ref, watch } from 'vue';
  import KeyboardButton from './KeyboardButton.vue';
  import ThemeSwitcher from './ThemeSwitcher.vue';
  import { ILayoutItem } from '../../core/interfaces/layout.interfaces';
  import * as defaultLayout from '../../core/layouts/default';
  import * as defaultDisplay from '../../core/keyboard-layouts/default-keyboard';
  import * as selectValuesFromFile from '../../core/ms-keyboards/ms-layouts.select';
  import { ESpecialButton } from '../../core/enums/KeyboardSpecialButton.enum';
  import { EKeyboardLayoutType } from '../../core/enums/keyboardLayoutTypes.enum';
  import { IDisplay } from '../../core/interfaces/display.interfaces';
  import { ISelect } from '../../core/interfaces/select.interfaces';
  import { LayoutHelper } from '../../core/helpers/LayoutHelper';

  interface IKeyboardProps {
    debug?: boolean;
    disableTab?: boolean;
    excludeFromLayout?: string[];
    includeInLayout?: string[];
    keyboardLayout?: ILayoutItem;
    keyboardTranslation?: IDisplay;
    selectKeyboardLanguageText?: string;
    showLayoutSelector?: boolean;
    showThemeSwitcher?: boolean;
    startTypingText?: string;
    usePhysicalKeyboard?: boolean;
  }

  const props = withDefaults(defineProps<IKeyboardProps>(), {
    disableTab: true,
    excludeFromLayout: undefined,
    includeInLayout: undefined,
    keyboardLayout: undefined,
    keyboardTranslation: undefined,
    selectKeyboardLanguageText: `Select Keyboard language:`,
    showLayoutSelector: false,
    showThemeSwitcher: true,
    startTypingText: `Start typing now !`,
    usePhysicalKeyboard: false,
  });

  enum EInputChangedEvent {
    CHANGED = `onInputChanged`,
  }

  const emit = defineEmits<{
    (event: EInputChangedEvent.CHANGED, value: string): void;
  }>();

  const inputValue = ref(``);

  const orgCss = `keyboard`;
  const mainCss = ref<string>(`keyboard`);

  /**
   * Switching between dark and light theme.
   * @param value The theme to switch to.
   */
  const switchTheme = (value: string): void => {
    if(!props.showThemeSwitcher) {
      return;
    }
    if(value === `dark`) {
      mainCss.value = `${orgCss} dark`;
    } else {
      mainCss.value = `${orgCss} light`;
    }
  };

  /**
   * Handler for physical keyboard click event in the input field.
   * @param evt KeyboardEvent Event emitted when user click's on the physical keyboard.
   */
  const onInputKeyDown = (evt: KeyboardEvent): void => {
    evt.preventDefault();
    if(!props.usePhysicalKeyboard) {
      return;
    }
    switch(evt.code) {
      case `Alt`:
      case `AltLeft`:
      case `AltRight`:
      case `Caps`:
      case `Context`:
      case `Control`:
      case `ControlLeft`:
      case `ControlRight`:
      case `Delete`:
      case `MetaLeft`:
      case `MetaRight`:
      case `Shift`:
      case `ShiftLeft`:
      case `ShiftRight`: {
        break;
      }
      default: {
        inputValue.value += evt.key;
      }
    }
  };

  const layout = ref<ILayoutItem>(defaultLayout.default);
  if(props.keyboardLayout) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    layout.value = props.keyboardLayout;
  } else {
    throw new Error(`keyboard layout not defined`);
  }

  const layoutName = ref(`default`);
  const selectValues: ISelect[] = selectValuesFromFile.default;

  const keyboardDisplay = ref<IDisplay | undefined>(defaultDisplay.display);
  if(layout.value.display) {
    keyboardDisplay.value = layout.value.display;
  }

  /**
   * Getting the keyboard layout. Fallback to default keyboard layout if layout name does not exist.
   * @param value string. Name of the keyboard layout.
   */
  const getKeyboardLayout = (value: string): string[] => {
    if(layout.value.display) {
      keyboardDisplay.value = layout.value.display;
    } else {
      keyboardDisplay.value = defaultDisplay.display;
    }

    switch(value) {
      case EKeyboardLayoutType.DEFAULT: {
        return layout.value.layout.default;
      }
      case EKeyboardLayoutType.SHIFT: {
        if(layout.value.layout.shift) {
          return layout.value.layout.shift;
        }
        return layout.value.layout.default;
      }
      case EKeyboardLayoutType.ALT: {
        if(layout.value.layout.alt) {
          return layout.value.layout.alt;
        }
        return layout.value.layout.default;
      }
      case EKeyboardLayoutType.ALT_SHIFT: {
        if(layout.value.layout.altShift) {
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

  /**
   * Changing the keyboard layout.
   */
  const changeLayout = (): void => {
    keyboardPreview.value = undefined;
    layout.value = LayoutHelper.changeLayout(layoutName.value);
    if(layout.value.display) {
      keyboardDisplay.value = layout.value.display;
    }
    keyboardPreview.value = getKeyboardLayout(EKeyboardLayoutType.DEFAULT);
    nextTick();
  };

  watch(() => props.keyboardLayout, newValue => {
    if(newValue) {
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
    return value.split(` `);
  };

  const keyboardInput = ref<HTMLInputElement | null>(null);

  /**
   * Event handlers for KeyboardButton events
   */
  const onAltClicked = (): void => {
    if(isCapsClicked.value || isCtrlClicked.value) {
      return;
    }
    isAltClicked.value = !isAltClicked.value;
  };

  const onBackspaceClicked = (): void => {
    const el = keyboardInput.value;

    if(el?.selectionStart === 0 && inputValue.value.length === 0) {
      return;
    }

    if(el?.selectionStart === inputValue.value.length) {
      inputValue.value = inputValue.value.substring(0, inputValue.value.length - 1);
      return;
    }

    const start = el?.selectionStart;
    const end = el?.selectionEnd;
    let startString = ``;
    let endString = ``;
    if(start && start > 0) {
      startString = inputValue.value.substring(0, start - 1);
    }
    if(end && end > 0) {
      endString = inputValue.value.substring(end, inputValue.value.length);
    }
    inputValue.value = `${startString}${endString}`;
    emit(EInputChangedEvent.CHANGED, inputValue.value);
    nextTick(() => {
      if(start) {
        el?.focus();
        el?.setSelectionRange(start - 1, start - 1);
      }
    });
  };

  const onCapsClicked = (): void => {
    if(isShiftClicked.value || isAltClicked.value || isCtrlClicked.value) {
      return;
    }
    isCapsClicked.value = !isCapsClicked.value;
  };

  const onCtrlClicked = (): void => {
    if(isCapsClicked.value || isAltClicked.value || isShiftClicked.value) {
      return;
    }
    isCtrlClicked.value = !isCtrlClicked.value;
  };

  const onShiftClicked = (): void => {
    if(isCapsClicked.value || isCtrlClicked.value) {
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
    switch(value) {
      case ESpecialButton.CAPS: {
        if(isShiftClicked.value || isAltClicked.value || isCtrlClicked.value) {
          return;
        }

        if(isCapsClicked.value) {
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
        if(isCapsClicked.value) {
          return;
        }
        if(isAltClicked.value && !isShiftClicked.value) {
          layoutType.value = EKeyboardLayoutType.ALT;
        } else if(isAltClicked.value && isShiftClicked.value) {
          layoutType.value = EKeyboardLayoutType.ALT_SHIFT;
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
        if(isCapsClicked.value) {
          return;
        }
        if(isShiftClicked.value && isAltClicked.value) {
          layoutType.value = EKeyboardLayoutType.ALT_SHIFT;
          keyboardPreview.value = getKeyboardLayout(layoutType.value);
          return;
        } if(isShiftClicked.value && !isAltClicked.value) {
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
        if(props.disableTab) {
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
    const start = el?.selectionStart;

    if(start && start > 0) {
      const startString = inputValue.value.substring(0, start);
      const endString = inputValue.value.substring(start, inputValue.value.length);
      inputValue.value = `${startString}${value}${endString}`;
    } else {
      inputValue.value = `${value}${inputValue.value}`;
    }

    emit(EInputChangedEvent.CHANGED, inputValue.value);
    nextTick(() => {
      el?.focus();
      if(start) {
        el?.setSelectionRange(start + 1, start + 1);
      } else {
        el?.setSelectionRange(1, 1);
      }
    });
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
