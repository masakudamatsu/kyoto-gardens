import {title, description} from '../../src/metadata/ryoanji';

describe('Ryoan-ji Page', () => {
  beforeEach(() => {
    cy.visit('/ryoanji');
  });
  it('The browser tab shows the page title', () => {
    cy.title().should('eq', title);
  });
  it('Search enginges see the <meta> tag for description', () => {
    cy.get('head meta[name="description"]').should(
      'have.attr',
      'content',
      description,
    );
  });
});
