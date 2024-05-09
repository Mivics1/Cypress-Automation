/// <reference types = "Cypress" />

describe('Data driven test',function(){
    before(function(){
        //Runs before the test block
        cy.fixture('details').then((details)=>{
            this.details=details
        })
    })
    it('Using Fixtures attribute', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.details.name)
        cy.get('input[name="email"]').type(this.details.email) 
        cy.get('select').select(this.details.gender)

    })
})