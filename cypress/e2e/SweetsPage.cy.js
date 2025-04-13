describe('TS_5 About Page', () => {

    beforeEach(() => {
        cy.visit('/sweets');
    });

    it('TC_5.1: Verify the page title is "Browse sweets"', () => {
        cy.get('h1').should('have.text', 'Browse sweets');
    });

    it("TC_5.2: Verify each product has a name, price, image,description and 'Add to Basket' button.", () => {

        cy.get(".card").each(($el) => {

            const productName = ".card-title";
            const productDescription = ".card-text";
            const productPrice = ".text-muted";
            const productImage = ".card-img-top";
            const addToBasketButton = ".addItem"

            cy.wrap($el).within(() => {

                cy.get(productName).should("exist").and("be.visible").and("not.be.empty"); 
                cy.get(productDescription).should("exist").and("be.visible").and("not.be.empty"); 
                cy.get(productPrice).should("exist").and("be.visible").and("not.be.empty"); 
                cy.get(addToBasketButton).should("exist").and("be.visible").and("not.be.empty"); 
                cy.get(productImage)
                    .should("exist")
                    .and("be.visible")
                    .and(($img) => {
                        expect($img[0].naturalWidth).to.be.greaterThan(0);
                    });
            });
        });
    });

});
