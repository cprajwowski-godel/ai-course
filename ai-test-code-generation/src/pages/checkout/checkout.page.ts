import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class CheckoutPage extends BasePage {
  constructor(protected readonly page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.pwPage.goto("/checkout");
  }

  get total(): Locator {
    return this.page.getByRole("heading", { level: 3 });
  }

  get placeOrderButton(): Locator {
    return this.page.getByRole("button", { name: /place order/i });
  }

  async placeOrder(): Promise<void> {
    await this.placeOrderButton.click();
  }
}
