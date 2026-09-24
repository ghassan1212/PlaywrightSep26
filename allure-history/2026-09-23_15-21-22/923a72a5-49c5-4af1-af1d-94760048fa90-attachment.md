# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginApplication.spec.js >> This script is to test the login success for Admin
- Location: tests\LoginApplication.spec.js:8:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
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