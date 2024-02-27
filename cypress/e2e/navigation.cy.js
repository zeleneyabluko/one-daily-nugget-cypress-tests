import { HomePage } from "../pages/homePage"

describe('User can navigate through the pages', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.acceptCookies();
  })
  

  it ('Can open the issue view', () => {
    const home = new HomePage();
    сy.get('a')
    .should('have.attr', 'href')
    .then(href => expect(href).startsWith(`/issues/`).toBeTruthy);
    })



})
