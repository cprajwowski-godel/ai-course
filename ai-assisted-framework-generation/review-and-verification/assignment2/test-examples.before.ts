import { test, expect } from "@playwright/test";
import { HolidaysRaiseRequestPage } from "../pages/holidays-raise-request.page";

// path: refactoring-and-upgrade/test-examples.before.ts

test.describe("Holiday Request - Before Refactoring", () => {
  let holidayPage: HolidaysRaiseRequestPage;

  test.beforeEach(async ({ page }) => {
    holidayPage = new HolidaysRaiseRequestPage(page);
    await page.goto("/holidays/request");
  });

  test("should create a holiday request with all fields", async () => {
    // Using OLD getters
    await holidayPage.createRequestButton.click();
    expect(await holidayPage.createRequestButton.isVisible()).toBeTruthy();

    // Using OLD select methods
    await holidayPage.selectRequestType("vacation");
    await holidayPage.selectCountry("United States");
    await holidayPage.selectAssociate("John Doe");

    await holidayPage.setHolidayStartDate(new Date("2026-03-01"));
    await holidayPage.setHolidayEndDate(new Date("2026-03-10"));
  });

  test("should update an existing request", async () => {
    // Using OLD getter
    await holidayPage.updateRequestButton.click();
    expect(await holidayPage.updateRequestButton.isVisible()).toBeTruthy();

    // Using OLD select method
    await holidayPage.selectCountry("Canada");
  });

  test("should confirm action", async () => {
    // Using OLD getter
    await holidayPage.yesContinueButton.click();
    expect(await holidayPage.yesContinueButton.isVisible()).toBeTruthy();
  });
});
