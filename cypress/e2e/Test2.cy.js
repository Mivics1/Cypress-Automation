/// <reference types="Cypress" />

describe("Test Suite for beginner",()=>{
    it("Basic Assertions in Cypress",()=>{
        //Visit the testing website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Check checkbox and confirm the check promise 
        cy.wait(2000)
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //Handshake the previous promise
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //Multi-check checkbox
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //Static Dropdown
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')

        //Dynamic Dropdowns
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($searchItem, index, $lastItem) => {
            if($searchItem.text() ==='India'){
                $searchItem.click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })
})