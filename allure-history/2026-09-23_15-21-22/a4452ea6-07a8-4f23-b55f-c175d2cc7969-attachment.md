# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WaitForTimeout.spec.js >> waitForTimeout basic example
- Location: tests\WaitForTimeout.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button')

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
  3  | test('waitForTimeout basic example', async ({ page }) => {
  4  |   await page.goto('https://example.com');
  5  | 
  6  |   // Pause for 2 seconds
  7  |   await page.waitForTimeout(2000);
  8  | 
> 9  |   await page.click('button');
     |              ^ Error: page.click: Test timeout of 30000ms exceeded.
  10 | });
```