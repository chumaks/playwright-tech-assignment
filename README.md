# Playwright Tech Assignment

This repository contains automated end-to-end tests for a landing page built using Playwright.

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

### Implemented tests
- ✓ Complete form submission flow with valid data
- ✓ Unsupported zip code handling
- ✓ Step counter validation (currently skipped due to bug)
- ✓ Wrong zip code error message validation
- ✓ Wrong email address error message validation
- ✓ Wrong phone number error message validation
- ✓ Form isolation (errors in one form don't affect another)
- ✓ Page refresh behavior

Why I've selected these scenarios: I chose these scenarios because they cover the most critical user interactions on the landing page. The main purpose of end-to-end tests is to ensure that all key user actions — particularly call-to-action (CTA) buttons and form submissions — work as expected. From a user’s perspective, it’s essential to verify that every interactive element functions correctly, transitions between steps are smooth, and input validations behave as intended. These tests help ensure that the user experience remains consistent and reliable across typical and edge-case scenarios.

### What improvements could be made: 
- Add multi-browser support
- Add tests for mobile layouts to verify responsive design and mobile usability
- Increase the number of workers to enable faster parallel test execution
- Avoid hardcoded test data — use libraries such as faker.js to generate random user data (e.g., name, email, phone).
- Add snapshot tests to validate UI elements such as image carousels (ensuring correct images are displayed when navigating between slides).
- Introduce a CI configuration (YAML file) to automate test runs as part of a continuous integration pipeline.
- Generate custom test reports and integrate with Slack or similar channels to automatically share test results with the team.
- Run tests in Docker

**Base URL**: `https://test-qa.capslock.global/`

### Founded bugs
1. '2 of 5' progress title shown instead of '3 of 5' for the third step in the dialog form
STR:
1. Open https://test-qa.capslock.global/
2. Scroll to the first dialog form
3. Enter valid ZIP code ('10001', for example)
4. Click on the 'Next' button -> Next step is shown. '2 of 5' counter steps is appeared
5. Choose any option on the next step ('Safety', for example)
6. Click on the 'Next' button

ER: '3 of 5' progress title shown. Progress bar is changed
AR: '2 of 5' progress title still shown. Progress bar is not changed

2. '1 of ' progress title shown for the unsupported code
STR:
1. Open https://test-qa.capslock.global/
2. Scroll to the first dialog form
3. Enter unsupported ZIP code ('12345', for example)
4. Click on the 'Next' button -> Next step is shown

ER: '1 of %count of steps for this case% progress title shown
AR: '1 of ' progress title shown for the unsupported code. It still shown if enter valid email and proceed to the next step

Potential UX bugs

3. Dialog form progress resets to step 1 after refresh
STR:
1. Open https://test-qa.capslock.global/
2. Scroll to the first dialog form
3. Enter valid ZIP code ('10001', for example)
4. Click on the 'Next' button
5. Choose any option on the next step -> Step 3 shown
6. Refresh the page
7. Scroll ot the dialog form

ER: Dialog form progress still on the step 3
AR: Dialog form progress resets to step 1

4. Dialog form doesn't have back button
ER: From the UX perspective tt should be possible to return to the previous step and change your option (email, zip, etc)
