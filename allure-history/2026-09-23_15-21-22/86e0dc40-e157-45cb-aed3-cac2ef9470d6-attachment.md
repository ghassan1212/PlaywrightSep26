# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginApplication.spec.js >> This script is to test the login success for Preston
- Location: tests\LoginApplication.spec.js:8:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - img "company-branding"
    - generic [ref=e8]:
      - heading "Login" [level=5] [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e12]:
          - paragraph [ref=e13]: "Username : Admin"
          - paragraph [ref=e14]: "Password : admin123"
        - generic [ref=e15]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - generic [ref=e19]: 
              - generic [ref=e20]: Username
            - textbox "Username" [active] [ref=e22]
          - generic [ref=e24]:
            - generic [ref=e25]:
              - generic [ref=e26]: 
              - generic [ref=e27]: Password
            - textbox "Password" [ref=e29]
          - button "Login" [ref=e31] [cursor=pointer]
          - paragraph [ref=e33] [cursor=pointer]: Forgot your password?
      - generic [ref=e34]:
        - generic [ref=e35]:
          - link [ref=e36] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e39] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e42] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e48]:
          - paragraph [ref=e49]: OrangeHRM OS 5.9
          - paragraph [ref=e50]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e51] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - generic [ref=e52]:
    - img "orangehrm-logo"
```

# Test source

```ts
  1  | class LoginPage {
  2  |     
  3  |     constructor(page) {
  4  |         this.page = page;
  5  |         this.username = page.getByPlaceholder('Username');
  6  |         this.password = page.getByPlaceholder('Password');
  7  |         this.loginBtn = page.getByRole('button', { name: 'Login', exact: true });
  8  |     }
  9  | 
  10 |     async loginToApplication(username, password) {
> 11 |         await this.username.fill(username);
     |                             ^ Error: locator.fill: value: expected string, got undefined
  12 |         await this.password.fill(password);
  13 |         await this.loginBtn.click();
  14 |     }
  15 | }
  16 | 
  17 | module.exports = LoginPage;
```