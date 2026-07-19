import {
  describe, expect, it, vi,
} from 'vitest';
import { mount } from '@vue/test-utils';
import KeyboardButton from '../KeyboardButton.vue';
import { EKeyboardButtonEvent } from '../../../core/enums/keyboardButtonEvents.enum';
import { ESpecialButton } from '../../../core/enums/KeyboardSpecialButton.enum';
import { IDisplay } from '../../../core/interfaces/display.interfaces';

const display: IDisplay = {
  '{bksp}': `bksp`,
  '{caps}': `caps`,
  '{shift}': `shift`,
};

describe(`KeyboardButton`, () => {
  it(`renders the display value for a standard key`, () => {
    const wrapper = mount(KeyboardButton, {
      props: { defaultValue: `a`, display },
    });

    expect(wrapper.text()).toBe(`a`);
  });

  it(`renders buttonLayout as a data attribute for consumer styling/inspection`, () => {
    const wrapper = mount(KeyboardButton, {
      props: { buttonLayout: `wide`, defaultValue: `{space}`, display },
    });

    expect(wrapper.attributes(`data-button-layout`)).toBe(`wide`);
  });

  it(`renders the mapped display label for a special key`, () => {
    const wrapper = mount(KeyboardButton, {
      props: { defaultValue: ESpecialButton.BACKSPACE, display },
    });

    expect(wrapper.text()).toBe(`bksp`);
  });

  it(`applies the standardBtn class to a normal character key`, () => {
    const wrapper = mount(KeyboardButton, {
      props: { defaultValue: `a`, display },
    });

    expect(wrapper.classes()).toContain(`standardBtn`);
  });

  it(`applies the functionBtn class and a per-button modifier class to a special key`, () => {
    const wrapper = mount(KeyboardButton, {
      props: { defaultValue: ESpecialButton.BACKSPACE, display },
    });

    expect(wrapper.classes()).toContain(`functionBtn`);
    expect(wrapper.classes()).toContain(`keyboard-button-bksp`);
  });

  it(`emits onButtonClick with the default value on click`, async () => {
    const wrapper = mount(KeyboardButton, {
      props: { defaultValue: `a`, display },
    });

    await wrapper.trigger(`click`);

    expect(wrapper.emitted(EKeyboardButtonEvent.CLICK)).toEqual([[`a`]]);
  });

  it(`emits onBackspaceClicked on keydown for the backspace key`, async () => {
    const wrapper = mount(KeyboardButton, {
      props: { defaultValue: ESpecialButton.BACKSPACE, display },
    });

    await wrapper.trigger(`keydown`);

    expect(wrapper.emitted(EKeyboardButtonEvent.BACKSPACE_CLICKED)).toHaveLength(1);
  });

  it(`emits onCapsClicked on keydown for the caps key when no other modifier is active`, async () => {
    const wrapper = mount(KeyboardButton, {
      props: { defaultValue: ESpecialButton.CAPS, display },
    });

    await wrapper.trigger(`keydown`);

    expect(wrapper.emitted(EKeyboardButtonEvent.CAPS_CLICKED)).toHaveLength(1);
  });

  it(`does not emit onCapsClicked on keydown when shift is already active`, async () => {
    const wrapper = mount(KeyboardButton, {
      props: { defaultValue: ESpecialButton.CAPS, display, isShiftClicked: true },
    });

    await wrapper.trigger(`keydown`);

    expect(wrapper.emitted(EKeyboardButtonEvent.CAPS_CLICKED)).toBeUndefined();
  });

  it(`emits onButtonDown with the default value on keydown for a standard key`, async () => {
    const wrapper = mount(KeyboardButton, {
      props: { defaultValue: `a`, display },
    });

    await wrapper.trigger(`keydown`);

    expect(wrapper.emitted(EKeyboardButtonEvent.KEY_DOWN)).toEqual([[`a`]]);
  });

  describe(`grid navigation`, () => {
    it(`defaults to tabindex 0 (a normal tab stop) when used standalone`, () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: `a`, display },
      });

      expect(wrapper.attributes(`tabindex`)).toBe(`0`);
    });

    it(`applies a consumer-provided tabindex, for roving-tabindex grid usage`, () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: `a`, display, tabindex: -1 },
      });

      expect(wrapper.attributes(`tabindex`)).toBe(`-1`);
    });

    it.each([`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Home`, `End`])(
      `emits onNavigate with the key instead of acting on the button's own value for %s`,
      async key => {
        const wrapper = mount(KeyboardButton, {
          props: { defaultValue: `a`, display },
        });

        await wrapper.trigger(`keydown`, { key });

        expect(wrapper.emitted(EKeyboardButtonEvent.NAVIGATE)).toEqual([[key]]);
        expect(wrapper.emitted(EKeyboardButtonEvent.KEY_DOWN)).toBeUndefined();
      },
    );

    it(`exposes a focus() method so a parent can move real DOM focus to this button`, () => {
      const wrapper = mount(KeyboardButton, {
        attachTo: document.body,
        props: { defaultValue: `a`, display },
      });

      wrapper.vm.focus();

      expect(document.activeElement).toBe(wrapper.element);
      wrapper.unmount();
    });
  });

  describe(`alt key`, () => {
    it(`emits onAltClicked on keydown when no other modifier is active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.ALT, display },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.ALT_CLICKED)).toHaveLength(1);
    });

    it(`does not emit onAltClicked when caps is already active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.ALT, display, isCapsClicked: true },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.ALT_CLICKED)).toBeUndefined();
    });

    it(`does not emit onAltClicked when ctrl is already active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.ALT, display, isCtrlClicked: true },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.ALT_CLICKED)).toBeUndefined();
    });

    it(`applies the activeButton modifier class when isAltClicked becomes true`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.ALT, display, isAltClicked: false },
      });

      await wrapper.setProps({ isAltClicked: true });

      expect(wrapper.classes()).toContain(`keyboard-button--active`);
    });

    it(`does not apply the activeButton class via the isAltClicked watcher when caps is active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: {
          defaultValue: ESpecialButton.ALT, display, isAltClicked: false, isCapsClicked: true,
        },
      });

      await wrapper.setProps({ isAltClicked: true });

      expect(wrapper.classes()).not.toContain(`keyboard-button--active`);
    });
  });

  describe(`ctrl key`, () => {
    it(`emits onCtrlClicked on keydown when no other modifier is active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.CTRL, display },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.CTRL_CLICKED)).toHaveLength(1);
    });

    it(`does not emit onCtrlClicked when caps is already active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.CTRL, display, isCapsClicked: true },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.CTRL_CLICKED)).toBeUndefined();
    });

    it(`does not emit onCtrlClicked when shift is already active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.CTRL, display, isShiftClicked: true },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.CTRL_CLICKED)).toBeUndefined();
    });

    it(`does not emit onCtrlClicked when alt is already active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.CTRL, display, isAltClicked: true },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.CTRL_CLICKED)).toBeUndefined();
    });

    it(`applies the activeButton modifier class when isCtrlClicked becomes true`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.CTRL, display, isCtrlClicked: false },
      });

      await wrapper.setProps({ isCtrlClicked: true });

      expect(wrapper.classes()).toContain(`keyboard-button--active`);
    });
    it(`does not apply the activeButton class via the isCtrlClicked watcher when caps is active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: {
          defaultValue: ESpecialButton.CTRL, display, isCapsClicked: true, isCtrlClicked: false,
        },
      });

      await wrapper.setProps({ isCtrlClicked: true });

      expect(wrapper.classes()).not.toContain(`keyboard-button--active`);
    });
  });

  describe(`shift key`, () => {
    it(`emits onShiftClicked on keydown when no other modifier is active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.SHIFT, display },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.SHIFT_CLICKED)).toHaveLength(1);
    });

    it(`does not emit onShiftClicked when caps is already active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.SHIFT, display, isCapsClicked: true },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.SHIFT_CLICKED)).toBeUndefined();
    });

    it(`does not emit onShiftClicked when ctrl is already active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.SHIFT, display, isCtrlClicked: true },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.SHIFT_CLICKED)).toBeUndefined();
    });

    it(`applies the activeButton modifier class when isShiftClicked becomes true`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.SHIFT, display, isShiftClicked: false },
      });

      await wrapper.setProps({ isShiftClicked: true });

      expect(wrapper.classes()).toContain(`keyboard-button--active`);
    });

    it(`does not apply the activeButton class via the isShiftClicked watcher when ctrl is active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: {
          defaultValue: ESpecialButton.SHIFT, display, isCtrlClicked: true, isShiftClicked: false,
        },
      });

      await wrapper.setProps({ isShiftClicked: true });

      expect(wrapper.classes()).not.toContain(`keyboard-button--active`);
    });
  });

  describe(`caps key`, () => {
    it(`does not emit onCapsClicked when ctrl is already active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.CAPS, display, isCtrlClicked: true },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.CAPS_CLICKED)).toBeUndefined();
    });

    it(`does not emit onCapsClicked when alt is already active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.CAPS, display, isAltClicked: true },
      });

      await wrapper.trigger(`keydown`);

      expect(wrapper.emitted(EKeyboardButtonEvent.CAPS_CLICKED)).toBeUndefined();
    });

    it(`applies the activeButton modifier class when isCapsClicked becomes true`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.CAPS, display, isCapsClicked: false },
      });

      await wrapper.setProps({ isCapsClicked: true });

      expect(wrapper.classes()).toContain(`keyboard-button--active`);
    });

    it(`does not apply the activeButton class via the isCapsClicked watcher when shift is active`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: {
          defaultValue: ESpecialButton.CAPS, display, isCapsClicked: false, isShiftClicked: true,
        },
      });

      await wrapper.setProps({ isCapsClicked: true });

      expect(wrapper.classes()).not.toContain(`keyboard-button--active`);
    });
  });

  it(`falls back to the raw value when no display mapping exists for it`, () => {
    const wrapper = mount(KeyboardButton, {
      props: { defaultValue: `{unmapped}`, display },
    });

    expect(wrapper.text()).toBe(`{unmapped}`);
  });

  describe(`accessibility`, () => {
    it(`gives special keys a stable aria-label independent of the display glyph`, () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.BACKSPACE, display },
      });

      expect(wrapper.attributes(`aria-label`)).toBe(`Backspace`);
    });

    it(`uses the consumer-provided ariaLabels override instead of the built-in English label when given`, () => {
      const wrapper = mount(KeyboardButton, {
        props: {
          ariaLabels: { [ESpecialButton.BACKSPACE]: `Retour arrière` },
          defaultValue: ESpecialButton.BACKSPACE,
          display,
        },
      });

      expect(wrapper.attributes(`aria-label`)).toBe(`Retour arrière`);
    });

    it(`falls back to the built-in label for keys not present in the ariaLabels override`, () => {
      const wrapper = mount(KeyboardButton, {
        props: {
          ariaLabels: { [ESpecialButton.BACKSPACE]: `Retour arrière` },
          defaultValue: ESpecialButton.ENTER,
          display,
        },
      });

      expect(wrapper.attributes(`aria-label`)).toBe(`Enter`);
    });

    it(`does not set aria-label on a standard character key (its own text is the accessible name)`, () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: `a`, display },
      });

      expect(wrapper.attributes(`aria-label`)).toBeUndefined();
    });

    it(`does not set aria-pressed on non-toggle special keys`, () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.BACKSPACE, display },
      });

      expect(wrapper.attributes(`aria-pressed`)).toBeUndefined();
    });

    it(`reflects the shift toggle state via aria-pressed`, async () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.SHIFT, display, isShiftClicked: false },
      });

      expect(wrapper.attributes(`aria-pressed`)).toBe(`false`);

      await wrapper.setProps({ isShiftClicked: true });

      expect(wrapper.attributes(`aria-pressed`)).toBe(`true`);
    });

    it(`reflects the caps lock toggle state via aria-pressed`, () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: ESpecialButton.CAPS, display, isCapsClicked: true },
      });

      expect(wrapper.attributes(`aria-pressed`)).toBe(`true`);
    });

    it(`has type="button" so it never triggers a native form submission`, () => {
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: `a`, display },
      });

      expect(wrapper.attributes(`type`)).toBe(`button`);
    });

    it(`logs button interactions to the console when debugEvents is enabled`, async () => {
      const logSpy = vi.spyOn(console, `log`).mockImplementation(() => undefined);
      const wrapper = mount(KeyboardButton, {
        props: { debugEvents: true, defaultValue: `a`, display },
      });

      await wrapper.trigger(`click`);

      expect(logSpy).toHaveBeenCalledWith(`[KeyboardButton] click:`, `a`);
      logSpy.mockRestore();
    });

    it(`also logs on keydown when debugEvents is enabled`, async () => {
      const logSpy = vi.spyOn(console, `log`).mockImplementation(() => undefined);
      const wrapper = mount(KeyboardButton, {
        props: { debugEvents: true, defaultValue: `a`, display },
      });

      await wrapper.trigger(`keydown`);

      expect(logSpy).toHaveBeenCalledWith(`[KeyboardButton] keydown:`, `a`);
      logSpy.mockRestore();
    });

    it(`does not log anything when debugEvents is false (the default)`, async () => {
      const logSpy = vi.spyOn(console, `log`).mockImplementation(() => undefined);
      const wrapper = mount(KeyboardButton, {
        props: { defaultValue: `a`, display },
      });

      await wrapper.trigger(`click`);

      expect(logSpy).not.toHaveBeenCalled();
      logSpy.mockRestore();
    });
  });
});
