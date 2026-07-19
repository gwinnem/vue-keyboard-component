---
aside: false
page: true
title: Examples
---

# Examples

A live, interactive version of this component - the same setup used in this repo's own
`sandbox/App.vue` demo app (layout selector and theme switcher both enabled). Try switching
languages, toggling shift/caps, or flipping the theme.

<ClientOnly>
  <Keyboard
    :keyboard-layout="layout"
    :show-layout-selector="true"
    :show-theme-switcher="true"
    @on-ctrl-combination="onCtrlCombination"
    @on-enter-pressed="onEnterPressed" />
  <p v-if="lastEnterValue" class="example-event-log">
    Last Enter value: <code>{{ lastEnterValue }}</code>
  </p>
  <p v-if="lastCtrlCombination" class="example-event-log">
    Last Ctrl combination: <code>{{ lastCtrlCombination }}</code>
  </p>
</ClientOnly>

This is only rendered on the client (via VitePress's [`<ClientOnly>`](https://vitepress.dev/guide/ssr-compat)
wrapper) rather than server-rendered, for the same reason described in the
[SSR section of the installation guide](./installation.md#server-side-rendering-nuxt-etc):
a virtual keyboard has no meaningful content before it's interactive.

## Source

```html
<script setup lang="ts">
import { ref } from 'vue';
import { Keyboard, defaultLayout } from 'vue-virtual-keyboard';
import 'vue-virtual-keyboard/style.css';
import type { ILayoutItem } from 'vue-virtual-keyboard';

const layout = ref<ILayoutItem>(defaultLayout.default);

const onEnterPressed = (value: string) => {
  console.log('Enter pressed with value:', value);
};

const onCtrlCombination = (value: string) => {
  console.log('Ctrl combination:', value);
};
</script>

<template>
  <Keyboard
    :keyboard-layout="layout"
    :show-layout-selector="true"
    :show-theme-switcher="true"
    @on-enter-pressed="onEnterPressed"
    @on-ctrl-combination="onCtrlCombination" />
</template>
```

See [Component props](../api/types-layout.md) for the full prop and event list, and
[Installation](./installation.md) for Options API usage.

<script setup lang="ts">
import { ref } from 'vue';
import Keyboard from '../../src/lib/components/Keyboard.vue';
import defaultLayout from '../../src/core/layouts/default';
import type { ILayoutItem } from '../../src/core/interfaces/layout.interfaces';

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

<style>
.example-event-log {
  font-size: 0.9em;
  opacity: 0.8;
}
</style>
