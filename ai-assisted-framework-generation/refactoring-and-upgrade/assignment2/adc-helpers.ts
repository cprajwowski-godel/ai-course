// path: assignment2/adc-helpers.ts

export async function createDayShiftRequest(
  holidaysTeamRequestsPage: any,
  holidaysRaiseRequestPage: any,
  employeeFullName: string,
  fromDate: Date,
  toDate: Date,
) {
  await holidaysTeamRequestsPage.raiseRequestButton.click();
  await holidaysRaiseRequestPage.selectAssociate(employeeFullName);
  await holidaysRaiseRequestPage.selectRequestType("Day shift");
  await holidaysRaiseRequestPage.setHolidayStartDate(fromDate);
  await holidaysRaiseRequestPage.setHolidayEndDate(toDate);
  await holidaysRaiseRequestPage.createRequestButton.click();
  await holidaysRaiseRequestPage.yesContinueButton.click();
}

export async function verifyRequestCreated(
  holidaysTeamRequestsPage: any,
  employeeFullName: string,
) {
  await holidaysTeamRequestsPage.refreshTeamPageAfterChanges();
  await holidaysTeamRequestsPage.clearFilterStatusAndChooseEmployee(
    employeeFullName,
  );
}

export async function editDayShiftRequest(
  holidaysTeamRequestsPage: any,
  holidaysRaiseRequestPage: any,
  updatedFromDate: Date,
  comment: string = "updated from date",
) {
  await holidaysTeamRequestsPage.getTeamRequestActionsControl().edit();
  await holidaysRaiseRequestPage.setHolidayStartDate(updatedFromDate);
  await holidaysRaiseRequestPage.holidayCommentTextField.fill(comment);
  await holidaysRaiseRequestPage.updateRequestButton.click();
}

export async function verifyRequestUpdated(
  holidaysTeamRequestsPage: any,
  employeeFullName: string,
) {
  await holidaysTeamRequestsPage.refreshTeamPageAfterChanges();
  await holidaysTeamRequestsPage.clearFilterStatusAndChooseEmployee(
    employeeFullName,
  );
}
