import { HomePage } from "../pages/homePage"

describe('User can navigate through the pages', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForReact(1000, '#__next'); 
    cy.acceptCookies();
  })
  

  it('User can open an issue view', () => {
    cy.react('CardStyledLink').should('have.length', '3')
    .then(($issues) => {
      const items = $issues.toArray();
      const random = Math.floor(Math.random() * 3); 
      return items[random];  
    })
    .click();


  });

  

})
