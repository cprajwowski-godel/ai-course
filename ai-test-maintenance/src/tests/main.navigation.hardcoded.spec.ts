import { test, expect } from "@playwright/test";
import { PlaywrightDevPage } from "../pages/playwright-dev.page";

// ❌ Mistake: hardcoded absolute URL string + fixed wait instead of regex and auto-retry
test.describe("Main page navigation - hardcoded URL", () => {
  test("should navigate to Community page when Community link is clicked", async ({
    page,
  }) => {
    const playwrightDev = new PlaywrightDevPage(page);

    await playwrightDev.goto();
    await playwrightDev.communityLink.click();

    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://playwright.dev/community/welcome");
  });
});
