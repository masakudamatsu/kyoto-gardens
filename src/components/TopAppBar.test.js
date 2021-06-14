import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TopAppBar from './TopAppBar';
import {colour} from 'src/utils/colorScheme';

const mockProps = {
  currentPage: 'ryoanji',
};

test('renders the site title in white', () => {
  render(<TopAppBar {...mockProps} />);
  expect(screen.getByTestId('site-title')).toHaveStyle(
    `fill: ${colour.header.color}`,
  );
});

test('clicking the hamburger menu shows the navigation drawer', () => {
  // setup
  render(<TopAppBar {...mockProps} />);
  // verify
  expect(screen.getByTestId('nav-menu')).not.toBeVisible();
  // execute
  userEvent.click(screen.getByRole('button'));
  //
  expect(screen.getByTestId('nav-menu')).toBeVisible();
});

test('clicking outside the navigation drawer will close it', () => {
  // setup
  render(<TopAppBar {...mockProps} />);
  userEvent.click(screen.getByRole('button'));
  // execute
  userEvent.click(document.body);
  // verify
  expect(screen.getByTestId('nav-menu')).not.toBeVisible();
});

test('is accessible', async () => {
  const {container} = render(<TopAppBar {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
