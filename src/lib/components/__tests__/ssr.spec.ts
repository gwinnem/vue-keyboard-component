import { describe, expect, it } from 'vitest';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import Keyboard from '../Keyboard.vue';
import defaultLayout from '../../../core/layouts/default';

describe(`server-side rendering`, () => {
  it(`renders without throwing`, async () => {
    const app = createSSRApp(Keyboard, { keyboardLayout: defaultLayout });

    const html = await renderToString(app);

    expect(html.length).toBeGreaterThan(0);
  });

  it(`includes the labeled group landmark in the server-rendered markup`, async () => {
    const app = createSSRApp(Keyboard, { keyboardLayout: defaultLayout });

    const html = await renderToString(app);

    expect(html).toContain(`aria-label="Virtual keyboard"`);
    expect(html).toContain(`role="group"`);
  });

  it(`renders the theme switch markup server-side too (its onMounted-gated theme detection just doesn't run)`, async () => {
    const app = createSSRApp(Keyboard, { keyboardLayout: defaultLayout, showThemeSwitcher: true });

    const html = await renderToString(app);

    expect(html).toContain(`id="themeSwitch"`);
  });

  it(`renders an RTL layout with the correct dir/lang attributes server-side`, async () => {
    const arabic = (await import(`../../../core/ms-keyboards/ms-Arabic-101`)).default;
    const app = createSSRApp(Keyboard, { keyboardLayout: arabic });

    const html = await renderToString(app);

    expect(html).toContain(`dir="rtl"`);
    expect(html).toContain(`lang="ar"`);
  });
});
