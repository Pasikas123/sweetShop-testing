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


