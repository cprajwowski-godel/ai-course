import { test, expect } from "@playwright/test";
import { PlaywrightDevPage } from "../pages/playwright-dev.page";

test.describe("Main page navigation", () => {
  test("should display navigation links: Docs, API, Community", async ({
    page,
  }) => {
    const playwrightDev = new PlaywrightDevPage(page);

    await test.step("Given I am on the Playwright homepage", async () => {
      await playwrightDev.goto();
    });

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

  test("should navigate to the API page when API link is clicked", async ({
    page,
  }) => {
    const playwrightDev = new PlaywrightDevPage(page);

    await test.step("Given I am on the Playwright homepage", async () => {
      await playwrightDev.goto();
    });

    await test.step("When I click the API navigation link", async () => {
      await playwrightDev.apiLink.click();
    });

    await test.step("Then I am navigated to the API reference page", async () => {
      await expect(page).toHaveURL(
        "https://playwright.dev/docs/api/class-playwright",
      );
    });
  });
});
