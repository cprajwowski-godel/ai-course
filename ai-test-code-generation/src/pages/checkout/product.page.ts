import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class ProductPage extends BasePage {
  constructor(protected readonly page: Page) {
    super(page);
  }

  async open(productId: string): Promise<void> {
    await this.pwPage.goto(`/product/${productId}`);
  }

  get title(): Locator {
    return this.page.getByRole("heading", { level: 2 });
  }

  get price(): Locator {
    return this.page.locator(".ant-typography").nth(1);
  }

  get addToCartButton(): Locator {
    return this.page.getByRole("button", { name: /add to cart/i });
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }
}
