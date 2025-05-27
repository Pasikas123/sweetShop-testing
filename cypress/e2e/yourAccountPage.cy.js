describe('Login page testing', () => {

    beforeEach(() => {
        cy.visit('/login')
    });

    describe('Page visibility', () => {
        it('Page has header', () => {
            cy.validLogin();
            cy.contains('h1', 'Your Account').should('be.visible');
        });

        it('Page has description', () => {
            cy.validLogin();
            cy.contains('p', 'Welcome back').should('be.visible');
        });

        it('Previous orders header is visible', () => {
            cy.validLogin();
            cy.contains('h4', 'Previous Orders').should('be.visible');
        });

        it('Previous orders list is visible', () => {
            cy.validLogin();
            cy.get('#transactions').should('be.visible');
        });

        it('Item Order Breakdown header is visible', () => {
            cy.validLogin();
            cy.contains('h4', 'Item Order Breakdown').should('be.visible');
        });

        it('Item Order Breakdown graph is visible', () => {
            cy.validLogin();
            cy.get('#transactionChart').should('be.visible');
        });

        it('Your Basket header is visible', () => {
            cy.validLogin();
            cy.contains('.text-muted', 'Your Basket').should('be.visible');
            cy.get('.badge').should('be.visible');
        });

        it('Your Basket list is visible', () => {
            cy.validLogin();
            cy.get('#basketItems').should('exist');
        });

    });

    describe('Navigation links', () => {
        it("Navigation 'Sweet Shop' brings back to main page", () => {
            cy.validLogin();
            cy.navShop();
        });

        it("Navigation 'Sweets' brings to 'Sweets' page", () => {
            cy.validLogin();
            cy.navSweets();
        });

        it("Navigation 'About' brings to 'About' page", () => {
            cy.validLogin();
            cy.navAbout();
        });

        it("Navigation 'Login' brings to 'Login' page", () => {
            cy.validLogin();
            cy.navLogin();
        });

        it("Navigation 'Basket' brings to 'Basket' page", () => {
            cy.validLogin();
            cy.navBasket();
        });

    });

    describe('Description attribute functionality', () => {

        it("Description shows correct email", () => {
            cy.validLogin();
            cy.get('a[href="#"]').should('contain', 'test@gmail.com')
        });

        it("Description attribute doesn't work", () => {
            cy.validLogin();

            cy.get('a[href="#"]')
                .should('contain', 'test@user.com')
                .click();

            cy.url().should('include', '/00efc23d-b605-4f31-b97b-6bb276de447e.html');
        });

    });

    describe('Sorting previous orders', () => {

        it("Sorting by order number with single click", () => {
            cy.validLogin();
            cy.contains('a', 'Order Number').click();
            cy.get('table tbody tr').eq(0)
                .find('th[scope="row"]')
                .should('contain', '#3')
        });

        it("Sorting by order number with double click (desc order)", () => {
            cy.validLogin();
            cy.contains('a', 'Order Number').dblclick();
            cy.get('table tbody tr').eq(0)
                .find('th[scope="row"]')
                .should('contain', '#3')
        });

        it("Sorting by order number with double click (desc order)", () => {
            cy.validLogin();
            cy.contains('a', 'Order Number').dblclick();
            cy.get('table tbody tr').eq(0)
                .find('th[scope="row"]')
                .should('contain', '#3')
        });

        it("Sorting by order number with triple click (asc order)", () => {
            cy.validLogin();
            cy.contains('a', 'Order Number').dblclick();
            cy.contains('a', 'Order Number').click();
            cy.get('table tbody tr').eq(0)
                .find('th[scope="row"]')
                .should('contain', '#1')
        });

        it("Sorting by date (desc order)", () => {
            cy.validLogin();
            cy.contains('a', 'Date Ordered').click();
            cy.get('table tbody tr').eq(0)
                .find('td')
                .should('contain', '1st December 2019')
        });

        it("Sorting by date (asc order)", () => {
            cy.validLogin();
            cy.contains('a', 'Date Ordered').dblclick();
            cy.get('table tbody tr').eq(0)
                .find('td')
                .should('contain', '11th Feb 2019')
        });

        it("Sorting by Order Description (desc order)", () => {
            cy.validLogin();
            cy.contains('a', 'Order Description').click();
            cy.get('table tbody tr').eq(0)
                .find('td')
                .should('contain', 'Swansea Mixture x 1')
        });

        it("Sorting by Order Description (asc order)", () => {
            cy.validLogin();
            cy.contains('a', 'Order Description').dblclick();
            cy.get('table tbody tr').eq(0)
                .find('td')
                .should('contain', 'Chocolate Cups x 5')
        });

        it("Sorting by Order Total (desc order)", () => {
            cy.validLogin();
            cy.contains('a', 'Order Total').click();
            cy.get('table tbody tr').eq(0)
                .find('td')
                .should('contain', '8.00')
        });


        it("Sorting by Order Total (asc order)", () => {
            cy.validLogin();
            cy.contains('a', 'Order Total').dblclick();
            cy.get('table tbody tr').eq(0)
                .find('td')
                .should('contain', '0.75')
        });

        it("Your Basket shows added items", () => {
            cy.visit('/');
            cy.addMultipleItems();
            cy.visit('/login');
            cy.validLogin();
            cy.checkMultipleItems();
        });

        it("Deleting items in Your Basket", () => {
            cy.visit('/');
            cy.addMultipleItems();
            cy.visit('/login');
            cy.validLogin();
            cy.checkMultipleItems();

            cy.get('a[href="javascript:removeItem(1);"]').click();
            cy.get('a[href="javascript:removeItem(2);"]').click();
            cy.get('a[href="javascript:removeItem(3);"]').click();
            cy.get('a[href="javascript:removeItem(4);"]').click();

            cy.contains('.badge', '0').should('be.visible');
        });
    });

});