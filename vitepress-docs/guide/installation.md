---
page: true
title: Installation
---

# Installation

## NPM
```
	npm install vue-virtual-keyboard --save
```

## Yarn
```
    yarn add vue-virtual-keyboard
```

## Import the package

The component requires a `keyboard-layout` prop - import one of the built-in
Microsoft keyboard layouts (or your own object matching the `ILayoutItem`
shape) alongside the component itself. Don't forget the stylesheet.

```typescript
import { Keyboard } from 'vue-virtual-keyboard';
import { defaultLayout } from 'vue-virtual-keyboard';
import 'vue-virtual-keyboard/style.css';
```

Add to other Vue components using Options api.

```typescript
import { Keyboard, defaultLayout } from 'vue-virtual-keyboard';
import 'vue-virtual-keyboard/style.css';

export default {
    components: {
        Keyboard,
    },
    data() {
        return {
            layout: defaultLayout.default,
        };
    },
    // ... methods, mounted (), etc.
}
```

```html
<template>
    <Keyboard :keyboard-layout="layout" />
</template>
```

Add to other Vue components using Composition api.

```html
<script setup lang="ts">
  import { ref } from 'vue';
  import { Keyboard, defaultLayout } from 'vue-virtual-keyboard';
  import 'vue-virtual-keyboard/style.css';
  import type { ILayoutItem } from 'vue-virtual-keyboard';

  const layout = ref<ILayoutItem>(defaultLayout.default);
</script>

<template>
  <Keyboard :keyboard-layout="layout" />
</template>
```

## Server-side rendering (Nuxt, etc.)

`Keyboard` doesn't call any browser-only APIs during setup or render, so it won't crash during
server-side rendering. However, its theme detection (system preference + `localStorage`) only runs
after the component mounts on the client, and there is currently no blocking script to apply the
correct theme before the server-rendered HTML paints. If you server-render this component, expect a
brief flash from the default (light) appearance to the user's actual stored/system theme once
client-side JavaScript takes over.

A virtual keyboard has no meaningful content before it's interactive, so the simplest and most
robust option is usually to skip server-rendering it entirely:

```vue
<!-- Nuxt -->
<template>
  <ClientOnly>
    <Keyboard :keyboard-layout="layout" />
  </ClientOnly>
</template>
```

```typescript
// Or, in a plain Vue app using dynamic import with SSR disabled by your framework's convention
const Keyboard = defineAsyncComponent(() => import('vue-virtual-keyboard').then(m => m.Keyboard));
```
