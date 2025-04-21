describe('Login Page Tests', () => {

    beforeEach(() => {
        cy.visit('/login');
    });

    it('TC_3.1: Verify the page title is "Login"', () => {
        cy.get('h1').should('have.text', 'Login');
    });

    it('TC_3.2: Verify the page has a description', () => {
        cy.get('p').should('not.be.empty');
    });

    it('TC_3.3: Verify the page contains "email" and "password" input fields', () => {

        cy.get('input[type="email"]').should('exist');
        cy.get('input[type="password"]').should('exist');

    });

    it('TC_3.4: Verify the page contains a "Login" button', () => {
        cy.get('button[type="submit"]').should('have.text', 'Login');
    });

    it('TC_3.5: Verify links to Twitter, Facebook, LinkedIn', () => {

        cy.get('a[href="#"] img[alt="twitter"]').should('be.visible').click();
        cy.url().should("include", "twitter.com");
        cy.get('a[href="#"] img[alt="facebook"]').should('be.visible').click();
        cy.url().should("include", "facebook.com");
        cy.get('a[href="#"] img[alt="linkedin"]').should('be.visible').click();
        cy.url().should("include", "linkedin.com");
    });

    it('TC_3.6: Positive test with valid data', () => {

        cy.get('input[type="email"]').type('testd@user.com');
        cy.get('input[type="password"]').type('ValidPassword123');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/00efc23d-b605-4f31-b97b-6bb276de447e.html');
    });

    it('TC_3.7: Negative test with wrong email format', () => {

        cy.get('input[type="email"]').type('invalidemail');
        cy.get('input[type="password"]').type('ValidPassword123');
        cy.get('button[type="submit"]').click();
        cy.contains('.invalid-feedback.invalid-email', 'Please enter a valid email address.').should('be.visible');

    });

    it('TC_3.8: Negative test with empty email', () => {
        cy.get('input[type="email"]').type(' ');
        cy.get('input[type="password"]').type('ValidPassword123');
        cy.get('button[type="submit"]').click();
        cy.contains('.invalid-feedback.invalid-email', 'Please enter a valid email address.').should('be.visible');
    });

    it('TC_3.9: Negative test with empty password', () => {
        cy.get('input[type="email"]').type('valid@example.com');
        cy.get('input[type="password"]').clear();
        cy.get('button[type="submit"]').click();
        cy.contains('.invalid-feedback', 'Please enter a valid password.').should('be.visible');

    });

    it('TC_3.10: Negative test with empty email and password', () => {
        cy.get('input[type="email"]').type(' ');
        cy.get('input[type="password"]').clear();
        cy.get('button[type="submit"]').click();
        cy.contains('.invalid-feedback', 'Please enter a valid email address.').should('be.visible');
        cy.contains('.invalid-feedback', 'Please enter a valid password.').should('be.visible');
    });
});