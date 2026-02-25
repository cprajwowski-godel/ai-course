Imagine your project already has some Page Objects and Components. A new UI element has been introduced — for example, a toggle, checkbox, or dropdown. Your task is to use the prompt pattern provided earlier, adapt it to your own framework, and:

Extend an existing Page Object by adding a new method for this element.
Update one of your tests to interact with this element (e.g., enable the toggle, select a dropdown value).
Reuse existing files and patterns instead of creating duplicates.
Follow the same conventions already used in your project (locators inside classes, stable selectors, reusable methods).
Output code with // path: headers so it matches your repo structure.
Hints:

Use the reusable prompt pattern from the previous section, and replace placeholders with your own values.
If possible, provide the outerHTML of the new element so Copilot knows how to generate the locator.
Enforce your style: “methods must follow the same pattern as in other Page Objects.”
Ask for comments in the test: // Initialization, // User actions, // Verification.