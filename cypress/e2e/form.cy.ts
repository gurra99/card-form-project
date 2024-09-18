describe("template spec", () => {
  it("correct url", () => {
    cy.visit("http://localhost:3000/");
  });

  it("header contains correct text", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Add Credit Card");
  });

  it("type 1 character in card name input field. And you get a minimum character error.", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="validate-card-name-input"]').type("Li");
    cy.get("label").contains("Name must be between 3 and 50 characters.");
  });
});
