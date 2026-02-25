import { test, expect } from "@playwright/test";
import { PlaywrightDevPage } from "../pages/playwright-dev.page";

test.describe("Playwright website", () => {
  test("has title", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);

    await playwrightDev.goto();

    await expect(page).toHaveTitle(/Playwright/);
  });

  test("get started link navigates to Installation page", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);

    await playwrightDev.goto();
    await playwrightDev.clickGetStarted();

    await expect(playwrightDev.installationHeading).toBeVisible();
  });

  test("get started link navigates to Installation pages", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);

    await playwrightDev.goto();
    await playwrightDev.clickGetStarted();

    await expect(playwrightDev.installationHeading).toBeVisible();
  });
});
