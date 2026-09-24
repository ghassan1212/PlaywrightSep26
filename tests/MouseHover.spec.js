import { test, expect } from '@playwright/test'

test('hover over sign in', async ({ page }) => {
 await page.goto('https://danube-web.shop/')
 await page.getByRole('button', { name: 'Log in' }).click()
 await page.getByRole('button', { name: 'Sign In' }).hover()

});