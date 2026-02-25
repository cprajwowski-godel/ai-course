import { test, expect } from "@playwright/test";
import { PlaywrightDevPage } from "../pages/playwright-dev.page";

// TC-NAV-001: The main page should display visible navigation links: Docs, API, Community
test.describe("Main page navigation", { tag: "@TC-NAV-001" }, () => {
  let playwrightDev: PlaywrightDevPage;

  test.beforeEach(async ({ page }) => {
    playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
  });

  test("should display navigation links: Docs, API, Community", async () => {
    await test.step("Then the Docs link is visible", async () => {
      await expect(playwrightDev.docsLink).toBeVisible();
    });

    await test.step("And the API link is visible", async () => {
      await expect(playwrightDev.apiLink).toBeVisible();
    });

    await test.step("And the Community link is visible", async () => {
      await expect(playwrightDev.communityLink).toBeVisible();
    });
  });
});
