import { test, expect } from '@playwright/test';

test('Handle input box', async ({page}) => {

  await page.goto('https://demoqa.com/text-box');

  //Assertion in inputbox
  await expect(page.locator("[id='userName']")).toBeVisible();
  await expect(page.locator("[id='userName']")).toBeEmpty();
  await expect(page.locator("[id='userName']")).toBeEditable();
  await expect(page.locator("[id='userName']")).toBeEnabled();

  // Entering value in inputbox
  await page.locator("[id='userName']").fill("Sumit Kumar");

  //Check entered value.
  await expect(page.locator("[id='userName']")).toHaveValue("Sumit Kumar");
 
});