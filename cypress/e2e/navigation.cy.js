import { HomePage } from "../pages/homePage"

describe('User can navigate through the pages', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.acceptCookies();
  })
  

  it ('There are three issue cards on the main page', () => {
    const home = new HomePage();
    cy.get(`a`)
  .should('have.attr', 'href', '/issues/');

  })

})
