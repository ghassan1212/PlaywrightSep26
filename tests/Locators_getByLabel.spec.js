// Install Playwright first: npm install @playwright/test
const { test, expect } = require('@playwright/test');

test('fill input using getByLabel', async ({ page }) => {
  // Load a sample HTML form
  await page.setContent(`
<form>
      <label for="email">Email address</label>
      <input id="email" type="email" name="email" />
      
      <label>
        Password
        <input type="password" name="password" />
      </label>
      
      <button type="submit">Submit</button>
    </form>
  `);

  // Locate by label text and fill values
  await page.getByLabel('Email address').fill('user@example.com');
  await page.getByLabel('Password').fill('secret123');

  // Verify the values
  await expect(page.locator('#email')).toHaveValue('user@example.com');
  await expect(page.locator('input[type="password"]')).toHaveValue('secret123');
});
