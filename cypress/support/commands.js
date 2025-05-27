Cypress.Commands.add('checkMultipleItems', () => {
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
});

Cypress.Commands.add('addMultipleItems', () => {
    cy.get('a[data-name="Sherbert Straws"]').click();
    cy.get('a[data-name="Chocolate Cups"]').click();
    cy.get('a[data-name="Sherbet Discs"]').click();
    cy.get('a[data-name="Strawberry Bon Bons"]').click();
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
    cy.url('https://sweetshop.netlify.app/');
    cy.contains('h1', 'Welcome to the sweet shop!').should('be.visible');
});

Cypress.Commands.add('navSweets', () => {
    cy.contains('a', 'Sweets').click();
    cy.url('https://sweetshop.netlify.app/sweets');
    cy.contains('h1', 'Browse sweets').should('be.visible');
});

Cypress.Commands.add('navAbout', () => {
    cy.contains('a', 'About').click();
    cy.url('https://sweetshop.netlify.app/about');
    cy.contains('p', 'An intentionally broken web application to help demonstrate Chrome DevTools.').should('be.visible');
});

Cypress.Commands.add('navLogin', () => {
    cy.contains('a', 'Login').click();
    cy.url('https://sweetshop.netlify.app/login');
    cy.contains('h1', 'Login').should('be.visible');
});

Cypress.Commands.add('navBasket', () => {
    cy.contains('a', 'Basket').click();
    cy.url('https://sweetshop.netlify.app/basket');
    cy.contains('h1', 'Your Basket').should('be.visible');
});



