describe('Header (navigation bar) tests', () => {
    it('TC_2.1: Should load the "Sweets" page from the main page', () => {
      cy.visit('/');
      cy.contains('a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('h1').should('have.text', 'Browse sweets');
    });
  
    it('TC_2.2: Should load the "About" page from the main page', () => {
      cy.visit('/');
      cy.contains('a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('h1').should('have.text', 'Sweet Shop Project');
    });
  
    it('TC_2.3: Should load the "Login" page from the main page', () => {
      cy.visit('/');
      cy.contains('a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('h1').should('have.text', 'Login');
    });
  
    it('TC_2.4: Should load the "Basket" page from the main page', () => {
      cy.visit('/');
      cy.contains('a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('h1').should('have.text', 'Your Basket');
    });
  
    it('TC_2.5: Should load the main page from the "Sweets" page', () => {
      cy.visit('/sweets');
      cy.get('a.navbar-brand').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
      cy.get('h1').should('have.text', 'Welcome to the sweet shop!');
    });
  
    it('TC_2.6: Should load the "About" page from the "Sweets" page', () => {
      cy.visit('/sweets');
      cy.contains('a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('h1').should('have.text', 'Sweet Shop Project');
    });
  
    it('TC_2.7: Should load the "Login" page from the "Sweets" page', () => {
      cy.visit('/sweets');
      cy.contains('a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('h1').should('have.text', 'Login');
    });
  
    it('TC_2.8: Should load the "Basket" page from the "Sweets" page', () => {
      cy.visit('/sweets');
      cy.contains('a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('h1').should('have.text', 'Your Basket');
    });
  
    it('TC_2.9: Should load the main page from the "About" page', () => {
      cy.visit('/about');
      cy.get('a.navbar-brand').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
      cy.get('h1').should('have.text','Welcome to the sweet shop!');
    });
  
    it('TC_2.10: Should load the "Sweets" page from the "About" page', () => {
      cy.visit('/about');
      cy.contains('a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('h1').should('have.text', 'Browse sweets');
    });
  
    it('TC_2.11: Should load the "Login" page from the "About" page', () => {
      cy.visit('/about');
      cy.contains('a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('h1').should('have.text', 'Login');
    });
  
    it('TC_2.12: Should load the "Basket" page from the "About" page', () => {
      cy.visit('/about');
      cy.contains('a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('h1').should('have.text', 'Your Basket');
    });
  
    it('TC_2.13: Should load the main page from the "Login" page', () => {
      cy.visit('/login');
      cy.get('a.navbar-brand').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
      cy.get('h1').should('have.text', 'Welcome to the sweet shop!');
    });
  
    it('TC_2.14: Should load the "Sweets" page from the "Login" page', () => {
      cy.visit('/login');
      cy.contains('a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('h1').should('have.text', 'Browse sweets');
    });
  
    it('TC_2.15: Should load the "About" page from the "Login" page', () => {
      cy.visit('/login');
      cy.contains('a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('h1').should('have.text', 'Sweet Shop Project');
    });
  
    it('TC_2.16: Should load the "Basket" page from the "Login" page', () => {
      cy.visit('/login');
      cy.contains('a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('h1').should('have.text', 'Your Basket');
    });
  
    it('TC_2.17: Should load the main page from the "Basket" page', () => {
      cy.visit('/basket');
      cy.get('a.navbar-brand').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
      cy.get('h1').should('have.text', 'Welcome to the sweet shop!');
    });
  
    it('TC_2.18: Should load the "Sweets" page from the "Basket" page', () => {
      cy.visit('/basket');
      cy.contains('a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('h1').should('have.text', 'Browse sweets');
    });
  
    it('TC_2.19: Should load the "About" page from the "Basket" page', () => {
      cy.visit('/basket');
      cy.contains('a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('h1').should('have.text', 'Sweet Shop Project');
    });
  
    it('TC_2.20: Should load the "Login" page from the "Basket" page', () => {
      cy.visit('/basket');
      cy.contains('a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('h1').should('have.text', 'Login');
    });
  });
  