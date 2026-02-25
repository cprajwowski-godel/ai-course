import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class HomePage extends BasePage {
  constructor(protected readonly page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.pwPage.goto("/home");
  }

  get avatar(): Locator {
    return this.page.getByRole("img", { name: /avatar/i });
  }
}
