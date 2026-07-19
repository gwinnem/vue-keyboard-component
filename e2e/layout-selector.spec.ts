import { expect, test } from '@playwright/test';

test.describe(`layout selector`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();
  });

  test(`switching to German loads the German layout and replaces the rendered keys`, async ({ page }) => {
    // Default (UK/US) layout has 'y' where German (QWERTZ) has 'z' in the same
    // position, and German has a distinctive 'ü' key the default layout lacks.
    await expect(page.locator(`button[data-default-value="ü"]`)).toHaveCount(0);

    await page.selectOption(`select`, `msGerman`);

    // This exercises LayoutHelper.changeLayout's dynamic import() against a real
    // browser + network, not just the module system under Vitest.
    await expect(page.locator(`button[data-default-value="ü"]`)).toBeVisible();
  });

  test(`typing after switching layout uses the newly loaded layout's keys`, async ({ page }) => {
    await page.selectOption(`select`, `msGerman`);
    await expect(page.locator(`button[data-default-value="ü"]`)).toBeVisible();

    await page.click(`button[data-default-value="ü"]`);

    await expect(page.locator(`input.keyboard-input`)).toHaveValue(`ü`);
  });

  test(`switching layout back to default restores the original key set`, async ({ page }) => {
    await page.selectOption(`select`, `msGerman`);
    await expect(page.locator(`button[data-default-value="ü"]`)).toBeVisible();

    await page.selectOption(`select`, `default`);

    await expect(page.locator(`button[data-default-value="ü"]`)).toHaveCount(0);
    await expect(page.locator(`button[data-default-value="a"]`)).toBeVisible();
  });

  test(`switching to an unrelated layout (French) also loads correctly`, async ({ page }) => {
    // French AZERTY has a distinctive 'ç' key that the default UK/US layout lacks.
    await expect(page.locator(`button[data-default-value="ç"]`)).toHaveCount(0);

    await page.selectOption(`select`, `msFrench`);

    await expect(page.locator(`button[data-default-value="ç"]`)).toBeVisible();
  });
});
