Project & framework:
- Stack: Playwright + Typescript
- Structure:
  - use existing file structure and name convention

Optional DOM context (outerHTML):
Results Page
<div role="list" data-testid="results">
  <div data-testid="result-item">
    <span class="title">Laptop</span>
    <span class="price">$999</span>
  </div>
</div>

Task:
1) SearchPage: queryInput(), submit(), applyFilter(filterName)
2) ResultsPage: items(), titleOf(index), priceOf(index)
