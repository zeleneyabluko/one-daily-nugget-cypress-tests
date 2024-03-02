import Chance from "chance";
import Mailslurp from 'cypress-mailslurp';

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

    

    it ('Can confirm the email after the registration and receives the welcome email', () => {

   cy.get('@emailAddress')
   .then(emailAddress => cy.typeSubscriberEmail(emailAddress));
 
   

   cy.togglePrivacyPolicyCheckbox();
   cy.submitSubscriberEmail();
   cy.checkSignupSuccessPage();

    cy.mailslurp()
    .then (function(mailslurp){
               
        return mailslurp.waitForLatestEmail(this.inboxId, 30000);
    })
    .then (confirmationEmail => {
        assert.isDefined(confirmationEmail);
        
        cy.wrap(confirmationEmail).its('body').as('confirmationEmailBody');
        cy.get('@confirmationEmailBody')
    .then(function(){
    assert.include(this.confirmationEmailBody, 'Confirm subscription');
    const txt = this.confirmationEmailBody;
    const linkRegex = /https:\/\/e\.onedailynugget\.com\/webforms\/confirm\/[^\s'"]+/g;
    const extractedLinks = txt.match(linkRegex);
    cy.visit(extractedLinks[0]);
    cy.url().should('eq', 'https://onedailynugget.com/email-confirmation');

    cy.mailslurp()
    .then({timeout: 60000}, function (mailslurp) {
        return mailslurp.waitForLatestEmail(this.inboxId, 100000, true);
    })
    .then (function(welcomeEmail)  {
        console.log(welcomeEmail);
        assert.isDefined(welcomeEmail);
        console.log(welcomeEmail);
        cy.wrap(welcomeEmail).its('subject').as('welcomeSubject');
        cy.get('@welcomeSubject')
        .then(function(){
            assert.equal(this.welcomeSubject, 'Welcome to the One Daily Nugget Community')

        })
        
    })
    });    

  })
  })

  

  it ('Can view past nuggets after confirming the email', () => {
      cy.visit('https://onedailynugget.com/email-confirmation');
      cy.viewAllPastNuggets();

  })

  

})
