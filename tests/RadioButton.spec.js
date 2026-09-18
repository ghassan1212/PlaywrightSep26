import { test, expect } from '@playwright/test';

test('Handle radio button', async ({page}) => {

  await page.goto('https://practice.expandtesting.com/radio-buttons');

  //Check radio button field
  await page.locator("[id='yellow']").check();

  //Assertion to radio button to verify it's checked
  await expect(page.locator("[id='yellow']")).toBeChecked();

  //Assertion to radio button to verify it's unchecked
  expect(await page.locator("[id='blue']").isChecked()).toBeFalsy(); 
});