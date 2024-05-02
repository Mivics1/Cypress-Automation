/// <reference types="Cypress" />

describe("Test Suite for beginner",()=>{
    it("Basic Assertions in Cypress",()=>{
        //Visit the testing website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //wait time for web loading 
        cy.wait(2000)
        
        //Working on Alert
        cy.get('#alertbtn').click().should('have.value','Alert')
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('#confirmbtn').click().should('have.value','Confirm')
    })
})