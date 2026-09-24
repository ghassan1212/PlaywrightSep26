# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WaitForSelector.spec.js >> waitForSelector basic example
- Location: tests\WaitForSelector.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#login-button') to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Example Domain" [level=1] [ref=e3]
  - paragraph [ref=e4]: This domain is for use in documentation examples without needing permission. Avoid use in operations.
  - paragraph [ref=e5]:
    - link "Learn more" [ref=e6] [cursor=pointer]:
      - /url: https://iana.org/domains/example
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('waitForSelector basic example', async ({ page }) => {
  4  |   await page.goto('https://example.com');
  5  | 
  6  |   // Wait until the element is visible in the DOM
> 7  |   await page.waitForSelector('#login-button', { state: 'visible' });
     |              ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  8  | 
  9  |   // Now it is safe to interact
  10 |   await page.click('#login-button');
  11 | });
```