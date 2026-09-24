/*<!DOCTYPE html>
<img src ="img/logos/Bing.ong"
alt="Bing"> ==$0
*/

import { test, expect } from '@playwright/test';

test('Locate images using getByAltText', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Find by exact alt text
  await expect(page.getByAltText('Bing')).toBeVisible();

  // Store locator and interact
  const Bing = page.getByAltText('Bing');
  await Bing.click();
  
});