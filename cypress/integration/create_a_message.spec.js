describe("create a message", () => {
  it("display a message in the list", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-test='messageText']").type("Hello World");

    cy.contains("send").click();

    cy.get("[data-test='messageText']").should("have.value", "");

    cy.contains("Hello World");
  })
})
