import {index, kohoan, ryoanji} from '../../src/utils/metadata';

describe('Index page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('shows the page title in the browser tab', () => {
    cy.title().should('eq', index.title);
  });
  it('lets search enginges see the description', () => {
    cy.get('head meta[name="description"]').should(
      'have.attr',
      'content',
      index.description,
    );
  });
});

describe('Koho-an page', () => {
  beforeEach(() => {
    cy.visit('/kohoan');
  });
  it('shows the page title in the browser tab', () => {
    cy.title().should('eq', kohoan.title);
  });
  it('lets search enginges see the description', () => {
    cy.get('head meta[name="description"]').should(
      'have.attr',
      'content',
      kohoan.description,
    );
  });
});

describe('Ryoan-ji page', () => {
  beforeEach(() => {
    cy.visit('/ryoanji');
  });
  it('shows the page title in the browser tab', () => {
    cy.title().should('eq', ryoanji.title);
  });
  it('lets search enginges see the description', () => {
    cy.get('head meta[name="description"]').should(
      'have.attr',
      'content',
      ryoanji.description,
    );
  });
});
