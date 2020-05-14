describe("has working routes", function () {
  it("loads all pages", function () {
    cy.visit("/");
    cy.visit("/about");
  });
});
