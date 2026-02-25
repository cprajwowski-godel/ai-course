import { test, expect } from "../../../src/fixtures";

test("should filter search results by price", async ({
  searchPage,
  resultsPage,
}) => {
  const searchQuery = "Laptop";
  const filterName = "Price < $1000";
  const maxPrice = 1000;

  await test.step("Given user is on search page", async () => {
    await searchPage.open();
  });

  await test.step("When user searches for a product", async () => {
    await searchPage.search(searchQuery);
  });

  await test.step("When user applies price filter", async () => {
    await searchPage.applyFilter(filterName);
  });

  await test.step("Then all results should have price below threshold", async () => {
    const itemCount = await resultsPage.items.count();

    for (let i = 0; i < itemCount; i++) {
      const priceText = await resultsPage.priceOf(i).textContent();
      const price = parseFloat(priceText?.replace(/[^\d.]/g, "") || "0");
      expect(price).toBeLessThan(maxPrice);
    }
  });

  await test.step("Then results should be visible", async () => {
    await expect(resultsPage.items.first()).toBeVisible();
  });
});
