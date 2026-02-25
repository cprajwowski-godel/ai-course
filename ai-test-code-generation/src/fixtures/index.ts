import { test as base } from "@playwright/test";
import { logger } from "../utils/logger";
import { AuthPage } from "../pages/auth/auth.page";
import { HomePage } from "../pages/auth/home.page";
import { SearchPage } from "../pages/checkout/search.page";
import { ResultsPage } from "../pages/checkout/results.page";
import { ProductPage } from "../pages/checkout/product.page";
import { CartPage } from "../pages/checkout/cart.page";
import { CheckoutPage } from "../pages/checkout/checkout.page";
import { Header } from "../components/header.component";
import type { Logger } from "winston";

type TestFixtures = {
  logger: Logger;
  authPage: AuthPage;
  homePage: HomePage;
  searchPage: SearchPage;
  resultsPage: ResultsPage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  header: Header;
};

export const test = base.extend<TestFixtures>({
  logger: async ({}, use) => {
    await use(logger);
  },
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
  resultsPage: async ({ page }, use) => {
    await use(new ResultsPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  header: async ({ page }, use) => {
    await use(new Header(page));
  },
});

export { expect } from "@playwright/test";
