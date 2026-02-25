import { HOLIDAYS_ADC_STORAGE_PATH } from "../../../constants/shared-context.constants";
import { test, expect } from "../../../fixtures/gcp.fixtures";
import {
  subWorkingDays,
  addWorkingDays,
  getClosestFutureSaturday,
  toISODateOnly,
} from "../../../utils/date.utils";
import {
  holidaysTag,
  regressionTag,
  smokeTag,
  dayShiftTag,
} from "../../../utils/tags.utils";
import { getEmployeeFullName } from "../../../utils/user.utils";
import {
  createDayShiftRequest,
  verifyRequestCreated,
  editDayShiftRequest,
  verifyRequestUpdated,
} from "./adc-helpers";

// path: assignment2/adc-is-able-to-create-and-edit-day-shift-request-in-the-past-for-pl-b2b.spec.ts

const testId = "@41665";

test.use({ storageState: HOLIDAYS_ADC_STORAGE_PATH });

test(
  "ADC is able to create day shift request in the past for PL B2B employee and edit",
  { tag: [smokeTag, regressionTag, holidaysTag, dayShiftTag, testId] },
  async ({
    mainPage,
    holidaysTeamRequestsPage,
    createPersonService,
    holidaysMyRequestsPage,
    holidaysService,
    projectsService,
    holidaysRaiseRequestPage,
    holidaysADCUser,
  }) => {
    test.setTimeout(120 * 1000);

    const publicHolidays =
      await holidaysService.getAllPublicHolidaysByCalendar("PL");
    const fromDate = subWorkingDays(new Date(), 7, publicHolidays);
    const toDate = getClosestFutureSaturday(fromDate);

    const userModel =
      await test.step("Given there is a PL B2B Employee in project with ADC", async () => {
        const userModel = await createPersonService.createPerson();

        const project = await projectsService.createProject();
        await projectsService.addProjectAssignment(
          project.id,
          project.clientId,
          {
            personId: holidaysADCUser.id,
            projectRole: "AGILE_DELIVERY_COORDINATOR",
          },
        );
        await projectsService.addProjectAssignment(
          project.id,
          project.clientId,
          { personId: userModel.id },
        );

        return userModel;
      });

    const employeeFullName = getEmployeeFullName(userModel.enName);

    await test.step("When ADC creates day shift request in the past", async () => {
      await mainPage.goToModule("Holidays");
      await holidaysMyRequestsPage.tabNavigationControl.goTo("Team");
      await createDayShiftRequest(
        holidaysTeamRequestsPage,
        holidaysRaiseRequestPage,
        employeeFullName,
        fromDate,
        toDate,
      );
    });

    await test.step("Then the request is successfully created", async () => {
      await verifyRequestCreated(holidaysTeamRequestsPage, employeeFullName);

      await expect(
        holidaysTeamRequestsPage.getTeamRequestTypeCell(),
      ).toContainText("Day shift");
      await expect(
        holidaysTeamRequestsPage.getTeamRequestFromDateCell(),
      ).toContainText(toISODateOnly(fromDate));
      await expect(
        holidaysTeamRequestsPage.getTeamRequestToDateCell(),
      ).toContainText(toISODateOnly(toDate));
    });

    const updatedFromDate =
      await test.step("When ADC edits the created request", async () => {
        const updatedFromDate = addWorkingDays(fromDate, 1, publicHolidays);

        await editDayShiftRequest(
          holidaysTeamRequestsPage,
          holidaysRaiseRequestPage,
          updatedFromDate
        );

        return updatedFromDate;
      });

    await test.step("Then the request is successfully updated", async () => {
      await verifyRequestUpdated(holidaysTeamRequestsPage, employeeFullName);

      await expect(
        holidaysTeamRequestsPage.getTeamRequestFromDateCell(),
      ).toContainText(toISODateOnly(updatedFromDate));
    });
  },
);
