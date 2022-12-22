<template>
  <div class="toggleWrapper">
    <input
      id="themeSwitch"
      v-model="isDarkMode"
      type="checkbox"/>
    <label
      class="toggle"
      for="themeSwitch">
      <span class="toggle__handler"></span>
    </label>
  </div>
</template>

<script lang="ts" setup>

import {onMounted, ref, watch} from 'vue';

enum ETheme {
  DARK = `dark`,
  LIGHT = `light`,
}

enum EThemeEvent {
  SWITCH = `onThemeSwitched`,
}

const emit = defineEmits<{
  (event: EThemeEvent.SWITCH, value: string): void;
}>();

const isDarkMode = ref(false);

function loadTheme(theme: string) {
  const root = document.querySelector(`:root`);
  if (root) {
    root.setAttribute(`color-scheme`, `${theme}`);
  }
  emit(EThemeEvent.SWITCH, theme);
}

function getCurrentTheme() {
  let theme = window.matchMedia(`prefers-color-scheme: dark`).matches
    ? ETheme.DARK
    : ETheme.LIGHT;
  return theme;
}

function getCurrentThemeFromLocalStorage() {
  let theme = localStorage.getItem(`theme-switcher-value`);
  if (!theme) {
    theme = getCurrentTheme();
    localStorage.setItem(`theme-switcher-value`, theme);
  }
  if (theme === ETheme.DARK.toString()) {
    isDarkMode.value = true;
  } else {
    isDarkMode.value = false;
  }
  return theme;
}

watch(() => isDarkMode.value, newValue => {
  isDarkMode.value = newValue;
  let emitValue = ETheme.LIGHT;
  if (isDarkMode.value) {
    emitValue = ETheme.DARK;
  }
  localStorage.setItem(`theme-switcher-value`, emitValue);
  loadTheme(emitValue);
});

onMounted(() => {
  loadTheme(getCurrentThemeFromLocalStorage());
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
  background-color: #E7DFDFFF;
  border-radius: 84px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggle__handler {
  background-color: #7b89c0;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  display: inline-block;
  height: 22px;
  position: relative;
  left: 2px;
  top: 1px;
  transform: rotate(-45deg);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1;
  width: 22px;
}

input:checked + .toggle {
  background-color: #737070;
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

// X-Small devices (portrait phones, less than 576px)
@media (max-width: 600px) {
  .toggle {
    width: 30px;
    height: 14px;
    border-radius: 84px;
  }

  .toggle__handler {
    border-radius: 50px;
    height: 12px;
    top: -2px;
    width: 12px;
  }

  input:checked + .toggle .toggle__handler {
    transform: translate3d(15px, 0, 0) rotate(0);
  }
}

// Small devices (landscape phones, less than 768px)
@media (min-width: 600px) {
  .toggle {
    width: 40px;
    height: 15px;
    border-radius: 84px;
  }

  .toggle__handler {
    border-radius: 50px;
    height: 12px;
    top: -1.5px;
    width: 12px;
  }

  input:checked + .toggle .toggle__handler {
    transform: translate3d(25px, 0, 0) rotate(0);
  }
}

// Medium devices (tablets, less than 992px)
@media (min-width: 768px) {
  .toggle {
    width: 50px;
    height: 20px;
    border-radius: 84px;
  }

  .toggle__handler {
    border-radius: 50px;
    height: 18px;
    top: 1px;
    width: 19px;
  }

  input:checked + .toggle .toggle__handler {
    transform: translate3d(26px, 0, 0) rotate(0);
  }
}


// Large devices (desktops, less than 1200px)
@media (min-width: 992px) {
  .toggle {
    width: 50px;
    height: 20px;
    border-radius: 84px;
  }

  .toggle__handler {
    border-radius: 50px;
    height: 18px;
    top: 1px;
    width: 19px;
  }

  input:checked + .toggle .toggle__handler {
    transform: translate3d(26px, 0, 0) rotate(0);
  }
}

// X-Large devices (large desktops, less than 1400px)
@media (min-width: 1200px) {
  .toggle {
    width: 50px;
    height: 20px;
    border-radius: 84px;
  }

  .toggle__handler {
    border-radius: 50px;
    height: 18px;
    top: 1px;
    width: 19px;
  }

  input:checked + .toggle .toggle__handler {
    transform: translate3d(26px, 0, 0) rotate(0);
  }
}


</style>
