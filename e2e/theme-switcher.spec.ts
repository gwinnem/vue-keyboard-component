import { expect, test } from '@playwright/test';

test.describe(`theme switcher`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();
  });

  test(`toggling the theme switch changes the root color-scheme attribute`, async ({ page }) => {
    // Real users click the visible styled label, not the (accessibly) visually-hidden
    // checkbox input itself - clicking a <label for="..."> natively toggles its
    // associated form control.
    const root = page.locator(`:root`);
    const toggle = page.locator(`label.toggle`);

    const initialScheme = await root.getAttribute(`color-scheme`);

    await toggle.click();

    await expect(root).not.toHaveAttribute(`color-scheme`, initialScheme ?? ``);
  });

  test(`theme preference persists across a page reload`, async ({ page }) => {
    const root = page.locator(`:root`);
    const toggle = page.locator(`label.toggle`);

    await toggle.click();
    const schemeAfterToggle = await root.getAttribute(`color-scheme`);

    await page.reload();
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();

    await expect(root).toHaveAttribute(`color-scheme`, schemeAfterToggle ?? ``);
  });
});
