describe('Main page testing', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  describe('Page visibility', () => {
    it('Page has title', () => {
      cy.title().should('eq', 'Sweet Shop');
    });

    it('Page has navigation bar', () => {
      cy.get('body > nav').should('be.visible');
    });


    it("Page has the banner", () => {
      cy.get('img[src="img/sale.gif"]').should('be.visible');
    });

    it("Page has the header", () => {
      cy.contains('h1', 'Welcome to the sweet shop!').should('be.visible');
    });

    it("Page has the description", () => {
      cy.contains('p', 'The sweetest online shop out there.').should('be.visible');
    });

    it("Page has the most popular choices description", () => {
      cy.contains('span', 'Our most popular choice of retro sweets.').should('be.visible');
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

    it("Page has the footer", () => {
      cy.contains('footer', 'Sweet Shop Project 2018').should('be.visible')
    });
  });

  describe('Navigation links', () => { // assertai turi buti cia, ne commands
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

  describe('Button Browse Sweets functionality', () => {
    it("Pressing the button", () => { // atskirai patikrint
      cy.contains('a', 'Browse Sweets').click();
      cy.url('https://sweetshop.netlify.app/sweets');
      cy.contains('h1', 'Browse sweets').should('be.visible');
    });
  });

  describe('Adding to basket', () => { // tik kad basket skaicius pasikeistu
    it("Add to basket single item", () => {
      cy.get('a[data-name="Sherbert Straws"]').click();
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