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

            cy.contains('a', 'Sweet Shop').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/');
            cy.contains('h1', 'Welcome to the sweet shop!').should('be.visible');
        });

        it("Navigation 'Sweets' brings to 'Sweets' page", () => {

            cy.contains('a', 'Sweets').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/sweets');
            cy.contains('h1', 'Browse sweets').should('be.visible');
        });

        it("Navigation 'About' brings to 'About' page", () => {

            cy.contains('a', 'About').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/about');
            cy.contains('p', 'An intentionally broken web application to help demonstrate Chrome DevTools.').should('be.visible');
        });

        it("Navigation 'Login' brings to 'Login' page", () => {

            cy.contains('a', 'Login').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/login');
            cy.contains('h1', 'Login').should('be.visible');
        });
    });

    describe('Add to basket functionality', () => {
        it("Add single item to basket", () => {
            cy.visit('/sweets');

            cy.addWhamBars();
            cy.contains('a', 'Basket').click();

            cy.get('#basketItems')
                .should('contain', 'Wham Bar')
                .and('contain', 'x 1')
                .and('contain', '£0.15')

            cy.get('#basketCount').should('contain', '1');
            cy.get('.list-group-item strong').should('contain', '£0.15');
        });
        it("Add two same items to basket", () => {
            cy.visit('/sweets');

            cy.addTwoSameItems();
            cy.contains('a', 'Basket').click();

            cy.get('#basketItems')
                .should('contain', 'Sherbert Straws')
                .and('contain', 'x 2')
                .and('contain', '£1.50')

            cy.get('#basketCount').should('contain', '2');
            cy.get('.list-group-item strong').should('contain', '£1.50');
        });
        it("Add multiple items to basket", () => {
            cy.visit('/sweets');

            cy.addMultipleItems();
            cy.contains('a', 'Basket').click();

            cy.get('#basketItems')
                .should('contain', 'Sherbert Straws')
                .and('contain', 'x 1')
                .and('contain', '£0.75')

            cy.get('#basketItems')
                .should('contain', 'Sherbet Discs')
                .and('contain', 'x 1')
                .and('contain', '£0.95')

            cy.get('#basketItems')
                .should('contain', 'Strawberry Bon Bons')
                .and('contain', 'x 1')
                .and('contain', '£1.00')

            cy.get('#basketItems')
                .should('contain', 'Chocolate Cups')
                .and('contain', 'x 1')
                .and('contain', '£1.00')

            cy.get('#basketCount').should('contain', '4');
            cy.get('.list-group-item strong').should('contain', '£3.70');
        });
    });

    describe('Basket deleting functionality', () => {
        it("Delete single item from 1 total item", () => {
            cy.visit('/sweets');
            cy.addWhamBars();
            cy.contains('a', 'Basket').click();
            cy.contains('a.small', 'Delete Item').click();

            cy.get('#basketCount').should('contain', '0');
            cy.get('.list-group-item strong').should('contain', '£0.00');
        });
        it("Delete single item from 4 total items", () => {
            cy.visit('/sweets');
            cy.addMultipleItems();
            cy.contains('a', 'Basket').click();

            cy.get('a[href="javascript:removeItem(3);"]').click();

            cy.get('#basketCount').should('contain', '3');
            cy.get('.list-group-item strong').should('contain', '£2.75');
        });
        it("Delete two items from 4 total items", () => {
            cy.visit('/sweets');
            cy.addMultipleItems();
            cy.contains('a', 'Basket').click();

            cy.get('a[href="javascript:removeItem(3);"]').click();
            cy.get('a[href="javascript:removeItem(4);"]').click();

            cy.get('#basketCount').should('contain', '2');
            cy.get('.list-group-item strong').should('contain', '£1.75');
        });
    });

    describe('Delivery functionality', () => {
        it("Choose Collect (FREE) with items in cart", () => {
            cy.visit('/sweets');
            cy.addTwoDifferentItems();
            cy.contains('a', 'Basket').click();

            cy.get('label[for="exampleRadios1"]').click();
            cy.get('.list-group-item strong').should('contain', '£2.00');
        });

        it("Choose Collect (FREE) without items in cart", () => {
            cy.get('label[for="exampleRadios1"]').click();
            cy.get('.list-group-item strong').should('contain', '£0.00');
        });

        it("Choose Standard Shipping (£1.99) with different items in cart", () => {
            cy.visit('/sweets');
            cy.addTwoDifferentItems();
            cy.contains('a', 'Basket').click();

            cy.get('label[for="exampleRadios2"]').click();
            cy.get('.list-group-item strong').should('contain', '£3.99');
        });

        it("Choose Standard Shipping (£1.99) with same items in cart", () => {
            cy.visit('/sweets');
            cy.addTwoSameItems();
            cy.contains('a', 'Basket').click();

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
            cy.visit('/sweets');
            cy.addTwoDifferentItems();
            cy.contains('a', 'Basket').click();

            cy.get('button.btn.btn-secondary').click();

            cy.contains('.invalid-feedback', 'Please input a valid promo code').should('be.visible');
        });

        it("Promo code entering", () => {
            cy.visit('/sweets');
            cy.addTwoDifferentItems();
            cy.contains('a', 'Basket').click();

            cy.get('input[placeholder="Promo code"]').type('test');
            cy.get('button.btn.btn-secondary').click();

            cy.contains('.invalid-feedback', 'Please input a valid promo code').should('be.visible');
        });
    });

    describe('Empty basket functionality', () => {
        it("Empty basket with items in basket", () => {
            cy.visit('/');
            cy.addTwoDifferentItems();
            cy.contains('a', 'Basket').click();

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
            cy.visit('/');
            cy.addTwoDifferentItems();
            cy.contains('a', 'Basket').click();
            cy.validBillingInfo();

            cy.url().should('not.equal', 'https://sweetshop.netlify.app/basket?');
            cy.contains('Thank you for your order').should('be.visible');
        });

        it("Make an order with no billing information", () => {
            cy.visit('/');
            cy.addTwoDifferentItems();
            cy.contains('a', 'Basket').click();

            cy.get('label[for="exampleRadios1"]').click();
            cy.contains('button.btn-primary', 'Continue to checkout').click();

            cy.url().should('eq', 'https://sweetshop.netlify.app/basket')

            cy.contains('.invalid-feedback', 'Valid first name is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Valid last name is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Please enter a valid email address for shipping updates').should('be.visible');
            cy.contains('.invalid-feedback', 'Please enter your shipping address').should('be.visible');
            cy.contains('.invalid-feedback', 'Please select a valid country').should('be.visible');
            cy.contains('.invalid-feedback', 'Please provide a valid state.').should('be.visible');
            cy.contains('.invalid-feedback', 'Zip code required.').should('be.visible');
            cy.contains('.invalid-feedback', 'Name on card is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Credit card number is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Expiration date required').should('be.visible');
            cy.contains('.invalid-feedback', 'Security code required').should('be.visible');

            cy.contains('Thank you for your order').should('not.exist');

        });

        it("Make an order with every invalid data", () => {
            cy.visit('/');
            cy.addTwoDifferentItems();
            cy.contains('a', 'Basket').click();
            cy.invalidEveryBillingInfo();

            cy.url().should('eq', 'https://sweetshop.netlify.app/basket');

            cy.contains('.invalid-feedback', 'Valid first name is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Valid last name is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Please enter a valid email address for shipping updates').should('be.visible');
            cy.contains('.invalid-feedback', 'Please enter your shipping address').should('be.visible');
            cy.contains('.invalid-feedback', 'Please select a valid country').should('be.visible');
            cy.contains('.invalid-feedback', 'Please provide a valid state.').should('be.visible');
            cy.contains('.invalid-feedback', 'Zip code required.').should('be.visible');
            cy.contains('.invalid-feedback', 'Name on card is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Credit card number is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Expiration date required').should('be.visible');
            cy.contains('.invalid-feedback', 'Security code required').should('be.visible');

            cy.contains('Thank you for your order').should('not.exist');
        });

        it("Make an order with split invalid data", () => {
            cy.visit('/');
            cy.addTwoDifferentItems();
            cy.contains('a', 'Basket').click();
            cy.invalidSplitBillingInfo();

            cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
            cy.contains('Thank you for your order').should('not.exist');

            cy.contains('.invalid-feedback', 'Valid first name is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Valid last name is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Please enter a valid email address for shipping updates').should('be.visible');
            cy.contains('.invalid-feedback', 'Please enter your shipping address').should('be.visible');
            cy.contains('.invalid-feedback', 'Please select a valid country').should('be.visible');
            cy.contains('.invalid-feedback', 'Please provide a valid state.').should('be.visible');
            cy.contains('.invalid-feedback', 'Zip code required.').should('be.visible');
            cy.contains('.invalid-feedback', 'Name on card is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Credit card number is required').should('be.visible');
            cy.contains('.invalid-feedback', 'Expiration date required').should('be.visible');
            cy.contains('.invalid-feedback', 'Security code required').should('be.visible');
        });
    });

});