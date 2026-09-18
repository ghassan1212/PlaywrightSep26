const { test, expect } = require('@playwright/test');

test('Allure screenshot test', async ({ page }, testInfo) => {
    await page.goto('https://www.google.com');

    try {
        await expect(page).toHaveTitle('This title is intentionally wrong');
    } catch (error) {

        const screenshot = await page.screenshot();

        await testInfo.attach('Failure Screenshot', {
            body: screenshot,
            contentType: 'image/png'
        });

        throw error;
    }
});