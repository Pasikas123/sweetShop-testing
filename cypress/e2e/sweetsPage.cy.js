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

    });

    describe('Navigation links', () => {
        it("Navigation 'Sweet Shop' brings back to main page", () => {

            cy.contains('a', 'Sweet Shop').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/');
            cy.contains('h1', 'Welcome to the sweet shop!').should('be.visible');
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

        it("Navigation 'Basket' brings to 'Basket' page", () => {

            cy.contains('a', 'Basket').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
            cy.contains('h1', 'Your Basket').should('be.visible');
        });

    });

    describe('Adding to basket', () => {

        it("Add to basket single item Wham Bars", () => {
            cy.addWhamBars();
            cy.contains('a span', '1').should('be.visible');
        });

        it("Add to basket two same items", () => {
            cy.addTwoSameItems();
            cy.contains('a span', '2').should('be.visible');
        });

        it("Add to basket multiple items", () => {
            cy.addMultipleItems();
            cy.contains('a span', '4').should('be.visible');
        });
    });

});