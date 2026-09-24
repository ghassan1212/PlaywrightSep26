# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AllureScreenshot.spec.js >> Allure screenshot test
- Location: tests\AllureScreenshot.spec.js:3:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "This title is intentionally wrong"
Received: "Google"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × locator resolved to <html lang="en" itemscope="" itemtype="http://schema.org/WebPage">…</html>
       - unexpected value "Google"

```

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img "Google"
- search:
  - button "Add files and tools"
  - combobox "Search"
  - button "Search by voice"
  - button "Search by image"
  - link "AI Mode"
  - button "Google Search"
  - button "I'm Feeling Lucky"
- contentinfo:
  - link "Advertising":
    - /url: https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Build, create, and do more with AI tools from Google":
    - /url: https://ai.google/helpful-tools/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en&fg=1
  - button "Settings"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Allure screenshot test', async ({ page }, testInfo) => {
  4  |     await page.goto('https://www.google.com');
  5  | 
  6  |     try {
> 7  |         await expect(page).toHaveTitle('This title is intentionally wrong');
     |                            ^ Error: expect(page).toHaveTitle(expected) failed
  8  |     } catch (error) {
  9  | 
  10 |         const screenshot = await page.screenshot();
  11 | 
  12 |         await testInfo.attach('Failure Screenshot', {
  13 |             body: screenshot,
  14 |             contentType: 'image/png'
  15 |         });
  16 | 
  17 |         throw error;
  18 |     }
  19 | });
```