class HomePage
{
    getNameEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getEmailEditBox(){
        return cy.get('input[name="email"]')
    }

    getPasswordEditBox(){
        return cy.get('input[placeholder="Password"]')
    }

    checkIcecreamBox(){
        return cy.get('input[id="exampleCheck1"]')
    }

    selectGender(){
        return cy.get('#exampleFormControlSelect1')
    }

    isStudent(){
        return cy.get('#inlineRadio1')
    }

    isEmployed(){
        return cy.get('#inlineRadio2')
    }

    twoWayDataBindingBox(){
        return cy.get('input.ng-untouched.ng-pristine.ng-valid')
    }

    getEnterpreneurStatus(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

}

export default HomePage;