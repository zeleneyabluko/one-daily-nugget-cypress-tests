import MailSlurp from "mailslurp-client";

Cypress.Commands.add('acceptCookies', () => {
cy.waitForReact();
cy.react('ModalContainer').find('button').contains('Accept').click({force:true});
cy.waitForReact();
cy.react('ModalContainer').should('not.exist');
});

Cypress.Commands.add('submitSubscriberEmail', () => {
    cy.get('button').contains("Submit").click({force:true});
    cy.waitForReact();
    })

Cypress.Commands.add('checkSignupSuccessPage', () => {
    cy.url().should('contain', '/signup-success');
    cy.get('h1').should('contain', 'Thank you for signing up!');
})

Cypress.Commands.add('typeSubscriberEmail', (email) => {
cy.get("input[type='email']").type(email);
})

Cypress.Commands.add('togglePrivacyPolicyCheckbox', () => {
    cy.get("input[type='checkbox']").click();
})

Cypress.Commands.add('openAboutPage', () => {
    cy.get('a').contains('About').click({force:true});
})

Cypress.Commands.add('clickArchiveLinkInHeader', () => {
    cy.waitForReact();
    cy.react('StyledHeaderButton').contains('Archive').click({force:true});
})

Cypress.Commands.add('checkArchiveModal', () => {
    cy.waitForReact();
    cy.react('ModalContent').should('be.visible');
    cy.react('ModalContent').should('contain', 'If you are a subscriber already, please visit your email inbox and click on the “View archive” link at the bottom of any recent daily nugget.');
    cy.react('ModalContent').should('contain', "If you are new to One Daily Nugget, sign up for free, and you'll get immediate access to our archive.");
})

Cypress.Commands.add('openPrivacyPolicyFromFooter', () => {
    cy.react('FooterWrapper').find('a').contains('Privacy policy')
    .click();
})

Cypress.Commands.add('openCompanyDetailsFromFooter', () => {
    cy.react('FooterWrapper').find('a').contains('Company details')
    .click();
    
})

Cypress.Commands.add('clickOnPrivacySettings', () => {
    cy.react('FooterWrapper').find('button').contains('Privacy settings')
    .click();
    cy.waitForReact();  
})


Cypress.Commands.add('checkCustomerSupportLink', () => {
    cy.react('FooterWrapper').find('a').contains('Customer support')
    .should('have.attr', 'href', 'mailto:hello@onedailynugget.com')
    })

    

Cypress.Commands.add('openRandomIssueView', () => {
    cy.waitForReact();
        cy.react('CardStyledLink')
        .then(($issues) => {
          const items = $issues.toArray();
          const random = Math.floor(Math.random() * $issues.length); 
          return items[random];
        })
        .click();
        cy.url().should('contain', 'issues');
})

Cypress.Commands.add('viewAllPastNuggets', () => {
    cy.get('button').should('contain', 'View all past nuggets')
        .click({force:true});
})


