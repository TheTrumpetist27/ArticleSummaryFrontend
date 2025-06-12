describe('Company CRUD Flow', () => {
  const testCompanyName = 'Test Company';
  const testCEOId = '12345';
  const updatedCompanyName = 'Updated Test Company';

  it('Maakt een bedrijf aan', () => {
    cy.visit('http://localhost:5173/company/add');

    cy.get('[data-cy="company-name"]').type(testCompanyName);
    cy.get('[data-cy="company-ceo"]').type(testCEOId);
    cy.get('[data-cy="submit"]').click();

    cy.url().should('include', '/companies');
    cy.contains(testCompanyName).should('exist');
  });

  it('Bekijkt de detail pagina van het bedrijf', () => {
    cy.visit('http://localhost:5173/companies');
    cy.contains(testCompanyName).click();

    cy.url().should('include', '/company/');
    cy.contains(testCompanyName).should('exist');
  });

  it('Bewerk het bedrijf', () => {
    cy.visit('http://localhost:5173/companies');
    cy.contains(testCompanyName).click();
    cy.url().should('include', '/company/');

    cy.get('[data-cy=edit-button]').click();

    cy.url().should('include', '/company/edit/');
    cy.get('[data-cy="company-name"]').clear().type(updatedCompanyName);
    cy.get('[data-cy=submit]').click();

    cy.visit('http://localhost:5173/companies');
    cy.url().should('include', '/companies');
    cy.contains(updatedCompanyName).should('exist');
  });

  it('Verwijdert het bedrijf', () => {
    cy.visit('http://localhost:5173/companies');
    cy.contains(updatedCompanyName)
      .parent('[data-cy=company-card]')
      .find('[data-cy=delete-button]')
      .click();

    cy.url().should('include', '/companies');
    cy.contains(updatedCompanyName).should('not.exist');
  });
})