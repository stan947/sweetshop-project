
describe('Header (navigation bar) tests', () => {

    it('TC_2.1: Should load the "Sweets" page from the main page', () => {
        cy.verifyNavigationLink('/', 'Sweets', '/sweets', 'Browse sweets');
    });
    it('TC_2.2: Should load the "About" page from the main page', () => {
        cy.verifyNavigationLink('/', 'About', '/about', 'Sweet Shop Project');
    });
    it('TC_2.3: Should load the "Login" page from the main page', () => {
        cy.verifyNavigationLink('/', 'Login', '/login', 'Login');
    });
    it('TC_2.4: Should load the "Basket" page from the main page', () => {
        cy.verifyNavigationLink('/', 'Basket', '/basket', 'Your Basket');
    });


    it('TC_2.5: Should load the main page from the "Sweets" page', () => {
        cy.visit('/sweets');
        cy.get('.navbar-brand').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/');
        cy.get('h1').should('have.text', 'Welcome to the sweet shop!');
    })
    it('TC_2.6: Should load the "About" page from the "Sweets" page', () => {
        cy.verifyNavigationLink('/sweets', 'About', '/about', 'Sweet Shop Project');
    });
    it('TC_2.7: Should load the "Login" page from the "Sweets" page', () => {
        cy.verifyNavigationLink('/sweets', 'Login', '/login', 'Login');
    });
    it('TC_2.8: Should load the "Basket" page from the "Sweets" page', () => {
        cy.verifyNavigationLink('/sweets', 'Basket', '/basket', 'Your Basket');
    });


    it('TC_2.9: Should load the main page from the "About" page', () => {
        cy.visit('/about');
        cy.get('.navbar-brand').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/');
        cy.get('h1').should('have.text', 'Welcome to the sweet shop!');
    });
    it('TC_2.10: Should load the "Sweets" page from the "About" page', () => {
        cy.verifyNavigationLink('/about', 'Sweets', '/sweets', 'Browse sweets');
    });
    it('TC_2.11: Should load the "Login" page from the "About" page', () => {
        cy.verifyNavigationLink('/about', 'Login', '/login', 'Login');
    });

    it('TC_2.12: Should load the "Basket" page from the "About" page', () => {
        cy.verifyNavigationLink('/about', 'Basket', '/basket', 'Your Basket');
    });


    it('TC_2.13: Should load the main page from the "Login" page', () => {
        cy.visit('/login');
        cy.get('.navbar-brand').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/');
        cy.get('h1').should('have.text', 'Welcome to the sweet shop!');
    });
    it('TC_2.14: Should load the "Sweets" page from the "Login" page', () => {
        cy.verifyNavigationLink('/login', 'Sweets', '/sweets', 'Browse sweets');
    })
    it('TC_2.15: Should load the "About" page from the "Login" page', () => {
        cy.verifyNavigationLink('/login', 'About', '/about', 'Sweet Shop Project');
    });
    it('TC_2.16: Should load the "Basket" page from the "Login" page', () => {
        cy.verifyNavigationLink('/login', 'Basket', '/basket', 'Your Basket');
    });


    it('TC_2.17: Should load the main page from the "Basket" page', () => {
        cy.visit('/basket');
        cy.get('.navbar-brand').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/');
        cy.get('h1').should('have.text', 'Welcome to the sweet shop!');
    });
    it('TC_2.18: Should load the "Sweets" page from the "Basket" page', () => {
        cy.verifyNavigationLink('/basket', 'Sweets', '/sweets', 'Browse sweets');
    });
    it('TC_2.19: Should load the "About" page from the "Basket" page', () => {
        cy.verifyNavigationLink('/basket', 'About', '/about', 'Sweet Shop Project');
    });
    it('TC_2.20: Should load the "Login" page from the "Basket" page', () => {
        cy.verifyNavigationLink('/basket', 'Login', '/login', 'Login');
    });
})