describe("Test Suite for beginner",()=>{
    it("Basic Assertions in Cypress",()=>{
        //Visit the testing website
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //Locate the search pane class and then type in 'ca' 
        cy.get('.search-keyword').type('ca')
        //Await time for response
        cy.wait(2000)
        //Using Elias to reduce promises
        cy.get('.products').as('productLocator')
        //Get the visible class only and validate its number.
        cy.get('@productLocator').find('.product').should('have.length',4)
        //Add to cart the third item under the products parent
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        //Click base on product name
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            const textVeg = $e1.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                $e1.find('button').click()
            }
        })
        //cy.log(logo.text()) will not work so we manually resolve the promise
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
    })
})