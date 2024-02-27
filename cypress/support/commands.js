Cypress.Commands.add('acceptCookies', () => {
cy.get('button').contains('Accept').click();
});