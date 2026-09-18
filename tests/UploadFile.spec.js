const { test, expect } = require('@playwright/test');

test('Debug upload', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  console.log("Page loaded");

  await page.locator('#file-upload')
    .setInputFiles('C:\\Play_Test\\Playwright command lines.docx');

  console.log("File attached");

  await page.locator('#file-submit').click();

  console.log("Submit clicked");

  await expect(page.locator('h3')).toHaveText('File Uploaded!');
});