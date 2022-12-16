<template>
  <div>
    <div class="simple-keyboard"></div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, watch } from 'vue';
  import Keyboard from './Keyboard';
  import { IDisplay } from '../../core/interfaces/display.interfaces';
  import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

  const props = defineProps({
    display: {
      default: undefined,
      type: Object as () => IDisplay,
    },
    input: {
      default: `input`,
      type: String,
    },
    layout: {
      default: undefined,
      type: Object as () => ILayoutItem,
    },
    layoutName: {
      default: `default`,
      type: String,
    },
    theme: {
      default: `hg-theme-default`,
      type: String,
    },
  });

  const emits = defineEmits([
    `onKeyPress`,
    // `onKeyReleased`,
    `onChange`,
  // `onChangeAll`,
  // `onRender`,
  // `beforeFirstRender`,
  // `beforeRender`,
  // `onInit`,
  ]);

  let keyboard: Keyboard;

  const handleShift = (): void => {
    const currentLayout = keyboard.options.layoutName;
    const shiftToggle = currentLayout === `default` ? `shift` : `default`;

    keyboard.setOptions({
      layoutName: shiftToggle,
    });
  };

  const onChange = (input: string, e: MouseEvent | undefined): void => {
    if(e !== undefined) {
      e.preventDefault();
    }
    emits(`onChange`, input);
  };

  const onKeyPress = (button: string, e: Event | undefined): void => {
    if(e !== undefined) {
      e.preventDefault();
    }
    emits(`onKeyPress`, button);
    if(
      button === `{shift}`
      || button === `{shiftleft}`
      || button === `{shiftright}`
      || button === `{lock}`
      || button === `{caps}`
    ) {
      handleShift();
    }
  };

  onMounted(() => {
    keyboard = new Keyboard({
      ...props.layout,
      debug: false,
      display: props.display,
      layoutName: props.layoutName,
      newLineOnEnter: true,
      onChange,
      onKeyPress,
      physicalKeyboardHighlight: true,
      physicalKeyboardHighlightBgColor: `#9ab4d0`,
      physicalKeyboardHighlightPress: true,
      physicalKeyboardHighlightTextColor: `white`,
      theme: `hg-theme-default`,
      useButtonTag: true,
    });

    keyboard.setInput(props.input);
  });
  watch(
    () => props.display,
    newValue => keyboard.setOptions({ display: newValue }),
  );
  watch(
    () => props.layout,
    newValue => keyboard.setOptions(newValue),
  );
  watch(
    () => props.input,
    newValue => keyboard.setInput(newValue.toString()),
  );
</script>

<style lang="scss">
/* stylelint-disable */
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
.simple-keyboard.darkTheme {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 5px 5px;
}

.simple-keyboard.darkTheme .hg-button {
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  height: 50px;
  justify-content: center;
}

.simple-keyboard.darkTheme .hg-button:active {
  background: #1c4995;
  color: white;
}

#root .simple-keyboard.darkTheme + .simple-keyboard-preview {
  background: #1c4995;
}
</style>
