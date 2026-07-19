import { expect, test } from '@playwright/test';

test.describe(`typing`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();
  });

  test(`clicking character keys types them into the input`, async ({ page }) => {
    await page.click(`button[data-default-value="h"]`);
    await page.click(`button[data-default-value="i"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(`hi`);
  });

  test(`space key appends a literal space`, async ({ page }) => {
    await page.click(`button[data-default-value="a"]`);
    await page.click(`button[data-default-value="{space}"]`);
    await page.click(`button[data-default-value="b"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(`a b`);
  });

  test(`backspace removes the last character when the caret is at the end`, async ({ page }) => {
    await page.click(`button[data-default-value="a"]`);
    await page.click(`button[data-default-value="b"]`);
    await page.click(`button[data-default-value="c"]`);
    await page.click(`button[data-default-value="{bksp}"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(`ab`);
  });

  test(`backspace on an empty input does nothing and does not throw`, async ({ page }) => {
    await page.click(`button[data-default-value="{bksp}"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(``);
  });

  test(`repeated backspace clears the input character by character`, async ({ page }) => {
    await page.click(`button[data-default-value="h"]`);
    await page.click(`button[data-default-value="i"]`);
    await page.click(`button[data-default-value="{bksp}"]`);
    await page.click(`button[data-default-value="{bksp}"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(``);

    // A further backspace past empty must not throw or misbehave.
    await page.click(`button[data-default-value="{bksp}"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(``);
  });

  test(`tab key is disabled by default (inserts nothing)`, async ({ page }) => {
    await page.click(`button[data-default-value="a"]`);
    await page.click(`button[data-default-value="{tab}"]`);
    await page.click(`button[data-default-value="b"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(`ab`);
  });

  test(`typing into the middle of existing text inserts at the caret, not just at the end`, async ({ page }) => {
    const input = page.locator(`input.keyboard-input`);

    await page.click(`button[data-default-value="a"]`);
    await page.click(`button[data-default-value="c"]`);
    await input.focus();
    await input.press(`Home`);
    await input.press(`ArrowRight`);
    await page.click(`button[data-default-value="b"]`);

    await expect(input).toHaveValue(`abc`);
  });
});
