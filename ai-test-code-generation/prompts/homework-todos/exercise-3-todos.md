Context:
Filtering search results is a classic regression test case. It demonstrates how to loop through result sets and validate conditions dynamically (e.g., all items below a price). The key here is teaching Copilot to generate helper methods for collections, not just single elements.


Project & framework:
- Stack: {{yourStack}}
- Structure:
  - tests/e2e/search.spec.{{ext}}
  - src/pages/SearchPage.{{ext}}, src/pages/ResultsPage.{{ext}}

Optional DOM context (outerHTML):
<div role="list" data-testid="results">
  <div data-testid="result-item">
    <span class="title">Laptop</span>
    <span class="price">$999</span>
  </div>
</div>

Task:
1) SearchPage: queryInput(), submit(), applyFilter(filterName)
2) ResultsPage: items(), titleOf(index), priceOf(index)
3) Test (search.spec):
   - // Initialization: open search page
   - // User actions: type "Laptop", apply filter "Price < $1000"
   - // Verification: each result price < 1000
Expected result: ResultsPage exposes collection-based helpers (like getAllPrices()), and the spec asserts all values satisfy the filter.

Hints:

Explicitly require “assert for all items, not just one.”
Provide outerHTML for filters if Copilot guesses wrong.