describe('Basket page', () => {
    const numberOfProducts = 4;
    const basketCount = ".badge.badge-success";
    const basketCountPage = "#basketCount";
    const basketItem = ".list-group-item";
    const basketItemName = "h6.my-0";
    const basketItemQuantity = "small.text-muted";
    const basketItemPrice = "span.text-muted";
    const basketTotal = "li.list-group-item.d-flex.justify-content-between strong";
    let calculatedTotalPrice = 0;
    const deliveryOptionFree = 'input[type="radio"][id="exampleRadios1"]';
    const deliveryOptionStandard = 'input[type="radio"][id="exampleRadios2"]';


    beforeEach(() => {
        cy.fillBasketWithProducts(numberOfProducts);
        cy.visit('/basket');
    });

    it('should show correct product details, count in basket and total price', () => {
        cy.get(basketCount).should('contain', numberOfProducts);

        cy.get(basketItem)
            .filter(`:has(${basketItemName})`)
            .each(($el) => {
                cy.wrap($el).within(() => {
                    cy.get(basketItemName)
                        .should('exist')
                        .and('not.be.empty');

                    cy.get(basketItemQuantity)
                        .invoke('text')
                        .then((text) => {
                            const match = text.match(/x\s?(\d+)/);
                            expect(match).to.not.be.null;
                            const qty = parseInt(match[1], 10);
                            expect(qty).to.be.gte(1);


                            cy.get(basketItemPrice)
                                .invoke('text')
                                .then((text) => {
                                    cy.log('Price:', text);
                                    const price = parseFloat(text.replace('£', ''));
                                    calculatedTotalPrice += price * qty;
                                    expect(text).to.match(/^£\d+\.\d{2}$/);
                                });
                        });
                });
            });

        cy.get(basketTotal)
            .should('be.visible')
            .invoke('text')
            .then((totalText) => {
                const total = parseFloat(totalText.replace('£', ''));
                expect(total).to.be.closeTo(calculatedTotalPrice, 0.01);
            });
    })

    it("should correctly apply £0.00 for Collect (Free) delivery", () => {
        calculatedTotalPrice = 0;
        cy.get(deliveryOptionFree).check({ force: true });

        cy.get(basketItem)
            .filter(`:has(${basketItemName})`)
            .each(($el) => {
                cy.wrap($el).within(() => {

                    cy.get(basketItemQuantity)
                        .invoke('text')
                        .then((text) => {
                            const match = text.match(/x\s?(\d+)/);
                            expect(match).to.not.be.null;
                            const qty = parseInt(match[1], 10);
                            expect(qty).to.be.gte(1);

                            cy.get(basketItemPrice)
                                .invoke("text")
                                .then((priceText) => {
                                    const price = parseFloat(priceText.replace("£", ""));
                                    calculatedTotalPrice += price * qty;
                                });
                        });
                });
            });


        cy.get(basketTotal)
            .invoke("text")
            .then((totalText) => {
                const total = parseFloat(totalText.replace("£", ""));
                expect(total).to.be.closeTo(calculatedTotalPrice, 0.01);
            });
    });


    it("should correctly apply £1.99 for Standard Shipping", () => {

        calculatedTotalPrice = 0;
        cy.get(deliveryOptionStandard).check({ force: true });

        cy.get(basketItem)
            .filter(`:has(${basketItemName})`)
            .each(($el) => {
                cy.wrap($el).within(() => {

                    cy.get(basketItemQuantity)
                        .invoke('text')
                        .then((text) => {
                            const match = text.match(/x\s?(\d+)/);
                            expect(match).to.not.be.null;
                            const qty = parseInt(match[1], 10);
                            expect(qty).to.be.gte(1);

                            cy.get(basketItemPrice)
                                .invoke("text")
                                .then((priceText) => {
                                    const price = parseFloat(priceText.replace("£", ""));
                                    calculatedTotalPrice += price * qty;
                                    cy.log('Calculated Total Price (without shipping):', calculatedTotalPrice);

                                });
                        });
                });
            });
        const expectedTotalWithShipping = calculatedTotalPrice + 1.99;
        cy.log('Expected Total with Shipping:', expectedTotalWithShipping);

        cy.get(basketTotal)
            .invoke("text")
            .then((totalText) => {
                const total = parseFloat(totalText.replace("£", ""));
                expect(total).to.be.closeTo(expectedTotalWithShipping, 0.01);
            });
    });

    it("should update basket count and total price after removing a product", () => {
            
            let removedPrice = 0;
            let removedQty = 1;
            calculatedTotalPrice = 0;
        
            cy.get(basketCount).should("contain", "4");
            cy.get(basketCountPage).should("contain", "4");
        
    
            cy.get(basketItem)
            .filter(`:has(${basketItemName})`)
            .each(($el,index) => {
                cy.wrap($el).within(() => {

                    cy.get(basketItemQuantity).invoke("text").then((Text) => {
                        const qty = parseInt(Text.match(/x\s?(\d+)/)[1], 10);

                        cy.get(basketItemPrice).invoke("text").then((priceText) => {
                            const price = parseFloat(priceText.replace("£", ""));
        
                            if (index === 0) {
                                removedPrice = price;
                                removedQty = qty;
                            }
        
                            calculatedTotalPrice += price * qty;
                        });
                    });
                });
            });
        
        
            cy.get(basketItem).first().within(() => {
                cy.contains('Delete Item').click();
            });
        
    
            cy.get(basketCount).should("contain", "3");
            cy.get(basketCountPage).should("contain", "3");
        
        
            cy.get(basketTotal).invoke("text").then((newTotalText) => {
                const newTotal = parseFloat(newTotalText.replace("£", ""));
                const expected =  calculatedTotalPrice - (removedPrice * removedQty);
                expect(newTotal).to.be.closeTo(expected, 0.01);
            });
        });
        
        it("Empty basket and  verify the basket is empty", () => {

            cy.get(basketCount).should("contain", "4");
            cy.get(basketCountPage).should("contain", "4");
            cy.get(basketTotal).should('exist').and('not.be.empty');

            cy.contains('a', 'Empty Basket').click();

            cy.on('window:confirm', (text) => {
                expect(text).to.eq('Are you sure you want to empty your basket?');
                return true; 
            });

            cy.get(basketCount).should("contain", "0");
            cy.get(basketCountPage).should("contain", "0");
            cy.get(basketTotal).should("contain", 0);
    
        });  

        it('should not empty the basket when clicking "Cancel" on confirm dialog', () => {

            cy.contains('a', 'Empty Basket').click();
        
            cy.on('window:confirm', (text) => {
                expect(text).to.eq('Are you sure you want to empty your basket?');
                return false;
            });
        
            cy.get(basketCount).should('contain', '4');
            cy.get(basketCountPage).should("contain", "4");
            cy.get(basketItem).should('have.length.greaterThan', 0);
        });
        
});




