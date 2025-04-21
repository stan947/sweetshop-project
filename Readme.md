# Sweet Shop - Cypress End-to-End Tests

Automated E2E testing for the SweetShop web application using Cypress.\
You can view application here:  https://sweetshop.netlify.app/

---
## Description 

* The project provides automated Cypress tests that verify the functionality 
of the web application **SweetShop** pages.

* All   **7 Test Scenarios** and **49 Test Cases** are described in the [testcases.md](testcases.md) file

* This project uses a **GitHub Actions** CI pipeline that automatically runs **Cypress** tests

---

## Prerequisites

* Node.js and Node Package Manager (npm) instaled

## Setup

1. Clone the Repository

```bash
git clone https://github.com/stan947/sweetshop-project.git
```
2. Install Dependencies:

```bash
npm install
```
## Running Tests
### Run Cypress in UI mode
```bash
npm run co
```
### Run Cypress in CLI mode
```bash
npm run cr
```
## URL Configuration
The application `baseURL` is configured in the [cypress.config.js](cypress.config.js) file.

## Custom Cypress Commands
 The following custom Cypress commands are defined in [Cypress Commands](cypress/support/commands.js) file.
 * `cy.login()`: Logs with valid credentials.Used in `accountPage.cy.js` testing.
 * `cy.fillBasketWithProducts()`: Fills the basket with products.Used in `basketPage.cy.js` testing

## Continuous Integration (CI)
This project is configured for continuous integration using GitHub Actions. The workflow is defined in the [github/workflows/node.js.yml](.github/workflows/node.js.yml) file.

## Dependencies
The project uses the following dependencies:
* `cypress: ^14.2.0`

## Author

Stanislovas Šniukšta

## License

BIT



