You are a Senior QA Automation Engineer.

Structure:
    - follow existing project structure

Task:
Extend the existing AuthPage class (import from src/pages/auth/auth.page.ts).
Do not create a new AuthPage file.  
Add a new method:
- rememberMeCheckbox() → returns locator for the "Remember me" checkbox (data-testid="remember-me").

Update tests/e2e/auth.spec.ts to:
1) Open login page
2) Click "Remember me" checkbox
3) Login
5) Verify home URL and avatar visible

Rules:
- Import AuthPage and HomePage, do not recreate them.
- Use the same Page Object pattern already applied in the project.
- Use data-testid selectors only.
- Follow project conventions: locators inside page classes, no raw selectors in tests.
- Output with file headers.
- Update existing tests