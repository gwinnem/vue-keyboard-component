import { expect, test } from '@playwright/test';

test.describe(`visual regression @visual`, () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== `chromium`, `Visual baselines are only maintained for the chromium project, to avoid a per-project snapshot set for a component with no complex rendering.`);
    await page.goto(`/`);
    await expect(page.locator(`input.keyboard-input`)).toBeVisible();
  });

  test(`default keyboard (light theme)`, async ({ page }) => {
    await expect(page).toHaveScreenshot(`keyboard-default-light.png`);
  });

  test(`dark theme`, async ({ page }) => {
    await page.click(`label.toggle`);
    // Theme application updates a DOM attribute synchronously via a watcher; give
    // the browser a frame to repaint before capturing.
    await page.waitForTimeout(100);

    await expect(page).toHaveScreenshot(`keyboard-dark-theme.png`);
  });

  test(`shift-active (uppercase) layout`, async ({ page }) => {
    await page.click(`button[data-default-value="{shift}"]`);

    await expect(page).toHaveScreenshot(`keyboard-shift-active.png`);
  });

  test(`German layout, loaded via the layout selector`, async ({ page }) => {
    await page.selectOption(`select`, `msGerman`);
    await expect(page.locator(`button[data-default-value="ü"]`)).toBeVisible();

    await expect(page).toHaveScreenshot(`keyboard-german-layout.png`);
  });
});
