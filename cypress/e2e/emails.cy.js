import Chance from "chance";
import Mailslurp from 'cypress-mailslurp';
import { WaitForLatestEmailSortEnum } from "mailslurp-client";

before(() => {
    
    cy.mailslurp()
    .then(function(mailslurp){
        cy.wrap(mailslurp).as('mailslurp')
        return mailslurp.createInbox();

    })
    .then(inbox => {
        cy.wrap(inbox).its('id').as('inboxId');
        cy.wrap(inbox).its('emailAddress').as('emailAddress');
        });
    cy.visit('/');
    cy.waitForReact(1000, '#__next'); 
    cy.acceptCookies();

    })

describe('User receives confirmation and welcome emails', () => {

  it ('User receives the confirmation email upon registration', () => {

   cy.get('@emailAddress')
   .then(emailAddress => cy.typeSubscriberEmail(emailAddress));

   cy.togglePrivacyPolicyCheckbox();
    //cy.submitSubscriberEmail();
    //cy.checkSignupSuccessPage();

    cy.mailslurp()
    .then (function(mailslurp){
        mailslurp.waitForLatestEmail(this.inboxId, 60000, true)
    })
    .then (confirmationEmail => cy.wrap(confirmationEmail).as('confirmationEmail'));

    cy.mailslurp()
    .then (function(mailslurp){
        mailslurp.emailController.getEmailContentMatch({
            emailId: this.confirmationEmail,
            contentMatchOptions: {
                // regex pattern to extract verification code
                pattern: 'Your Demo verification code is ([0-9]{6})'
            }
        })
    })
    .then 







    
   
   


  
    
   
  
      

  })

  it ('When the user clicks on the confirmation link, the confirmation page is presented', () => {
    // https://onedailynugget.com/email-confirmation
  })

  it ('User receives the welcome email after confirming the email address', () => {
    
  })

})
