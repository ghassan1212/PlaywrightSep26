import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
 
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.getByRole('link', { name: 'Time' }).click();
  await page.locator('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon')
  await page.getByRole('menuitem', { name: 'Logout' })
});