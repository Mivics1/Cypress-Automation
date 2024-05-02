/// <reference types="Cypress" />

describe("Test Suite for beginner",()=>{
    it("Basic Assertions in Cypress",()=>{
        //Visit the testing website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.table-display tbody td:nth-child(2)').each(($selectedItem, index, $lastItem) => {
            const Item = $selectedItem.text()
            if( Item.includes('Python')){
                cy.get('.table-display tbody td:nth-child(2)').eq(index).next().then(function(priceItem)
                {
                    const priceItem2 = priceItem.text()
                    expect(priceItem2).to.equal('25')
                }
        )}
        })
    })
})