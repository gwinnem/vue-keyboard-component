<template>
  <div id="app">
    <Keyboard
      :debug="false"
      :debug-events="false"
      :enable-theme-switcher="true"
      :keyboard-layout="layout"
      :show-layout-selector="true"
      :show-theme-switcher="true" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Keyboard from '../src/lib/components/Keyboard.vue';
  import * as keyboardLayout from '../src/core';
  import { ILayoutItem } from '../src/core/interfaces/layout.interfaces';

  const layout = ref<ILayoutItem>(keyboardLayout.defaultLayout.default);

</script>

<style lang="scss" scoped>
#app {
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: black;
  left: 50%;
  max-width: 850px;
  margin: auto;
  min-width: 420px;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}
</style>
