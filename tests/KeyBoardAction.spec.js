const { test, expect } = require('@playwright/test');

test('This script is to test the upload file successfully', async ({ page }) => {

  await page.goto('https://www.google.com');

  await page.locator("textarea[name='q']").fill("Ghassan");

  await page.keyboard.press("Enter");

});