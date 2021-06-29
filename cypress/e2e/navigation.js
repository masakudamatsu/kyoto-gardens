const pages = ['kohoan', 'ryoanji'];

pages.forEach(page => {
  describe(`${page} page`, () => {
    beforeEach(() => {
      cy.visit(`/${page}`);
    });
    it('initially hides the navigation drawer', () => {
      cy.findByTestId('nav-menu').should('be.hidden');
    });
    it('shows the navigation drawer when the user clicks the menu button', () => {
      cy.findByRole('button', {name: 'Menu'}).click();
      cy.findByTestId('nav-menu').should('be.visible');
    });
    describe('hides the navigation drawer again', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Menu'}).click();
      });
      it('when the user clicks the back button', () => {
        cy.findByRole('button', {name: 'Back to main content'}).click();
        cy.findByTestId('nav-menu').should('be.hidden');
      });
      it('when the user clicks outside the navigation drawer', () => {
        cy.get('body').click('bottomRight', {force: true}); // Without the force option, Cypress returns an error as the `body` element is hidden from the view
        cy.findByTestId('nav-menu').should('be.hidden');
      });
    });
  });
});
