const { test, expect } = require('@playwright/test');

test('Script Step by Step', async ({ page }) => {
    await test.step('STEP 1 - Open Facebook', async () => {
        await page.goto('https://facebook.com');
    });

    await test.step('STEP 2 - Prepare data', async () => {
        const username = 'testuser';
        console.log(username);
    });

    await test.step('STEP 3 - Calculate', async () => {
        const result = 10 + 20;
        expect(result).toBe(30);
    });

    await test.step('STEP 4 - Verify title', async () => {
        await page.goto('https://facebook.com');
        await expect(page).toHaveTitle(/Facebook/i);
      
//Take a screenshot of the facebook page
await page.screenshot({path: 'screenshot/Login/facebook.png',fullPage: true});
    });
});