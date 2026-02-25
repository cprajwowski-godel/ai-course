import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class PlaywrightDevPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private get mainNav(): Locator {
    return this.page.getByRole("navigation", { name: "Main" });
  }

  get docsLink(): Locator {
    return this.mainNav.getByRole("link", { name: "Docs" });
  }

  get apiLink(): Locator {
    return this.mainNav.getByRole("link", { name: "API" });
  }

  get communityLink(): Locator {
    return this.mainNav.getByRole("link", { name: "Community" });
  }

  get getStartedLink(): Locator {
    return this.page.getByRole("link", { name: "Get started" });
  }

  get installationHeading(): Locator {
    return this.page.getByRole("heading", { name: "Installation" });
  }

  get pageTitle(): Locator {
    return this.page.locator("h1");
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }
}
