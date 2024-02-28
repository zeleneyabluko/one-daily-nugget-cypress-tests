import { HomePage } from "../pages/homePage"

describe('User can navigate through the pages', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForReact(1000, '#__next'); 
    cy.acceptCookies();
  })
  

  it('User can open an issue view', () => {
    const home = new HomePage();
    home.openRandomIssueView();
    cy.url().should('include', 'issues');
  });

  

})
