import { test, expect } from '@playwright/test';

test('native dropdown examples', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Select by visible text (label)
  await page.locator('#country').selectOption({ label: 'United Kingdom' });

  // Select by value
  await page.locator('#country').selectOption({ value: 'uk' });

  // Select by index (0‑based)
  await page.locator('#country').selectOption({ index: 2 });

  // Assert selected value
  await expect(page.locator('#country')).toHaveValue('uk');
});