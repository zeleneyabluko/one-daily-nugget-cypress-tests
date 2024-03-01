import { ArchivePage } from "../pages/homePage"
import Chance from "chance"

describe('User can read the items in the archive', () => {
  beforeEach(() => {
    cy.visit('https://onedailynugget.com/archive/p5pq876mzv');
    cy.acceptCookies();
  })
  
  it ('15 items are displayed on the page', () => {
    cy.waitForReact();
    cy.react('CardStyledLink').should('have.length', '15');
     })

  it ('User can tap "Load more"', () => {
    cy.get('button').contains('Load more').click({force: true});
    cy.waitForReact();
    cy.react('CardStyledLink').should('have.length', '30');
    })

  it ('User can open the issue view', () => {
    cy.openRandomIssueView();
    })

  it ('When the user opens the issue view from the archive, there is no subscription form in the issue view', () => {
    cy.openRandomIssueView();
    cy.get("input[type='email']").should('not.exist');
  })
})
