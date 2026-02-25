import { test, expect } from "../../../src/fixtures";

test("should complete full checkout flow", async ({
  searchPage,
  productPage,
  cartPage,
  checkoutPage,
  header,
}) => {
  const productName = "Laptop";
  const expectedPrice = "$";

  await test.step("Given user is on the search page", async () => {
    await searchPage.open();
  });

  await test.step("When user searches for a product and selects it", async () => {
    await searchPage.search(productName);
    const productResult = searchPage.productResult(productName);
    await expect(productResult).toBeVisible();
    await productResult.click();
  });

  await test.step("Then product details should display correctly", async () => {
    await expect(productPage.title).toContainText(productName);
    await expect(productPage.price).toContainText(expectedPrice);
  });

  await test.step("When user adds product to cart", async () => {
    await productPage.addToCart();
  });

  await test.step("Then cart badge should increment", async () => {
    await expect(header.cartBadge).toContainText("1");
  });

  await test.step("When user proceeds to checkout", async () => {
    await cartPage.open();
    await expect(cartPage.items).toBeVisible();
    await cartPage.proceedToCheckout();
  });

  await test.step("Then total should display with expected format", async () => {
    await expect(checkoutPage.total).toBeVisible();
    await expect(checkoutPage.total).toContainText(expectedPrice);
  });
});
