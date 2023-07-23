describe("Form Tests", function() {

    beforeEach(() => {
        cy.visit("http://localhost:3001")
    })
    it("Test run", function() {
        
        cy.contains("form")
    })
})