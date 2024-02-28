export class HomePage {
    visit() {
        cy.visit('/');
        }

    openRandomIssueView() {
        cy.waitForReact();
        cy.react('CardStyledLink').should('have.length', '3')
        .then(($issues) => {
          const items = $issues.toArray();
          const random = Math.floor(Math.random() * 3); 
          return items[random];  
        })
        .click();
        cy.url().should('contain', 'issues');
        }

    viewAllPastNuggets() {
        cy.get('#archiveButton').should('contain', 'View all past nuggets')
        .click({force:true});
        }


    
    

    

}
