<template>
  <div id="app">
    <Keyboard
      :keyboard-layout="layout"
      :show-layout-selector="true"
      :show-theme-switcher="true"
      @on-ctrl-combination="onCtrlCombination"
      @on-enter-pressed="onEnterPressed" />
    <p data-testid="last-enter-pressed">
      Last Enter value: {{ lastEnterValue ?? `(none yet)` }}
    </p>
    <p data-testid="last-ctrl-combination">
      Last Ctrl combination: {{ lastCtrlCombination ?? `(none yet)` }}
    </p>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Keyboard from '../src/lib/components/Keyboard.vue';
  import defaultLayout from '../src/core/layouts/default';
  import { ILayoutItem } from '../src/core/interfaces/layout.interfaces';

  const layout = ref<ILayoutItem>(defaultLayout);
  const lastEnterValue = ref<string | null>(null);
  const lastCtrlCombination = ref<string | null>(null);

  const onEnterPressed = (value: string): void => {
    lastEnterValue.value = value;
  };

  const onCtrlCombination = (value: string): void => {
    lastCtrlCombination.value = value;
  };
</script>

<style lang="scss" scoped>
#app {
  background: black;
  font-family:
    HelveticaNeue-Light,
    'Helvetica Neue Light',
    'Helvetica Neue',
    Helvetica,
    Arial,
    'Lucida Grande',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  left: 50%;
  margin: auto;
  max-width: 850px;
  min-width: 280px;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}
</style>
