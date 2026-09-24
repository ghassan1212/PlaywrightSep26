# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Step.spec.js >> Facebook test with steps
- Location: tests\Step.spec.js:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Log In') resolved to 3 elements:
    1) <span class="x1lliihq x1plvlek xryxfnj x1n2onr6 xyejjpt x15dsfln x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1ejgnnb xza2c7i x1apb90u x1215byi xzsf02u x1yc453h xtoi2st x3x7a5m">Log into Facebook</span> aka getByText('Log into Facebook')
    2) <span class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">Log in</span> aka getByRole('button', { name: 'Log In' })
    3) <a role="link" tabindex="0" target="_self" href="https://www.facebook.com/login/" class="x1i10hfl xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk xt0psk2 x3ct3a4 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x16tdsg8 xggy1nq x1a2a7pz x1lku1pv xi81zsa xo1l8bm">Log In</a> aka getByRole('link', { name: 'Log In' })

Call log:
  - waiting for getByText('Log In')

```

# Page snapshot

```yaml
- generic [ref=e12]:
  - generic [ref=e17]:
    - generic [ref=e18]: Explore the things you love.
    - generic [ref=e39]:
      - generic [ref=e40]: Log into Facebook
      - generic [ref=e51]:
        - generic [ref=e55]:
          - textbox "Email or mobile number" [active] [ref=e56]
          - generic: Email or mobile number
        - generic [ref=e60]:
          - textbox "Password" [ref=e61]
          - generic: Password
        - button "Log In" [ref=e64] [cursor=pointer]:
          - generic [ref=e65]: Log in
        - link "Forgot password?" [ref=e70] [cursor=pointer]:
          - /url: /recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzkwMTg5NTgzfQ%3D%3D&ars=facebook_login
        - link "Create new account" [ref=e76] [cursor=pointer]:
          - /url: /reg/?entry_point=login
        - img "Meta logo" [ref=e81]
  - separator [ref=e89]
  - main [ref=e95]:
    - separator [ref=e97]
    - generic [ref=e102]:
      - generic [ref=e104]:
        - generic [ref=e105]: English (US)
        - link "Español" [ref=e109] [cursor=pointer]:
          - /url: "#"
        - link "Français (France)" [ref=e112] [cursor=pointer]:
          - /url: "#"
        - link "中文(简体)" [ref=e115] [cursor=pointer]:
          - /url: "#"
        - link "العربية" [ref=e118] [cursor=pointer]:
          - /url: "#"
        - link "Português (Brasil)" [ref=e121] [cursor=pointer]:
          - /url: "#"
        - link "Italiano" [ref=e124] [cursor=pointer]:
          - /url: "#"
        - link "More languages…" [ref=e127] [cursor=pointer]:
          - /url: "#"
      - generic [ref=e130]:
        - link "Sign Up" [ref=e133] [cursor=pointer]:
          - /url: https://www.facebook.com/reg/
        - link "Log In" [ref=e136] [cursor=pointer]:
          - /url: https://www.facebook.com/login/
        - link "Messenger" [ref=e139] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmessenger.com%2F&h=AUCNA4UZueNg_0OubLAkvcNe3ww3qw_0BqhOZveo9EtdqTh8Qnc8ZZhfaS9OYjhmAPJoR1cMTF_-PWHWr5jsSDn6SpoLZ1q5RsbyLF0old7YHvCS98BYhm0kVvsvi9iyV3Wc0gmZDb-6gapaa2WchA
        - link "Facebook Lite" [ref=e142] [cursor=pointer]:
          - /url: https://www.facebook.com/lite/
        - link "Video" [ref=e145] [cursor=pointer]:
          - /url: https://www.facebook.com/watch/
        - link "Meta Pay" [ref=e148] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-pay&h=AUCNA4UZueNg_0OubLAkvcNe3ww3qw_0BqhOZveo9EtdqTh8Qnc8ZZhfaS9OYjhmAPJoR1cMTF_-PWHWr5jsSDn6SpoLZ1q5RsbyLF0old7YHvCS98BYhm0kVvsvi9iyV3Wc0gmZDb-6gapaa2WchA
        - link "Meta Store" [ref=e151] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2F&h=AUCNA4UZueNg_0OubLAkvcNe3ww3qw_0BqhOZveo9EtdqTh8Qnc8ZZhfaS9OYjhmAPJoR1cMTF_-PWHWr5jsSDn6SpoLZ1q5RsbyLF0old7YHvCS98BYhm0kVvsvi9iyV3Wc0gmZDb-6gapaa2WchA
        - link "Meta Quest" [ref=e154] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fquest%2F&h=AUCNA4UZueNg_0OubLAkvcNe3ww3qw_0BqhOZveo9EtdqTh8Qnc8ZZhfaS9OYjhmAPJoR1cMTF_-PWHWr5jsSDn6SpoLZ1q5RsbyLF0old7YHvCS98BYhm0kVvsvi9iyV3Wc0gmZDb-6gapaa2WchA
        - link "Ray-Ban Meta" [ref=e157] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fai-glasses%2Fray-ban-meta%2F&h=AUCNA4UZueNg_0OubLAkvcNe3ww3qw_0BqhOZveo9EtdqTh8Qnc8ZZhfaS9OYjhmAPJoR1cMTF_-PWHWr5jsSDn6SpoLZ1q5RsbyLF0old7YHvCS98BYhm0kVvsvi9iyV3Wc0gmZDb-6gapaa2WchA
        - link "Meta AI" [ref=e160] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.ai%2F&h=AUCNA4UZueNg_0OubLAkvcNe3ww3qw_0BqhOZveo9EtdqTh8Qnc8ZZhfaS9OYjhmAPJoR1cMTF_-PWHWr5jsSDn6SpoLZ1q5RsbyLF0old7YHvCS98BYhm0kVvsvi9iyV3Wc0gmZDb-6gapaa2WchA
        - link "Muse" [ref=e163] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmuse.ai%2F&h=AUCNA4UZueNg_0OubLAkvcNe3ww3qw_0BqhOZveo9EtdqTh8Qnc8ZZhfaS9OYjhmAPJoR1cMTF_-PWHWr5jsSDn6SpoLZ1q5RsbyLF0old7YHvCS98BYhm0kVvsvi9iyV3Wc0gmZDb-6gapaa2WchA
        - link "Instagram" [ref=e166] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AUCNA4UZueNg_0OubLAkvcNe3ww3qw_0BqhOZveo9EtdqTh8Qnc8ZZhfaS9OYjhmAPJoR1cMTF_-PWHWr5jsSDn6SpoLZ1q5RsbyLF0old7YHvCS98BYhm0kVvsvi9iyV3Wc0gmZDb-6gapaa2WchA
        - link "Threads" [ref=e169] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.threads.com%2F&h=AUCNA4UZueNg_0OubLAkvcNe3ww3qw_0BqhOZveo9EtdqTh8Qnc8ZZhfaS9OYjhmAPJoR1cMTF_-PWHWr5jsSDn6SpoLZ1q5RsbyLF0old7YHvCS98BYhm0kVvsvi9iyV3Wc0gmZDb-6gapaa2WchA
        - link "Privacy Policy" [ref=e172] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/policy/?entry_point=facebook_page_footer
        - link "Consumer Health Privacy" [ref=e175] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/policies/health/?entry_point=facebook_page_footer
        - link "Privacy Center" [ref=e178] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/center/?entry_point=facebook_page_footer
        - link "About" [ref=e181] [cursor=pointer]:
          - /url: https://www.facebook.com/about/
        - link "Create ad" [ref=e184] [cursor=pointer]:
          - /url: https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto
        - link "Create Page" [ref=e187] [cursor=pointer]:
          - /url: https://www.facebook.com/pages/create/?ref_type=site_footer
        - link "Developers" [ref=e190] [cursor=pointer]:
          - /url: https://developers.facebook.com/?ref=pf
        - link "Careers" [ref=e193] [cursor=pointer]:
          - /url: https://www.facebook.com/careers/?ref=pf
        - link "Cookies" [ref=e196] [cursor=pointer]:
          - /url: https://www.facebook.com/policies/cookies/
        - link [ref=e199] [cursor=pointer]:
          - /url: https://www.facebook.com/help/568137493302217
        - link "Terms" [ref=e204] [cursor=pointer]:
          - /url: https://www.facebook.com/policies?ref=pf
        - link "Help" [ref=e207] [cursor=pointer]:
          - /url: https://www.facebook.com/help/?ref=pf
        - link "Contact Uploading & Non-Users" [ref=e210] [cursor=pointer]:
          - /url: https://www.facebook.com/help/637205020878504
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Facebook test with steps', async ({ page }) => {
  4  | 
  5  |   await test.step('1. Open Facebook homepage', async () => {
  6  |     await page.goto('https://facebook.com');
  7  |   });
  8  | 
  9  |   await test.step('2. Prepare test data', async () => {
  10 |     const testData = {
  11 |       username: 'testuser',
  12 |       environment: 'QA'
  13 |     };
  14 | 
  15 |     console.log('Test data prepared:', testData);
  16 |   });
  17 | 
  18 |   await test.step('3. Perform calculation', async () => {
  19 |     const result = 10 + 20;
  20 | 
  21 |     console.log('Calculation result:', result);
  22 | 
  23 |     expect(result).toBe(30);
  24 |   });
  25 | 
  26 |   await test.step('4. Check page title', async () => {
  27 |     await expect(page).toHaveTitle(/Facebook/i);
  28 |   });
  29 | 
  30 |   await test.step('5. Click login button', async () => {
> 31 |     await page.getByText('Log In').click();
     |                                    ^ Error: locator.click: Error: strict mode violation: getByText('Log In') resolved to 3 elements:
  32 |   });
  33 | 
  34 | });
```