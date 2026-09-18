
const { test, expect } = require('@playwright/test');

test('Get element by text', async ({ page }) => {

    await page.goto('https://www.qa-practice.com/elements/button/simple');

    // getByText('Click') matches multiple elements on this page.
    // Use getByRole() to uniquely identify the button.
    const button = page.getByRole('button', { name: 'Click' });

    // Verify the button is visible
    await expect(button).toBeVisible();

    // Click the button
    await button.click();

});
