
const { test, expect } = require('@playwright/test');

test('Handle multiple tabs', async ({ browser }) => {

    // Create browser context
    const context = await browser.newContext();

    // ==========================================
    // TAB 1 - Google
    // ==========================================

    const tab1 = await context.newPage();

    await tab1.goto('https://www.google.com');

    console.log('Tab 1 URL:', tab1.url());

    await expect(tab1).toHaveTitle(/Google/);


    // ==========================================
    // TAB 2 - GitHub
    // ==========================================

    const tab2 = await context.newPage();

    await tab2.goto('https://github.com');

    console.log('Tab 2 URL:', tab2.url());

    await expect(tab2).toHaveTitle(/GitHub/);


    // ==========================================
    // INTERACT WITH TAB 1
    // ==========================================

    await tab1.bringToFront();

    console.log('Working with Tab 1');

    // Use a more flexible locator for Google's search box
    const googleSearch = tab1.getByRole('combobox', {
        name: /search/i
    });

    await googleSearch.fill('Playwright');

    console.log('Search entered in Tab 1');


    // ==========================================
    // INTERACT WITH TAB 2
    // ==========================================

    await tab2.bringToFront();

    console.log('Working with Tab 2');

    // Verify GitHub page
    await expect(tab2).toHaveTitle(/GitHub/);

    // Verify the GitHub heading
    await expect(
        tab2.getByRole('heading', {
            name: /GitHub/
        }).first()
    ).toBeVisible();


    // ==========================================
    // DISPLAY ALL OPEN TABS
    // ==========================================

    const pages = context.pages();

    console.log('Number of open tabs:', pages.length);

    for (let i = 0; i < pages.length; i++) {
        console.log(
            `Tab ${i + 1} URL:`,
            pages[i].url()
        );
    }


    // ==========================================
    // CLOSE TAB 2
    // ==========================================

    await tab2.close();

    console.log('Tab 2 closed');

    console.log(
        'Remaining tabs:',
        context.pages().length
    );


    // ==========================================
    // CLOSE BROWSER CONTEXT
    // ==========================================

    await context.close();

});

