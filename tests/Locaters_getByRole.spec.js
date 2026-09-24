const { test, expect } = require('@playwright/test');

test('Example: Locate button using getByRole locator.', async ({ page }) => {
  
  await page.goto('https://www.facebook.com/');

  //Locate Login button using getByRole
  await page.getByRole('button', { name: 'Log in' }).click();
});