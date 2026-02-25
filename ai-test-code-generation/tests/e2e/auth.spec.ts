import { test, expect } from "../../src/fixtures";
import { testData } from "../../src/fixtures/testData";

test.describe("Authentication", () => {
  test("should login successfully with valid credentials", async ({
    authPage,
    homePage,
  }) => {
    await authPage.open();

    await authPage.login(
      testData.validUser.username,
      testData.validUser.password,
    );

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
