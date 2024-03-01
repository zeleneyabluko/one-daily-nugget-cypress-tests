import { ArchivePage } from "../pages/homePage"
import Chance from "chance"

describe('User can read the items in the archive', () => {
  beforeEach(() => {
    archive = new (ArchivePage);
    archive.visit();
    cy.acceptCookies();
  })
  

  it ('15 items are displayed on the page', () => {
    cy.waitForReact();
    cy.react('CardStyledLink').should('have.length', '15');
     })
}

/*
TODO:

1) Create pseudo-real email via Mailslurp
2) Subscribe with that email
3) Check the content of the email
4) Confirm subscription
5) 
*/

