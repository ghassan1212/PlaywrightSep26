import { test, expect } from '@playwright/test';

test('waitForSelector basic example', async ({ page }) => {
  await page.goto('https://example.com');

  // Wait until the element is visible in the DOM
  await page.waitForSelector('#login-button', { state: 'visible' });

  // Now it is safe to interact
  await page.click('#login-button');
});