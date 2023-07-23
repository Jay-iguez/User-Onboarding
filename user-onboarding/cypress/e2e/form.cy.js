

describe("Form Tests", function() {

    beforeEach(() => {
        cy.visit("http://localhost:3001")
    })

    it("Insanity is... not making a dummy test", function() {
        cy.contains("form")
    })

    const nameInput = () => cy.get("input[name=name]")
    const emailInput = () => cy.get("input[name=email]")
    const passwordInput = () => cy.get("input[name=password]")
    const termsInput = () => cy.get("input[name=terms]")
    const incomeCheck = () => cy.get("input[name=money]")
    const submitButton = () => cy.get(`button[cy="submit"]`)
    //

    it("Able to Type 'data' into 'given' input box", function() {
        nameInput().should("have.value", "")
        .type("CoolGuy")
        .should("have.value", "CoolGuy")
        //
        emailInput().should("have.value", "")
        .type("CoolGuy@CoolGuy.gov")
        .should("have.value", "CoolGuy@CoolGuy.gov")
        //
        passwordInput()
        .should("have.value", "")
        .type("My1Pass$")
        .should("have.value", "My1Pass$")
        //
    })

    it("Able to check TOS", function() {
        termsInput()
        .should("not.be.checked")
        .click()
        .should("be.checked")
    })

    it("Able to select Income", function() {
        incomeCheck()
        .should("not.be.checked")
        .click({multiple: true})
        .should("be.checked")
    })

    describe("Submit info", function() {

        it("Submit button works after filling form, and clears form", function() {
            nameInput().type("Mister Submit")
            //
            emailInput().type("MisterSubmit@submit.gov")
            //
            passwordInput().type("Mister1$")
            //
            termsInput().click()
            //
            incomeCheck().click({multiple: true})
            //
            submitButton().click()
            //
            nameInput().should("have.value", "")
            emailInput().should("have.value", "")
            passwordInput().should("have.value", "")
            termsInput().should("not.be.checked")
            incomeCheck().should("not.be.checked")
        })

        it("Submit button doesn't work if inputs are empty", function() {
            nameInput().should("have.value", "")
            emailInput().should("have.value", "")
            passwordInput().should("have.value", "")
            termsInput().should("not.be.checked")
            incomeCheck().should("not.be.checked")
            //
            submitButton().should("be.disabled")
        })
       
    })
})