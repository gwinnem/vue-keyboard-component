<template>
  <button
    ref="button"
    aria-disabled="false"
    :class="buttonClass"
    :data-default-value="defaultValue"
    :data-shift-value="shiftValue"
    @click="onClick"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
    @mousedown="onKeyDown"
    @mouseup="onKeyUp">
    {{ getButtonDisplayValue() }}
  </button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import * as defaultKeyboard from '../../core/keyboard-layouts/default-keyboard';
  import { IDisplay } from '../../core/interfaces/display.interfaces';
  import { EKeyboardButtonEvent } from '../../core/enums/keyboardButtonEvents.enum';
  import { ESpecialButton } from '../../core/enums/KeyboardSpecialButton.enum';

  interface IKeyboardButtonProps {
    buttonTheme?: string;
    debug?: boolean;
    debugEvents?: boolean;
    defaultValue?: string;
    display?: IDisplay;
    isAltPressed: boolean;
    isShiftPressed: boolean;
    shiftValue?: string;
  }

  const props = withDefaults(defineProps<IKeyboardButtonProps>(), {
    buttonLayout: undefined,
    buttonTheme: ``,
    defaultValue: ``,
    debug: false,
    debugEvents: false,
    display: undefined,
    isAltPressed: false,
    isShiftPressed: false,
    shiftValue: ``,
  });

  const emit = defineEmits<{
    (event: EKeyboardButtonEvent.CLICK, value: string): void;
    (event: EKeyboardButtonEvent.KEY_DOWN, value: string): void;
    (event: EKeyboardButtonEvent.KEY_UP, value: string): void;
  }>();

  // const sendDebugMessage = (msg: string, obj?: unknown[] | unknown | string): void => {
  //   if(props.debug) {
  //     // eslint-disable-next-line no-console
  //     console.debug(msg, obj);
  //   }
  // };

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

    if(buttonTypeClass !== `standardBtn`) buttonNormalized = ` hg-button-${buttonWithoutBraces}`;

    return `hg-button hg-${buttonTypeClass}${buttonNormalized}`;
  };

  const buttonClass = ref(``);
  buttonClass.value = getButtonClass();
  /**
   * Returns the display (label) name for a given button
   * @return {string} The value to display in the button
   */
  const getButtonDisplayValue = (): string => {
    if(!props.display) {
      return defaultKeyboard.display[props.defaultValue] || props.defaultValue;
    }
    return props.display[props.defaultValue] || props.defaultValue;
  };

  /**
   * Event handlers
   */

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

  const onClick = (evt: Event): void => {
    evt.preventDefault();
    sendButtonEventDebugMessage(`KeyboardButton - ${EKeyboardButtonEvent.CLICK}: ${props.defaultValue}`, evt);
    emit(EKeyboardButtonEvent.CLICK, props.defaultValue);
  };

  const isAltClicked = ref(false);
  const isCapsClicked = ref(false);

  const onKeyDown = (evt: Event): void => {
    evt.preventDefault();
    sendButtonEventDebugMessage(`KeyboardButton - ${EKeyboardButtonEvent.KEY_DOWN}: ${props.defaultValue}`, evt);

    buttonClass.value = `${buttonClass.value} hg-activeButton`;

    emit(EKeyboardButtonEvent.KEY_DOWN, props.defaultValue);

    if(props.defaultValue === ESpecialButton.CAPS.toString()) {
      isCapsClicked.value = !isCapsClicked.value;
      return;
    }

    if(props.defaultValue === ESpecialButton.ALT.toString()
      || props.defaultValue === ESpecialButton.ALT_LEFT.toString()
      || props.defaultValue === ESpecialButton.ALT_RIGHT.toString()) {
      isAltClicked.value = !isAltClicked.value;
    }
  };

  const onKeyUp = (evt: Event): void => {
    evt.preventDefault();
    sendButtonEventDebugMessage(`KeyboardButton - ${EKeyboardButtonEvent.KEY_UP}: ${props.defaultValue}`, evt);

    emit(EKeyboardButtonEvent.KEY_UP, props.defaultValue);

    if(props.defaultValue !== ESpecialButton.CAPS.toString()
      && props.defaultValue !== ESpecialButton.ALT.toString()
      && props.defaultValue !== ESpecialButton.ALT_LEFT.toString()
      && props.defaultValue !== ESpecialButton.ALT_RIGHT.toString()) {
      buttonClass.value = getButtonClass();
      return;
    }
    if(props.defaultValue === ESpecialButton.CAPS.toString() && !isCapsClicked.value) {
      buttonClass.value = getButtonClass();
      return;
    }

    if((props.defaultValue === ESpecialButton.ALT.toString()
      || props.defaultValue === ESpecialButton.ALT_LEFT.toString()
      || props.defaultValue === ESpecialButton.ALT_RIGHT.toString())
      && !isAltClicked.value) {
      buttonClass.value = getButtonClass();
    }
  };
</script>

<style lang="scss"></style>
