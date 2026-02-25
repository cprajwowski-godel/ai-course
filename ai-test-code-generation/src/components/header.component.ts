import { Page, Locator } from "@playwright/test";

export class Header {
  constructor(private page: Page) {}

  get cartBadge(): Locator {
    return this.page.getByTestId("cart-total");
  }

  get checkoutButton(): Locator {
    return this.page.getByTestId("checkout-btn");
  }
}
