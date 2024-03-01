import Chance from "chance";
import Mailslurp from 'cypress-mailslurp';

before(async () => {
    const apiKey = 'fc15634ba596d29067409244c7ebed77de4cffdab60ba1ca449c088ace31275c';
    cy.mailslurp({ apiKey: apiKey });
    const inbox = await mailslurp.inboxController.createInbox({});
   
    })

describe('User receives confirmation and welcome emails', () => {

  it ('User receives the confirmation email upon registration', () => {
    cy.visit('/');
    /* cy.waitForReact(1000, '#__next'); 
    cy.acceptCookies();
    cy.typeSubscriberEmail();
    cy.togglePrivacyPolicyCheckbox();
    cy.submitSubscriberEmail();
    cy.checkSignupSuccessPage(); */
  })

  it ('When the user clicks on the confirmation link, the confirmation page is presented', () => {
    // https://onedailynugget.com/email-confirmation
  })

  it ('User receives the welcome email after confirming the email address', () => {
    
  })

})