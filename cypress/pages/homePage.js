export class HomePage {
    visit() {
        cy.visit('/');
        }

    typeEmail(email) {
        cy.get("input[type='email']").type(email);
    }

    togglePrivacyPolicyCheckbox() {
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

    openPrivacyPolicy() {
        cy.get('a').contains(/privacy policy/i)

    }

    openCompanyDetails() {

    }

    viewAllPastNuggets() {

    }

    openAboutPage() {

    }

    openArchive() {

    }



    
    

    

}
