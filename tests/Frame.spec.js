const { test, expect } = require('@playwright/test');

test('Get first frame', async ({ page }) => {

    await page.goto('https://docs.oracle.com/javase/8/docs/api/');

    // Get all frames
    const frames = page.frames();

    // Log frame URLs
    console.log("Total frames:", frames.length);

    const firstFrame = frames[1];   // index 0 is always the main page
    const secondFrame = frames[2];
    const thirdFrame = frames[3];

    console.log("First frame URL:", firstFrame.url());
    console.log("Second frame URL:", secondFrame.url());
    console.log("Third frame URL:", thirdFrame.url());

    // Validate first frame content
    const firstFrameText = await firstFrame.locator('body').innerText();
    console.log("First frame text:", firstFrameText);

    await expect(firstFrame.locator('body')).toContainText('java.applet');
});


