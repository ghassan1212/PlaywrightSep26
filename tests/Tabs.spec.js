const { test, expect } = require('@playwright/test');

test('Open Facebook in new tab', async ({ browser }) => {

    const context = await browser.newContext({
        ignoreHTTPSErrors: true
    });

    const page = await context.newPage();

    await page.goto(
        'https://freelance-learn-automation.vercel.app/login',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    // Find Facebook links
    const facebookLink = page.locator('a[href*="facebook"]');

    // Check how many Facebook links were found
    console.log(
        'Facebook links found:',
        await facebookLink.count()
    );

    // Click the first Facebook link and wait for the new tab
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        facebookLink.first().click()
    ]);

    await newPage.waitForLoadState('domcontentloaded');

    console.log('New tab URL:', newPage.url());

});

