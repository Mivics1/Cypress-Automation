/// <reference types = "Cypress" />
import HomePage from "./PageObjects/Homepage.js"
import ProductPage from "./PageObjects/ProductPage.js"

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
        cy.visit(Cypress.env(`url`)+"/angularpractice/")
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
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($item, index, $list)=>{
            const Item = $item.text()
            var selectedItem = Item.split(" ")
            selectedItem = selectedItem[1].trim()
            sum = Number(sum) + Number(selectedItem)
        }).then(function(){
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            const ele = element.text()
            var res = ele.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.be.equal(sum)
        })
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('#checkbox2').click({force:true})
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').contains('Success! Thank you!')
    })
})
