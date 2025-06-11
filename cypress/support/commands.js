Cypress.Commands.add('addMultipleItems', () => {
    cy.get('a[data-name="Sherbert Straws"]').click();
    cy.get('a[data-name="Chocolate Cups"]').click();
    cy.get('a[data-name="Sherbet Discs"]').click();
    cy.get('a[data-name="Strawberry Bon Bons"]').click();
});

Cypress.Commands.add('addTwoSameItems', () => {
    cy.get('a[data-name="Sherbert Straws"]').dblclick();
});

Cypress.Commands.add('addTwoDifferentItems', () => {
    cy.get('a[data-name="Chocolate Cups"]').click();
    cy.get('a[data-name="Strawberry Bon Bons"]').click();
});

Cypress.Commands.add('addWhamBars', () => {
    cy.get('a[data-name="Wham Bar"]').click();
});

Cypress.Commands.add('validLogin', () => {
    cy.get('#exampleInputEmail').type('test@gmail.com');
    cy.get('#exampleInputPassword').type('test');
    cy.contains('button', 'Login').click();
});

Cypress.Commands.add('fillBillingInfo', (data) => {

    const inputs = [
        data.firstName,
        data.lastName
    ];

    inputs.forEach((value, i) => {
        cy.get('input.form-control').eq(i + 1)
        .clear()
        .type(value);
    });
    
    cy.get('#email').type(data.email);
    cy.get('#address').type(data.address);
    cy.get('#country').select(data.country);
    cy.get('#city').select(data.city);
    cy.get('#zip').type(data.zip);
    cy.get('#cc-name').type(data.ccName);
    cy.get('#cc-number').type(data.ccNumber);
    cy.get('#cc-expiration').type(data.ccExp);
    cy.get('#cc-cvv').type(data.ccCvv);

    cy.get('label[for="exampleRadios1"]').click();
    cy.contains('button.btn-primary', 'Continue to checkout').click();
});

