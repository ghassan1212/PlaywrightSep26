import { test, expect } from '@playwright/test';

test('waitForLoadState basic example', async ({ page }) => {
  await page.goto('https://example.com');

  // Wait for full page load (images, scripts, CSS)
  await page.waitForLoadState('load');

  // Now interact safely
  await expect(page.getByRole('heading')).toBeVisible();
});