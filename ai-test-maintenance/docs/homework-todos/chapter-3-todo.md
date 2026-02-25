In this exercise, you’ll take the degraded test from Chapter 2 and use AI to refactor and repair it into a passing, maintainable version.

Preconditions:

You have a degraded tests/main.navigation.spec.ts file from Chapter 2.
You have an analysis report docs/legacy-test-analysis.md listing all identified issues.
Instruction for AI assistant:

Refactor and repair tests/main.navigation.spec.ts to align with test case requirements (Main Page Navigation Buttons: Docs, API, Community).
Fix brittle selectors, remove fixed waits, and apply Playwright best practices: use role- or label-based locators, expect-based assertions, and clear step naming.
Ensure the spec is modular and readable. Save the updated file as tests/main.navigation.refactored.spec.ts.
Your task:

Run the AI refactoring and generate the updated test file.
Review AI’s output: did it just patch issues, or did it improve structure and readability?
Run the new test in Chromium and review the Playwright HTML report for passing status and clarity.
Add one manual improvement: move repeated steps into a Page Object method or add an accessibility assertion (for example, verifying ARIA roles on navigation elements).
Create a brief summary file docs/refactoring-summary.md comparing the degraded, AI-refactored, and manually improved versions.
Deliverables
tests/main.navigation.refactored.spec.ts – repaired and refactored spec.
docs/refactoring-summary.md – summary of AI vs. human improvements.
Passing Playwright test run with updated HTML report.
Verification
All navigation buttons (Docs, API, Community) validated via role/label selectors.
No hardcoded waits; synchronization handled by Playwright assertions.
Readable, modular code following Page Object Model principles.
Test suite runs successfully in Chromium with a clean report.