const { test, expect } = require('@playwright/test');

test('getByTitle example', async ({ page }) => {

    await page.goto('https://www.google.com');

    const element = page.getByTitle('Google');

    console.log('Number of matching elements:',
        await element.count()
    );

});