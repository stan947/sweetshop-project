describe('TS_5 About Page', () => {

    beforeEach(() => {
        cy.visit('/sweets');
    });

    it('TC_5.1: Verify the page title is "Browse sweets"', () => {
        cy.get('h1').should('have.text', 'Browse sweets');
    });

    it("TC_5.2: Verify each product has a name, price, image,description and 'Add to Basket' button.", () => {

        cy.get(".card").each(($el) => {

            cy.wrap($el).within(() => {

                cy.get(".card-title").should("exist").and("be.visible").and("not.be.empty"); // Produkto pavadinimas
                cy.get(".card-text").should("exist").and("be.visible").and("not.be.empty"); // Produkto aprašymas
                cy.get(".text-muted").should("exist").and("be.visible").and("not.be.empty"); // Produkto kaina
                cy.get(".addItem").should("exist").and("be.visible").and("not.be.empty"); // "Add to Basket" mygtukas
                cy.get(".card-img-top")
                    .should("exist")
                    .and("be.visible")
                    .and(($img) => {
                        expect($img[0].naturalWidth).to.be.greaterThan(0); // Užtikrina, kad paveikslėlis nėra sugadintas
                    });
            });
        });
    });

});
