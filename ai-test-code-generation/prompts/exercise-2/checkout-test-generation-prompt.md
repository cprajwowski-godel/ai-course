Project & framework:
- Stack: Playwright + Typescript
- Structure:
  - tests/e2e/checkout/checkout.spec.ts
  - group tests by feature

Task:
Test (checkout.spec):
   - // Initialization: open search page
   - // User actions: search, select product, add to cart
   - // Verification: cart badge increments
   - // User actions: proceed to checkout
   - // Verification: total matches expected

Rules and conventions:
- Use already existing auth.page and home.page 
- Don't provide path header
- Don't add comments
- Use Playwright assertion methods: toHaveText(), toBeVisible(), toContainText(), toHaveClass(), etc.
- Prefer Text Assertion. Do not assert css and html attributes.
- Avoid boolean assertions like .toBeTruthy() with isVisible()
- use test.step for better test clarity
- write test.steps in Given/When/Then style (Gherkin)
- one test for per one file

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
