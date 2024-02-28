Cypress.Commands.add('acceptCookies', () => {
cy.get('button').contains('Accept').click();
});

Cypress.Commands.add('submitSubscriberEmail', () => {
    cy.get('button').contains("Submit").click({force:true});
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
    cy.get('a').contains('Archive').click({force:true});
})

Cypress.Commands.add('checkArchiveModal', () => {
    cy.react('ModalContent').should('be.visible');
})
/*TODO:


Archive (home page, issue view), 
click logo to return home
*/
