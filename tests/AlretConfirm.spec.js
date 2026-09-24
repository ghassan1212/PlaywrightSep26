const { test, expect } = require('@playwright/test');

test('Handle Confirm Alert - Accept', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Handle the confirm dialog
    page.on('dialog', async dialog => {
        console.log('Confirm message:', dialog.message());
        await dialog.accept();   // Click OK
    });

    // Click the JS Confirm button
    await page.locator('button:has-text("Click for JS Confirm")').click();

    // Verify result
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});


test('Handle Confirm Alert - Cancel', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Handle the confirm dialog
    page.on('dialog', async dialog => {
        console.log('Confirm message:', dialog.message());
        await dialog.dismiss();   // Click Cancel
    });

    // Click the JS Confirm button
    await page.locator('button:has-text("Click for JS Confirm")').click();

    // Verify result
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});