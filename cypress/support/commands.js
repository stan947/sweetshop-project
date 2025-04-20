

Cypress.Commands.add("fillBasketWithProducts", (numOfProducts = 4) => {
    const totalProducts = 16; 
    cy.visit('/sweets');

    for (let i = 0; i < numOfProducts; i++) {
        const randomIndex = Math.floor(Math.random() * totalProducts); 

        cy.get('.addItem') 
            .eq(randomIndex) 
            .click(); 

        cy.wait(1000); 
    }
});