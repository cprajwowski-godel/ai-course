import { test, expect } from "@playwright/test";
import { PlaywrightDevPage } from "../pages/playwright-dev.page";

// TC-NAV-001: The main page should display navigation links: Docs, API, Community
test.describe("Main page navigation", { tag: "@TC-NAV-001" }, () => {
  let playwrightDev: PlaywrightDevPage;

  test.beforeEach(async ({ page }) => {
    playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
  });

  test("should display and label navigation links: Docs, API, Community", async () => {
    await test.step("Then the Docs link is visible and labelled correctly", async () => {
      await expect(playwrightDev.docsLink).toHaveText("Docs");
    });

    await test.step("And the API link is visible and labelled correctly", async () => {
      await expect(playwrightDev.apiLink).toHaveText("API");
    });

    await test.step("And the Community link is visible and labelled correctly", async () => {
      await expect(playwrightDev.communityLink).toHaveText("Community");
    });
  });

  test("should navigate to the API reference page when API link is clicked", async ({
    page,
  }) => {
    await test.step("When I click the API navigation link", async () => {
      await playwrightDev.apiLink.click();
    });

    await test.step("Then I am navigated to the API reference page", async () => {
      await expect(page).toHaveURL(/\/docs\/api\/class-playwright/);
    });
  });

  // TC-NAV-001-EDGE-2: Each visible nav link must point to its correct target
  test("should point Docs and Community links to correct target URLs", async ({
    page,
  }) => {
    await test.step("When I click the Docs navigation link", async () => {
      await playwrightDev.docsLink.click();
    });

    await test.step("Then I am navigated to the Installation (Getting Started) page", async () => {
      await expect(page).toHaveURL(/\/docs\/intro/);
    });

    await test.step("When I navigate back and click the Community link", async () => {
      await playwrightDev.goto();
      await playwrightDev.communityLink.click();
    });

    await test.step("Then I am navigated to the Community welcome page", async () => {
      await expect(page).toHaveURL(/\/community\/welcome/);
    });
  });

  // TC-NAV-001-EDGE: Navigation links must remain visible on a standard desktop viewport
  test("should display navigation links on a 1280px wide viewport", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 1024 });
    await playwrightDev.goto();

    await test.step("Then the links are still visible at 1280px width", async () => {
      await expect(playwrightDev.docsLink).toBeVisible();
      await expect(playwrightDev.apiLink).toBeVisible();
      await expect(playwrightDev.communityLink).toBeVisible();
    });
  });
});
