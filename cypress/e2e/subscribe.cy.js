import { HomePage } from "../pages/homePage"

describe('User subscribes to One Daily Nugget emails', () => {
  beforeEach(() => {
     cy.visit('/');
    cy.acceptCookies();
  })
  

  it ('Can submit the email from the home page', () => {
    const home = new HomePage();
    home.typeEmail('email@email.com');
    home.togglePrivacyPolicyCheckbox();
    home.clickSubmit();
    cy.get('h1').should('contain', 'Thank you for signing up!');
    })
  
  it ('Unable to submit invalid email address', () => {
    const home = new HomePage();
    home.typeEmail('fd');
    home.clickSubmit();
    cy.get('span').should('contain', 'Please enter a valid email address');
  })

  it ('Cannot submit the email without accepting the privacy policy', () => {
    const home = new HomePage();
    home.typeEmail('email@email.com');
    home.clickSubmit();
    cy.get('span').should('contain', 'Please agree with our Privacy Policy before proceeding');
  })

  it ('Can submit the email from the issue view', () => {
    const home = new HomePage();
    home.openRandomIssueView();
    home.typeEmail('email@email.com');
    home.togglePrivacyPolicyCheckbox();
    home.clickSubmit();
    cy.get('h1').should('contain', 'Thank you for signing up!');
    })


  
 

})