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
            
            cy.contains('a', 'Sweet Shop').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/');
            cy.contains('h1', 'Welcome to the sweet shop!').should('be.visible');
        });

        it("Navigation 'Sweets' brings to 'Sweets' page", () => {
            
            cy.contains('a', 'Sweets').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/sweets');
            cy.contains('h1', 'Browse sweets').should('be.visible');
        });

        it("Navigation 'Login' brings to 'Login' page", () => {
            
            cy.contains('a', 'Login').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/login');
            cy.contains('h1', 'Login').should('be.visible');
        });

        it("Navigation 'Basket' brings to 'Basket' page", () => {
            
            cy.contains('a', 'Basket').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
            cy.contains('h1', 'Your Basket').should('be.visible');
        });

    });

});