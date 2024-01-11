
describe("Forms test", () => {

  beforeEach(() => {
    cy.visit("/forms");
  });

  it("should subscribe form", () => {
    cy.contains(/testing forms/i)
    cy.getDataTest("subscribe-form").find('input').as('subscribe-input')
    cy.get('@subscribe-input').type("pmrobalo@gmail.com")
    cy.contains(/Successfully subbed: pmrobalo@gmail.com!/i).should("not.exist")
    cy.getDataTest("subscribe-button").click()
    cy.contains(/Successfully subbed: pmrobalo@gmail.com!/i).should("exist")
    cy.wait(3000)
    cy.contains(/Successfully subbed: pmrobalo@gmail.com!/i).should("not.exist")
    cy.get('@subscribe-input').type("pmrobalo@gmail.io")
    cy.contains(/Invalid email: pmrobalo@gmail.io!/).should("not.exist")
    cy.getDataTest("subscribe-button").click()
    cy.contains(/Invalid email: pmrobalo@gmail.io!/).should("exist")
    cy.wait(3000)
    cy.contains(/Invalid email: !/).should("not.exist")
    cy.getDataTest("subscribe-button").click()
    cy.contains(/Invalid email: !/).should("exist")
    });
});