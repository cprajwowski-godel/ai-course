# Suite Maintenance Summary

## Scope

7 spec files reviewed in `src/tests/`.

---

## File Inventory

| File | Purpose | Status |
|------|---------|--------|
| `main.navigation.professional.spec.ts` | Production-quality suite — TC-NAV-001, `beforeEach`, `test.step`, regex URLs, edge cases | ✅ Keep — canonical |
| `playwright.spec.ts` | Base homepage tests: title + Get Started navigation | ✅ Keep |
| `main.navigation.refactored.spec.ts` | Intermediate refactor — step structure, but no `beforeEach`, hardcoded absolute URL | ⚠️ Superseded |
| `main.navigation.spec.ts` | Original degraded version — `waitForTimeout`, `pwPage`, loose regex `/.*api/`, mixed concerns | ❌ Superseded |
| `main.navigation.boolean.spec.ts` | Training material — `isVisible()` + `toBeTruthy()` anti-pattern | 🎓 Label clearly |
| `main.navigation.css.spec.ts` | Training material — CSS class selectors instead of `getByRole()` | 🎓 Label clearly |
| `main.navigation.hardcoded.spec.ts` | Training material — `waitForTimeout(3000)` + hardcoded absolute URL | 🎓 Label clearly |

---

## Findings

### 🔴 Broken / Flaky

| File | Issue |
|------|-------|
| `main.navigation.spec.ts` L17 | `page.waitForTimeout(2000)` — fixed wait, flakiness source |
| `main.navigation.spec.ts` L18 | `playwrightDev.pwPage` — unnecessary indirection; `page` fixture available |
| `main.navigation.spec.ts` L18 | `/.*api/` — overly loose URL regex, false-positive risk |
| `main.navigation.hardcoded.spec.ts` L15 | `page.waitForTimeout(3000)` — fixed wait |
| `main.navigation.hardcoded.spec.ts` L16 | Hardcoded `https://playwright.dev/...` — duplicates `baseURL` from config |
| `main.navigation.boolean.spec.ts` L11–14 | `isVisible()` + `toBeTruthy()` — not auto-retrying, not Playwright idiomatic |
| `main.navigation.css.spec.ts` L10–16 | `nav.navbar__inner a.navbar__link` — implementation-coupled, breaks on markup changes |

### 🟠 Redundant / Overlapping

- `main.navigation.spec.ts`, `main.navigation.refactored.spec.ts`, and `main.navigation.professional.spec.ts` all assert the same Docs/API/Community display scenario
- `main.navigation.refactored.spec.ts` and `main.navigation.professional.spec.ts` both test API link navigation — covered twice with no differentiation
- `main.navigation.refactored.spec.ts` L43 still uses hardcoded absolute URL: `"https://playwright.dev/docs/api/class-playwright"`

### 🟡 Maintainability

- `main.navigation.refactored.spec.ts` duplicates `new PlaywrightDevPage(page)` and `goto()` in both tests — no `beforeEach`
- `playwright.spec.ts` initializes POM inline per test — same duplication pattern

---

## Consolidation Plan

1. **Keep** `main.navigation.professional.spec.ts` as the single canonical navigation test suite
2. **Delete** `main.navigation.spec.ts` — fully superseded; all scenarios covered with better quality in `.professional`
3. **Delete** `main.navigation.refactored.spec.ts` — intermediate artifact; superseded and contains residual issues
4. **Retain** `main.navigation.boolean.spec.ts`, `main.navigation.css.spec.ts`, `main.navigation.hardcoded.spec.ts` — move to `src/tests/examples/` and add a top-level comment: `// Training material: intentional anti-pattern`
5. **Fix** `playwright.spec.ts` — extract `beforeEach` to remove duplicated POM setup

---

## Representative Diff: `main.navigation.refactored.spec.ts`

```diff
--- a/src/tests/main.navigation.refactored.spec.ts
+++ b/src/tests/main.navigation.refactored.spec.ts
@@ -1,47 +1,30 @@
 import { test, expect } from "@playwright/test";
 import { PlaywrightDevPage } from "../pages/playwright-dev.page";
 
 test.describe("Main page navigation", () => {
-  test("should display navigation links: Docs, API, Community", async ({
-    page,
-  }) => {
-    const playwrightDev = new PlaywrightDevPage(page);
+  let playwrightDev: PlaywrightDevPage;
 
-    await test.step("Given I am on the Playwright homepage", async () => {
-      await playwrightDev.goto();
-    });
+  test.beforeEach(async ({ page }) => {
+    playwrightDev = new PlaywrightDevPage(page);
+    await playwrightDev.goto();
+  });
 
+  test("should display navigation links: Docs, API, Community", async () => {
     await test.step("Then the Docs navigation link is visible", async () => {
       await expect(playwrightDev.docsLink).toHaveText("Docs");
     });
     await test.step("And the API navigation link is visible", async () => {
       await expect(playwrightDev.apiLink).toHaveText("API");
     });
     await test.step("And the Community navigation link is visible", async () => {
       await expect(playwrightDev.communityLink).toHaveText("Community");
     });
   });
 
-  test("should navigate to the API page when API link is clicked", async ({
-    page,
-  }) => {
-    const playwrightDev = new PlaywrightDevPage(page);
-
-    await test.step("Given I am on the Playwright homepage", async () => {
-      await playwrightDev.goto();
-    });
-
+  test("should navigate to the API page when API link is clicked", async ({ page }) => {
     await test.step("When I click the API navigation link", async () => {
       await playwrightDev.apiLink.click();
     });
     await test.step("Then I am navigated to the API reference page", async () => {
-      await expect(page).toHaveURL(
-        "https://playwright.dev/docs/api/class-playwright",
-      );
+      await expect(page).toHaveURL(/\/docs\/api\/class-playwright/);
     });
   });
 });
```

---

## Test Count

| Category | Count |
|----------|-------|
| Production tests (canonical) | 4 (`professional`) + 2 (`playwright`) = **6** |
| Superseded duplicates | 3 (`spec` + `refactored` + all overlapping scenarios) |
| Training material | 3 (`boolean`, `css`, `hardcoded`) |
| **Total currently running** | **10** |
| **After consolidation** | **6** |
