const { test, expect } = require('@playwright/test');

// Login Playwright test
test('This script is to test the login success', async ({ page }) => {

    const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    await page.goto(url);

    console.log(page.viewportSize().width);
    console.log(page.viewportSize().height);

//<label>Username</label>	getByLabel('Username')
//placeholder="Enter username"	getByPlaceholder('Enter username')
//name="username"	locator('[name="username"]')
//input id="email" type="text"  placeholder="Enter your email">
//<button>Login</button>	getByRole('button', { name: 'Login' })
//<span>Username</span>   await page.locator('span').getByText('Username');
//await page.getByRole('textbox', { name: 'username' }).fill('Hello');

await page.getByPlaceholder('Username').clear();

await page.getByPlaceholder('Username').fill('Admin');

await page.getByPlaceholder('Password').fill('admin123');


await page.getByRole('button', { name: 'Login', exact: true }).click();


await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

// Open the user dropdown
await page.locator('.oxd-userdropdown-name').click();

// Click Logout
await page.getByRole('menuitem', { name: 'Logout' }).click();

//Take screenshot
//Waits until there are no active network connections for at least 500 milliseconds. 
await page.waitForLoadState('networkidle');
await page.screenshot({ path: './screenshot/Login/PageScreenSho.png', fullPage: true });

});



