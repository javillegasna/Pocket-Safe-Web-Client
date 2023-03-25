describe('Home should be render desktop layout layout', () => {
  beforeEach(() => {
    cy.intercept(Cypress.env('GRAPHQL_API_URL'), { fixture: 'accountsData.json' }).as(
      'accountsData'
    );
    cy.visit(Cypress.env('CLIENT_URL'));
    cy.wait(['@accountsData']);
    cy.viewport('macbook-16');
  });

  it('On view port Laptop L all tools should be render', () => {
    cy.get('.css-a5nod3-MuiButtonBase-root').should('be.visible');
    cy.get('.MuiInputBase-root').should('be.visible');
  });

  it('When Menu button was preset the sidebar should be visible', () => {
    cy.get('.MoreButton')
      .click()
      .then(() => {
        cy.get('.MuiDrawer-root > .MuiPaper-root').should('be.visible');
      });
  });

  it('When Menu button was preset two times the sidebar should not be visible', () => {
    cy.get('.MoreButton')
      .click()
      .then(() => {
        cy.get('.MuiDrawer-root > .MuiPaper-root').should('be.visible');
      });
    cy.get('.MoreButton')
      .click()
      .then(() => {
        cy.get('.MuiDrawer-root > .MuiPaper-root').should('not.be.visible');
      });
  });
});
