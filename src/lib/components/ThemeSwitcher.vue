<template>
  <div class="toggleWrapper">
    <input
      id="themeSwitch"
      v-model="isDarkMode"
      type="checkbox" />
    <label
      class="toggle"
      for="themeSwitch">
      <span class="toggle__handler"></span>
    </label>
  </div>
</template>

<script lang="ts" setup>

  import { ref, watch } from 'vue';

  interface IProps {
    initialMode: boolean;
    useLocalStorage: boolean;
  }

  const props = withDefaults(defineProps<IProps>(), {
    initialMode: false,
    useLocalStorage: false,
  });

  const emit = defineEmits<{
    (event: `themeSwitched`, value: string): void;
  }>();

  const isDarkMode = ref(props.initialMode);
  if(props.useLocalStorage) {
    if(localStorage.getItem(`theme-switcher-value`)) {
      const mode = localStorage.getItem(`theme-switcher-value`);
      isDarkMode.value = mode !== `light-mode`;
      if(mode) {
        emit(`themeSwitched`, mode);
      }
    }
  }

  watch(() => isDarkMode.value, newValue => {
    isDarkMode.value = newValue;
    let emitValue = `light-mode`;
    if(isDarkMode.value) {
      emitValue = `dark-mode`;
    }
    if(props.useLocalStorage) {
      localStorage.setItem(`theme-switcher-value`, emitValue);
    }
    emit(`themeSwitched`, emitValue);
  });
</script>

<style lang="scss" scoped>
.toggleWrapper input {
  display: none;
}

.toggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 55px;
  height: 24px;
  background-color: #83D8FF;
  border-radius: 84px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggle:before {
  position: absolute;
  left: -25px;
  top: 7px;
  font-size: 9px;
}

.toggle:after {
  position: absolute;
  right: -24px;
  top: 7px;
  font-size: 9px;
}

.toggle__handler {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 1px;
  left: 2px;
  width: 22px;
  height: 22px;
  background-color: #7b89c0;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);
}

input:checked + .toggle {
  background-color: #0c0c0c;
}

input:checked + .toggle:before {
  color: #749ED7;
}

input:checked + .toggle:after {
  color: #f8faff;
}

input:checked + .toggle .toggle__handler {
  background-color: #c0bcb4;
  transform: translate3d(30px, 0, 0) rotate(0);
}

</style>
