describe("TS_AddToBasket: Add to Basket Functionality", () => {

    const selectors = {
      productCard: ".card",
      productName: ".card-title",
      productPrice: ".text-muted",
      addToBasketButton: ".addItem",
      nav: "nav",
      basketList: "#basketItems",
      basketItem: "#basketItems .list-group-item",
      basketItemName: "h6.my-0",
      basketItemQuantity: ".text-muted:contains('x')",
      basketItemPrice: ".text-muted",
      basketCountNav: ".badge.badge-success",
      basketCountPage: "#basketCount",
    };

    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
    
      });
    

    function addRandomProductToBasket() {
      cy.get(selectors.productCard).should('have.length.greaterThan', 0).then(($cards) => {
        const randomIndex = Math.floor(Math.random() * $cards.length);
        const selectedCard = $cards[randomIndex];
  
        cy.wrap(selectedCard).within(() => {
          cy.get(selectors.productName)
            .invoke("text")
            .then((name) => cy.wrap(name.trim()).as("productName"));
  
          cy.get(selectors.productPrice)
            .invoke("text")
            .then((price) => cy.wrap(price.trim()).as("productPrice"));
  
          cy.get(selectors.addToBasketButton).click();
        });
  
    
        cy.get(selectors.basketCountNav, { timeout: 10000 }).should("contain", "1");
        cy.wait(500);  
      });
    }
  
    
    function goToBasket() {
      cy.get(selectors.nav).within(() => {
        cy.contains("Basket").click();
      });
  
    
      cy.get(selectors.basketList, { timeout: 10000 }).should("be.visible");
    }
  

    function verifyProductInBasket(expectedQty = 1) {
      cy.get("@productName").then((name) => {
        const trimmedName = name.trim();
  
        cy.get("@productPrice").then((price) => {
          const trimmedPrice = price.trim();
  
    
          cy.get(selectors.basketItem).first().within(() => {
            cy.get(selectors.basketItemName).should("contain", trimmedName);
            cy.get(selectors.basketItemQuantity).should("contain", `x ${expectedQty}`);
            cy.get(selectors.basketItemPrice).should("contain", trimmedPrice);
          });
  
          
          cy.get(selectors.basketCountPage).should("contain", expectedQty);
        });
      });
    }
  
    context("From Main Page", () => {
      beforeEach(() => {
    
        cy.visit("/");
    
      });
  
      it("TC_Add_1: Should add random product from main page to basket and verify", () => {
        addRandomProductToBasket();
        goToBasket();
        verifyProductInBasket();
      });
    });
  
    context("From Sweets Page", () => {
      beforeEach(() => {
        
        cy.visit("/sweets");
    
        cy.url().should('include', '/sweets');
    
      });
  
      it("TC_Add_2: Should add random product from sweets page to basket and verify", () => {
        addRandomProductToBasket();
        goToBasket();
        verifyProductInBasket();
      });
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  