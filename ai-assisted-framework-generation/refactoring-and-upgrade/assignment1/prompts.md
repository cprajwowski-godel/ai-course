You are a Senior QA Automation Engineer.

Goal:
Simplify redundant methods in clutteredPage.ts by merging similar actions into one parameterized function.

Context:
- Stack: TypeScript + Playwright
- Pattern: Page Object Model
- Getters to refactor:
  createRequestButton()
  updateRequestButton()
  yesContinueButton()
- Methods to remove:
    selectCountry
    selectAssociate
    selectRequestType

Task:
1. Remove all similar methods using selectOption from Dropdown control:
2. One button getter (I know its not better but its for example)
2. Update all internal calls to use the dropdown method.
4. Keep logic, selectors, and test results unchanged.
5. Output modified files only with headers in the format:
6. Refactored page move to refactoredPage.ts, old leave for changes review
// path: <relative_path>