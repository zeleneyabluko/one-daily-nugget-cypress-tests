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
    }

    openIssueView() {

    }

    openPrivacyPolicy() {
        cy.get('a').contains('Privacy policy')

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
