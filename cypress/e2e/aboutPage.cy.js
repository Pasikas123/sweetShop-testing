describe('About page testing', () => {

    beforeEach(() => {
        cy.visit('/about')
    });

    describe('Page visibility', () => {
        it('Page has header', () => {
            cy.contains('h1', 'Sweet Shop Project').should('be.visible');
        });

        it('Page has description', () => {
            cy.contains('p', 'An intentionally broken web application').should('be.visible');
            cy.contains('p', 'Sweet Shop is a project created to help demonstrate some').should('be.visible');
        });


    });

    describe('Navigation links', () => {
        it("Navigation 'Sweet Shop' brings back to main page", () => {
            cy.navShop();
        });

        it("Navigation 'Sweets' brings to 'Sweets' page", () => {
            cy.navSweets();
        });

        it("Navigation 'Login' brings to 'Login' page", () => {
            cy.navLogin();
        });

        it("Navigation 'Basket' brings to 'Basket' page", () => {
            cy.navBasket();
        });

    });

});