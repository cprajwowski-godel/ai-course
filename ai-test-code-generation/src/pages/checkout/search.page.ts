import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SearchPage extends BasePage {
  constructor(protected readonly page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.pwPage.goto("/search");
  }

  get queryInput(): Locator {
    return this.page.getByRole("textbox", { name: /search products/i });
  }

  get submit(): Locator {
    return this.page.getByRole("button", { name: /search/i });
  }

  productResult(name: string): Locator {
    return this.page.getByText(name, { exact: true });
  }

  async search(query: string): Promise<void> {
    await this.queryInput.fill(query);
    await this.submit.click();
  }

  async applyFilter(filterName: string): Promise<void> {
    await this.page.getByRole("button", { name: filterName }).click();
  }
}
