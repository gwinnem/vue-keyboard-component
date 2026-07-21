import { expect, test } from '@playwright/test';

// The component's own breakpoints (src/css/media-queries.scss): <600px, 600-768px,
// 768-992px, 992-1200px, >1200px.
const viewports = [
  { height: 700, name: `mobile (<600px)`, width: 375 },
  { height: 700, name: `small tablet (600-768px)`, width: 650 },
  { height: 800, name: `tablet (768-992px)`, width: 800 },
  { height: 900, name: `small desktop (992-1200px)`, width: 1024 },
  { height: 900, name: `desktop (>1200px)`, width: 1400 },
];

test.describe(`responsive layout`, () => {
  for(const viewport of viewports) {
    test(`renders without horizontal overflow at ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ height: viewport.height, width: viewport.width });
      await page.goto(`/`);
      await expect(page.locator(`input.keyboard-input`)).toBeVisible();

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    });

    test(`keys remain visible and clickable at ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ height: viewport.height, width: viewport.width });
      await page.goto(`/`);
      await expect(page.locator(`input.keyboard-input`)).toBeVisible();

      const aKey = page.locator(`button[data-default-value="a"]`);
      await expect(aKey).toBeVisible();
      await aKey.click();

      await expect(page.locator(`input.keyboard-input`)).toHaveValue(`a`);
    });
  }
});
