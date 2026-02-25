Project & framework:
- Stack: Playwright + Typescript
- File to fix:
// path: src/utils/dateHelper.ts
```typescript
const date = new Date(isoDate);

```

Problem:
Function throws on null/undefined input. Must return empty string in that case.

Fix:
- Add null/undefined guard.
- Keep other behavior unchanged.
- Keep function signature consistent with project.
- Output corrected code only.