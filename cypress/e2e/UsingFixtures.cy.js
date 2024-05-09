/// <reference types = "Cypress" />

describe('Data driven test',()=>{
    it('Using Fixtures attribute', ()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type('Agboola')
        cy.get('select').select('Male')
    })
})