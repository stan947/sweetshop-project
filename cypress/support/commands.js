

Cypress.Commands.add("fillBasketWithProducts", (numOfProducts = 4) => {
    const totalProducts = 16; 
    cy.visit('/sweets');

    for (let i = 0; i < numOfProducts; i++) {
        const randomIndex = Math.floor(Math.random() * totalProducts); 

        cy.get('.addItem') 
            .eq(randomIndex) 
            .click(); 

 
    }
});

Cypress.Commands.add('login', (email = 'testd@user.com', password = 'ValidPassword123') => {
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();
});
