describe("TS_1: Main Page", () => {
  
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC_1.1: Should display the header with all navigation links", () => {
    cy.get("nav").should("be.visible"); // Header turi būti matomas

    cy.get("nav").within(() => {
      cy.get("a.nav-link[href='/sweets']").should("be.visible"); // Tikrinti "Sweets" nuorodą
      cy.get("a.nav-link[href='/about']").should("be.visible"); // Tikrinti "About" nuorodą
      cy.get("a.nav-link[href='/login']").should("be.visible"); // Tikrinti "Login" nuorodą
      cy.get("a.nav-link[href='/basket']").should("be.visible"); // Tikrinti "Basket" nuorodą
      cy.contains(".badge.badge-success", "0").should("be.visible"); //Krepšelio prekių skaičius

    });
  });

  it("TC_1.2: Should display the main welcome text", () => {
    cy.contains("Welcome to the sweet shop!").should("be.visible"); // Tikriname pagrindinį užrašą
  });

  it("TC_1.3: Should display the 'Browse Sweets' button and navigate correctly", () => {
    cy.contains("Browse Sweets").should("be.visible").click();
    cy.url().should("include", "/sweets");
  });

  it("TC_1.4: Should display at least 4 popular sweets with correct info", () => {
    cy.get(".card")
      .should("have.length.at.least", 4)
      .each(($el) => {
        cy.wrap($el).find(".card-title").should("be.visible"); // Pavadinimas
        cy.wrap($el).find(".card-text").should("be.visible"); // Aprašymas
        cy.wrap($el).find(".text-muted").should("be.visible"); // Kaina
        cy.wrap($el).find(".addItem").should("be.visible"); // "Add to Basket" mygtukas
      });
  });

});

