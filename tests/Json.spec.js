const { test, expect } = require('@playwright/test');

const TestData = require("./TestData.json");

// Login Playwright test
test('This script is to test the login success', async ({ page }) => {

    const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    await page.goto(url);

//<label>Username</label>	getByLabel('Username')
//placeholder="Enter username"	getByPlaceholder('Enter username')
//name="username"	locator('[name="username"]')
//input id="email" type="text"  placeholder="Enter your email">
//<button>Login</button>	getByRole('button', { name: 'Login' })
//<span>Username</span>   await page.locator('span').getByText('Username');
//await page.getByRole('textbox', { name: 'username' }).fill('Hello');

await page.getByPlaceholder('Username').clear();

await page.getByPlaceholder('Username').fill(TestData.username);

await page.getByPlaceholder('Password').fill(TestData.password);

await page.getByRole('button', { name: 'Login', exact: true }).click();

 // Assert dashboard URL
  await expect(page).toHaveURL(/.*dashboard.*/);

  // Open dropdown and logout
  await page.locator('.oxd-userdropdown-name').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});