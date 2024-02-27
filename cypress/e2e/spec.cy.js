import { HomePage } from "../pages/homePage"

describe('Home page opens successfully', () => {
  it('Home page opens successfully', () => {
    const home = new HomePage();
    home.visit();
    cy.acceptCookies();
    })
  
 

})