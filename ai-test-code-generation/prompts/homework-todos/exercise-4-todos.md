Context:
UI often changes (new attributes, renamed test IDs). Instead of regenerating an entire Page Object, you need Copilot to patch a single locator. This exercise practices scoping prompts narrowly and avoiding unrelated changes.


Project & framework:
- Stack: {{yourStack}}
- File to fix:
// path: src/pages/SomePage.{{ext}}
{{buggyLocatorCode}}

Problem:
Locator is outdated. The element now has data-testid="{{newTestId}}".
Our convention is to use stable selectors in Page Objects.

Fix:
- Replace locator with data-testid equivalent.
- Keep class & method signatures unchanged.
- Output corrected code only.
Expected result: Only the locator updated, rest of file intact.

Hints:

Paste outerHTML for the changed element to give Copilot context.
Add “do not modify unrelated code” to prevent over-fixing.