const { test, expect } = require('@playwright/test');
const LoginPage = require('../Pages/LoginPage.js');
const NewHomePage = require('../Pages/NewHomePage.js');
const TestData = require('./TestLogin.json');

for (const data of TestData) {

    test(`This script is to test the login success for ${data.username}`, async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        const loginPage = new LoginPage(page);
        const newHomePage = new NewHomePage(page);

        // Login
        await loginPage.loginToApplication(data.usrname, data.password);

        // Assert dashboard URL
        await expect(page).toHaveURL(/.*dashboard.*/);

        // Assert Dashboard header is visible
        await expect(page.locator("//h6[normalize-space()='Dashboard']")).toBeVisible();

        // Logout
        await newHomePage.menu.click();
        await newHomePage.logoutFromApplication();
    });
}