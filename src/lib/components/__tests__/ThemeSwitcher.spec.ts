import {
  afterEach, beforeEach, describe, expect, it, vi,
} from 'vitest';
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import ThemeSwitcher from '../ThemeSwitcher.vue';

const setMatchMediaPrefersDark = (prefersDark: boolean): void => {
  window.matchMedia = vi.fn().mockImplementation(query => ({
    addEventListener: vi.fn(),
    addListener: vi.fn(),
    dispatchEvent: vi.fn(),
    matches: prefersDark,
    media: query,
    onchange: null,
    removeEventListener: vi.fn(),
    removeListener: vi.fn(),
  }));
};

describe(`ThemeSwitcher`, () => {
  beforeEach(() => {
    localStorage.clear();
    document.querySelector(`:root`)?.removeAttribute(`color-scheme`);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it(`falls back to the light theme when the system prefers light and nothing is stored`, async () => {
    setMatchMediaPrefersDark(false);
    const wrapper = mount(ThemeSwitcher);
    await nextTick();

    expect(localStorage.getItem(`theme-switcher-value`)).toBe(`light`);
    expect((wrapper.find(`#themeSwitch`).element as HTMLInputElement).checked).toBe(false);
  });

  it(`falls back to the dark theme when the system prefers dark and nothing is stored`, async () => {
    setMatchMediaPrefersDark(true);
    const wrapper = mount(ThemeSwitcher);
    await nextTick();

    expect(localStorage.getItem(`theme-switcher-value`)).toBe(`dark`);
    expect((wrapper.find(`#themeSwitch`).element as HTMLInputElement).checked).toBe(true);
  });

  it(`uses the previously stored theme instead of the system preference when one exists`, async () => {
    setMatchMediaPrefersDark(false);
    localStorage.setItem(`theme-switcher-value`, `dark`);

    const wrapper = mount(ThemeSwitcher);
    await nextTick();

    expect((wrapper.find(`#themeSwitch`).element as HTMLInputElement).checked).toBe(true);
  });

  it(`sets the color-scheme attribute on the document root on mount`, async () => {
    setMatchMediaPrefersDark(true);
    mount(ThemeSwitcher);
    await nextTick();

    expect(document.querySelector(`:root`)?.getAttribute(`color-scheme`)).toBe(`dark`);
  });

  it(`emits onThemeSwitched with the initial theme on mount`, async () => {
    setMatchMediaPrefersDark(true);
    const wrapper = mount(ThemeSwitcher);
    await nextTick();

    // Quirk: resolving to a dark starting theme changes isDarkMode.value from its
    // initial `false`, which also triggers the already-registered watcher on top of
    // onMounted's own call - so this emits twice with the same (harmless) value.
    expect(wrapper.emitted(`onThemeSwitched`)).toEqual([[`dark`], [`dark`]]);
  });

  it(`toggling the checkbox switches to dark, updates localStorage, and emits the change`, async () => {
    setMatchMediaPrefersDark(false);
    const wrapper = mount(ThemeSwitcher);
    await nextTick();

    await wrapper.find(`#themeSwitch`).setValue(true);

    expect(localStorage.getItem(`theme-switcher-value`)).toBe(`dark`);
    expect(document.querySelector(`:root`)?.getAttribute(`color-scheme`)).toBe(`dark`);
    expect(wrapper.emitted(`onThemeSwitched`)?.at(-1)).toEqual([`dark`]);
  });

  it(`toggling the checkbox back off switches to light and updates localStorage`, async () => {
    setMatchMediaPrefersDark(true);
    const wrapper = mount(ThemeSwitcher);
    await nextTick();

    await wrapper.find(`#themeSwitch`).setValue(false);

    expect(localStorage.getItem(`theme-switcher-value`)).toBe(`light`);
    expect(document.querySelector(`:root`)?.getAttribute(`color-scheme`)).toBe(`light`);
    expect(wrapper.emitted(`onThemeSwitched`)?.at(-1)).toEqual([`light`]);
  });

  describe(`accessibility`, () => {
    it(`gives the toggle a real accessible name (the visible label wraps a decorative, textless icon)`, () => {
      setMatchMediaPrefersDark(false);
      const wrapper = mount(ThemeSwitcher);

      expect(wrapper.find(`#themeSwitch`).attributes(`aria-label`)).toBe(`Toggle dark mode`);
    });

    it(`exposes it as a switch with an aria-checked state that reflects the current theme`, async () => {
      setMatchMediaPrefersDark(false);
      const wrapper = mount(ThemeSwitcher);
      await nextTick();
      const input = wrapper.find(`#themeSwitch`);

      expect(input.attributes(`role`)).toBe(`switch`);
      expect(input.attributes(`aria-checked`)).toBe(`false`);

      await input.setValue(true);

      expect(input.attributes(`aria-checked`)).toBe(`true`);
    });
  });

  describe(`SSR-adjacent environments (missing browser globals)`, () => {
    it(`does not throw when localStorage is unavailable, and falls back to the system/light theme`, async () => {
      setMatchMediaPrefersDark(false);
      vi.stubGlobal(`localStorage`, undefined);

      expect(() => mount(ThemeSwitcher)).not.toThrow();
      await nextTick();

      vi.unstubAllGlobals();
    });

    it(`does not throw and defaults to light when matchMedia is unavailable and nothing is stored`, async () => {
      vi.stubGlobal(`matchMedia`, undefined);

      const wrapper = mount(ThemeSwitcher);
      await nextTick();

      expect((wrapper.find(`#themeSwitch`).element as HTMLInputElement).checked).toBe(false);

      vi.unstubAllGlobals();
      setMatchMediaPrefersDark(false);
    });
  });
});
