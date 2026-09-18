const { test, expect } = require('@playwright/test');
const LoginPage = require('../Pages/LoginPage');

test('This script is to test the login success', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const loginPage = new LoginPage(page);

    await loginPage.loginToApplication('Admin', 'admin123');
    
    await expect(page).toHaveURL(/.*dashboard.*/);
});