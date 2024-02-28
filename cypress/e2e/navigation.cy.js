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

  it('User can open the About page', () => {
    cy.openAboutPage();
    cy.url().should('include', 'about');
  });

  it('Modal shows up when the user clicks on the Archive link in the header', () => {
    cy.clickArchiveLinkInHeader();
    cy.checkArchiveModal();
  })

  it('Modal shows up when the user clicks "View past nuggets"', () => {
    const home = new HomePage();
    home.viewAllPastNuggets();
    cy.checkArchiveModal();
  })

  it('Can open the privacy policy from the footer', () => {
    cy.openPrivacyPolicyFromFooter();
  })

  it('Can open the company details from the footer', () => {
    cy.openCompanyDetailsFromFooter();
  })

  it('Customer support link is available', () => {
    cy.checkCustomerSupportLink();
  })

  it('Can accept cookies from the privacy settings', () => {
    cy.clickOnPrivacySettings();
    cy.waitForReact();
    cy.acceptCookies();
  })

  

})
