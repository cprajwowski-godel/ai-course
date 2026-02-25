Project & framework:
- Stack: Playwright + Typescript
- Structure:
  - tests/e2e/auth.spec.ts
  - src/fixtures/testData.ts

Task:
3) Test (auth.spec):
   - // Initialization: open login
   - // User actions: fill credentials, submit
   - // Verification: successful login → avatar visible
   - // User actions: invalid login
   - // Verification: error message have text 'Invalid credentials'

Rules and conventions:
- Use already existing auth.page and home.page 
- Don't provide path header
- Don't add comments
- Use Playwright assertion methods: toHaveText(), toBeVisible(), toContainText(), toHaveClass(), etc.
- Prefer Text Assertion. Do not assert css and html attributes.
- Avoid boolean assertions like .toBeTruthy() with isVisible()

Assertion rules:
1. Assertions MUST validate only visible user-facing text.
2. Use Playwright text-based assertions as the primary verification strategy.
3. DO NOT assert:
   - CSS styles
   - HTML attributes
   - class names
   - DOM structure
   - element counts (unless explicitly required)
   - internal IDs or data-* attributes
   - visibility without validating text (unless explicitly required)

4. Preferred assertions:
   - expect(locator).toHaveText()
   - expect(locator).toContainText()
