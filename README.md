# Playwright Tech Assignment

This repository contains automated end-to-end tests for a landing page with a multi-step dialog form, built using Playwright.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Test Coverage](#test-coverage)
- [Configuration](#configuration)

## 🔧 Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chumaks/playwright-tech-assignment.git
   cd playwright-tech-assignment
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🚀 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (with browser UI visible)
```bash
npm run test:headed
```

### Run tests with Playwright UI mode (interactive mode)
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run a specific test file
```bash
npx playwright test tests/landing.spec.ts
```

### View test report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## 📁 Project Structure

```
playwright-tech-assignment/
├── pages/                      # Page Object Models
│   └── landing/
│       ├── page.ts            # Landing page objects
│       └── dialog-form.ts     # Dialog form objects
├── tests/                      # Test specifications
│   └── landing.spec.ts        # Landing page tests
├── playwright.config.ts        # Playwright configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## ✅ Test Coverage

The test suite covers the following scenarios:

### Dialog Form Tests
- ✓ Complete form submission flow with valid data
- ✓ Unsupported zip code handling
- ✓ Step counter validation (currently skipped due to bug)
- ✓ Wrong zip code error message validation
- ✓ Wrong email address error message validation
- ✓ Wrong phone number error message validation
- ✓ Form isolation (errors in one form don't affect another)
- ✓ Page refresh behavior

### Landing Page Tests
- ✓ Reviews "Show more" button functionality

## ⚙️ Configuration

The tests are configured to run on multiple browsers:
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

**Base URL**: `https://test-qa.capslock.global/`

Additional settings:
- **Parallel execution**: Enabled
- **Screenshots**: Captured on failure
- **Trace**: Captured on first retry
- **Reporter**: HTML

## 📝 Notes

### Known Issues (documented in tests)
1. Step counter shows "2 of 5" instead of "3 of 5" for the third step
2. Some tests document UX considerations for improvement

### Test Data Constants
The tests use standardized test data:
- **Name**: `Serhii QA`
- **Email**: `serhii.qa@test.com`
- **Phone**: `2345678901`
- **Zip Code**: `10001` (valid), `12345` (unsupported), `1234` (invalid)

## 🤝 Contributing

This is a technical assignment project. For questions or issues, please contact the repository owner.

## 📄 License

ISC
