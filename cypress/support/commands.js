Cypress.Commands.add('verifyNavigationLink', (fromPage, linkText, expectedUrl, headerText) => {
    cy.visit(fromPage);
    cy.contains('a', linkText).click();
    cy.url().should('include', expectedUrl);
    cy.get('h1').contains(headerText);
  });