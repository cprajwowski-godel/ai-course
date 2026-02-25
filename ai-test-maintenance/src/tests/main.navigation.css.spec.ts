import { test, expect } from "@playwright/test";
import { PlaywrightDevPage } from "../pages/playwright-dev.page";

// ❌ Mistake: CSS attribute selector instead of role-based locator
test.describe("Main page navigation - CSS selectors", () => {
  test("should find navigation links by CSS class", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);

    await playwrightDev.goto();

    const docsLink = page.locator("nav.navbar__inner a.navbar__link", {
      hasText: "Docs",
    });
    const apiLink = page.locator("nav.navbar__inner a.navbar__link", {
      hasText: "API",
    });

    await expect(docsLink).toHaveText("Docs");
    await expect(apiLink).toHaveText("API");
  });
});
