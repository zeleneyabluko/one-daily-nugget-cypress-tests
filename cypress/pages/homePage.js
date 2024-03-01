export class HomePage {

  /*  openRandomIssueView() {
        cy.waitForReact();
        cy.react('CardStyledLink').should('have.length', '3')
        .then(($issues) => {
          const items = $issues.toArray();
          const random = Math.floor(Math.random() * $issues.length); 
          return items[random];  
        })
        .click();
        cy.url().should('contain', 'issues');
        } */

    viewAllPastNuggets() {
        cy.get('#archiveButton').should('contain', 'View all past nuggets')
        .click({force:true});
        }


    
    

    

}
