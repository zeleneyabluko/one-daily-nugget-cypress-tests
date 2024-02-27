import { HomePage } from "../pages/homePage"

describe('User can navigate through the pages', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForReact(1000, '#root'); 
    cy.acceptCookies();
  })
  

  it('There are three issue cards on the main page', () => {
    cy.react('CardStyledLink').should('have.length', '3');
  });

})
