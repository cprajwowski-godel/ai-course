Project & framework:
- Stack: Playwright + Typescript
- Structure:
  - tests/e2e/auth.spec.ts
  - src/pages/auth.page.ts, src/pages/home.page.ts
  - src/fixtures/testData.ts

Optional DOM context (outerHTML):
AuthPage
<form>
  <label for="username">Username</label>
  <input id="username" data-testid="username-input" />
  <label for="password">Password</label>
  <input id="password" data-testid="password-input" type="password" />
  <button type="submit" data-testid="login-btn">Sign in</button>
</form>

HomePage
<div class="home">
    <img
      class="avatar"
      src="https://i.pravatar.cc/300"
      alt="avatar"
    />
    <h1>Welcome</h1>
    <p>This is your homepage</p>
  </div>

Task:
1) AuthPage:
   - open()
   - username()
   - password()
   - submit()
   - errorMessage()
   - login(user, pass)
2) HomePage:
   - avatar()


Rules and conventions:
- Extend BasePage and use super(page) in constructor
- Selectors: getByRole, getByLabel, getByTestId only.
- errorMessage is BasePage toastMessage with login error message
- Never use deprecated code style
- Don't provide path header
- Don't add comments
- Use TypeScript constructor property initialization (constructor parameters with access modifiers)
- Put pages in fixtures for better accessibility