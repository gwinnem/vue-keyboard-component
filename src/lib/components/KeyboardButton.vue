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
  import { IDisplay } from '@/core/interfaces/display.interfaces';
  import { EKeyboardButtonEvent } from '@/core/enums/keyboardButtonEvents.enum';
  import { ESpecialButton } from '@/core/enums/KeyboardSpecialButton.enum';

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
    if(isCtrlClicked.value || isCapsClicked.value) {
      return;
    }
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
    if(isCtrlClicked.value || isShiftClicked.value || isAltClicked.value) {
      return;
    }
    isCapsClicked.value = newValue;
    if(isCapsClicked.value && props.defaultValue === ESpecialButton.CAPS.toString()) {
      buttonClass.value = `${buttonClass.value} activeButton`;
    } else {
      buttonClass.value = getButtonClass();
    }
  });

  const isCtrlClicked = ref(props.isCtrlClicked);
  watch(() => props.isCtrlClicked, newValue => {
    if(isCapsClicked.value || isAltClicked.value || isShiftClicked.value) {
      return;
    }
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
    if(isCtrlClicked.value || isCapsClicked.value) {
      return;
    }
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
   * Handler for button click event.
   * @param evt Event from the button.
   */
  const onClick = (evt: Event): void => {
    evt.preventDefault();
    emit(EKeyboardButtonEvent.CLICK, props.defaultValue);
  };

  /**
   * Handler for button down event.
   * @param evt Event from the button.
   */
  const onKeyDown = (evt: Event): void => {
    evt.preventDefault();
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
