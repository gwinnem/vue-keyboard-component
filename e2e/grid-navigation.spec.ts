import { expect, test } from '@playwright/test';

test.describe(`grid navigation (roving tabindex)`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();
  });

  test(`only one button is a tab stop at a time - the rest are removed from the Tab order`, async ({ page }) => {
    await expect(page.locator(`button[data-default-value="\`"]`)).toHaveAttribute(`tabindex`, `0`);
    await expect(page.locator(`button[data-default-value="1"]`)).toHaveAttribute(`tabindex`, `-1`);
    await expect(page.locator(`button[data-default-value="{bksp}"]`)).toHaveAttribute(`tabindex`, `-1`);
  });

  test(`ArrowRight moves both the tab stop and real keyboard focus to the next key`, async ({ page }) => {
    const backtick = page.locator(`button[data-default-value="\`"]`);
    const one = page.locator(`button[data-default-value="1"]`);

    await backtick.focus();
    await page.keyboard.press(`ArrowRight`);

    await expect(one).toBeFocused();
    await expect(one).toHaveAttribute(`tabindex`, `0`);
    await expect(backtick).toHaveAttribute(`tabindex`, `-1`);
  });

  test(`ArrowDown moves focus to the same column in the row below`, async ({ page }) => {
    const backtick = page.locator(`button[data-default-value="\`"]`);
    const tab = page.locator(`button[data-default-value="{tab}"]`);

    await backtick.focus();
    await page.keyboard.press(`ArrowDown`);

    await expect(tab).toBeFocused();
  });

  test(`Tab from the keyboard moves focus out of the grid entirely, to the next focusable element on the page`, async ({ page }) => {
    const backtick = page.locator(`button[data-default-value="\`"]`);

    await backtick.focus();
    await page.keyboard.press(`Tab`);

    await expect(backtick).not.toBeFocused();
  });

  test(`clicking a key elsewhere in the grid moves the tab stop there`, async ({ page }) => {
    const eKey = page.locator(`button[data-default-value="e"]`);

    await eKey.click();

    await expect(eKey).toHaveAttribute(`tabindex`, `0`);
    await expect(page.locator(`button[data-default-value="\`"]`)).toHaveAttribute(`tabindex`, `-1`);
  });

  test(`Home and End jump to the first/last key in the current row`, async ({ page }) => {
    const zero = page.locator(`button[data-default-value="0"]`);
    const backtick = page.locator(`button[data-default-value="\`"]`);
    const backspace = page.locator(`button[data-default-value="{bksp}"]`);

    await zero.focus();
    await page.keyboard.press(`Home`);
    await expect(backtick).toBeFocused();

    await page.keyboard.press(`End`);
    await expect(backspace).toBeFocused();
  });
});
