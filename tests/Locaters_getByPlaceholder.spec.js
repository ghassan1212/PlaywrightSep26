import { test, expect } from '@playwright/test';

test('Demonstrate page.getByPlaceholder() usage', async ({ page }) => {
  // 1. Navigate to a test page containing standard form inputs
  await page.goto('https://demo.playwright.dev/todomvc');

  // 2. Default: Case-insensitive, substring matching
  // Matches an input like <input placeholder="What needs to be done?">
  const todoInput = page.getByPlaceholder('What needs to be done?');
  await todoInput.fill('Buy groceries');
  await todoInput.press('Enter');

  // Verify the item was added
  await expect(page.getByText('Buy groceries')).toBeVisible();

 
});