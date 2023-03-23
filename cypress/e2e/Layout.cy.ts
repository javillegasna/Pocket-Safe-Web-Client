describe('Home should be render desktop layout layout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
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
describe('Home should be render mobile layout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
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
