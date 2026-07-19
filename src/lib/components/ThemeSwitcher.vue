<template>
  <div class="toggle-wrapper">
    <input
      id="themeSwitch"
      v-model="isDarkMode"
      :aria-checked="isDarkMode"
      aria-label="Toggle dark mode"
      role="switch"
      type="checkbox" />
    <label
      class="toggle"
      for="themeSwitch">
      <span class="toggle__handler"></span>
    </label>
  </div>
</template>

<script lang="ts" setup>

  import { onMounted, ref, watch } from 'vue';

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

  function loadTheme(theme: string): void {
    if(typeof document !== `undefined`) {
      const root = document.querySelector(`:root`);
      if(root) {
        root.setAttribute(`color-scheme`, `${theme}`);
      }
    }
    emit(EThemeEvent.SWITCH, theme);
  }

  function getCurrentTheme(): string {
    if(typeof window === `undefined` || typeof window.matchMedia !== `function`) {
      return ETheme.LIGHT;
    }
    return window.matchMedia(`prefers-color-scheme: dark`).matches
      ? ETheme.DARK
      : ETheme.LIGHT;
  }

  function getCurrentThemeFromLocalStorage(): string {
    if(typeof localStorage === `undefined`) {
      return getCurrentTheme();
    }
    let theme = localStorage.getItem(`theme-switcher-value`);
    if(!theme) {
      theme = getCurrentTheme();
      localStorage.setItem(`theme-switcher-value`, theme);
    }
    isDarkMode.value = theme === ETheme.DARK.toString();
    return theme;
  }

  watch(() => isDarkMode.value, newValue => {
    isDarkMode.value = newValue;
    let emitValue = ETheme.LIGHT;
    if(isDarkMode.value) {
      emitValue = ETheme.DARK;
    }
    if(typeof localStorage !== `undefined`) {
      localStorage.setItem(`theme-switcher-value`, emitValue);
    }
    loadTheme(emitValue);
  });

  onMounted(() => {
    loadTheme(getCurrentThemeFromLocalStorage());
  });

</script>

<style lang="scss" scoped>
.toggle-wrapper {
  position: relative;
}

.toggle-wrapper input {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.toggle {
  background-color: #e7dfdfff;
  border-radius: 84px;
  cursor: pointer;
  display: inline-block;
  height: 24px;
  position: relative;
  transition: background-color 200ms cubic-bezier(.445, .05, .55, .95);
  width: 55px;
}

.toggle__handler {
  background-color: #7b89c0;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 30%);
  display: inline-block;
  height: 22px;
  left: 2px;
  position: relative;
  top: 1px;
  transform: rotate(-45deg);
  transition: all 400ms cubic-bezier(.68, -.55, .265, 1.55);
  width: 22px;
  z-index: 1;
}

input:checked + .toggle {
  background-color: #737070;
}

input:checked + .toggle:before {
  color: #749ed7;
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
    border-radius: 84px;
    height: 14px;
    width: 30px;
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
    border-radius: 84px;
    height: 15px;
    width: 40px;
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
    border-radius: 84px;
    height: 20px;
    width: 50px;
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
    border-radius: 84px;
    height: 20px;
    width: 50px;
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
    border-radius: 84px;
    height: 20px;
    width: 50px;
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
