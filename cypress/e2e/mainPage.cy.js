describe('Main page testing', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('Page has title', () => {
    cy.title().should('eq', 'Sweet Shop');
  });

  it('Page has navigation bar', () => {
    cy.get('body > nav').should('be.visible');
  });


});