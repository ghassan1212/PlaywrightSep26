import { test, expect } from '@playwright/test';

test('waitForTimeout basic example', async ({ page }) => {
  await page.goto('https://example.com');

  // Pause for 2 seconds
  await page.waitForTimeout(2000);

  await page.click('button');
});