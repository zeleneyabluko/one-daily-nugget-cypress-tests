Cypress.Commands.add('acceptCookies', () => {
cy.get('button').contains('Accept').click();
});

Cypress.Commands.add('submitSubscriberEmail', () => {
    cy.get('button').contains('Submit').click();
    cy.wait(10000);
})

Cypress.Commands.add('checkSignupSuccessPage', () => {
    cy.get('h1').should('contain', 'Thank you for signing up!');
    cy.url().should('contain', '/signup-success');
})

Cypress.Commands.add('typeSubscriberEmail', (email) => {
cy.get("input[type='email']").type(email);
})

Cypress.Commands.add('togglePrivacyPolicyCheckbox', () => {
    cy.get("input[type='checkbox']").click();
})
/*TODO:
command 'submit email' (available both from issue view and home view and About page)
open About page (home page, issue view)
Archive (home page, issue view), 
click logo to return home
*/
