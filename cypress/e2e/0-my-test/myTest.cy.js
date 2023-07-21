/// <reference types="cypress" />

describe("My test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Bir tane açıktım butonu olması gerekir.", () => {
    cy.get('[data-cy="homePageButton"]').click();
  });

  it("Bir form sayfası kontrolü", () => {
    const isim = "isim";
    const not = "bir not bırakıldı.";
    cy.get('[data-cy="homePageButton"]').click();
    cy.get('[data-cy="drp-boyut"] option').should("have.length", 4);
    cy.get('[data-cy="radio-btn"] input').should("have.length", 2);
    cy.get('[data-cy="malzeme"] input').should("have.length", 14);

    cy.get('[data-cy="submit-btn"] ').click();
  });
});
