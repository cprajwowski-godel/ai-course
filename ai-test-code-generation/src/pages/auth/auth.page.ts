import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class AuthPage extends BasePage {
  constructor(protected readonly page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.pwPage.goto("/login");
  }

  get username(): Locator {
    return this.page.getByTestId("username-input");
  }

  get password(): Locator {
    return this.page.getByTestId("password-input");
  }

  get submit(): Locator {
    return this.page.getByTestId("login-btn");
  }

  get errorMessage(): Locator {
    return this.toastMessage;
  }

  async login(user: string, pass: string): Promise<void> {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submit.click();
  }
}
