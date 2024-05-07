/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />

import 'cypress-iframe'

describe('Working on Iframe',()=>{
    it('Demo 1',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.frameLoaded('#courses-iframe')
        //Method 1
        // cy.iframe().contains('Mentorship').click()
        //Method 2
        // cy.iframe()
        //     .find('a[href="mentorship"]').eq(0)
        //     .click()
        cy.iframe()
        .find('a[href="mentorship"]:visible')
        .click()
    })
})