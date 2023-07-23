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

    
})