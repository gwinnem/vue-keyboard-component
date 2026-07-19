import { expect, test } from '@playwright/test';

test.describe(`modifier keys`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();
  });

  test(`clicking shift switches to the uppercase layout`, async ({ page }) => {
    await expect(page.locator(`button[data-default-value="a"]`)).toBeVisible();

    await page.click(`button[data-default-value="{shift}"]`);

    await expect(page.locator(`button[data-default-value="A"]`)).toBeVisible();
    await expect(page.locator(`button[data-default-value="a"]`)).toHaveCount(0);
  });

  test(`clicking shift twice returns to the lowercase layout`, async ({ page }) => {
    await page.click(`button[data-default-value="{shift}"]`);
    await expect(page.locator(`button[data-default-value="A"]`)).toBeVisible();

    await page.click(`button[data-default-value="{shiftleft}"]`);

    await expect(page.locator(`button[data-default-value="a"]`)).toBeVisible();
  });

  test(`caps lock switches to the uppercase layout and stays on after typing`, async ({ page }) => {
    await page.click(`button[data-default-value="{caps}"]`);
    await expect(page.locator(`button[data-default-value="A"]`)).toBeVisible();

    await page.click(`button[data-default-value="A"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(`A`);
    // Layout should still be uppercase after typing a letter, unlike shift.
    await expect(page.locator(`button[data-default-value="A"]`)).toBeVisible();
  });

  test(`shift and caps lock are mutually exclusive: activating caps while shift is active is ignored`, async ({ page }) => {
    await page.click(`button[data-default-value="{shift}"]`);
    await expect(page.locator(`button[data-default-value="A"]`)).toBeVisible();

    // Caps should be a no-op while shift is already toggled on.
    await page.click(`button[data-default-value="{caps}"]`);
    await page.click(`button[data-default-value="A"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(`A`);
  });

  test(`typed text reflects the alt layout while alt is held active`, async ({ page }) => {
    await page.click(`button[data-default-value="{alt}"]`);

    // The default sandbox layout's alt row includes a backtick key.
    const backtick = page.locator(`button[data-default-value="\`"]`);

    await expect(backtick).toBeVisible();
  });
});

test.describe(`enter and ctrl+key events`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();
  });

  test(`pressing enter surfaces the current value via the onEnterPressed event`, async ({ page }) => {
    await page.click(`button[data-default-value="h"]`);
    await page.click(`button[data-default-value="i"]`);
    await page.click(`button[data-default-value="{enter}"]`);

    await expect(page.getByTestId(`last-enter-pressed`)).toHaveText(`Last Enter value: hi`);
    // Enter never inserts text into the input itself.
    await expect(page.locator(`input.keyboard-input`)).toHaveValue(`hi`);
  });

  test(`ctrl+letter surfaces the combination via onCtrlCombination instead of typing it`, async ({ page }) => {
    await page.click(`button[data-default-value="{ctrl}"]`);
    await page.click(`button[data-default-value="a"]`);

    await expect(page.getByTestId(`last-ctrl-combination`)).toHaveText(`Last Ctrl combination: a`);
    await expect(page.locator(`input.keyboard-input`)).toHaveValue(``);
  });
});

test.describe(`accessibility`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();
  });

  test(`the keyboard is exposed as a labeled group`, async ({ page }) => {
    await expect(page.getByRole(`group`, { name: `Virtual keyboard` })).toBeVisible();
  });

  test(`the text input has an accessible name`, async ({ page }) => {
    await expect(page.getByRole(`textbox`, { name: `Start typing now !` })).toBeVisible();
  });

  test(`special keys are reachable by their accessible name, and toggle keys report aria-pressed`, async ({ page }) => {
    // Both the left and right Shift keys legitimately share the accessible name
    // "Shift" (same as physical keyboards), so disambiguate via the specific key.
    const shiftButton = page.locator(`button[data-default-value="{shift}"]`);

    await expect(shiftButton).toHaveAccessibleName(`Shift`);
    await expect(shiftButton).toHaveAttribute(`aria-pressed`, `false`);

    await shiftButton.click();

    // Once active, the shift-row's left-shift key is rendered as {shiftleft}.
    await expect(page.locator(`button[data-default-value="{shiftleft}"]`)).toHaveAttribute(`aria-pressed`, `true`);
  });

  test(`the theme switch is exposed as a labeled switch, reachable via its visible label`, async ({ page }) => {
    // The switch itself is intentionally visually-hidden-but-accessible (a real
    // screen-reader-perceivable control, styled via an adjacent visible label) -
    // toBeVisible() would be the wrong assertion here. Confirm it's attached and
    // correctly labeled, and that the visible label actually drives it.
    const themeSwitch = page.getByRole(`switch`, { name: `Toggle dark mode` });

    await expect(themeSwitch).toBeAttached();
    await expect(themeSwitch).toHaveAttribute(`aria-checked`, `false`);

    await page.locator(`label.toggle`).click();

    await expect(themeSwitch).toHaveAttribute(`aria-checked`, `true`);
  });
});

test.describe(`keyboard-accessible activation`, () => {
  test.beforeEach(async ({ page, isMobile }) => {
    test.skip(isMobile, `Native keydown/Space activation is a desktop keyboard-navigation concern`);
    await page.goto(`/`);
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();
  });

  test(`activating the shift button via a real keydown (Space) toggles the layout exactly once`, async ({ page, browserName }) => {
    test.skip(browserName === `webkit`, `WebKit does not activate buttons on Space the same way as Chromium/Firefox`);

    // Regression test: KeyboardButton.vue binds the same handler to both
    // @keydown and @mousedown. A native Space/Enter activation on a focused
    // <button> fires keydown *and* a subsequent synthetic click, which risks
    // toggling shift on then immediately back off in a single interaction.
    const shiftButton = page.locator(`button[data-default-value="{shift}"]`);

    await shiftButton.focus();
    await page.keyboard.press(`Space`);

    await expect(page.locator(`button[data-default-value="A"]`)).toBeVisible();
    await expect(page.locator(`button[data-default-value="a"]`)).toHaveCount(0);
  });
});
