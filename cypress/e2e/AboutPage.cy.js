describe('TS_4 About Page', () => {

    beforeEach(() => {
        cy.visit('/about');
    });

    it('TC_4.1 Verify the page has the title "Sweet Shop Project"', () => {
        cy.get('h1').should('have.text', 'Sweet Shop Project');
    });
    
    it('TC_1.2 Verify the page has a description', () => {
        cy.get('p.lead').each(($el) => {
            cy.wrap($el)
                .should('be.visible')
                .and('not.be.empty');
        });
    });

    it('TC_4.3 Verify the page has a banner and it matches the year 2018', () => {
        cy.get('p.m-0.text-center')
            .should('be.visible')
            .and('not.be.empty')
            .and('include.text', 'Sweet Shop Project 2018');
    });

});