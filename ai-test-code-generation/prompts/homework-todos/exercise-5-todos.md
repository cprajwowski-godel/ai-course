Context:
Test utilities also evolve. A date formatter or API wrapper might crash on edge cases. This exercise shows how to direct Copilot to make a minimal, safe fix without rewriting the whole file.


Project & framework:
- Stack: {{yourStack}}
- File to fix:
// path: src/utils/dateHelper.{{ext}}
{{buggyCode}}

Problem:
Function throws on null/undefined input. Must return empty string in that case.

Fix:
- Add null/undefined guard.
- Keep other behavior unchanged.
- Keep function signature consistent with project.
- Output corrected code only.
Expected result: Function updated to handle null/undefined gracefully, without refactors.

Hints:

If Copilot tries to refactor the whole file, add: “only update this function.”
Include one input/output example to clarify desired behavior.