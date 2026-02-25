In this exercise, you'll use GitHub Copilot Chat to generate a CI/CD workflow for Playwright tests that includes parallel execution, caching, and comprehensive test reporting. You'll learn how to craft effective prompts and validate the generated configuration.

Prerequisites:

GitHub Copilot enabled in VS Code or your IDE (use Copilot Chat in Agent mode).
A test project with package.json, yarn.lock, and Playwright tests in tests/.
Playwright config with workers: 3 for automatic parallelization.
Task: Generate a GitHub Actions workflow that runs Playwright tests efficiently with all essential features.

Step 1: Generate Complete Workflow with Single Prompt

Open Copilot Chat and ask:

Create a GitHub Actions workflow at .github/workflows/playwright-tests.yml with the following exact requirements:

Triggers
Run only on pull requests targeting the main branch (pull_request with branches: [ main ]).
Runner & toolchain
Use ubuntu-latest.
Use the latest LTS Node.js via actions/setup-node@v4 with cache: yarn.

Install
Install dependencies with Yarn:
yarn install --immutable --immutable-cache --check-cache
Install Playwright browsers with system deps:
yarn playwright install --with-deps

Test
Run Playwright tests in parallel:
yarn playwright test
Set CI=true in the job env.
Set timeout-minutes: 30 on the job.

Artifacts (always upload)
Upload the HTML report directory (playwright-report) as artifact named playwright-html-report.
Upload Playwright traces (e.g. test-results/**/trace*.zip or the default traces folder) as artifact named playwright-traces.
Use if: always() on artifact upload steps.

YAML quality
Single job named playwright-tests.
Minimal permissions (read-only) and concurrency to cancel in-progress runs per PR (use a sensible group expression).
Add a final steps order: checkout → setup-node → yarn install → playwright install → test → artifact uploads.
Include brief comments explaining key steps.

Deliverable
Output only the complete YAML. No additional explanation or commentary.
Step 2: Test the Workflow

Validate the configuration:

Create a pull request to trigger the workflow
Go to Actions tab and monitor the workflow run
Deliverables
.github/workflows/playwright-tests.yml – Complete workflow with parallel execution and reporting
playwright.config.ts – Verify workers setting is configured for CI parallelization
Downloaded HTML report from a failed test run (to verify artifact upload works)