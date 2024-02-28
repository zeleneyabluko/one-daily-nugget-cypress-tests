Cypress.Commands.add('acceptCookies', () => {
cy.get('button').contains('Accept').click();
});
/*TODO:
command 'submit email' (available both from issue view and home view and About page)
open About page (home page, issue view)
Archive (home page, issue view), 
click logo to return home
*/
