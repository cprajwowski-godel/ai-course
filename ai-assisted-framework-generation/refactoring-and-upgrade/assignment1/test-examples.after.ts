import { test, expect } from "@playwright/test";
import { HolidaysRaiseRequestPage } from "../pages/holidays-raise-request.page";

// path: refactoring-and-upgrade/test-examples.after.ts

test.describe("Holiday Request - After Refactoring", () => {
  let holidayPage: HolidaysRaiseRequestPage;

  test.beforeEach(async ({ page }) => {
    holidayPage = new HolidaysRaiseRequestPage(page);
    await page.goto("/holidays/request");
  });

  test("should create a holiday request with all fields", async () => {
    // Using NEW parameterized getter
    await holidayPage.getButtonByName("Create Request").click();
    expect(
      await holidayPage.getButtonByName("Create Request").isVisible(),
    ).toBeTruthy();

    // Using NEW parameterized select method
    await holidayPage.selectDropdownOption("requestType", "vacation");
    await holidayPage.selectDropdownOption("country", "United States");
    await holidayPage.selectDropdownOption("associate", "John Doe", {
      exact: false,
    });

    await holidayPage.setHolidayStartDate(new Date("2026-03-01"));
    await holidayPage.setHolidayEndDate(new Date("2026-03-10"));
  });

  test("should update an existing request", async () => {
    // Using NEW parameterized getter
    await holidayPage.getButtonByName("Update Request").click();
    expect(
      await holidayPage.getButtonByName("Update Request").isVisible(),
    ).toBeTruthy();

    // Using NEW parameterized select method
    await holidayPage.selectDropdownOption("country", "Canada");
  });

  test("should confirm action", async () => {
    // Using NEW parameterized getter
    await holidayPage.getButtonByName("Yes, Continue").click();
    expect(
      await holidayPage.getButtonByName("Yes, Continue").isVisible(),
    ).toBeTruthy();
  });
});
