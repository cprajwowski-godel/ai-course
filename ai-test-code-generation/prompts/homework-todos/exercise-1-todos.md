Context:
Authentication flows are the backbone of most applications. Every regression suite must verify both valid and invalid login attempts. Here you will learn how to adapt the prompt pattern to test a core flow step by step, reusing Page Objects and applying stable selectors.


Project & framework:
- Stack: {{yourStack}}
- Structure:
  - tests/e2e/auth.spec.{{ext}}
  - src/pages/AuthPage.{{ext}}, src/pages/HomePage.{{ext}}
  - src/fixtures/testData.{{ext}}

Optional DOM context (outerHTML):
<form>
  <label for="username">Username</label>
  <input id="username" data-testid="username-input" />
  <label for="password">Password</label>
  <input id="password" data-testid="password-input" type="password" />
  <button type="submit" data-testid="login-btn">Sign in</button>
</form>

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
3) Test (auth.spec):
   - // Initialization: open login
   - // User actions: fill credentials, submit
   - // Verification: successful login → avatar visible
   - // User actions: invalid login
   - // Verification: error message visible
Expected result: One reusable AuthPage, one HomePage, spec with clear sections and both positive & negative checks.

Hints:

If an AuthPage already exists, say: “do not create a new AuthPage, import from src/pages/AuthPage.{{ext}}”.
Put valid/invalid users in fixtures instead of hardcoding in the test.
Ensure assertions use visible/error text checks, not timeouts.