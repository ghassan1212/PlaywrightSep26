import { test, expect } from '@playwright/test';

declare const process: { env: Record<string, string | undefined> };

test('Test env URL', async ({ page }) => {
  console.log("ENV URL =", process.env.URL);

  if (!process.env.URL) {
  throw new Error("Environment variable URL is missing");
}
 await page.goto(process.env.URL!);

});
