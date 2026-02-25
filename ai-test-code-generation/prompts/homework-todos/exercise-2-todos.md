Context:
Checkout flows test business-critical revenue paths. Here you’ll practice structuring multi-step scenarios: search, add to cart, verify totals, and complete checkout. This teaches how to break long flows into Page Objects and avoid raw selectors in specs.


Project & framework:
- Stack: {{yourStack}}
- Structure:
  - tests/e2e/checkout.spec.{{ext}}
  - src/pages/SearchPage.{{ext}}, src/pages/ProductPage.{{ext}}, src/pages/CartPage.{{ext}}, src/pages/CheckoutPage.{{ext}}
  - src/components/Header.{{ext}}
  - src/fixtures/testData.{{ext}}

Optional DOM context (outerHTML):
<div data-testid="cart-summary">
  <span data-testid="cart-total">$100</span>
  <button data-testid="checkout-btn">Checkout</button>
</div>

Task:
1) SearchPage: queryInput(), submit(), productResult(name)
2) ProductPage: addToCart(), title(), price()
3) CartPage: items(), proceedToCheckout()
4) CheckoutPage: total(), placeOrder()
5) Header: cartBadge()
6) Test (checkout.spec):
   - // Initialization: open search page
   - // User actions: search, select product, add to cart
   - // Verification: cart badge increments
   - // User actions: proceed to checkout
   - // Verification: total matches expected
Expected result: Clean separation of responsibilities across pages/components, and a spec that reads like a scenario, not a list of selectors.

Hints:

Paste outerHTML of cart/checkout blocks to guide Copilot’s locators.
Require badge increment check using assertions, not fixed waits.
Keep totals in fixtures if project uses external test data.