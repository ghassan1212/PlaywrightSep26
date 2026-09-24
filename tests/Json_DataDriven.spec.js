const { test, expect } = require('@playwright/test');

const TestData = require("./TestLogin.json");

test.describe('Data-driven login tests', () => {

  for (const data of TestData) {

    test(`Login with username ${data.username}`, async ({ page }) => {
        
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      await page.getByPlaceholder('Username').fill(data.username);
      await page.getByPlaceholder('Password').fill(data.password);

      await page.getByRole('button', { name: 'Login' }).click();

      if (data.username === "Admin") {
        await expect(page).toHaveURL(/.*dashboard.*/);
        await page.locator('.oxd-userdropdown-name').click();
        await page.getByRole('menuitem', { name: 'Logout' }).click();
      } else {
        await expect(page.locator('.oxd-alert-content')).toContainText('Invalid credentials');
      }
    });
  }
});