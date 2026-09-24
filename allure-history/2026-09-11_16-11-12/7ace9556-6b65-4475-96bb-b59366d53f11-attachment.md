# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBox.spec.js >> handle single checkbox
- Location: tests\CheckBox.spec.js:24:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('checkbox', { name: 'Subscribe' })

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
  3  | test('Handle checkbox', async ({page}) => {
  4  | 
  5  |   await page.goto('https://practice.expandtesting.com/checkboxes');
  6  | 
  7  |   //Check checkbox field
  8  |   await page.locator("[id='checkbox1']").check();
  9  |   
  10 |   //Assertion to checkbox to verify it's checked
  11 |   await expect(page.locator("[id='checkbox1']")).toBeChecked();
  12 |   expect(await page.locator("[id='checkbox1']").isChecked()).toBeTruthy();
  13 |   
  14 |   //Uncheck checkbox field
  15 |   await page.locator("[id='checkbox1']").uncheck();
  16 |   
  17 |   //Assertion to checkbox to verify it's unchecked
  18 |   expect(await page.locator("[id='checkbox1']").isChecked()).toBeFalsy();  
  19 |  
  20 | });
  21 | 
  22 | 
  23 | 
  24 | test('handle single checkbox', async ({ page }) => {
  25 |   await page.goto('https://example.com');
  26 | 
  27 |   // Locate by accessible role and check
  28 |   const subscribeCheckbox = page.getByRole('checkbox', { name: 'Subscribe' });
> 29 |   await subscribeCheckbox.check();
     |                           ^ Error: locator.check: Test timeout of 30000ms exceeded.
  30 | 
  31 |   // Verify the checkbox is checked
  32 |   await expect(subscribeCheckbox).toBeChecked();
  33 | 
  34 |   // Uncheck the element
  35 |   await subscribeCheckbox.uncheck();
  36 |   await expect(subscribeCheckbox).not.toBeChecked();
  37 | });
```