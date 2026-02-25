Project & framework:
- Stack: Playwright+Typescript
- File to fix:
// path: src/pages/checkout/results.page.ts
```typescript
get items(): Locator {
    return this.page.getByTestId("result-item");
}
```
Problem:
Locator is outdated. The element now has data-testid="new-result-item-id".
Our convention is to use stable selectors in Page Objects.

Fix:
- Replace locator with data-testid equivalent.
- Keep class & method signatures unchanged.
- Output corrected code only.
