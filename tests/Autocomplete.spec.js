
const { test, expect } = require('@playwright/test');

test('Handle Autocomplete using keyboard', async ({ page }) => {

    await page.goto('https://www.google.com');

    // Locate the Google search box
    const searchBox = page.getByRole('combobox', { name: 'Search' });

    // Type text
    await searchBox.fill('playwright');

    // Wait for autocomplete suggestions to appear
    await page.waitForTimeout(1000);

    // Navigate through suggestions using keyboard
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    // Select the highlighted suggestion
    await page.keyboard.press('Enter');

});