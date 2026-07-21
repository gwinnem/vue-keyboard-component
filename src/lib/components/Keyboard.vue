<template>
  <div
    aria-describedby="keyboard-navigation-hint"
    aria-label="Virtual keyboard"
    :class="mainCss"
    :dir="direction"
    :lang="layout.lang?.[0]"
    role="group">
    <span
      id="keyboard-navigation-hint"
      class="visually-hidden">
      Use arrow keys to move between keys once one is focused.
    </span>
    <div class="keyboard-rows">
      <div
        v-if="showThemeSwitcher
          || showLayoutSelector"
        class="keyboard-row--first-row">
        <div class="select-theme-switcher">
          <label
            v-if="showLayoutSelector"
            class="select-text"
            for="keyboard-layout-select">
            {{ props.selectKeyboardLanguageText }}
          </label>
          <div>
            <select
              v-if="showLayoutSelector"
              id="keyboard-layout-select"
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
          :aria-label="props.startTypingText"
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
          :ref="el => setButtonRef(rowIndex, buttonIndex, el)"
          :alt-shift-value="button"
          :alt-value="button"
          :aria-labels="props.keyboardTranslation"
          :default-value="button"
          :display="keyboardDisplay"
          :is-alt-clicked="isAltClicked"
          :is-caps-clicked="isCapsClicked"
          :is-ctrl-clicked="isCtrlClicked"
          :is-shift-clicked="isShiftClicked"
          :shift-value="button"
          :tabindex="rowIndex === activeRow && buttonIndex === activeCol ? 0 : -1"
          @onAltClicked="onAltClicked"
          @onBackspaceClicked="onBackspaceClicked"
          @onButtonClick="value => onButtonClicked(value, rowIndex, buttonIndex)"
          @onCapsClicked="onCapsClicked"
          @onCtrlClicked="onCtrlClicked"
          @onNavigate="direction => onNavigate(direction, rowIndex, buttonIndex)"
          @onShiftClicked="onShiftClicked" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {
    computed, nextTick, ref, watch,
  } from 'vue';
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
  import { isRtlLanguage } from '../../core/helpers/RtlHelper';
  import { TNavigationKey } from '../../core/interfaces/navigation.types';

  export interface IKeyboardProps {
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

  // Stryker disable all: mutating this object literal breaks Vue's SFC compiler -
  // defineProps()/withDefaults() can't reference locally-scoped variables (including
  // Stryker's injected mutation-coverage helpers) from within their special
  // compile-time macro expansion.
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
  // Stryker restore all

  enum EInputChangedEvent {
    CHANGED = `onInputChanged`,
    CTRL_COMBINATION = `onCtrlCombination`,
    ENTER_PRESSED = `onEnterPressed`,
  }

  const emit = defineEmits<{
    (event: EInputChangedEvent.CHANGED, value: string): void;
    (event: EInputChangedEvent.CTRL_COMBINATION, value: string): void;
    (event: EInputChangedEvent.ENTER_PRESSED, value: string): void;
  }>();

  const inputValue = ref(``);

  const orgCss = `keyboard`;
  const mainCss = ref<string>(`keyboard`);

  /**
   * Switching between dark and light theme.
   * @param value The theme to switch to.
   */
  const switchTheme = (value: string): void => {
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
    if(!props.usePhysicalKeyboard) {
      return;
    }
    switch(evt.code) {
      case `Alt`:
      case `AltLeft`:
      case `AltRight`:
      case `ArrowDown`:
      case `ArrowLeft`:
      case `ArrowRight`:
      case `ArrowUp`:
      case `Backspace`:
      case `Caps`:
      case `Context`:
      case `Control`:
      case `ControlLeft`:
      case `ControlRight`:
      case `Delete`:
      case `End`:
      case `Enter`:
      case `Escape`:
      case `Home`:
      case `MetaLeft`:
      case `MetaRight`:
      case `PageDown`:
      case `PageUp`:
      case `Shift`:
      case `ShiftLeft`:
      case `ShiftRight`:
      case `Tab`: {
        // Modifier, navigation, and editing keys: let the browser handle these
        // natively (cursor movement, native backspace/enter/tab, etc.) rather than
        // intercepting them - only plain character keys get inserted manually below.
        break;
      }
      default: {
        evt.preventDefault();
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

  const direction = computed<`ltr` | `rtl`>(() => {
    return isRtlLanguage(layout.value.lang) ? `rtl` : `ltr`;
  });

  /**
   * Opt-in debug logging for significant internal state changes, gated by the
   * `debug` prop.
   */
  const logDebug = (...args: unknown[]): void => {
    if(props.debug) {
      // eslint-disable-next-line no-console -- opt-in debug logging, gated by the debug prop
      console.log(`[Keyboard]`, ...args);
    }
  };

  const layoutName = ref(`default`);

  /**
   * The layout-selector's option list, optionally filtered by the includeInLayout /
   * excludeFromLayout props. includeInLayout takes precedence when both are given.
   */
  const selectValues = computed<ISelect[]>(() => {
    const allValues: ISelect[] = selectValuesFromFile.default;

    if(props.includeInLayout && props.includeInLayout.length > 0) {
      const included = new Set(props.includeInLayout);
      return allValues.filter(item => included.has(item.name));
    }

    if(props.excludeFromLayout && props.excludeFromLayout.length > 0) {
      const excluded = new Set(props.excludeFromLayout);
      return allValues.filter(item => !excluded.has(item.name));
    }

    return allValues;
  });

  const keyboardDisplay = ref<IDisplay>(defaultDisplay.display);
  if(layout.value.display) {
    keyboardDisplay.value = layout.value.display;
  }

  /**
   * Getting the keyboard layout. Fallback to default keyboard layout if the
   * requested variant isn't defined for this layout.
   * @param value The layout variant to render.
   */
  const getKeyboardLayout = (value: EKeyboardLayoutType): string[] => {
    if(layout.value.display) {
      keyboardDisplay.value = layout.value.display;
    } else {
      keyboardDisplay.value = defaultDisplay.display;
    }

    const layoutVariants: Record<EKeyboardLayoutType, string[] | undefined> = {
      [EKeyboardLayoutType.ALT]: layout.value.layout.alt,
      [EKeyboardLayoutType.ALT_SHIFT]: layout.value.layout.altShift,
      [EKeyboardLayoutType.DEFAULT]: layout.value.layout.default,
      [EKeyboardLayoutType.SHIFT]: layout.value.layout.shift,
    };

    return layoutVariants[value] ?? layout.value.layout.default;
  };

  const keyboardPreview = ref<string[]>();
  const layoutType = ref(EKeyboardLayoutType.DEFAULT);

  keyboardPreview.value = getKeyboardLayout(layoutType.value);

  /**
   * Changing the keyboard layout. Layouts are lazily loaded on demand, so this
   * briefly clears the preview (rendering no keys) while the chosen layout's
   * chunk downloads. If the user selects another layout before this one finishes
   * loading, and that later request happens to resolve first (plausible - each
   * layout is its own differently-sized chunk), this discards the now-stale
   * result instead of letting it overwrite the newer selection.
   */
  const changeLayout = async (): Promise<void> => {
    const requestedLayoutName = layoutName.value;
    logDebug(`changing layout to`, requestedLayoutName);
    keyboardPreview.value = undefined;
    const resolvedLayout = await LayoutHelper.changeLayout(requestedLayoutName);
    if(requestedLayoutName !== layoutName.value) {
      return;
    }
    layout.value = resolvedLayout;
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

  // Roving tabindex: only the button at (activeRow, activeCol) is a tab stop;
  // every other button is tabindex="-1". Arrow keys move this position (and focus)
  // between buttons; clicking a button also moves it there. This keeps the whole
  // keyboard a single Tab stop instead of ~50, per the WAI-ARIA APG's recommended
  // interaction pattern for a large set of grouped buttons.
  const activeRow = ref(0);
  const activeCol = ref(0);

  type TKeyboardButtonInstance = { focus: () => void } | null;
  const buttonRefs: TKeyboardButtonInstance[][] = [];

  const setButtonRef = (rowIndex: number, buttonIndex: number, el: unknown): void => {
    if(!buttonRefs[rowIndex]) {
      buttonRefs[rowIndex] = [];
    }
    buttonRefs[rowIndex][buttonIndex] = el as TKeyboardButtonInstance;
  };

  const onNavigate = (navigationDirection: TNavigationKey, rowIndex: number, buttonIndex: number): void => {
    const rows = keyboardPreview.value;
    if(!rows || rows.length === 0) {
      return;
    }

    // Under RTL, the row's visual order is mirrored (see the `direction` computed
    // and the flexbox layout it drives), but DOM order isn't - so ArrowRight/
    // ArrowLeft need to swap to still match what the user sees on screen.
    let resolvedDirection = navigationDirection;
    if(direction.value === `rtl`) {
      if(navigationDirection === `ArrowLeft`) {
        resolvedDirection = `ArrowRight`;
      } else if(navigationDirection === `ArrowRight`) {
        resolvedDirection = `ArrowLeft`;
      }
    }

    let newRow = rowIndex;
    let newCol = buttonIndex;

    const navigationHandlers: Record<TNavigationKey, () => void> = {
      ArrowDown: () => {
        newRow = Math.min(rows.length - 1, rowIndex + 1);
        const targetRowLength = getRowOfButtons(rows[newRow]).length;
        newCol = Math.min(buttonIndex, targetRowLength - 1);
      },
      ArrowLeft: () => {
        newCol = Math.max(0, buttonIndex - 1);
      },
      ArrowRight: () => {
        const rowLength = getRowOfButtons(rows[rowIndex]).length;
        newCol = Math.min(rowLength - 1, buttonIndex + 1);
      },
      ArrowUp: () => {
        newRow = Math.max(0, rowIndex - 1);
        const targetRowLength = getRowOfButtons(rows[newRow]).length;
        newCol = Math.min(buttonIndex, targetRowLength - 1);
      },
      End: () => {
        newCol = getRowOfButtons(rows[rowIndex]).length - 1;
      },
      Home: () => {
        newCol = 0;
      },
    };

    navigationHandlers[resolvedDirection]();

    activeRow.value = newRow;
    activeCol.value = newCol;
    nextTick(() => {
      buttonRefs[newRow]?.[newCol]?.focus();
    });
  };

  // If the layout/modifier state changes and rows are shorter (or fewer) than
  // before, clamp the active position back into range rather than pointing at a
  // button that no longer exists.
  watch(keyboardPreview, newRows => {
    if(!newRows || newRows.length === 0) {
      return;
    }
    if(activeRow.value >= newRows.length) {
      activeRow.value = 0;
    }
    const rowLength = getRowOfButtons(newRows[activeRow.value]).length;
    if(activeCol.value >= rowLength) {
      activeCol.value = Math.max(0, rowLength - 1);
    }
  });

  const keyboardInput = ref<HTMLInputElement | null>(null);

  /**
   * Event handlers for KeyboardButton events
   */
  const onAltClicked = (): void => {
    isAltClicked.value = !isAltClicked.value;
    logDebug(`alt toggled`, isAltClicked.value);
  };

  const onBackspaceClicked = (): void => {
    const el = keyboardInput.value;

    if(el?.selectionStart === 0 && inputValue.value.length === 0) {
      return;
    }

    if(el?.selectionStart === inputValue.value.length) {
      const caretPosition = inputValue.value.length - 1;
      inputValue.value = inputValue.value.substring(0, inputValue.value.length - 1);
      emit(EInputChangedEvent.CHANGED, inputValue.value);
      nextTick(() => {
        el?.focus();
        el?.setSelectionRange(caretPosition, caretPosition);
      });
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
    isCapsClicked.value = !isCapsClicked.value;
    logDebug(`caps toggled`, isCapsClicked.value);
  };

  const onCtrlClicked = (): void => {
    isCtrlClicked.value = !isCtrlClicked.value;
    logDebug(`ctrl toggled`, isCtrlClicked.value);
  };

  const onShiftClicked = (): void => {
    isShiftClicked.value = !isShiftClicked.value;
    logDebug(`shift toggled`, isShiftClicked.value);
  };

  // Modifier/action keys are never subject to Ctrl-combination interception below -
  // e.g. Ctrl+Shift toggling caps/shift state is handled by their own switch cases,
  // not treated as a "Ctrl+Shift" combination to emit.
  const MODIFIER_AND_ACTION_KEYS = new Set<string>([
    ESpecialButton.CAPS.toString(),
    ESpecialButton.ALT.toString(),
    ESpecialButton.ALT_LEFT.toString(),
    ESpecialButton.ALT_RIGHT.toString(),
    ESpecialButton.BACKSPACE.toString(),
    ESpecialButton.CTRL.toString(),
    ESpecialButton.CTRL_LEFT.toString(),
    ESpecialButton.CTRL_RIGHT.toString(),
    ESpecialButton.ENTER.toString(),
    ESpecialButton.SHIFT.toString(),
    ESpecialButton.SHIFT_LEFT.toString(),
    ESpecialButton.SHIFT_RIGHT.toString(),
  ]);

  /**
   * Event handler for the KeyboardButton onButtonClick event.
   * @param newValue {string}
   */
  const onClick = (newValue: string): void => {
    let value = newValue;

    // While Ctrl is held, any non-modifier key (letters, digits, space, tab, ...) is
    // treated as a Ctrl+key combination rather than typed into the input - mirrors
    // how a physical keyboard's Ctrl key works (Ctrl+C doesn't insert a literal "c").
    // Consumers decide what each combination means by listening for this event.
    if(isCtrlClicked.value && !MODIFIER_AND_ACTION_KEYS.has(value)) {
      emit(EInputChangedEvent.CTRL_COMBINATION, value);
      return;
    }

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
        // The Ctrl key itself has no layout/text effect - see the Ctrl-combination
        // interception above for what happens when another key is pressed while held.
        return;
      }
      case ESpecialButton.ENTER: {
        emit(EInputChangedEvent.ENTER_PRESSED, inputValue.value);
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

  const onButtonClicked = (value: string, rowIndex: number, buttonIndex: number): void => {
    activeRow.value = rowIndex;
    activeCol.value = buttonIndex;
    onClick(value);
  };
</script>

<style lang="scss">
@use '../../css/themes';
@use '../../css/keyboard';
@use '../../css/keyboard-button';
@use '../../css/keyboard-rows';
@use '../../css/button-sizes';
@use '../../css/select';
@use '../../css/scrollbar';
@use '../../css/media-queries';

.select-theme-switcher {
  margin: 15px 5px 0 5px;
}

.theme-switcher {
  float: right !important;
  margin-top: 3px;
}

.visually-hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
