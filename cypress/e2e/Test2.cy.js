/// <reference types="Cypress" />

describe("Test Suite for beginner",()=>{
    it("Basic Assertions in Cypress",()=>{
        //Visit the testing website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Check checkbox and confirm the check promise 
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //Handshake the previous promise
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //Multi-check checkbox
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
    })
})