describe('Sweets page testing', () => {

    beforeEach(() => {
        cy.visit('/sweets')
    });

    describe('Page visibility', () => {
        it('Page has header', () => {
            cy.contains('h1', 'Browse sweets').should('be.visible');
        });

        it('Page has description', () => {
            cy.contains('p', 'Browse our delicious choice of retro sweets.').should('be.visible');
        });

        it("All list items have necessary HTML elements", () => {
            cy.checkHtmlElements();
        });

    });

    describe('Navigation links', () => {
        it("Navigation 'Sweet Shop' brings back to main page", () => {
            cy.navShop();
        });

        it("Navigation 'About' brings to 'About' page", () => {
            cy.navAbout();
        });

        it("Navigation 'Login' brings to 'Login' page", () => {
            cy.navLogin();
        });

        it("Navigation 'Basket' brings to 'Basket' page", () => {
            cy.navBasket();
        });

    });

    describe('Adding to basket', () => {

        it("Add to basket single item Wham Bars", () => {
            cy.addWhamBars();
        });

        it("Add to basket two same items", () => {
            cy.addTwoSameItems();
        });

        it("Add to basket multiple items", () => {
            cy.addMultipleItems();
        });
    });

});