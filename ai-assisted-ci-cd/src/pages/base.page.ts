import { Page, Locator } from "@playwright/test";

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  get pwPage(): Page {
    return this.page;
  }

  get toastMessage(): Locator {
    return this.page.getByRole("alert");
  }

  async reload(): Promise<void> {
    await this.page.reload();
  }
}
