/// <reference types="Cypress" />

describe("Test Suite for beginner",()=>{
    it("Mouse hover in cypress",()=>{
        //Visit the testing website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')  
        })
    })