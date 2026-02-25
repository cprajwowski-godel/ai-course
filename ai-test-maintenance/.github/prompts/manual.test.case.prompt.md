Project & framework:
- Stack: Playwright + Typescript
- Structure:
  - follow project structure
  - follow playwright-dev.page.ts as an example for page object model implementation

Task:
Generate the following test case:
“The main page should display navigation buttons: Docs, API, Community.”
After user reviews and accepts the generated test case,
Then create a Playwright automated test for this case in a new tests/main.navigation.spec.ts file following Page Object Model best practices.


Rules and conventions:
- Use already existing pages
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
