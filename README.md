# DemoBlazePlaywrightPOMProject
A beginner-friendly Playwright automation project implementing Page Object Model for testing Demoblaze e-commerce workflows.

🚀 DemoBlaze Playwright Automation Framework (POM Architecture)

An end-to-end UI automation framework built using Playwright and JavaScript, implementing the Page Object Model (POM) design pattern.

This project demonstrates scalable test architecture, CI integration, and automation best practices for modern web applications.

🔗 Application Under Test: https://www.demoblaze.com

📖 Overview

This framework automates core user flows of the DemoBlaze e-commerce application, focusing on:

>> Authentication validation
>> UI visibility checks
>> Session handling (Login / Logout)
>> Stable locator strategies
>> CI-based automated execution

The framework is designed to be:

✅ Scalable
✅ Maintainable
✅ CI/CD Ready
✅ Industry-standard compliant

🏗️ Architecture & Design Pattern
🔹 Page Object Model (POM)

Each page is abstracted into a reusable class that:

✅Encapsulates locators
✅Encapsulates page actions
✅Improves readability
✅Reduces duplication
✅Enhances maintainability

This approach ensures clean separation between:

Test Logic
Page Interactions

Configuration

📂 Project Structure
DemoBlazePlaywrightPOMProject
│
├── .github/workflows/
│   └── playwright.yml          # CI pipeline configuration
│
├── pages/                      # Page Object Classes
│   ├── LoginPage.js
│   └── HomePage.js
│
├── tests/                      # Test Specifications
│   ├── LoginTest.spec.js
│   └── HomePageTest.spec.js
│
├── playwright.config.js        # Playwright configuration
├── package.json
├── package-lock.json
└── README.md

🛠️ Tech Stack
Tool	Purpose
✅Playwright	UI Automation
✅JavaScript	Test scripting
✅Node.js	Runtime environment
✅GitHub Actions	CI/CD
✅HTML Reporter	Test reporting

⚙️ Setup & Installation

1️⃣ Clone Repository
git clone https://github.com/rincy-r3876/DemoBlazePlaywrightPOMProject.git
cd DemoBlazePlaywrightPOMProject

2️⃣ Install Dependencies
npm install

3️⃣ Install Playwright Browsers
npx playwright install

4️⃣ Execute Tests
npx playwright test

5️⃣ View Test Report
npx playwright show-report

🧪 Test Coverage
✔ Login Feature

Successful login validation
Welcome username visibility
Session validation
✔ Home Page Feature
Logout link visibility
Post-login UI validation

🔄 Continuous Integration (CI)

This project integrates with GitHub Actions to automatically:
Install dependencies
Install Playwright browsers
Execute test suite
Generate reports

Fail build if:

Tests fail
.only is committed (via forbidOnly)

Workflow file:

.github/workflows/playwright.yml


CI ensures production-ready code quality and prevents accidental test isolation.

🔐 Production-Safe Configuration

The framework uses:

forbidOnly: !!process.env.CI


This prevents accidental commits of:

test.only()
describe.only()


Ensuring:

Full test suite always runs in CI
No partial test execution in production pipelines

🚀 Key Automation Best Practices Implemented

Page Object Model (POM)
Explicit waits over hard waits
Centralized configuration
CI-driven execution
Clean locator strategies
Structured test organization
Scalable folder architecture

📈 Scalability Potential

This framework can be extended to include:

Data-driven testing
API integration testing
Parallel cross-browser execution
Docker containerization
Advanced reporting (Allure)
Environment-based configurations
Test tagging & selective execution

👩‍💻 Author

Rincy Mol R
QA  | Playwright Enthusiast
