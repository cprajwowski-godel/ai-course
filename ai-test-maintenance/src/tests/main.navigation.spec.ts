import { test, expect } from "@playwright/test";
import { PlaywrightDevPage } from "../pages/playwright-dev.page";

test.describe("Main page navigation", () => {
  test("should display navigation links: Docs, API, Community", async ({
    page,
  }) => {
    const playwrightDev = new PlaywrightDevPage(page);

    await playwrightDev.goto();

    await expect(playwrightDev.docsLink).toHaveText("Docs");
    await expect(playwrightDev.apiLink).toHaveText("API");
    await expect(playwrightDev.communityLink).toHaveText("Community");

    await playwrightDev.apiLink.click();
    await page.waitForTimeout(2000);
    await expect(playwrightDev.pwPage).toHaveURL(/.*api/);
  });
});
