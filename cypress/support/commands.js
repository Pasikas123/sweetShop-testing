Cypress.Commands.add('addMultipleItems', () => {
    cy.visit('/sweets')
    cy.get('a[data-name="Sherbert Straws"]').click();
    cy.get('a[data-name="Chocolate Cups"]').click();
    cy.get('a[data-name="Sherbet Discs"]').click();
    cy.get('a[data-name="Strawberry Bon Bons"]').click();

    cy.contains('a span', '4').should('be.visible');
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

    cy.get('.list-group-item strong').should('contain', '£3.70');

});

Cypress.Commands.add('addTwoSameItems', () => {
    cy.visit('/sweets');
    cy.get('a[data-name="Sherbert Straws"]').dblclick();
    cy.contains('a span', '2').should('be.visible');
    cy.contains('a', 'Basket').click();

    cy.get('#basketItems')
        .should('contain', 'Sherbert Straws')
        .and('contain', 'x 2')
        .and('contain', '£1.50')

    cy.get('.list-group-item strong').should('contain', '£1.50');
});

Cypress.Commands.add('addTwoDifferentItems', () => {
    cy.visit('/sweets');
    cy.get('a[data-name="Chocolate Cups"]').click();
    cy.get('a[data-name="Strawberry Bon Bons"]').click();
    cy.contains('a', 'Basket').click();
});

Cypress.Commands.add('addWhamBars', () => {
    cy.visit('/sweets')
    cy.get('a[data-name="Wham Bar"]').click();

    cy.contains('a span', '1').should('be.visible');
    cy.contains('a', 'Basket').click();

    cy.get('#basketItems')
        .should('contain', 'Wham Bar')
        .and('contain', 'x 1')
        .and('contain', '£0.15')

    cy.get('.list-group-item strong').should('contain', '£0.15');
});

Cypress.Commands.add('checkHtmlElements', () => {
    cy.get('.card').each($item => {
        cy.wrap($item).find('img').should(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
        cy.wrap($item).find('h4').should('be.visible');
        cy.wrap($item).find('p').should('be.visible');
        cy.wrap($item).find('small').should('be.visible');
        cy.wrap($item).find('.addItem').should('be.visible');
    });
});

Cypress.Commands.add('validLogin', () => {
    cy.get('#exampleInputEmail').type('test@gmail.com');
    cy.get('#exampleInputPassword').type('test');
    cy.contains('button', 'Login').click();
});

Cypress.Commands.add('invalidEmail', () => {
    cy.contains('.invalid-email', 'Please enter a valid email address').should('be.visible');
});
Cypress.Commands.add('invalidPass', () => {
    cy.contains('.invalid-password', 'Please enter a valid password').should('be.visible');
});

Cypress.Commands.add('navShop', () => {
    cy.contains('a', 'Sweet Shop').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
    cy.contains('h1', 'Welcome to the sweet shop!').should('be.visible');
});

Cypress.Commands.add('navSweets', () => {
    cy.contains('a', 'Sweets').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/sweets');
    cy.contains('h1', 'Browse sweets').should('be.visible');
});

Cypress.Commands.add('navAbout', () => {
    cy.contains('a', 'About').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/about');
    cy.contains('p', 'An intentionally broken web application to help demonstrate Chrome DevTools.').should('be.visible');
});

Cypress.Commands.add('navLogin', () => {
    cy.contains('a', 'Login').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/login');
    cy.contains('h1', 'Login').should('be.visible');
});

Cypress.Commands.add('navBasket', () => {
    cy.contains('a', 'Basket').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
    cy.contains('h1', 'Your Basket').should('be.visible');
});

Cypress.Commands.add('validBillingInfo', () => {
    cy.get('input.form-control').eq(1).type('Test');
    cy.get('input.form-control').eq(2).type('Test');
    cy.get('#email').type('tester@gmail.com');
    cy.get('#address').type('Test str. 22-2');
    cy.get('#country').select('United Kingdom');
    cy.get('#city').select('Bristol');
    cy.get('#zip').type('123123');
    cy.get('#cc-name').type('Tester Tester');
    cy.get('#cc-number').type('123123123123123');
    cy.get('#cc-expiration').type('08/28');
    cy.get('#cc-cvv').type('123');

    cy.get('label[for="exampleRadios1"]').click();
    cy.contains('button.btn-primary', 'Continue to checkout').click();
});

Cypress.Commands.add('invalidEveryBillingInfo', () => {
    cy.get('input.form-control').eq(1).type('123123');
    cy.get('input.form-control').eq(2).type('123123');
    cy.get('#email').type('123123');
    cy.get('#address').type('123123');
    cy.get('#country').select('United Kingdom');
    cy.get('#city').select('Bristol');
    cy.get('#zip').type('test');
    cy.get('#cc-name').type('123123123123');
    cy.get('#cc-number').type('test');
    cy.get('#cc-expiration').type('test');
    cy.get('#cc-cvv').type('e');

    cy.get('label[for="exampleRadios1"]').click();
    cy.contains('button.btn-primary', 'Continue to checkout').click();
});

Cypress.Commands.add('invalidSplitBillingInfo', () => {
    cy.get('input.form-control').eq(1).type('123123');
    cy.get('input.form-control').eq(2).type('123123');
    cy.get('#email').type('123123@gmail.com');
    cy.get('#address').type('123123');
    cy.get('#country').select('United Kingdom');
    cy.get('#city').select('Bristol');
    cy.get('#zip').type('test');
    cy.get('#cc-name').type('123123123123');
    cy.get('#cc-number').type('test');
    cy.get('#cc-expiration').type('test');
    cy.get('#cc-cvv').type('123');

    cy.get('label[for="exampleRadios1"]').click();
    cy.contains('button.btn-primary', 'Continue to checkout').click();
});

Cypress.Commands.add('invalidFeedback', () => {
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



