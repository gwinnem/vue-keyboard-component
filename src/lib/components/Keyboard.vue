<template>
  <input
    ref="keyboardInput"
    class="keyboard-input"
    placeholder="Start typing now !"
    style="margin-top: 50px;"
    @keydown="onInputKeyDown" />
  <div class="hg-theme-default hg-layout-default">
    <div class="hg-rows">
      <div
        v-for="(row, rowIndex) in keyboardPreview"
        :key="rowIndex"
        class="hg-row"
        :data-layout-type="layoutType">
        <KeyboardButton
          v-for="(button, buttonIndex) in getRowOfButtons(row)"
          :key="buttonIndex"
          :button-value="button"
          :default-value="button"
          :debug="true"
          :display="defaultDisplay.display"
          :is-alt-pressed="false"
          :is-shift-pressed="false"
          :shift-value="button"
          @onButtonClick="onClick" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import KeyboardButton from './KeyboardButton.vue';
  import { ILayoutItem } from '../../core/interfaces/layout.interfaces';
  import * as defaultLayout from '../../core/layouts/default';
  import * as defaultDisplay from '../../core/keyboard-layouts/default-keyboard';
  import { ESpecialButton } from '../../core/enums/KeyboardSpecialButton.enum';
  import { EKeyboardLayoutType } from '../../core/enums/keyboardLayoutTypes.enum';
  import {IDisplay} from "../../core/interfaces/display.interfaces";

  interface IKeyboardProps {
    debug?: boolean;
    debugEvents?: boolean;
    excludeFromLayout?: string[];
    includeInLayout?: string[];
    keyBoardDisplay?: IDisplay;
    keyboardLayout?: ILayoutItem;
    showLayoutSelector: boolean;
  }

  const props = withDefaults(defineProps<IKeyboardProps>(), {
    debug: false,
    debugEvents: false,
    excludeFromLayout: undefined,
    includeInLayout: undefined,
    keyBoardDisplay: undefined,
    keyboardLayout: undefined,
    showLayoutSelector: false,
  });

  const sendDebugMessage = (msg: string, obj?: object | string): void => {
    if(!props.debug) {
      return;
    }
    console.debug(msg, obj);
  }

  const onInputKeyDown = (evt: Event): void => {
    if(evt instanceof PointerEvent) {
      return;
    }
    sendDebugMessage(`Keyboard - onInputKeyDown`, evt)
  };

  const layout = ref<ILayoutItem>(defaultLayout.default);
  if(props.keyboardLayout) {
    layout.value = props.keyboardLayout;
  }
  const getKeyboardDisplay = (value: string): string[] => {
    sendDebugMessage(`Keyboard - getKeyboardDisplay`, value);
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
        if(layout.value.layout.altShift){
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
  keyboardPreview.value = getKeyboardDisplay(layoutType.value);
  sendDebugMessage(`Keyboard - keyboardPreview`, keyboardPreview.value);

  watch(() => props.keyboardLayout, (newValue) => {
    if(newValue) {
      layout.value = newValue;
    }
    keyboardPreview.value = getKeyboardDisplay(EKeyboardLayoutType.DEFAULT);
  });
  const isShiftClicked = ref(false);
  const isCapsClicked = ref(false);
  const isAltClicked = ref(false);

  /**
   * Converts the row string to a string[]
   * @param value {string} Space separated list of button types.
   * @return string[] An array of buttons.
   */
  const getRowOfButtons = (value: string): string[] => {
    sendDebugMessage(`Keyboard - getRowOfButtons`, value);
    return value.split(` `);
  };

  /**
   * Event handler for the KeyboardButton onButtonClick event.
   * @param value {string}
   */
  const onClick = (value: string): void => {
    switch(value) {
      case ESpecialButton.CAPS: {
        isCapsClicked.value = !isCapsClicked.value;
        if(isCapsClicked.value) {
          layoutType.value = EKeyboardLayoutType.SHIFT;
        } else {
          layoutType.value = EKeyboardLayoutType.DEFAULT;
        }
        keyboardPreview.value = getKeyboardDisplay(layoutType.value);
        break;
      }
      case ESpecialButton.SHIFT:
      case ESpecialButton.SHIFT_LEFT:
      case ESpecialButton.SHIFT_RIGHT: {
        isShiftClicked.value = !isShiftClicked.value;
        if(isShiftClicked.value) {
          layoutType.value = EKeyboardLayoutType.SHIFT;
        } else {
          layoutType.value = EKeyboardLayoutType.DEFAULT;
        }
        keyboardPreview.value = getKeyboardDisplay(layoutType.value);
        break;
      }
      case ESpecialButton.ALT:
      case ESpecialButton.ALT_LEFT:
      case ESpecialButton.ALT_RIGHT: {
        isAltClicked.value = !isAltClicked.value;
        if(isAltClicked.value) {
          layoutType.value = EKeyboardLayoutType.ALT;
        } else {
          layoutType.value = EKeyboardLayoutType.DEFAULT;
        }
        keyboardPreview.value = getKeyboardDisplay(layoutType.value);
        break;
      }
      case ESpecialButton.CTRL:
      case ESpecialButton.CTRL_LEFT:
      case ESpecialButton.CTRL_RIGHT: {
        // TODO Implement at some later time
        break;
      }
      default: {
        // We do nothing
      }
    }
  };
</script>

<style lang="scss">
@import "../../css/Keyboard.css";

/*
  Styling function buttons
*/
.hg-button-alt {
  max-width: 70px;
}

.hg-button-altleft {
  max-width: 70px;
}

.hg-button-altright {
  max-width: 70px;
}

.hg-button-ctrl {
  max-width: 80px;
}

.hg-button-ctrlleft {
  max-width: 80px;
}

.hg-button-ctrlleft span {
  text-align: left;
  width: 100%;
}

.hg-button-ctrlright {
  max-width: 80px;
}

.hg-button-ctrlright span {
  text-align: right;
  width: 100%;
}

.hg-button-shift {
  max-width: 70px;
  min-width: 60px;
}

.hg-button-shiftleft {
  max-width: 70px;
  min-width: 60px;
}

.hg-button-shiftleft span {
  text-align: left;
  width: 100%;
}

.hg-button-shiftright {
  max-width: 80px;
  min-width: 70px;
}

.hg-button-shiftright span {
  text-align: right;
  width: 100%;
}

.hg-button-tab {
  max-width: 90px;
  min-width: 80px;
}

.hg-button-tab span {
  text-align: left;
  width: 100%;
}

/*
  Theme: darkTheme
*/
.darkTheme {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 5px 5px;
}

.darkTheme .hg-button {
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  height: 50px;
  justify-content: center;
}

.darkTheme .hg-button.hg-activeButton {
  background: #1c4995;
}
.darkTheme .hg-button.hg-button-hold {
  background: #ffffff;
  color: black;
}
</style>
