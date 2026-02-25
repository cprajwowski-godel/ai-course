Project & framework:
- Stack: Playwright + Typescript
- Structure:
  - Use consistent file naming
  - src/components/header.component.ts
  - group page files by feature

Optional DOM context (outerHTML):

Header
<div data-testid="cart-summary">
  <span data-testid="cart-total">$100</span>
  <button data-testid="checkout-btn">Checkout</button>
</div>

SearchPage:
<body>
  <div class="ant-layout" style="padding:40px">
    <input class="ant-input" placeholder="Search products" />
    <button class="ant-btn ant-btn-primary" style="margin-left:8px">Search</button>
    <div class="ant-list" style="margin-top:20px">
      <div class="ant-list-item">Product result name</div>
    </div>
  </div>
</body>

ProductPage:
<body>
  <div style="padding:40px">
    <h2 class="ant-typography">Product title</h2>
    <div class="ant-typography">$99.00</div>
    <button class="ant-btn ant-btn-primary" style="margin-top:16px">Add to cart</button>
  </div>
</body>

CartPage:
<body>
  <div style="padding:40px">
    <div class="ant-list">
      <div class="ant-list-item">Cart item 1</div>
      <div class="ant-list-item">Cart item 2</div>
    </div>
    <button class="ant-btn ant-btn-primary" style="margin-top:16px">Proceed to checkout</button>
  </div>
</body>

CheckoutPage:
<body>
  <div style="padding:40px">
    <h3 class="ant-typography">Total: $198.00</h3>
    <button class="ant-btn ant-btn-primary" style="margin-top:16px">Place order</button>
  </div>
</body>

Task:
1) SearchPage: queryInput(), submit(), productResult(name)
2) ProductPage: addToCart(), title(), price()
3) CartPage: items(), proceedToCheckout()
4) CheckoutPage: total(), placeOrder()
5) Header: cartBadge()

Rules and conventions:
- Extend BasePage and use super(page) in constructor
- Selectors: getByRole, getByLabel, getByTestId only.
- Never use deprecated code style
- Don't provide path header
- Don't add comments
- Use TypeScript constructor property initialization (constructor parameters with access modifiers)
- Put pages in fixtures for better accessibility