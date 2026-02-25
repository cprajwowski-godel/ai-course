import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class ResultsPage extends BasePage {
  constructor(protected readonly page: Page) {
    super(page);
  }

  get items(): Locator {
    return this.page.getByTestId("new-result-item-id");
  }

  titleOf(index: number): Locator {
    return this.items.nth(index).locator(".title");
  }

  priceOf(index: number): Locator {
    return this.items.nth(index).locator(".price");
  }
}
