/// <reference types="Cypress" />

describe("Test Suite for beginner",()=>{
    it("Handling child windows",()=>{
        //Visit the testing website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').should('have.attr','onclick')
        })
    })