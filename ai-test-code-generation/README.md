# Test Automation Framework

Modern test automation framework built with TypeScript, Playwright, ESLint, and Winston logger (2025/2026 standards).

## Project Structure

```
├── src/
│   ├── pages/
│   │   ├── BasePage.ts           # Base class for all page objects
│   │   ├── BaseComponent.ts      # Base class for reusable components
│   │   ├── ExamplePage.ts        # Example page implementation
│   │   └── components/
│   │       ├── Modal.ts          # Reusable modal component
│   │       └── Navigation.ts     # Reusable navigation component
│   ├── utils/
│   │   └── logger.ts             # Winston-based logger utility
│   └── fixtures/
│       └── index.ts              # Custom test fixtures
├── tests/
│   └── e2e/
│       └── example.spec.ts       # Example test file
├── playwright.config.ts          # Playwright configuration
├── .eslintrc.json               # ESLint configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## Installation

```bash
npm install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Run with UI mode
npm run test:ui

# Debug tests
npm run test:debug

# View test report
npm run test:report

# Run specific test
npm run test:specific "test name"
```

## Linting

```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint:fix
```

## Key Features

### Page Object Model (POM)
- `BasePage`: Base class with common interactions
- Only recommended locators: `getByRole`, `getByLabel`, `getByTestId`
- Integrated Winston logging
- Error handling with try-catch

### Component Object Model (COM)
- `BaseComponent`: Reusable UI components
- Scoped locators relative to component root
- Used across multiple pages

### Winston Logger
- Contextual logging with class names
- Multiple transports: console and file
- Automatic log rotation
- Log levels: debug, info, warn, error

### ESLint Configuration
- TypeScript-specific rules
- Naming conventions enforced
- PascalCase for classes, camelCase for methods
- No deprecated code patterns

## Creating New Pages

```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly usernameField: Locator;
  private readonly passwordButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameField = this.getByLabel('Username');
    this.passwordButton = this.getByRole('button', { name: /login/i });
  }

  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

  async isLoaded(): Promise<boolean> {
    return this.isVisible(this.passwordButton);
  }

  async login(username: string, password: string): Promise<void> {
    await this.fill(this.usernameField, username);
    await this.click(this.passwordButton);
  }
}
```

## Writing Tests

```typescript
import { test, expect } from '../../src/fixtures';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('Login Tests', () => {
  test('should log in successfully', async ({ page, logger }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('user@example.com', 'password');
    
    expect(page.url()).toContain('/dashboard');
  });
});
```

## Best Practices

1. **Naming Conventions**
   - Classes: PascalCase (`LoginPage`, `Modal`)
   - Methods: camelCase (`fillUsername`, `clickLogin`)
   - Test names: descriptive phrases

2. **Locator Selection**
   - Use `getByRole` for interactive elements
   - Use `getByLabel` for form inputs
   - Use `getByTestId` for hard-to-reach elements

3. **Test Organization**
   - Group tests using `test.describe()`
   - Use `beforeEach` and `afterEach` for setup/teardown
   - One assertion concept per test

4. **Error Handling**
   - Use try-catch for optional elements
   - Log before assertions
   - Use descriptive error messages

## Configuration

### Environment Variables
Copy `.env.example` to `.env` and update values:
```
BASE_URL=http://localhost:3000
LOG_LEVEL=debug
```

### Playwright Config
- Multi-browser support (Chromium, Firefox, WebKit)
- Parallel execution
- Automatic retries on CI
- Screenshots and videos on failure

### ESLint Rules
- Enforces TypeScript best practices
- Naming conventions
- Code style consistency
- No console.log (use logger instead)

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Page Object Model Guide](https://playwright.dev/docs/pom)
- [Winston Logger](https://github.com/winstonjs/winston)
- [ESLint TypeScript](https://typescript-eslint.io/)
