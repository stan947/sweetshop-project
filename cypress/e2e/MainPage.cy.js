describe("TS_1: Main Page", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("TC_1.1: Should display the header with all navigation links", () => {

    const basketCount = ".badge.badge-success";

    cy.get("nav").should("be.visible"); 

    cy.get("nav").within(() => {


      cy.contains("Sweets").should("be.visible");
      cy.contains("About").should("be.visible");
      cy.contains("Login").should("be.visible");
      cy.contains("Basket").should("be.visible");
      cy.contains(basketCount, "0").should("be.visible"); 

    });
  });

  it("TC_1.2: Should display the main welcome text", () => {
    cy.contains("Welcome to the sweet shop!").should("be.visible"); 
  });

  it("TC_1.3: Should display the 'Browse Sweets' button and navigate correctly", () => {
    cy.contains("Browse Sweets").should("be.visible").click();
    cy.url().should("include", "/sweets");
  });

  it("TC_1.4: Should display at least 4 popular sweets with correct info", () => {

    const productName = ".card-title";
    const productDescription = ".card-text";
    const productPrice = ".text-muted";
    const addToBasketButton = ".addItem";
    const productImage = ".card-img-top";
    
    cy.get(".card")
      .should("have.length.at.least", 4)
      .each(($el) => {
        cy.wrap($el).find(productName ).should("be.visible").and("not.be.empty"); 
        cy.wrap($el).find(productDescription).should("be.visible").and("not.be.empty"); 
        cy.wrap($el).find(productPrice).should("be.visible").and("not.be.empty"); 
        cy.wrap($el).find(addToBasketButton).should("be.visible").and("not.be.empty"); 
        cy.get(productImage)
        .should("exist")
        .and("be.visible")
        .and(($img) => {
            expect($img[0].naturalWidth, "Image should be loaded").to.be.greaterThan(0)
          });
      });
  });

});

