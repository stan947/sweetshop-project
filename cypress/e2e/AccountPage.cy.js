
describe('Login Page Tests', () => {

    const text = "p.lead";

    beforeEach(() => {
        cy.visit('/login');
        cy.login()
    });
    it('TC_3.1: Verify the login was successfull "', () => {

        cy.url().should('not.include', '/login');
        cy.get('h1').should('have.text', 'Your Account');
        cy.get(text).should('be.visible'). and("contain.text", "Welcome back test@user.com" )
        
    });
});