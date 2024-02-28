import { HomePage } from "../pages/homePage"
import Chance from "chance"

describe('User subscribes to One Daily Nugget emails', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.acceptCookies();
  })
  

  it ('Can submit the email from the home page', () => {
    
    cy.typeSubscriberEmail(chance.email());
    cy.togglePrivacyPolicyCheckbox();
    cy.submitSubscriberEmail();
    cy.checkSignupSuccessPage();
 
    })
  
  it ('Unable to submit invalid email address', () => {
    cy.typeSubscriberEmail('fd');
    cy.togglePrivacyPolicyCheckbox();
    cy.submitSubscriberEmail();
    cy.get('span').should('contain', 'Please enter a valid email address');
  })

  it ('Cannot submit the email without accepting the privacy policy', () => {
    cy.typeSubscriberEmail(chance.email({domain: 'example.com'}));
    cy.submitSubscriberEmail();
    cy.get('span').should('contain', 'Please agree with our Privacy Policy before proceeding');
  })

  it ('Can submit the email from the issue view', () => {
    const home = new HomePage();
    home.openRandomIssueView();
    cy.typeSubscriberEmail(chance.email({domain: 'example.com'}));
    cy.togglePrivacyPolicyCheckbox();
    cy.submitSubscriberEmail();
    cy.checkSignupSuccessPage();

    //cy.get('h1').should('contain', 'Thank you for signing up!');
    })

  it ('Can submit the email from the About page', () => {

  })


  
 

})