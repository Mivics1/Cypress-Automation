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
        cy.on('window:confirm',(str2)=>{
            expect(str2).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Remove target attr in the DOM
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url('#opentab').should('eq','https://www.qaclickacademy.com')
    })
})