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
        cy.wrap($item).find('img').should('be.visible');
        cy.wrap($item).find('h4').should('be.visible');
        cy.wrap($item).find('p').should('be.visible');
        cy.wrap($item).find('small').should('be.visible');
        cy.wrap($item).find('small').should('be.visible');
        cy.wrap($item).find('.addItem').should('be.visible');
      });
    });


    it("Page has the footer", () => {
      cy.contains('footer', 'Sweet Shop Project 2018').should('be.visible')
    });
  });

  describe('Navigation links', () => {
    it("Navigation 'Sweets' brings to 'Sweets' page", () => {
      cy.navSweets();
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

    it("Button Browse Sweets functionality", () => {
      cy.contains('a', 'Browse Sweets').click();
      cy.url('https://sweetshop.netlify.app/sweets');
      cy.contains('h1', 'Browse sweets').should('be.visible');
    });
  });

  describe('Adding to basket', () => {
    it("Add to basket single item", () => {
      cy.get('a[data-name="Sherbert Straws"]').click();
      cy.contains('a span', '1').should('be.visible');
      cy.contains('a', 'Basket').click();


      cy.get('#basketItems')
        .should('contain', 'Sherbert Straws')
        .and('contain', 'x 1')
        .and('contain', '£0.75')

      cy.get('.list-group-item strong').should('contain', '£0.75');

      cy.contains('a', 'Empty Basket').click();

    });

    it("Add to basket two same items", () => {
      cy.get('a[data-name="Sherbert Straws"]').dblclick();
      cy.contains('a span', '2').should('be.visible');
      cy.contains('a', 'Basket').click();


      cy.get('#basketItems')
        .should('contain', 'Sherbert Straws')
        .and('contain', 'x 2')
        .and('contain', '£1.50')

      cy.get('.list-group-item strong').should('contain', '£1.50');

      cy.contains('a', 'Empty Basket').click();


    });

    it("Add to basket multiple items", () => {
      cy.addMultipleItems();

      cy.contains('a span', '4').should('be.visible');
      cy.contains('a', 'Basket').click();

      cy.checkMultipleItems();

      cy.get('.list-group-item strong').should('contain', '£3.70');

      cy.contains('a', 'Empty Basket').click();

    });
  });

});