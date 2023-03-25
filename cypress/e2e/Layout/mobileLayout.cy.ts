describe('Home should be render mobile layout', () => {
  beforeEach(() => {
    cy.intercept(Cypress.env('GRAPHQL_API_URL'), { fixture: 'accountsData.json' }).as(
      'accountsData'
    );
    cy.visit(Cypress.env('CLIENT_URL'));
    cy.wait(['@accountsData']);
    cy.viewport('iphone-6');
  });
  it('On view port mobile s more menu should be render', () => {
    cy.get('.css-10glb79-MuiButtonBase-root-MuiIconButton-root').should('be.visible');
  });
  it('On view port mobile s more menu should be render', () => {
    cy.get('.css-10glb79-MuiButtonBase-root-MuiIconButton-root')
      .click()
      .then(() => {
        cy.get('.css-0 > .MuiBox-root > .MuiPaper-root').should('be.visible');
      });
      cy.get('.MuiPaper-elevation0')
      .click()
      .then(()=>{
        cy.get('.css-0 > .MuiBox-root > .MuiPaper-root').should('not.exist');
      })
  });
  it('When Menu button was preset the sidebar should be visible', () => {
    cy.get(':nth-child(1) > .MuiButtonBase-root')
      .click()
      .then(() => {
        cy.get('.MuiDrawer-root > .MuiPaper-root').should('be.visible');
      });
  });
  it('When Menu button was preset the sidebar should be visible', () => {
    cy.get('.MoreButton')
      .click()
    cy.get('.MoreButton')
      .click({force: true})
      .then(() => {
        cy.get('.MuiDrawer-root > .MuiPaper-root').should('not.be.visible');
      });
  });
});