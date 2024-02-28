export class HomePage {
    visit() {
        cy.visit('/');
        }

    typeEmail(email) {
        cy.get("input[type='email']").type(email);
    }

    togglePrivacyPolicyCheckbox() {
        cy.get("input[type='checkbox']").click();
    }

    clickSubmit() {
        cy.get('button').contains('Submit').click();
        cy.wait(10000);
    }

    openRandomIssueView() {
        cy.react('CardStyledLink').should('have.length', '3')
        .then(($issues) => {
          const items = $issues.toArray();
          const random = Math.floor(Math.random() * 3); 
          return items[random];  
        })
        .click();
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
