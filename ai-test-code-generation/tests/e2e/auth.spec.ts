import { test, expect } from "../../src/fixtures";
import { testData } from "../../src/fixtures/testData";

test.describe("Authentication", () => {
  test("should login successfully with valid credentials", async ({
    authPage,
    homePage,
    page,
  }) => {
    // 1) Open login page
    await authPage.open();

    // 2) Click "Remember me" checkbox
    await authPage.rememberMeCheckbox.click();

    // 3) Login
    await authPage.login(
      testData.validUser.username,
      testData.validUser.password,
    );

    // 5) Verify home URL and avatar visible
    await expect(page).toHaveURL(/.*home/);
    await expect(homePage.avatar).toBeVisible();
  });

  test("should display error message with invalid credentials", async ({
    authPage,
  }) => {
    await authPage.open();

    await authPage.login(
      testData.invalidUser.username,
      testData.invalidUser.password,
    );

    await expect(authPage.errorMessage).toContainText("Invalid credentials");
  });
});
