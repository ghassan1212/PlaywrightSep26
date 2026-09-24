// Define a test block with a description and an asynchronous function
const { test, expect } = require('@playwright/test');

// First Playwright test
test('my first playwright test', async ({ page }) => {

    const url = 'https://www.facebook.com';
    await page.goto(url);

    console.log("The url is", url);

    const title = await page.title();
    console.log("The page title is:", title);

    // Correct assertion
    await expect(page).toHaveTitle(/Facebook/i);
});

// Second Playwright test
test.skip('my second playwright test', async ({ page }) => {

    // Navigate to Google
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/i)

});

// Third Playwright test
test.skip('my third playwright test', async ({ page }) => {

// Navigate to Google
await page.goto('https://www.google.com');
await expect("Ghassan Almuradi").toContain("Ghassan");
});

// Fourth Playwright test
test.skip('my fourth playwright test', async ({ page }) => {

// Navigate to Google
await page.goto('https://www.google.com');
await expect("Ghassan Almuradi".includes("Ghassan")).toBeTruthy()
});
