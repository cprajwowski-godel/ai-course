In this exercise, you will evaluate and professionalize the AI-refactored test from Chapter 3 (tests/main.navigation.refactored.spec.ts) with the help of your AI assistant, then apply your own review.

Preconditions:

AI-refactored spec available: tests/main.navigation.refactored.spec.ts.
Summary report from Chapter 3: docs/refactoring-summary.md.
Step 1 — Ask AI to audit against professional standards

Review tests/main.navigation.refactored.spec.ts against this checklist: Traceability, Coverage (positive/negative/edge), Maintainability (POM, reuse, no duplication), Clarity (names, comments), Validation quality (assertions), Accessibility/Compliance.Do not change the file yet.
Produce a numbered findings list and a prioritized fix plan. Reference lines/functions in your comments.
Step 2 — Ask AI to propose concrete changes as a diff

Using your findings, generate a unified diff/patch for tests/main.navigation.refactored.spec.ts that:
adds traceability to (e.g.) TC-NAV-001
improves naming/comments clarity
replaces any weak assertions with explicit behavior checks
introduces at least one edge case (e.g., hidden/disabled link state)
keeps Page Object usage consistent. Include only the diff
Step 3 — Ask AI to generate an additional edge test

Propose an additional edge-case test for navigation (e.g., link not visible, or wrong target URL) and provide the test function only that I can paste into the same spec. Use role/label selectors and Playwright assertions.
Step 4 — Your review and edits

Apply the diff locally (or copy/paste edits) into a new file: tests/main.navigation.professional.spec.ts.
Paste in the AI’s edge-case test and adapt names/comments to your style guide.
Add any manual improvements you deem necessary (e.g., clearer Page Object methods, stronger assertions, better test titles).
Step 5 — Run & verify

Run in Chromium; confirm all tests pass and the HTML report is clean.
If failures occur, ask AI:
Diagnose the failure from this error output (paste log). Propose the minimal fix that preserves the checklist standards. Provide a new diff only.
Deliverables
tests/main.navigation.professional.spec.ts – fully professionalized spec.
docs/professional-review.md – checklist result, AI diff link/summary, and your final notes.
Playwright HTML report showing all tests passed.