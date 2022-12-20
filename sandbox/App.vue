<template>
  <div id="app">
    <!--    <input-->
    <!--      class="input"-->
    <!--      placeholder="Type then hit enter to hide the keyboard"-->
    <!--      style="margin-top: 30px;"-->
    <!--      :value="input"-->
    <!--      @click="isKeyboardOpen = true" />-->
    <Keyboard
      :debug="false"
      :debug-events="false"
      :keyboard-layout="layout"
      :show-layout-selector="true" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Keyboard from '../src/lib/components/Keyboard.vue';
  import * as keyboardLayout from '../src/core';
  import { ILayoutItem } from '../src/core/interfaces/layout.interfaces';

  // const isKeyboardOpen = ref<boolean>(true);
  const layout = ref<ILayoutItem>(keyboardLayout.defaultLayout.default);

// const onKeyPress = (button: string): void => {
//   if(button === `{enter}`) {
//     isKeyboardOpen.value = true;
//   }
// };

</script>

<style lang="scss" scoped>
#app {
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 420px;
  max-width: 850px;
  margin: auto;
  width: 50%;
  padding: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
