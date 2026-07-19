<template>
  <button
    ref="button"
    :aria-label="ariaLabel"
    :aria-pressed="ariaPressed"
    :class="buttonClass"
    :data-alt-shift-value="altShiftValue"
    :data-alt-value="altValue"
    :data-button-layout="buttonLayout"
    :data-default-value="defaultValue"
    :data-shift-value="shiftValue"
    :tabindex="tabindex"
    type="button"
    @click="onClick"
    @keydown="onKeyDown"
    @mousedown="onKeyDown">
    <span>{{ getButtonDisplayValue(defaultValue) }}</span>
  </button>
</template>

<script lang="ts" setup>
  import {
    computed, nextTick, ref, watch,
  } from 'vue';
  import { IDisplay } from '@/core/interfaces/display.interfaces';
  import { TNavigationKey } from '@/core/interfaces/navigation.types';
  import { EKeyboardButtonEvent } from '@/core/enums/keyboardButtonEvents.enum';
  import { ESpecialButton } from '@/core/enums/KeyboardSpecialButton.enum';

  export interface IKeyboardButtonProps {
    altShiftValue?: string;
    altValue?: string;
    ariaLabels?: IDisplay;
    buttonLayout?: string;
    debugEvents?: boolean;
    defaultValue: string;
    display: IDisplay;
    isAltClicked?: boolean;
    isCapsClicked?: boolean;
    isCtrlClicked?: boolean;
    isShiftClicked?: boolean;
    shiftValue?: string;
    tabindex?: number;
  }

  const props = withDefaults(defineProps<IKeyboardButtonProps>(), {
    altShiftValue: undefined,
    altValue: undefined,
    ariaLabels: undefined,
    buttonLayout: undefined,
    debugEvents: false,
    defaultValue: ``,
    display: undefined,
    isAltClicked: false,
    isCapsClicked: false,
    isCtrlClicked: false,
    isShiftClicked: false,
    shiftValue: undefined,
    tabindex: 0,
  });

  const button = ref<HTMLButtonElement | null>(null);

  defineExpose({
    focus: (): void => button.value?.focus(),
  });

  const emit = defineEmits<{
    (event: EKeyboardButtonEvent.ALT_CLICKED): void;
    (event: EKeyboardButtonEvent.BACKSPACE_CLICKED): void;
    (event: EKeyboardButtonEvent.CAPS_CLICKED): void;
    (event: EKeyboardButtonEvent.CLICK, value: string): void;
    (event: EKeyboardButtonEvent.CTRL_CLICKED): void;
    (event: EKeyboardButtonEvent.KEY_DOWN, value: string): void;
    (event: EKeyboardButtonEvent.NAVIGATE, direction: TNavigationKey): void;
    (event: EKeyboardButtonEvent.SHIFT_CLICKED): void;
  }>();

  /**
   * Retrieve button type
   *
   * @return {string} The button type
   */
  const getButtonType = (): string => {
    return props.defaultValue
      .includes(`{`)
      && props.defaultValue.includes(`}`)
      ? `functionBtn`
      : `standardBtn`;
  };

  /**
   * Adds default classes to a given button
   *
   * @return {string} The classes to be added to the button
   */
  const getButtonClass = (): string => {
    const buttonTypeClass = getButtonType();
    const buttonWithoutBraces = props.defaultValue
      .replace(`{`, ``)
      .replace(`}`, ``);
    let buttonNormalized = ``;

    nextTick();
    if(buttonTypeClass !== `standardBtn`) {
      buttonNormalized = ` keyboard-button-${buttonWithoutBraces}`;
    }

    return `keyboard-button ${buttonTypeClass}${buttonNormalized}`;
  };

  const buttonClass = ref(``);
  const isAltClicked = ref(props.isAltClicked);
  const isCapsClicked = ref(props.isCapsClicked);
  const isCtrlClicked = ref(props.isCtrlClicked);
  const isShiftClicked = ref(props.isShiftClicked);

  watch(() => props.isAltClicked, newValue => {
    if(isCtrlClicked.value || isCapsClicked.value) {
      return;
    }
    isAltClicked.value = newValue;
    if(isAltClicked.value
      && (props.defaultValue === ESpecialButton.ALT.toString()
        || props.defaultValue === ESpecialButton.ALT_LEFT.toString()
        || props.defaultValue === ESpecialButton.ALT_RIGHT.toString())) {
      buttonClass.value = `${buttonClass.value} keyboard-button--active`;
    } else {
      buttonClass.value = getButtonClass();
    }
  });

  watch(() => props.isCapsClicked, newValue => {
    if(isCtrlClicked.value || isShiftClicked.value || isAltClicked.value) {
      return;
    }
    isCapsClicked.value = newValue;
    if(isCapsClicked.value && props.defaultValue === ESpecialButton.CAPS.toString()) {
      buttonClass.value = `${buttonClass.value} keyboard-button--active`;
    } else {
      buttonClass.value = getButtonClass();
    }
  });

  watch(() => props.isCtrlClicked, newValue => {
    if(isCapsClicked.value || isAltClicked.value || isShiftClicked.value) {
      return;
    }
    isCtrlClicked.value = newValue;
    if(isCtrlClicked.value
      && (props.defaultValue === ESpecialButton.CTRL.toString()
        || props.defaultValue === ESpecialButton.CTRL_LEFT.toString()
        || props.defaultValue === ESpecialButton.CTRL_RIGHT.toString())) {
      buttonClass.value = `${buttonClass.value} keyboard-button--active`;
    } else {
      buttonClass.value = getButtonClass();
    }
  });

  watch(() => props.isShiftClicked, newValue => {
    if(isCtrlClicked.value || isCapsClicked.value) {
      return;
    }
    isShiftClicked.value = newValue;
    if(isShiftClicked.value
      && (props.defaultValue === ESpecialButton.SHIFT.toString()
        || props.defaultValue === ESpecialButton.SHIFT_LEFT.toString()
        || props.defaultValue === ESpecialButton.SHIFT_RIGHT.toString())) {
      buttonClass.value = `${buttonClass.value} keyboard-button--active`;
    } else {
      buttonClass.value = getButtonClass();
    }
  });

  buttonClass.value = getButtonClass();

  const SPECIAL_BUTTON_ARIA_LABELS: Record<string, string> = {
    [ESpecialButton.ALT]: `Alt`,
    [ESpecialButton.ALT_LEFT]: `Alt`,
    [ESpecialButton.ALT_RIGHT]: `Alt Gr`,
    [ESpecialButton.BACKSPACE]: `Backspace`,
    [ESpecialButton.CAPS]: `Caps Lock`,
    [ESpecialButton.CTRL]: `Control`,
    [ESpecialButton.CTRL_LEFT]: `Control`,
    [ESpecialButton.CTRL_RIGHT]: `Control`,
    [ESpecialButton.ENTER]: `Enter`,
    [ESpecialButton.SHIFT]: `Shift`,
    [ESpecialButton.SHIFT_LEFT]: `Shift`,
    [ESpecialButton.SHIFT_RIGHT]: `Shift`,
    [ESpecialButton.SPACE]: `Space`,
    [ESpecialButton.TAB]: `Tab`,
  };

  /**
   * A stable, human-readable accessible name for special/function keys, independent
   * of whatever symbol the `display` map happens to render (which may be a single
   * unicode glyph that screen readers won't announce meaningfully). Standard
   * character keys return undefined so their own visible text serves as the name.
   * Consumers can override these (e.g. to localize them) via `ariaLabels`, which
   * `Keyboard` populates from its own `keyboardTranslation` prop.
   */
  const ariaLabel = computed<string | undefined>(() => {
    return props.ariaLabels?.[props.defaultValue] ?? SPECIAL_BUTTON_ARIA_LABELS[props.defaultValue];
  });

  /**
   * Whether this key is a modifier toggle in the "pressed" state, following the
   * ARIA toggle-button pattern. Returns undefined for non-toggle keys so the
   * attribute is omitted entirely rather than rendered as `aria-pressed="false"`.
   */
  const ariaPressed = computed<boolean | undefined>(() => {
    switch(props.defaultValue) {
      case ESpecialButton.ALT.toString():
      case ESpecialButton.ALT_LEFT.toString():
      case ESpecialButton.ALT_RIGHT.toString(): {
        return isAltClicked.value;
      }
      case ESpecialButton.CAPS.toString(): {
        return isCapsClicked.value;
      }
      case ESpecialButton.CTRL.toString():
      case ESpecialButton.CTRL_LEFT.toString():
      case ESpecialButton.CTRL_RIGHT.toString(): {
        return isCtrlClicked.value;
      }
      case ESpecialButton.SHIFT.toString():
      case ESpecialButton.SHIFT_LEFT.toString():
      case ESpecialButton.SHIFT_RIGHT.toString(): {
        return isShiftClicked.value;
      }
      default: {
        return undefined;
      }
    }
  });

  /**
   * Returns the display (label) name for a given button
   * @return {string} The value to display in the button
   */
  const getButtonDisplayValue = (value: string): string => {
    return props.display[value] || value;
  };

  /**
   * Handler for button click event.
   * @param evt Event from the button.
   */
  const onClick = (evt: Event): void => {
    evt.preventDefault();
    // mousedown's preventDefault (see onKeyDown) suppresses the browser's native
    // focus-on-click for buttons, so focus it explicitly instead.
    button.value?.focus();
    if(props.debugEvents) {
      // eslint-disable-next-line no-console -- opt-in debug logging, gated by the debugEvents prop
      console.log(`[KeyboardButton] click:`, props.defaultValue);
    }
    emit(EKeyboardButtonEvent.CLICK, props.defaultValue);
  };

  /**
   * Handler for button down event.
   * @param evt Event from the button.
   */
  const onKeyDown = (evt: Event): void => {
    // Only suppress mousedown's default (focus/text-selection side effects) - NOT
    // keydown's. Preventing keydown's default can suppress the browser's native
    // synthesized click when Space/Enter activates a focused button, which is what
    // actually drives the layout-switching logic in the parent's onClick handler.
    // Blocking it would let this handler toggle the internal ref while the visual
    // layout silently never updates for keyboard-only users.
    if(evt.type === `mousedown`) {
      evt.preventDefault();
    }
    if(props.debugEvents) {
      // eslint-disable-next-line no-console -- opt-in debug logging, gated by the debugEvents prop
      console.log(`[KeyboardButton] ${evt.type}:`, props.defaultValue);
    }
    if(evt instanceof KeyboardEvent) {
      switch(evt.key) {
        case `ArrowUp`:
        case `ArrowDown`:
        case `ArrowLeft`:
        case `ArrowRight`:
        case `Home`:
        case `End`: {
          evt.preventDefault();
          emit(EKeyboardButtonEvent.NAVIGATE, evt.key);
          return;
        }
        default: {
          break;
        }
      }
    }
    switch(props.defaultValue) {
      case ESpecialButton.ALT.toString():
      case ESpecialButton.ALT_LEFT.toString():
      case ESpecialButton.ALT_RIGHT.toString(): {
        if(isCapsClicked.value || isCtrlClicked.value) {
          return;
        }
        emit(EKeyboardButtonEvent.ALT_CLICKED);
        break;
      }
      case ESpecialButton.BACKSPACE: {
        emit(EKeyboardButtonEvent.BACKSPACE_CLICKED);
        break;
      }
      case ESpecialButton.CAPS: {
        if(isShiftClicked.value || isAltClicked.value || isCtrlClicked.value) {
          return;
        }
        emit(EKeyboardButtonEvent.CAPS_CLICKED);
        break;
      }
      case ESpecialButton.CTRL.toString():
      case ESpecialButton.CTRL_LEFT.toString():
      case ESpecialButton.CTRL_RIGHT.toString(): {
        if(isCapsClicked.value || isShiftClicked.value || isAltClicked.value) {
          return;
        }
        emit(EKeyboardButtonEvent.CTRL_CLICKED);
        break;
      }
      case ESpecialButton.SHIFT.toString():
      case ESpecialButton.SHIFT_LEFT.toString():
      case ESpecialButton.SHIFT_RIGHT.toString(): {
        if(isCapsClicked.value || isCtrlClicked.value) {
          return;
        }
        emit(EKeyboardButtonEvent.SHIFT_CLICKED);
        break;
      }
      default: {
        emit(EKeyboardButtonEvent.KEY_DOWN, props.defaultValue);
      }
    }
  };
</script>

<style lang="scss"></style>
