import { ArchivePage } from "../pages/homePage"
import Chance from "chance"

describe('User can read the items in the archive', () => {
  beforeEach(() => {
    cy.visit('https://onedailynugget.com/archive/p5pq876mzv');
    cy.acceptCookies();
  })
  

  it ('15 items are displayed on the page', () => {
    cy.waitForReact();
    const archive = new ArchivePage();
    archive.open();
    cy.react('CardStyledLink').should('have.length', '15');
     })
})
