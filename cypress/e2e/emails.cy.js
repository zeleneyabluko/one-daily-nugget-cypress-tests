import Chance from "chance";
import Mailslurp from 'cypress-mailslurp';

before(() => {
    //const apiKey = 'fc15634ba596d29067409244c7ebed77de4cffdab60ba1ca449c088ace31275c';
    //cy.wrap(apiKey).as('apiKey');
    
    cy.visit('/');
    cy.waitForReact(1000, '#__next'); 
    cy.acceptCookies();

    })

describe('User receives confirmation and welcome emails', () => {

  it ('User receives the confirmation email upon registration', () => {
    cy.mailslurp()
    .then(mailslurp => mailslurp.createInbox())
    .then(inbox => {
        cy.wrap(inbox).its('id').as('inboxId');
        cy.wrap(inbox).its('emailAddress').as('emailAddress');
        });
    cy.get('@emailAddress').then((email) => cy.typeSubscriberEmail(email));
    cy.togglePrivacyPolicyCheckbox();
        //cy.submitSubscriberEmail();
        //cy.checkSignupSuccessPage(); 
    
   
   /* cy.get('@emailAddress').then((email) => cy.typeSubscriberEmail(email));
    cy.togglePrivacyPolicyCheckbox();
    //cy.submitSubscriberEmail();
    //cy.checkSignupSuccessPage(); 
    cy.get('@apiKey')
    .then(apiKey => cy.mailslurp({ apiKey: apiKey }))
    .then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 60000, true))
    */
    
      

  })

  it ('When the user clicks on the confirmation link, the confirmation page is presented', () => {
    // https://onedailynugget.com/email-confirmation
  })

  it ('User receives the welcome email after confirming the email address', () => {
    
  })

})
