describe('Login page testing', () => {

    beforeEach(() => {
        cy.visit('/login')
    });

    describe('Page visibility', () => {
        it('Login page has header', () => {
            cy.contains('h1', 'Login').should('be.visible');
        });

        it('Login page has description', () => {
            cy.contains('p', 'Please enter your').should('be.visible');
        });

        it('Login page has abbr in description', () => {
            cy.get('abbr[title="test@user.com"]').should('have.attr', 'title', 'test@user.com');
            cy.get('abbr[title="qwerty"]').should('have.attr', 'title', 'qwerty');
        });

        it('Login page has input fields', () => {
            cy.get('#exampleInputEmail').should('be.visible');
            cy.get('#exampleInputPassword').should('be.visible')
        });
    });

    describe('Navigation links', () => {
        it("Navigation 'Sweet Shop' brings back to main page", () => {
            cy.navShop();
        });

        it("Navigation 'Sweets' brings to 'Sweets' page", () => {
            cy.navSweets();
        });

        it("Navigation 'About' brings to 'About' page", () => {
            cy.navAbout();
        });

        it("Navigation 'Basket' brings to 'Basket' page", () => {
            cy.navBasket();
        });

    });

    describe('Logging in', () => {

        it('Login with valid data', () => {
            cy.validLogin();

            cy.contains('h1', 'Your Account').should('be.visible');
            cy.contains('p', 'Welcome back').should('be.visible');

        });

        it('Login without email', () => {
            cy.get('#exampleInputPassword').type('test');

            cy.contains('button', 'Login').click();

            cy.invalidEmail();

        });

        it('Login with wrong email format', () => {
            cy.get('#exampleInputEmail').type('test');
            cy.get('#exampleInputPassword').type('test');

            cy.contains('button', 'Login').click();

            cy.invalidEmail();

        });

        it('Login with no password', () => {
            cy.get('#exampleInputEmail').type('test@gmail.com');

            cy.contains('button', 'Login').click();

            cy.invalidPass();

        });

        it('Login with empty data', () => {
            cy.contains('button', 'Login').click();
            cy.invalidEmail();
            cy.invalidPass();

        });

    });

    describe('Checking links', () => {

        it('Twitter link does not redirect to x.com', () => {
            cy.get('a[href="#"]').find('img[src="img/twitter.png"]').click();

            cy.url().should('include', '/login');
        });

        it('Facebook link does not redirect to facebook.com', () => {
            cy.get('a[href="#"]').find('img[src="img/facebook.png"]').click();

            cy.url().should('include', '/login');
        });

        it('Linkedin link does not redirect to linkedin.com', () => {
            cy.get('a[href="#"]').find('img[src="img/linkedin.png"]').click();

            cy.url().should('include', '/login');
        });
    });

});