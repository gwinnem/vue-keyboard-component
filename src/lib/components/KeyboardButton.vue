<template>
  <button
    ref="button"
    :class="buttonClass"
    :data-alt-shift-value="altShiftValue"
    :data-alt-value="altValue"
    :data-default-value="defaultValue"
    :data-shift-value="shiftValue"
    @click="onClick"
    @keydown="onKeyDown"
    @mousedown="onKeyDown">
    <span>{{ getButtonDisplayValue(defaultValue) }}</span>
  </button>
</template>

<script lang="ts" setup>
  import { nextTick, ref, watch } from 'vue';
  import { IDisplay } from '../../core/interfaces/display.interfaces';
  import { EKeyboardButtonEvent } from '../../core/enums/keyboardButtonEvents.enum';
  import { ESpecialButton } from '../../core/enums/KeyboardSpecialButton.enum';

  interface IKeyboardButtonProps {
    altShiftValue?: string;
    altValue?: string;
    buttonLayout?: string;
    debugEvents?: boolean;
    defaultValue: string;
    display: IDisplay;
    isAltClicked?: boolean;
    isCapsClicked?: boolean;
    isCtrlClicked?: boolean;
    isShiftClicked?: boolean;
    shiftValue?: string;
  }

  const props = withDefaults(defineProps<IKeyboardButtonProps>(), {
    altShiftValue: undefined,
    altValue: undefined,
    buttonLayout: undefined,
    debugEvents: false,
    defaultValue: ``,
    display: undefined,
    isAltClicked: false,
    isCapsClicked: false,
    isCtrlClicked: false,
    isShiftClicked: false,
    shiftValue: undefined,
  });

  const emit = defineEmits<{
    (event: EKeyboardButtonEvent.ALT_CLICKED): void;
    (event: EKeyboardButtonEvent.BACKSPACE_CLICKED): void;
    (event: EKeyboardButtonEvent.CAPS_CLICKED): void;
    (event: EKeyboardButtonEvent.CLICK, value: string): void;
    (event: EKeyboardButtonEvent.CTRL_CLICKED): void;
    (event: EKeyboardButtonEvent.KEY_DOWN, value: string): void;
    (event: EKeyboardButtonEvent.SHIFT_CLICKED): void;
  }>();

  const sendButtonEventDebugMessage = (msg: string, evt: Event): void => {
    if(!props.debugEvents) return;

    if(evt instanceof KeyboardEvent && (evt as KeyboardEvent).key === props.defaultValue) {
      // eslint-disable-next-line no-console
      console.debug(msg, (evt as KeyboardEvent));
      return;
    }
    if(evt instanceof MouseEvent) {
      // eslint-disable-next-line no-console
      console.debug(msg, (evt as MouseEvent));
      return;
    }
    if(evt instanceof PointerEvent) {
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
  watch(() => props.isAltClicked, newValue => {
    isAltClicked.value = newValue;
    if(isAltClicked.value
      && (props.defaultValue === ESpecialButton.ALT.toString()
        || props.defaultValue === ESpecialButton.ALT_LEFT.toString()
        || props.defaultValue === ESpecialButton.ALT_RIGHT.toString())) {
      buttonClass.value = `${buttonClass.value} activeButton`;
    } else {
      buttonClass.value = getButtonClass();
    }
  });

  const isCapsClicked = ref(props.isCapsClicked);
  watch(() => props.isCapsClicked, newValue => {
    isCapsClicked.value = newValue;
    if(isCapsClicked.value && props.defaultValue === ESpecialButton.CAPS.toString()) {
      buttonClass.value = `${buttonClass.value} activeButton`;
    } else {
      buttonClass.value = getButtonClass();
    }
  });

  const isCtrlClicked = ref(props.isCtrlClicked);
  watch(() => props.isCtrlClicked, newValue => {
    isCtrlClicked.value = newValue;
    if(isCtrlClicked.value
      && (props.defaultValue === ESpecialButton.CTRL.toString()
        || props.defaultValue === ESpecialButton.CTRL_LEFT.toString()
        || props.defaultValue === ESpecialButton.CTRL_RIGHT.toString())) {
      buttonClass.value = `${buttonClass.value} activeButton`;
    } else {
      buttonClass.value = getButtonClass();
    }
  });

  const isShiftClicked = ref(props.isShiftClicked);
  watch(() => props.isShiftClicked, newValue => {
    isShiftClicked.value = newValue;
    if(isShiftClicked.value
      && (props.defaultValue === ESpecialButton.SHIFT.toString()
        || props.defaultValue === ESpecialButton.SHIFT_LEFT.toString()
        || props.defaultValue === ESpecialButton.SHIFT_RIGHT.toString())) {
      buttonClass.value = `${buttonClass.value} activeButton`;
    } else {
      buttonClass.value = getButtonClass();
    }
  });

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
    switch(props.defaultValue) {
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
        if(isShiftClicked.value || isAltClicked.value) {
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
        if(isCapsClicked.value) {
          return;
        }
        emit(EKeyboardButtonEvent.SHIFT_CLICKED);
        break;
      }
      default: {
        emit(EKeyboardButtonEvent.KEY_DOWN, props.defaultValue);
      }
    }
    // buttonClass.value = `${buttonClass.value} activeButton`;
  };
</script>

<style lang="scss"></style>
