import {
  beforeAll, describe, expect, it, vi,
} from 'vitest';
import { nextTick } from 'vue';
import { mount, VueWrapper } from '@vue/test-utils';
import Keyboard from '../Keyboard.vue';
import defaultLayout from '../../../core/layouts/default';
import { ESpecialButton } from '../../../core/enums/KeyboardSpecialButton.enum';
import { ILayoutItem } from '../../../core/interfaces/layout.interfaces';

const mountKeyboard = (props: Record<string, unknown> = {}): VueWrapper => {
  return mount(Keyboard, {
    props: { keyboardLayout: defaultLayout, ...props },
  });
};

const clickButton = async (wrapper: VueWrapper, value: string): Promise<void> => {
  await wrapper.find(`button[data-default-value="${value}"]`).trigger(`click`);
  await nextTick();
};

// Modifier/action keys (shift, caps, ctrl, alt, backspace) emit their action on
// mousedown (see KeyboardButton.vue's onKeyDown, bound to @mousedown). For keys like
// shift, the mousedown toggles internal state, and the *following* click is what
// actually reads that state and switches the layout (see Keyboard.vue's onClick).
// A real mouse click fires both events in sequence, so we simulate both here too.
const pressSpecialKey = async (wrapper: VueWrapper, value: string): Promise<void> => {
  const button = wrapper.find(`button[data-default-value="${value}"]`);
  await button.trigger(`mousedown`);
  await nextTick();
  await button.trigger(`click`);
  await nextTick();
};

