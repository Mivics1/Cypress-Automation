/// <reference types = "Cypress" />
import HomePage from "./PageObjects/Homepage.js"
import productPage from "./PageObjects/productPage.js"

describe('Data driven test',function(){
    before(function(){
        //Runs before the test block
        cy.fixture('details').then((details)=>{
            this.details=details
        })
    })
    it('Using Fixtures attribute', function(){  
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getNameEditBox().type(this.details.name)
        homePage.getNameEditBox().should('have.value',this.details.name)
        // cy.get('input[name="name"]:nth-child(2)').should('have.length.above','2')
        homePage.getEmailEditBox().type(this.details.email) 
        homePage.selectGender().select(this.details.gender)
        homePage.getNameEditBox().should('have.attr','minlength','2')
        homePage.getEnterpreneurStatus().should('be.disabled')
        homePage.getShopTab().click()
        // cy.selectProduct('Blackberry')
        this.details.productNames.forEach(function(element){
            cy.selectProduct(element)
        })
        productPage.checkoutButton().click()
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a',{timeout: 11000}).click()
        cy.get('.checkbox').click()
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').contains('Success! Thank you!')
    })
})
