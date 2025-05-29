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

        it("Navigation 'Sweet shop' brings to 'Welcome' page", () => {
            cy.contains('a', 'Sweet Shop').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/');
            cy.contains('h1', 'Welcome to the sweet shop!').should('be.visible');
        });

        it("Navigation 'Sweets' brings to 'Sweets' page", () => {
            cy.contains('a', 'Sweets').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/sweets');
            cy.contains('h1', 'Browse sweets').should('be.visible');
        });

        it("Navigation 'About' brings to 'About' page", () => {
            cy.contains('a', 'About').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/about');
            cy.contains('p', 'An intentionally broken web application to help demonstrate Chrome DevTools.').should('be.visible');
        });

        it("Navigation 'Basket' brings to 'Basket' page", () => {
            cy.contains('a', 'Basket').click();
            cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
            cy.contains('h1', 'Your Basket').should('be.visible');
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

            cy.contains('.invalid-email', 'Please enter a valid email address').should('be.visible');

        });

        it('Login with wrong email format', () => {
            cy.get('#exampleInputEmail').type('test');
            cy.get('#exampleInputPassword').type('test');

            cy.contains('button', 'Login').click();

            cy.contains('.invalid-email', 'Please enter a valid email address').should('be.visible');

        });

        it('Login with no password', () => {
            cy.get('#exampleInputEmail').type('test@gmail.com');

            cy.contains('button', 'Login').click();

            cy.contains('.invalid-password', 'Please enter a valid password').should('be.visible');

        });

        it('Login with empty data', () => {
            cy.contains('button', 'Login').click();
            cy.contains('.invalid-email', 'Please enter a valid email address').should('be.visible');
            cy.contains('.invalid-password', 'Please enter a valid password').should('be.visible');

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