In this exercise, you will practice diagnosing common problems in an existing spec inside your Playwright Test Automation Framework (TAF) — without fixing them yet. The goal is to produce a clear problem report you will use in Chapter 3.

Open the previously created spec tests/main.navigation.spec.ts. Using the manual test case as your source of truth (Main Page Navigation Buttons: Docs, API, Community — visibility, accessibility, and correct navigation), intentionally degrade the spec, then ask your AI assistant to analyze it.

Degradations to introduce (diagnosis only):

Selector downgrade: change one nav button from a role/label-based locator to a brittle ID/CSS selector (e.g., from getByRole('link', { name: /Docs/i }) to #docs).
Bad synchronization: add a fixed wait such as await page.waitForTimeout(2000) instead of a state-based assertion.
Instruction for your AI assistant (analysis mode):

Review tests/main.navigation.spec.ts against the manual test case expectations (Docs, API, Community are visible, accessible by role+name, and navigate correctly).
Do not fix anything. List and classify all issues that increase flakiness or maintenance cost: selector quality, synchronization, accessibility, coverage, readability/reuse, duplication risks.
Provide a prioritized checklist of problems and recommended categories of fixes (the actual refactor will be done in the next chapter).
Highlight any additional issues you find that the AI might miss (e.g., missing navigation target checks, lack of accessibility assertions, redundancy risks).
Your task (deliverables for this chapter):

Produce an analysis report docs/legacy-test-analysis.md that includes:
A prioritized checklist of AI-detected issues (with categories).
Your additional findings the AI missed (e.g., missing navigation target checks, lack of accessibility assertions, redundancy risks).
Short impact notes (e.g., “fixed waits → flakiness,” “ID selector → brittle to markup changes”).
Leave the degraded spec in place — no fixes yet. You will repair and refactor it in Chapter 3.
Verification (for this chapter only):

Confirm the report file exists at docs/legacy-test-analysis.md and references tests/main.navigation.spec.ts.
Ensure the report explicitly states “No code changes applied in Chapter 2.”
Deliverables
Degraded spec: tests/main.navigation.spec.ts (left unfixed).
Diagnostic report: docs/legacy-test-analysis.md (prioritized, categorized).