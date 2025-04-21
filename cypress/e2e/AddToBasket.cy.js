
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
  
    function normalizeText(text) {
      return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ")
        .replace(/[^\w\s]/g, "");
    }
  
    function addRandomProductToBasket() {
      cy.get(selectors.productCard)
        .should("have.length.greaterThan", 0)
        .then(($cards) => {
          const randomIndex = Math.floor(Math.random() * $cards.length);
          const selectedCard = $cards[randomIndex];
  
          cy.wrap(selectedCard).within(() => {
            cy.get(selectors.productName)
              .invoke("text")
              .then((name) => {
                cy.wrap(name).as("productName");
              });
  
            cy.get(selectors.productPrice)
              .invoke("text")
              .then((price) => {
                cy.wrap(price).as("productPrice");
              });
  
            cy.get(selectors.addToBasketButton).click();
          });
  
          cy.get(selectors.basketCountNav).should("contain", "1");
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
        const expectedName = normalizeText(name);
        cy.log("Expected normalized product name:", expectedName);
  
        cy.get("@productPrice").then((price) => {
          const expectedPrice = price.trim();
          cy.log("Expected product price:", expectedPrice);
  
          cy.get(selectors.basketItem)
            .first()
            .within(() => {
              cy.get(selectors.basketItemName, { timeout: 6000 })
                .should("exist")
                .and("be.visible")
                .invoke("text")
                .then((actualName) => {
                  const basketName = normalizeText(actualName);
                  cy.log("Actual normalized product name in basket:", basketName);
                  expect(basketName).to.include(expectedName);
                });
  
              cy.get(selectors.basketItemQuantity)
                .should("exist")
                .and("be.visible")
                .then((el) => {
                  cy.log("Actual quantity text:", el.text());
                  expect(el.text()).to.include(`x ${expectedQty}`);
                });
  
              cy.get(selectors.basketItemPrice)
                .should("exist")
                .and("be.visible")
                .then((el) => {
                  cy.log("Actual price text:", el.text());
                  expect(el.text()).to.include(expectedPrice);
                });
            });
  
          cy.get(selectors.basketCountPage)
            .should("exist")
            .and("be.visible")
            .then((el) => {
              cy.log("Basket count on page:", el.text());
              expect(el.text()).to.include(`${expectedQty}`);
            });
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
        cy.url().should("include", "/sweets");
      });
  
      it("TC_Add_2: Should add random product from sweets page to basket and verify", () => {
        addRandomProductToBasket();
        goToBasket();
        verifyProductInBasket();
      });
    });
  });
  
  















