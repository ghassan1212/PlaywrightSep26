# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Json.spec.js >> This script is to test the login success
- Location: tests\Json.spec.js:6:1

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const TestData = require("./TestData.json");
  4  | 
  5  | // Login Playwright test
  6  | test('This script is to test the login success', async ({ page }) => {
  7  | 
  8  |     const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
  9  |     await page.goto(url);
  10 | 
  11 | //<label>Username</label>	getByLabel('Username')
  12 | //placeholder="Enter username"	getByPlaceholder('Enter username')
  13 | //name="username"	locator('[name="username"]')
  14 | //input id="email" type="text"  placeholder="Enter your email">
  15 | //<button>Login</button>	getByRole('button', { name: 'Login' })
  16 | //<span>Username</span>   await page.locator('span').getByText('Username');
  17 | //await page.getByRole('textbox', { name: 'username' }).fill('Hello');
  18 | 
  19 | await page.getByPlaceholder('Username').clear();
  20 | 
> 21 | await page.getByPlaceholder('Username').fill(TestData.username);
     |                                         ^ Error: locator.fill: value: expected string, got undefined
  22 | 
  23 | await page.getByPlaceholder('Password').fill(TestData.password);
  24 | 
  25 | await page.getByRole('button', { name: 'Login', exact: true }).click();
  26 | 
  27 |  // Assert dashboard URL
  28 |   await expect(page).toHaveURL(/.*dashboard.*/);
  29 | 
  30 |   // Open dropdown and logout
  31 |   await page.locator('.oxd-userdropdown-name').click();
  32 |   await page.getByRole('menuitem', { name: 'Logout' }).click();
  33 | 
  34 | });
```