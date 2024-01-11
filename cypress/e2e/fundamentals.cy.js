describe("Fundamentals test", () => {

  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("should contain correct header test", () => {
    cy.getDataTest('fundamentals-header').should('be.visible').and('contain.text', 'Testing Fundamentals');
  });

  it("should check accordion works correctly", () => {
    const firstAccordionText = "Your tests will exist in a describe block. This block takes two arguments. The first is a description of what you are testing. The second is a callback function for your actually tests within that block";
    cy.contains(firstAccordionText).should('not.be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').should('be.visible').click();
    cy.contains(firstAccordionText).should('be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').should('be.visible').click();
    cy.contains(firstAccordionText).should('not.be.visible');
  });

});
