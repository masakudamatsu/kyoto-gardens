import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Navigation from './Navigation';

const mockProps = {
  currentPage: 'ryoanji',
};

describe('navigation drawer', () => {
  test('is initially not shown', () => {
    // setup
    render(<Navigation {...mockProps} />);
    // verify
    expect(screen.getByTestId('nav-menu')).not.toBeVisible();
  });
  test('appears when clicking the hamburger menu button', () => {
    // setup
    render(<Navigation {...mockProps} />);
    // execute
    userEvent.click(screen.getByRole('button'));
    // verify
    expect(screen.getByTestId('nav-menu')).toBeVisible();
  });
  test('disappears after clicking again the hamburger menu button', () => {
    // setup
    render(<Navigation {...mockProps} />);
    userEvent.click(screen.getByRole('button'));
    // execute
    userEvent.click(screen.getByRole('button'));
    // verify
    expect(screen.getByTestId('nav-menu')).not.toBeVisible();
  });
  test('disappears when clicking outside it', () => {
    // setup
    render(<Navigation {...mockProps} />);
    userEvent.click(screen.getByRole('button'));
    // execute
    userEvent.click(document.body);
    // verify
    expect(screen.getByTestId('nav-menu')).not.toBeVisible();
  });
});

test('is accessible', async () => {
  const {container} = render(<Navigation {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
