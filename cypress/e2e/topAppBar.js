const pages = ['kohoan', 'ryoanji'];

pages.forEach(page => {
  describe(`${page} page`, () => {
    beforeEach(() => {
      cy.visit(`/${page}`);
    });
    it('initially shows the top app bar', () => {
      cy.findByTestId('top-app-bar').should('be.visible');
    });
    it('hides the top app bar when the user scrolls down', () => {
      cy.scrollTo(0, 100);
      cy.findByTestId('top-app-bar').should('be.hidden');
    });
    it('shows the top app bar when the user scrolls up', () => {
      cy.scrollTo(0, 200);
      cy.scrollTo(0, 100);
      cy.findByTestId('top-app-bar').should('be.visible');
    });
  });
});