describe(`Keyboard`, () => {
  it(`throws when mounted without a keyboardLayout prop`, () => {
    expect(() => mount(Keyboard)).toThrow(`keyboard layout not defined`);
  });

  it(`renders the standard character keys from the given layout`, () => {
    const wrapper = mountKeyboard();

    expect(wrapper.find(`button[data-default-value="a"]`).exists()).toBe(true);
    expect(wrapper.find(`button[data-default-value="q"]`).exists()).toBe(true);
  });

  it(`types a standard character into the input and emits onInputChanged`, async () => {
    const wrapper = mountKeyboard();

    await clickButton(wrapper, `a`);

    expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(`a`);
    expect(wrapper.emitted(`onInputChanged`)).toEqual([[`a`]]);
  });

  it(`appends a space when the space key is clicked`, async () => {
    const wrapper = mountKeyboard();

    await clickButton(wrapper, `a`);
    await clickButton(wrapper, ESpecialButton.SPACE);

    expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(`a `);
  });

  it(`removes the last character and emits onInputChanged when backspacing from the end of the input`, async () => {
    const wrapper = mountKeyboard();

    await clickButton(wrapper, `a`);
    await clickButton(wrapper, `q`);
    await pressSpecialKey(wrapper, ESpecialButton.BACKSPACE);

    expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(`a`);
    expect(wrapper.emitted(`onInputChanged`)?.at(-1)).toEqual([`a`]);
  });

  it(`does nothing when backspacing an empty input`, async () => {
    const wrapper = mountKeyboard();

    await pressSpecialKey(wrapper, ESpecialButton.BACKSPACE);

    expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(``);
    expect(wrapper.emitted(`onInputChanged`)).toBeUndefined();
  });

  it(`removes the character before the caret when backspacing from the middle of the text`, async () => {
    const wrapper = mountKeyboard();
    const input = wrapper.find(`input.keyboard-input`);
    const inputElement = input.element as HTMLInputElement;

    await clickButton(wrapper, `a`);
    await clickButton(wrapper, `b`);
    await clickButton(wrapper, `c`);
    inputElement.setSelectionRange(2, 2);

    await pressSpecialKey(wrapper, ESpecialButton.BACKSPACE);

    expect(inputElement.value).toBe(`ac`);
    expect(wrapper.emitted(`onInputChanged`)?.at(-1)).toEqual([`ac`]);
  });

  it(`switches to the shift layout when the shift key is clicked`, async () => {
    const wrapper = mountKeyboard();

    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(false);

    await pressSpecialKey(wrapper, ESpecialButton.SHIFT);

    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);
    expect(wrapper.find(`button[data-default-value="a"]`).exists()).toBe(false);
  });

  it(`reverts to the default layout when shift is toggled off again`, async () => {
    const wrapper = mountKeyboard();

    await pressSpecialKey(wrapper, ESpecialButton.SHIFT);
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);

    await pressSpecialKey(wrapper, ESpecialButton.SHIFT_LEFT);

    expect(wrapper.find(`button[data-default-value="a"]`).exists()).toBe(true);
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(false);
  });

  it(`reverts to the default layout when caps lock is toggled off again`, async () => {
    const wrapper = mountKeyboard();

    await pressSpecialKey(wrapper, ESpecialButton.CAPS);
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);

    await pressSpecialKey(wrapper, ESpecialButton.CAPS);

    expect(wrapper.find(`button[data-default-value="a"]`).exists()).toBe(true);
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(false);
  });

  it(`ignores the caps key while shift is already active`, async () => {
    const wrapper = mountKeyboard();

    await pressSpecialKey(wrapper, ESpecialButton.SHIFT);
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);

    await pressSpecialKey(wrapper, ESpecialButton.CAPS);

    // Still showing the shift-driven uppercase layout; caps click was a no-op.
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);
  });

  it(`caps lock switches to the uppercase layout and remains active after typing a letter`, async () => {
    const wrapper = mountKeyboard();

    await pressSpecialKey(wrapper, ESpecialButton.CAPS);
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);

    await clickButton(wrapper, `A`);

    expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(`A`);
    // Unlike shift, caps lock should still be showing the uppercase layout.
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);
  });

  it(`ignores the shift key while caps lock is already active`, async () => {
    const wrapper = mountKeyboard();

    await pressSpecialKey(wrapper, ESpecialButton.CAPS);
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);

    await pressSpecialKey(wrapper, ESpecialButton.SHIFT_LEFT);

    // Still showing the caps-driven uppercase layout, unaffected by the shift press.
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);
  });

  it(`clicking ctrl by itself has no layout/text effect (only combinations with another key do)`, async () => {
    const wrapper = mountKeyboard();

    await pressSpecialKey(wrapper, ESpecialButton.CTRL);

    expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(``);
    expect(wrapper.find(`button[data-default-value="a"]`).exists()).toBe(true);
    expect(wrapper.emitted(`onCtrlCombination`)).toBeUndefined();
  });

  it(`pressing enter emits onEnterPressed with the current input value and does not insert text`, async () => {
    const wrapper = mountKeyboard();

    await clickButton(wrapper, `h`);
    await clickButton(wrapper, `i`);
    await clickButton(wrapper, ESpecialButton.ENTER);

    expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(`hi`);
    expect(wrapper.emitted(`onEnterPressed`)).toEqual([[`hi`]]);
  });

  describe(`ctrl+key combinations`, () => {
    it(`emits onCtrlCombination instead of typing the character when a letter is clicked while ctrl is active`, async () => {
      const wrapper = mountKeyboard();

      await pressSpecialKey(wrapper, ESpecialButton.CTRL);
      await clickButton(wrapper, `a`);

      expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(``);
      expect(wrapper.emitted(`onCtrlCombination`)).toEqual([[`a`]]);
      expect(wrapper.emitted(`onInputChanged`)).toBeUndefined();
    });

    it(`emits onCtrlCombination for the space key while ctrl is active, without inserting a space`, async () => {
      const wrapper = mountKeyboard();

      await pressSpecialKey(wrapper, ESpecialButton.CTRL);
      await clickButton(wrapper, ESpecialButton.SPACE);

      expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(``);
      expect(wrapper.emitted(`onCtrlCombination`)).toEqual([[ESpecialButton.SPACE]]);
    });

    it(`does not emit onCtrlCombination for a letter click when ctrl is not active`, async () => {
      const wrapper = mountKeyboard();

      await clickButton(wrapper, `a`);

      expect(wrapper.emitted(`onCtrlCombination`)).toBeUndefined();
      expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(`a`);
    });

    it(`stops intercepting keys as combinations once ctrl is toggled back off`, async () => {
      const wrapper = mountKeyboard();

      await pressSpecialKey(wrapper, ESpecialButton.CTRL);
      await pressSpecialKey(wrapper, ESpecialButton.CTRL);
      await clickButton(wrapper, `a`);

      expect(wrapper.emitted(`onCtrlCombination`)).toBeUndefined();
      expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(`a`);
    });
  });

  describe(`layouts with distinct alt / alt+shift rows`, () => {
    // The sandbox default layout has no dedicated alt/altShift rows (it falls
    // back to the default row), so a layout that defines all of them is needed
    // to exercise the ALT and ALT_SHIFT layoutType branches.
    let bopomofo: typeof defaultLayout;

    beforeAll(async () => {
      bopomofo = (await import(`../../../core/ms-keyboards/ms-Chinese-Bopomofo`)).default;
    });

    it(`switches to the alt layout when alt is clicked`, async () => {
      const wrapper = mountKeyboard({ keyboardLayout: bopomofo });

      await pressSpecialKey(wrapper, ESpecialButton.ALT);

      expect(wrapper.find(`button[data-default-value="q"]`).exists()).toBe(true);
    });

    it(`reverts to the default layout when alt is toggled off again`, async () => {
      const wrapper = mountKeyboard({ keyboardLayout: bopomofo });

      await pressSpecialKey(wrapper, ESpecialButton.ALT);
      expect(wrapper.find(`button[data-default-value="q"]`).exists()).toBe(true);

      await pressSpecialKey(wrapper, ESpecialButton.ALT);

      expect(wrapper.find(`button[data-default-value="q"]`).exists()).toBe(false);
    });

    it(`reaches the ALT_SHIFT branch via the alt case when shift is already active, falling back cleanly when no altShift row exists`, async () => {
      // Uses the plain default layout (not the bopomofo fixture): its default row
      // already contains a {shift} key, so shift can be toggled on before alt is
      // pressed for the first time - this exercises Keyboard.vue's ALT case reaching
      // its `isAltClicked && isShiftClicked` branch, rather than the SHIFT case's.
      // The default layout has no altShift row, so it should fall back to the
      // default row without crashing rather than rendering garbage.
      const wrapper = mountKeyboard();

      await pressSpecialKey(wrapper, ESpecialButton.SHIFT);
      await pressSpecialKey(wrapper, ESpecialButton.ALT);

      expect(wrapper.find(`button[data-default-value="a"]`).exists()).toBe(true);
    });

    it(`switches to the alt+shift layout when both alt and shift are active`, async () => {
      const wrapper = mountKeyboard({ keyboardLayout: bopomofo });

      await pressSpecialKey(wrapper, ESpecialButton.ALT);
      await pressSpecialKey(wrapper, ESpecialButton.SHIFT);

      expect(wrapper.find(`button[data-default-value="Q"]`).exists()).toBe(true);
    });

    it(`falls back to the default row when shift is pressed and the layout has no dedicated shift row`, async () => {
      const layoutWithNoShiftRow: ILayoutItem = {
        layout: { default: [`{shift} a b {shift}`] },
      };
      const wrapper = mountKeyboard({ keyboardLayout: layoutWithNoShiftRow });

      await pressSpecialKey(wrapper, ESpecialButton.SHIFT);

      expect(wrapper.find(`button[data-default-value="a"]`).exists()).toBe(true);
    });

    it(`falls back to the default row when alt is pressed and the layout has no dedicated alt row`, async () => {
      const layoutWithNoAltRow: ILayoutItem = {
        layout: { default: [`{alt} a b {alt}`] },
      };
      const wrapper = mountKeyboard({ keyboardLayout: layoutWithNoAltRow });

      await pressSpecialKey(wrapper, ESpecialButton.ALT);

      expect(wrapper.find(`button[data-default-value="a"]`).exists()).toBe(true);
    });
  });

  it(`ignores the alt key while caps lock is already active`, async () => {
    const wrapper = mountKeyboard();

    await pressSpecialKey(wrapper, ESpecialButton.CAPS);
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);

    await pressSpecialKey(wrapper, ESpecialButton.ALT);

    // The default layout has no dedicated alt row, so if the guard failed this
    // would fall through to layout.default's lowercase row instead of staying on
    // the caps-driven uppercase one.
    expect(wrapper.find(`button[data-default-value="A"]`).exists()).toBe(true);
    expect(wrapper.find(`button[data-default-value="a"]`).exists()).toBe(false);
  });

  it(`updates the rendered layout when the keyboardLayout prop changes after mount`, async () => {
    const wrapper = mountKeyboard();
    expect(wrapper.find(`button[data-default-value="ü"]`).exists()).toBe(false);

    const german = (await import(`../../../core/ms-keyboards/ms-German`)).default;
    await wrapper.setProps({ keyboardLayout: german });

    expect(wrapper.find(`button[data-default-value="ü"]`).exists()).toBe(true);
  });

  describe(`RTL languages`, () => {
    it(`renders ltr by default (the default layout has no lang metadata)`, () => {
      const wrapper = mountKeyboard();

      expect(wrapper.attributes(`dir`)).toBe(`ltr`);
    });

    it(`renders dir="rtl" and the layout's lang attribute for an RTL layout`, async () => {
      const arabic = (await import(`../../../core/ms-keyboards/ms-Arabic-101`)).default;
      const wrapper = mountKeyboard({ keyboardLayout: arabic });

      expect(wrapper.attributes(`dir`)).toBe(`rtl`);
      expect(wrapper.attributes(`lang`)).toBe(`ar`);
    });

    it(`switches direction reactively when the keyboardLayout prop changes to/from an RTL layout`, async () => {
      const wrapper = mountKeyboard();
      expect(wrapper.attributes(`dir`)).toBe(`ltr`);

      const hebrew = (await import(`../../../core/ms-keyboards/ms-Hebrew`)).default;
      await wrapper.setProps({ keyboardLayout: hebrew });

      expect(wrapper.attributes(`dir`)).toBe(`rtl`);

      await wrapper.setProps({ keyboardLayout: defaultLayout });

      expect(wrapper.attributes(`dir`)).toBe(`ltr`);
    });

    it(`switches direction when a layout is selected via the dropdown`, async () => {
      const wrapper = mountKeyboard({ showLayoutSelector: true });
      expect(wrapper.attributes(`dir`)).toBe(`ltr`);

      await wrapper.find(`select`).setValue(`msArabic101`);

      await vi.waitFor(() => {
        expect(wrapper.attributes(`dir`)).toBe(`rtl`);
      });
    });

    it(`ArrowRight moves to the previous button in DOM order (visually rightward, since RTL mirrors row order)`, async () => {
      // Regression test: arrow-key navigation used to always move to the next
      // button in DOM order regardless of direction, so ArrowRight actually moved
      // focus visually leftward on an RTL layout (confirmed via a real browser -
      // pressing it moved focus from x=872 to x=832, i.e. backward).
      const arabic = (await import(`../../../core/ms-keyboards/ms-Arabic-101`)).default;
      const wrapper = mountKeyboard({ keyboardLayout: arabic });
      // Arabic-101's first row is: ذ 1 2 3 ... - so "1" is DOM-order-second.
      await wrapper.find(`button[data-default-value="1"]`).trigger(`keydown`, { key: `ArrowRight` });

      expect(wrapper.find(`button[data-default-value="\u0630"]`).attributes(`tabindex`)).toBe(`0`);
    });

    it(`ArrowLeft moves to the next button in DOM order under RTL`, async () => {
      const arabic = (await import(`../../../core/ms-keyboards/ms-Arabic-101`)).default;
      const wrapper = mountKeyboard({ keyboardLayout: arabic });

      await wrapper.find(`button[data-default-value="\u0630"]`).trigger(`keydown`, { key: `ArrowLeft` });

      expect(wrapper.find(`button[data-default-value="1"]`).attributes(`tabindex`)).toBe(`0`);
    });

    it(`ArrowUp/ArrowDown are unaffected by RTL (vertical order isn't mirrored)`, async () => {
      const arabic = (await import(`../../../core/ms-keyboards/ms-Arabic-101`)).default;
      const wrapper = mountKeyboard({ keyboardLayout: arabic });

      await wrapper.find(`button[data-default-value="\u0630"]`).trigger(`keydown`, { key: `ArrowDown` });

      expect(wrapper.find(`button[data-default-value="{tab}"]`).attributes(`tabindex`)).toBe(`0`);
    });
  });

  it(`passes keyboardTranslation through so consumers can localize the accessible names of special keys`, () => {
    const wrapper = mountKeyboard({
      keyboardTranslation: { [ESpecialButton.BACKSPACE]: `Retour arrière` },
    });

    expect(wrapper.find(`button[data-default-value="{bksp}"]`).attributes(`aria-label`)).toBe(`Retour arrière`);
  });

  it(`applies a layout's own custom display map immediately at mount, not just after a later layout change`, async () => {
    const german = (await import(`../../../core/ms-keyboards/ms-German`)).default;
    const wrapper = mountKeyboard({ keyboardLayout: german });

    // German's display map renders backspace as "⌫" instead of the default layout's "bksp".
    expect(wrapper.find(`button[data-default-value="{bksp}"]`).text()).toBe(`\u232b`);
  });

  it(`selecting a layout from the dropdown lazily loads and applies it`, async () => {
    const wrapper = mountKeyboard({ showLayoutSelector: true });
    expect(wrapper.find(`button[data-default-value="ü"]`).exists()).toBe(false);

    await wrapper.find(`select`).setValue(`msGerman`);

    await vi.waitFor(() => {
      expect(wrapper.find(`button[data-default-value="ü"]`).exists()).toBe(true);
    });
  });

  describe(`physical keyboard input`, () => {
    it(`ignores native keydown on the input by default (usePhysicalKeyboard is false)`, async () => {
      const wrapper = mountKeyboard();

      await wrapper.find(`input.keyboard-input`).trigger(`keydown`, { key: `x` });

      expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(``);
    });

    it(`does not call preventDefault when usePhysicalKeyboard is false, so native browser behavior (typing, caret navigation) is never blocked`, async () => {
      // Regression test: this handler used to call evt.preventDefault() unconditionally,
      // before even checking usePhysicalKeyboard - which silently broke native arrow-key/
      // Home/End caret navigation on the input in a real browser, regardless of this
      // setting. jsdom doesn't simulate real caret movement from key presses, so this is
      // verified by spying on preventDefault directly rather than checking cursor position.
      const wrapper = mountKeyboard();
      const preventDefault = vi.fn();

      await wrapper.find(`input.keyboard-input`).trigger(`keydown`, { key: `ArrowRight`, preventDefault });

      expect(preventDefault).not.toHaveBeenCalled();
    });

    it(`appends the typed key when usePhysicalKeyboard is true`, async () => {
      const wrapper = mountKeyboard({ usePhysicalKeyboard: true });

      await wrapper.find(`input.keyboard-input`).trigger(`keydown`, { key: `x` });

      expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(`x`);
    });

    it(`does not intercept navigation keys even when usePhysicalKeyboard is true, so native caret movement still works`, async () => {
      const wrapper = mountKeyboard({ usePhysicalKeyboard: true });
      const input = wrapper.find(`input.keyboard-input`);

      await input.trigger(`keydown`, { code: `ArrowLeft`, key: `ArrowLeft` });
      await input.trigger(`keydown`, { code: `ArrowRight`, key: `ArrowRight` });
      await input.trigger(`keydown`, { code: `Home`, key: `Home` });
      await input.trigger(`keydown`, { code: `End`, key: `End` });

      // Previously, these would have been inserted as literal text (e.g. "ArrowRight")
      // since navigation keys weren't excluded from the default "insert evt.key" case.
      expect((input.element as HTMLInputElement).value).toBe(``);
    });

    it(`does not insert modifier key names as literal text when usePhysicalKeyboard is true`, async () => {
      const wrapper = mountKeyboard({ usePhysicalKeyboard: true });
      const input = wrapper.find(`input.keyboard-input`);

      await input.trigger(`keydown`, { code: `ShiftLeft`, key: `Shift` });
      await input.trigger(`keydown`, { code: `AltLeft`, key: `Alt` });
      await input.trigger(`keydown`, { code: `ControlLeft`, key: `Control` });

      expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(``);
    });
  });

  it(`inserts nothing for tab by default (disableTab is true)`, async () => {
    const wrapper = mountKeyboard();

    await clickButton(wrapper, ESpecialButton.TAB);

    expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(``);
  });

  it(`inserts spaces for tab when disableTab is false`, async () => {
    const wrapper = mountKeyboard({ disableTab: false });

    await clickButton(wrapper, ESpecialButton.TAB);

    expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(`  `);
  });

  it(`shows the theme switcher by default`, () => {
    const wrapper = mountKeyboard();

    expect(wrapper.findComponent({ name: `ThemeSwitcher` }).exists()).toBe(true);
  });

  it(`hides the theme switcher when showThemeSwitcher is false`, () => {
    const wrapper = mountKeyboard({ showThemeSwitcher: false });

    expect(wrapper.findComponent({ name: `ThemeSwitcher` }).exists()).toBe(false);
  });

  it(`switching the theme switcher to dark applies the dark class to the keyboard`, async () => {
    const wrapper = mountKeyboard();

    await wrapper.find(`#themeSwitch`).setValue(true);

    expect(wrapper.classes()).toContain(`dark`);
  });

  it(`typing directly into the input (not via the virtual keys) updates the bound value`, async () => {
    const wrapper = mountKeyboard();

    await wrapper.find(`input.keyboard-input`).setValue(`typed directly`);

    expect((wrapper.find(`input.keyboard-input`).element as HTMLInputElement).value).toBe(`typed directly`);
  });

  it(`hides the layout selector by default`, () => {
    const wrapper = mountKeyboard();

    expect(wrapper.find(`select`).exists()).toBe(false);
  });

  it(`logs modifier toggles to the console when debug is enabled`, async () => {
    const logSpy = vi.spyOn(console, `log`).mockImplementation(() => undefined);
    const wrapper = mountKeyboard({ debug: true });

    await pressSpecialKey(wrapper, ESpecialButton.SHIFT);

    expect(logSpy).toHaveBeenCalledWith(`[Keyboard]`, `shift toggled`, true);
    logSpy.mockRestore();
  });

  it(`does not log anything when debug is false (the default)`, async () => {
    const logSpy = vi.spyOn(console, `log`).mockImplementation(() => undefined);
    const wrapper = mountKeyboard();

    await pressSpecialKey(wrapper, ESpecialButton.SHIFT);

    expect(logSpy).not.toHaveBeenCalled();
    logSpy.mockRestore();
  });

  it(`shows the layout selector when showLayoutSelector is true`, () => {
    const wrapper = mountKeyboard({ showLayoutSelector: true });

    expect(wrapper.find(`select`).exists()).toBe(true);
  });

  describe(`filtering the layout selector`, () => {
    it(`shows every built-in layout option by default`, () => {
      const wrapper = mountKeyboard({ showLayoutSelector: true });

      expect(wrapper.findAll(`option`).length).toBeGreaterThan(100);
    });

    it(`includeInLayout restricts the option list to only the given layout names`, () => {
      const wrapper = mountKeyboard({
        includeInLayout: [`msGerman`, `msFrench`],
        showLayoutSelector: true,
      });

      // Plus the always-present "Default" option.
      expect(wrapper.findAll(`option`).length).toBe(3);
      expect(wrapper.find(`option[value="msGerman"]`).exists()).toBe(true);
      expect(wrapper.find(`option[value="msFrench"]`).exists()).toBe(true);
      expect(wrapper.find(`option[value="msHebrew"]`).exists()).toBe(false);
    });

    it(`excludeFromLayout hides the given layout names from the option list`, () => {
      const wrapper = mountKeyboard({
        excludeFromLayout: [`msGerman`],
        showLayoutSelector: true,
      });

      expect(wrapper.find(`option[value="msGerman"]`).exists()).toBe(false);
      expect(wrapper.find(`option[value="msFrench"]`).exists()).toBe(true);
    });

    it(`includeInLayout takes precedence when both are given`, () => {
      const wrapper = mountKeyboard({
        excludeFromLayout: [`msFrench`],
        includeInLayout: [`msFrench`],
        showLayoutSelector: true,
      });

      expect(wrapper.find(`option[value="msFrench"]`).exists()).toBe(true);
    });
  });

  describe(`roving tabindex / grid navigation`, () => {
    it(`makes only the first button (row 0, col 0) a tab stop by default`, () => {
      const wrapper = mountKeyboard();

      expect(wrapper.find(`button[data-default-value="\`"]`).attributes(`tabindex`)).toBe(`0`);
      expect(wrapper.find(`button[data-default-value="1"]`).attributes(`tabindex`)).toBe(`-1`);
      expect(wrapper.find(`button[data-default-value="{bksp}"]`).attributes(`tabindex`)).toBe(`-1`);
    });

    it(`moves the tab stop to a button when it's clicked`, async () => {
      const wrapper = mountKeyboard();

      await wrapper.find(`button[data-default-value="e"]`).trigger(`click`);

      expect(wrapper.find(`button[data-default-value="e"]`).attributes(`tabindex`)).toBe(`0`);
      expect(wrapper.find(`button[data-default-value="\`"]`).attributes(`tabindex`)).toBe(`-1`);
    });

    it(`moves real DOM focus (not just the tabindex attribute) when a button is clicked, so arrow-key navigation can continue seamlessly from there`, async () => {
      // Regression test: mousedown's preventDefault (kept to avoid focus-stealing/
      // text-selection) also suppresses the browser's native focus-on-click for
      // buttons, so a click updated the tabindex attribute but never moved real
      // focus - meaning an arrow key pressed right after a click wouldn't work.
      // Uses a modifier key (Shift) rather than a character key: character keys
      // intentionally redirect focus back to the text input afterward (separate,
      // correct, pre-existing behavior), so they wouldn't isolate this fix.
      const wrapper = mount(Keyboard, {
        attachTo: document.body,
        props: { keyboardLayout: defaultLayout },
      });

      await wrapper.find(`button[data-default-value="{shift}"]`).trigger(`click`);

      expect(document.activeElement).toBe(wrapper.find(`button[data-default-value="{shift}"]`).element);
      wrapper.unmount();
    });

    it(`ArrowRight moves the tab stop to the next button in the row`, async () => {
      const wrapper = mountKeyboard();

      await wrapper.find(`button[data-default-value="\`"]`).trigger(`keydown`, { key: `ArrowRight` });

      expect(wrapper.find(`button[data-default-value="1"]`).attributes(`tabindex`)).toBe(`0`);
      expect(wrapper.find(`button[data-default-value="\`"]`).attributes(`tabindex`)).toBe(`-1`);
    });

    it(`ArrowLeft at the start of a row stays in place rather than going negative`, async () => {
      const wrapper = mountKeyboard();

      await wrapper.find(`button[data-default-value="\`"]`).trigger(`keydown`, { key: `ArrowLeft` });

      expect(wrapper.find(`button[data-default-value="\`"]`).attributes(`tabindex`)).toBe(`0`);
    });

    it(`ArrowDown moves the tab stop to the same column in the next row`, async () => {
      const wrapper = mountKeyboard();

      await wrapper.find(`button[data-default-value="\`"]`).trigger(`keydown`, { key: `ArrowDown` });

      // Row 1's first button is {tab}.
      expect(wrapper.find(`button[data-default-value="{tab}"]`).attributes(`tabindex`)).toBe(`0`);
    });

    it(`ArrowUp moves the tab stop back to the same column in the previous row`, async () => {
      const wrapper = mountKeyboard();

      await wrapper.find(`button[data-default-value="\`"]`).trigger(`keydown`, { key: `ArrowDown` });
      await wrapper.find(`button[data-default-value="{tab}"]`).trigger(`keydown`, { key: `ArrowUp` });

      expect(wrapper.find(`button[data-default-value="\`"]`).attributes(`tabindex`)).toBe(`0`);
    });

    it(`Home moves the tab stop to the first button in the current row`, async () => {
      const wrapper = mountKeyboard();

      await wrapper.find(`button[data-default-value="0"]`).trigger(`keydown`, { key: `Home` });

      expect(wrapper.find(`button[data-default-value="\`"]`).attributes(`tabindex`)).toBe(`0`);
    });

    it(`End moves the tab stop to the last button in the current row`, async () => {
      const wrapper = mountKeyboard();

      await wrapper.find(`button[data-default-value="\`"]`).trigger(`keydown`, { key: `End` });

      expect(wrapper.find(`button[data-default-value="{bksp}"]`).attributes(`tabindex`)).toBe(`0`);
    });

    it(`Home/End stay within the current row rather than jumping to a different one`, async () => {
      const wrapper = mountKeyboard();

      await wrapper.find(`button[data-default-value="\`"]`).trigger(`keydown`, { key: `ArrowDown` });
      await wrapper.find(`button[data-default-value="{tab}"]`).trigger(`keydown`, { key: `End` });

      // Row 1 (tab/qwerty row) ends with "#", not row 0's {bksp}.
      expect(wrapper.find(`button[data-default-value="#"]`).attributes(`tabindex`)).toBe(`0`);
    });

    it(`clamps to the shorter row's last column when navigating vertically into it`, async () => {
      const wrapper = mountKeyboard();
      // Only the actual button rows carry data-layout-type (the input's own row
      // shares the plain .keyboard-row class too, which would otherwise shift indices).
      const buttonRows = wrapper.findAll(`.keyboard-row[data-layout-type]`);
      // Row 3 (shift row) is longer than row 4 (ctrl/alt/space/alt/ctrl) below it.
      const row3Buttons = buttonRows.at(3)?.findAll(`button`) ?? [];
      await row3Buttons.at(-1)?.trigger(`click`);

      await wrapper.find(`button[data-default-value="{shiftright}"]`).trigger(`keydown`, { key: `ArrowDown` });

      // Clamped to the last button in the shorter row 4, not off the edge.
      const row4Buttons = buttonRows.at(4)?.findAll(`button`) ?? [];
      expect(row4Buttons.at(-1)?.attributes(`tabindex`)).toBe(`0`);
    });

    it(`moves real DOM focus to the newly active button, not just its tabindex`, async () => {
      const wrapper = mount(Keyboard, {
        attachTo: document.body,
        props: { keyboardLayout: defaultLayout },
      });

      await wrapper.find(`button[data-default-value="\`"]`).trigger(`keydown`, { key: `ArrowRight` });
      await nextTick();

      expect(document.activeElement).toBe(wrapper.find(`button[data-default-value="1"]`).element);
      wrapper.unmount();
    });

    it(`clamps the active position back into range when the layout changes to fewer/shorter rows`, async () => {
      const wrapper = mountKeyboard();
      // Move active position to the last button in the longer row 3.
      const buttonRows = wrapper.findAll(`.keyboard-row[data-layout-type]`);
      const row3Buttons = buttonRows.at(3)?.findAll(`button`) ?? [];
      await row3Buttons.at(-1)?.trigger(`click`);

      const minimalLayout = { layout: { default: [`a b`] } };
      await wrapper.setProps({ keyboardLayout: minimalLayout });

      // Should have been clamped into the new, much shorter single row rather
      // than pointing at a button index that no longer exists.
      expect(wrapper.find(`button[data-default-value="b"]`).attributes(`tabindex`)).toBe(`0`);
    });
  });

  describe(`accessibility`, () => {
    it(`exposes the keyboard as a labeled group`, () => {
      const wrapper = mountKeyboard();

      expect(wrapper.attributes(`role`)).toBe(`group`);
      expect(wrapper.attributes(`aria-label`)).toBe(`Virtual keyboard`);
    });

    it(`describes the arrow-key navigation via a visually-hidden hint, without duplicating the aria-label`, () => {
      const wrapper = mountKeyboard();
      const describedById = wrapper.attributes(`aria-describedby`);

      expect(describedById).toBeTruthy();
      const hint = wrapper.find(`#${describedById}`);
      expect(hint.exists()).toBe(true);
      expect(hint.classes()).toContain(`visually-hidden`);
      expect(hint.text()).toContain(`arrow keys`);
    });

    it(`gives the text input an accessible name`, () => {
      const wrapper = mountKeyboard({ startTypingText: `Type here` });

      expect(wrapper.find(`input.keyboard-input`).attributes(`aria-label`)).toBe(`Type here`);
    });

    it(`associates the layout-selector label with its select via a matching id/for pair`, () => {
      const wrapper = mountKeyboard({ showLayoutSelector: true });

      const label = wrapper.find(`label.select-text`);
      const select = wrapper.find(`select`);

      expect(label.attributes(`for`)).toBe(select.attributes(`id`));
    });
  });
});
