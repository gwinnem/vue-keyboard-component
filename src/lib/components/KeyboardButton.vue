<template>
  <button
    ref="button"
    :class="buttonClass"
    :data-default-value="defaultValue"
    @click="onClick"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
    @mousedown="onKeyDown"
    @mouseup="onKeyUp">
    <span>{{ getButtonDisplayValue(defaultValue) }}</span>
  </button>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue';
import {IDisplay} from '../../core/interfaces/display.interfaces';
import {EKeyboardButtonEvent} from '../../core/enums/keyboardButtonEvents.enum';
import {ESpecialButton} from '../../core/enums/KeyboardSpecialButton.enum';

interface IKeyboardButtonProps {
  buttonLayout?: string;
  buttonTheme?: string;
  debugEvents?: boolean;
  defaultValue?: string;
  display: IDisplay;
  isAltClicked?: boolean;
  isCapsClicked?: boolean;
  isCtrlClicked?: boolean;
  isShiftClicked?: boolean;
}

const props = withDefaults(defineProps<IKeyboardButtonProps>(), {
  buttonLayout: undefined,
  buttonTheme: ``,
  debugEvents: false,
  defaultValue: ``,
  display: undefined,
  isAltClicked: false,
  isCapsClicked: false,
  isCtrlClicked: false,
  isShiftClicked: false,
});

const emit = defineEmits<{
  (event: EKeyboardButtonEvent.ALT_CLICKED): void;
  (event: EKeyboardButtonEvent.BACKSPACE_CLICKED): void;
  (event: EKeyboardButtonEvent.CAPS_CLICKED): void;
  (event: EKeyboardButtonEvent.CLICK, value: string): void;
  (event: EKeyboardButtonEvent.CTRL_CLICKED): void;
  (event: EKeyboardButtonEvent.KEY_DOWN, value: string): void;
  (event: EKeyboardButtonEvent.KEY_UP, value: string): void;
  (event: EKeyboardButtonEvent.SHIFT_CLICKED): void;
}>();

const isAltClicked = ref(props.isAltClicked);
watch(() => props.isAltClicked, newValue => {
  isAltClicked.value = newValue;
});

const isCapsClicked = ref(props.isCapsClicked);
watch(() => props.isCapsClicked, newValue => {
  isCapsClicked.value = newValue;
});

const isCtrlClicked = ref(props.isCtrlClicked);
watch(() => props.isCtrlClicked, newValue => {
  isCtrlClicked.value = newValue;
});

const isShiftClicked = ref(props.isShiftClicked);
watch(() => props.isShiftClicked, newValue => {
  isShiftClicked.value = newValue;
});

const sendButtonEventDebugMessage = (msg: string, evt: Event): void => {
  if (!props.debugEvents) return;

  if (evt instanceof KeyboardEvent && (evt as KeyboardEvent).key === props.defaultValue) {
    // eslint-disable-next-line no-console
    console.debug(msg, (evt as KeyboardEvent));
    return;
  }
  if (evt instanceof MouseEvent) {
    // eslint-disable-next-line no-console
    console.debug(msg, (evt as MouseEvent));
    return;
  }
  if (evt instanceof PointerEvent) {
    // eslint-disable-next-line no-console
    console.debug(msg, (evt as PointerEvent));
  }
};

/**
 * Retrieve button type
 *
 * @return {string} The button type
 */
const getButtonType = (): string => {
  return props.defaultValue.includes(`{`) && props.defaultValue.includes(`}`) && props.defaultValue !== `{//}`
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
  const buttonWithoutBraces = props.defaultValue.replace(`{`, ``).replace(`}`, ``);
  let buttonNormalized = ``;

  if (buttonTypeClass !== `standardBtn`) {
    buttonNormalized = ` hg-button-${buttonWithoutBraces}`;
  }

  return `hg-button hg-${buttonTypeClass}${buttonNormalized}`;
};

const buttonClass = ref(``);
buttonClass.value = getButtonClass();
/**
 * Returns the display (label) name for a given button
 * @return {string} The value to display in the button
 */
const getButtonDisplayValue = (value: string): string => {
  return props.display[value] || value;
};

/**
 * Event handlers
 */

const onClick = (evt: Event): void => {
  evt.preventDefault();
  sendButtonEventDebugMessage(`KeyboardButton - ${EKeyboardButtonEvent.CLICK}: ${props.defaultValue}`, evt);
  emit(EKeyboardButtonEvent.CLICK, props.defaultValue);
};

const onKeyDown = (evt: Event): void => {
  evt.preventDefault();
  sendButtonEventDebugMessage(`KeyboardButton - ${EKeyboardButtonEvent.KEY_DOWN}: ${props.defaultValue}`, evt);
  switch (props.defaultValue) {
    case ESpecialButton.ALT.toString():
    case ESpecialButton.ALT_LEFT.toString():
    case ESpecialButton.ALT_RIGHT.toString(): {
      emit(EKeyboardButtonEvent.ALT_CLICKED);
      break;
    }
    case ESpecialButton.BACKSPACE: {
      emit(EKeyboardButtonEvent.BACKSPACE_CLICKED);
      break;
    }
    case ESpecialButton.CAPS: {
      if (isShiftClicked.value) {
        return;
      }
      emit(EKeyboardButtonEvent.CAPS_CLICKED);
      break;
    }
    case ESpecialButton.CTRL.toString():
    case ESpecialButton.CTRL_LEFT.toString():
    case ESpecialButton.CTRL_RIGHT.toString(): {
      emit(EKeyboardButtonEvent.CTRL_CLICKED);
      break;
    }
    case ESpecialButton.SHIFT.toString():
    case ESpecialButton.SHIFT_LEFT.toString():
    case ESpecialButton.SHIFT_RIGHT.toString(): {
      if (isCapsClicked.value) {
        return;
      }
      emit(EKeyboardButtonEvent.SHIFT_CLICKED);
      break;
    }
    default: {
      emit(EKeyboardButtonEvent.KEY_DOWN, props.defaultValue);
    }
  }
  buttonClass.value = `${buttonClass.value} hg-activeButton`;
};

const onKeyUp = (evt: Event): void => {
  evt.preventDefault();
  sendButtonEventDebugMessage(`KeyboardButton - ${EKeyboardButtonEvent.KEY_UP}: ${props.defaultValue}`, evt);
  emit(EKeyboardButtonEvent.KEY_UP, props.defaultValue);
  switch (props.defaultValue) {
    case ESpecialButton.ALT:
    case ESpecialButton.ALT_LEFT:
    case ESpecialButton.ALT_RIGHT: {
      if (isAltClicked.value) {
        return;
      }
      buttonClass.value = getButtonClass();
      break;
    }
    case ESpecialButton.CAPS: {
      if (isCapsClicked.value) {
        return;
      }
      buttonClass.value = getButtonClass();
      break;
    }
    // case ESpecialButton.CTRL:
    // case ESpecialButton.CTRL_LEFT:
    // case ESpecialButton.CTRL_RIGHT:
    case ESpecialButton.SHIFT:
    case ESpecialButton.SHIFT_LEFT:
    case ESpecialButton.SHIFT_RIGHT: {
      if (isShiftClicked.value) {
        return;
      }
      buttonClass.value = getButtonClass();
      break;
    }
    default: {
      buttonClass.value = getButtonClass();
    }
  }
};
</script>

<style lang="scss"></style>
