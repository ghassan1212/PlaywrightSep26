import { test, expect } from '@playwright/test';

test('Handle checkbox', async ({page}) => {

  await page.goto('https://practice.expandtesting.com/checkboxes');

  //Check checkbox field
  await page.locator("[id='checkbox1']").check();
  
  //Assertion to checkbox to verify it's checked
  await expect(page.locator("[id='checkbox1']")).toBeChecked();
  expect(await page.locator("[id='checkbox1']").isChecked()).toBeTruthy();
  
  //Uncheck checkbox field
  await page.locator("[id='checkbox1']").uncheck();
  
  //Assertion to checkbox to verify it's unchecked
  expect(await page.locator("[id='checkbox1']").isChecked()).toBeFalsy();  
 
});



test('handle single checkbox', async ({ page }) => {
  await page.goto('https://example.com');

  // Locate by accessible role and check
  const subscribeCheckbox = page.getByRole('checkbox', { name: 'Subscribe' });
  await subscribeCheckbox.check();

  // Verify the checkbox is checked
  await expect(subscribeCheckbox).toBeChecked();

  // Uncheck the element
  await subscribeCheckbox.uncheck();
  await expect(subscribeCheckbox).not.toBeChecked();
});