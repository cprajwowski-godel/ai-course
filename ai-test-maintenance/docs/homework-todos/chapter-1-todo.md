For this first exercise, you’ll generate a simple manual test case and then implement it as an automated test in your Playwright TAF using the AI assistant.

Instruction for AI assistant:

Generate the following test case:
“The main page should display navigation buttons: Docs, API, Community.”

Then create a Playwright automated test for this case in a new tests/main.navigation.spec.ts file following Page Object Model best practices.
Your Task:

Ask AI to first write the manual test case (step-by-step).
Then have AI generate the Playwright .spec.ts file.
Run the test in Chromium and review the Playwright HTML report.
Check whether AI validated only button presence or also accessibility (roles, labels, visibility).
Add one extra validation manually — for example, confirm that navigation links open the correct pages.
Deliverables
Functional Playwright TAF environment.
First passing automated test: tests/main.navigation.spec.ts.
Verified ability to run AI-assisted Playwright tests.