import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class CartPage extends BasePage {
  constructor(protected readonly page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.pwPage.goto("/cart");
  }

  get items(): Locator {
    return this.page.getByRole("listitem");
  }

  get proceedButton(): Locator {
    return this.page.getByRole("button", { name: /proceed to checkout/i });
  }

  async proceedToCheckout(): Promise<void> {
    await this.proceedButton.click();
  }
}
