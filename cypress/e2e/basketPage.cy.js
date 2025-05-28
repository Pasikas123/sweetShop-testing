describe('Basket page testing', () => {

    beforeEach(() => {
        cy.visit('/basket')
    });

    describe('Page visibility', () => {
        it('Page has header', () => {
            cy.contains('h1', 'Your Basket').should('be.visible');
        });

        it('Page has description', () => {
            cy.contains('p', 'check your order details').should('be.visible');
        });

        it('Page has the Billing adress header', () => {
            cy.contains('h4', 'Billing address').should('be.visible');
        });

        it('Page has the billing and payment form', () => {
            cy.get('form.needs-validation').should('be.visible');
        });

        it('Page has the Your Basket information', () => {
            cy.contains('.text-muted', 'Your Basket').should('be.visible');
            cy.get('#basketCount').should('be.visible');

            cy.get('.list-group-item span').should('be.visible');
            cy.get('.list-group-item strong').should('be.visible');
        });

        it('Page has the Delivery options', () => {
            cy.contains('h4', 'Delivery').should('be.visible');

            cy.get('input[id="exampleRadios1"]').should('exist');
            cy.get('input[id="exampleRadios2"]').should('exist');

            cy.get('label[for="exampleRadios1"]').should('be.visible');
            cy.get('label[for="exampleRadios2"]').should('be.visible');
        });

        it('Page has the Promo code with button', () => {
            cy.get('input[placeholder="Promo code"]').should('be.visible');
            cy.get('button.btn.btn-secondary').should('be.visible');
        });

        it('Page has the Empty Basket button', () => {
            cy.contains('a[href="#"]', 'Empty Basket').should('be.visible');
        });

    });

    describe('Navigation links', () => {
        it("Navigation 'Sweet Shop' brings back to main page", () => {
            cy.navShop();
        });

        it("Navigation 'Sweets' brings to 'Sweets' page", () => {
            cy.navSweets();
        });

        it("Navigation 'About' brings to 'About' page", () => {
            cy.navAbout();
        });

        it("Navigation 'Login' brings to 'Login' page", () => {
            cy.navLogin();
        });

    });

    describe('Basket deleting functionality', () => {
        it("Delete single item from 1 total item", () => {
            cy.addWhamBars();
            cy.contains('a.small', 'Delete Item').click();

            cy.get('#basketCount').should('contain', '0');
            cy.get('.list-group-item strong').should('contain', '£0.00');
        });
        it("Delete single item from 4 total items", () => {
            cy.addMultipleItems();

            cy.get('a[href="javascript:removeItem(3);"]').click();

            cy.get('#basketCount').should('contain', '3');
            cy.get('.list-group-item strong').should('contain', '£2.75');
        });
        it("Delete two items from 4 total items", () => {
            cy.addMultipleItems();

            cy.get('a[href="javascript:removeItem(3);"]').click();
            cy.get('a[href="javascript:removeItem(4);"]').click();

            cy.get('#basketCount').should('contain', '2');
            cy.get('.list-group-item strong').should('contain', '£1.75');
        });
    });

    describe('Delivery functionality', () => {
        it("Choose Collect (FREE) with items in cart", () => {
            cy.addTwoDifferentItems();

            cy.get('label[for="exampleRadios1"]').click();
            cy.get('.list-group-item strong').should('contain', '£2.00');
        });

        it("Choose Collect (FREE) without items in cart", () => {
            cy.get('label[for="exampleRadios1"]').click();
            cy.get('.list-group-item strong').should('contain', '£0.00');
        });

        it("Choose Standard Shipping (£1.99) with different items in cart", () => {
            cy.addTwoDifferentItems();

            cy.get('label[for="exampleRadios2"]').click();
            cy.get('.list-group-item strong').should('contain', '£3.99');
        });

        it("Choose Standard Shipping (£1.99) with same items in cart", () => {
            cy.addTwoSameItems();

            cy.get('label[for="exampleRadios2"]').click();
            cy.get('.list-group-item strong').should('contain', '£3.49');
        });


        it("Choose Standard Shipping (£1.99) without items in cart", () => {
            cy.get('label[for="exampleRadios2"]').click();
            cy.get('.list-group-item strong').should('contain', '£1.99');
        });
    });

    describe('Promo code functionality', () => {
        it("Promo code empty", () => {
            cy.addTwoDifferentItems();

            cy.get('button.btn.btn-secondary').click();

            cy.contains('.invalid-feedback', 'Please input a valid promo code').should('be.visible');
        });

        it("Promo code entering", () => {
            cy.addTwoDifferentItems();

            cy.get('input[placeholder="Promo code"]').type('test');
            cy.get('button.btn.btn-secondary').click();

            cy.contains('.invalid-feedback', 'Please input a valid promo code').should('be.visible');
        });
    });

    describe('Empty basket functionality', () => {
        it("Empty basket with items in basket", () => {
            cy.addTwoDifferentItems();

            cy.contains('a[href="#"]', 'Empty Basket').click();
            cy.get('#basketCount').should('contain', '0');
            cy.get('.list-group-item strong').should('contain', '£0.00');
        });

        it("Empty basket button with no items in basket", () => {

            cy.contains('a[href="#"]', 'Empty Basket').click();
            cy.get('#basketCount').should('contain', '0');
            cy.get('.list-group-item strong').should('contain', '£0.00');
            cy.contains('.invalid-feedback', 'No items to delete').should('be.visible');
        });
    });

    describe('Making an order', () => {
        it("Make an order with valid data (no items in basket)", () => {
            cy.validBillingInfo();

            cy.url().should('eq', 'https://sweetshop.netlify.app/basket?')
            cy.contains('.invalid-feedback', 'Please add items to cart!').should('be.visible');
        });

        it("Make an order with valid data (with items in basket)", () => {
            cy.addTwoDifferentItems();

            cy.validBillingInfo();

            cy.url().should('not.equal', 'https://sweetshop.netlify.app/basket?')
        });

        it("Make an order with no billing information", () => {
            cy.addTwoDifferentItems();

            cy.get('label[for="exampleRadios1"]').click();
            cy.contains('button.btn-primary', 'Continue to checkout').click();

            cy.url().should('eq', 'https://sweetshop.netlify.app/basket')
            cy.invalidFeedback();
        });

        it("Make an order with every invalid data", () => {
            cy.addTwoDifferentItems();

            cy.invalidEveryBillingInfo();

            cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
            cy.invalidFeedback();
        });

        it("Make an order with split invalid data", () => {
            cy.addTwoDifferentItems();

            cy.invalidSplitBillingInfo();

            cy.invalidFeedback();
            cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
        });
    });

});