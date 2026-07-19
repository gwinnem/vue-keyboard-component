import { defineConfig, devices } from '@playwright/test';

const PORT = 9090;
const baseURL = `http://localhost:${PORT}`;

// Optional escape hatch for restricted-network environments where Playwright's own
// browser CDN (cdn.playwright.dev) is unreachable: point at an already-installed
// Chrome/Chromium binary instead of Playwright's managed download. No effect when unset.
const chromiumExecutablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;

export default defineConfig({
  expect: {
    toHaveScreenshot: {
      // Allow a small amount of anti-aliasing/font-rendering drift across CI runs
      // without masking a genuine visual regression.
      maxDiffPixelRatio: 0.02,
    },
  },
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    {
      name: `chromium`,
      use: {
        ...devices[`Desktop Chrome`],
        launchOptions: chromiumExecutablePath ? { executablePath: chromiumExecutablePath } : {},
      },
    },
    {
      name: `firefox`,
      use: { ...devices[`Desktop Firefox`] },
    },
    {
      name: `webkit`,
      use: { ...devices[`Desktop Safari`] },
    },
    // Kiosk/touch-keyboard usage is a stated goal of this library (see package.json
    // keywords), so a touch-emulated mobile project exercises the mousedown+click
    // interaction path under tap() rather than desktop mouse click().
    {
      name: `mobile-chrome`,
      use: {
        ...devices[`Pixel 7`],
        launchOptions: chromiumExecutablePath ? { executablePath: chromiumExecutablePath } : {},
      },
    },
  ],
  reporter: process.env.CI ? `github` : `html`,
  retries: process.env.CI ? 2 : 0,
  testDir: `./e2e`,
  use: {
    baseURL,
    trace: `on-first-retry`,
  },
  webServer: {
    command: `npm run dev`,
    env: {
      CI: `true`,
    },
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
    url: baseURL,
  },
  workers: process.env.CI ? 1 : undefined,
});
