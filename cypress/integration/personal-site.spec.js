describe("has working routes", function () {
  it("loads home page", function () {
    cy.visit("/");
  });
  it("loads about me page", function () {
    cy.visit("/about");
  });
});
