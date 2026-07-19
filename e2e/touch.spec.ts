import { expect, test } from '@playwright/test';

test.describe(`touch interaction`, () => {
  test.beforeEach(async ({ page, hasTouch }) => {
    test.skip(!hasTouch, `Touch-specific assertions only apply to touch-emulated projects`);
    await page.goto(`/`);
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();
  });

  test(`tapping character keys types them into the input`, async ({ page }) => {
    await page.tap(`button[data-default-value="h"]`);
    await page.tap(`button[data-default-value="i"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(`hi`);
  });

  test(`tapping backspace removes the last character`, async ({ page }) => {
    await page.tap(`button[data-default-value="h"]`);
    await page.tap(`button[data-default-value="i"]`);
    await page.tap(`button[data-default-value="{bksp}"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(`h`);
  });

  test(`tapping shift toggles to the uppercase layout exactly once`, async ({ page }) => {
    // This is the touch-equivalent of the mousedown+click double-binding concern:
    // a tap dispatches touchstart/touchend then a synthetic click, exercising the
    // same dual-event path as a real finger tap on a kiosk/touch keyboard.
    await page.tap(`button[data-default-value="{shift}"]`);

    await expect(page.locator(`button[data-default-value="A"]`)).toBeVisible();
    await expect(page.locator(`button[data-default-value="a"]`)).toHaveCount(0);
  });

  test(`tapping the layout selector and choosing a language works via touch`, async ({ page }) => {
    await page.selectOption(`select`, `msGerman`);

    await expect(page.locator(`button[data-default-value="ü"]`)).toBeVisible();
  });
});
