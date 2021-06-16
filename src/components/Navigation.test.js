import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Navigation from './Navigation';

const mockProps = {
  currentPage: 'ryoanji',
};
describe('hamburger menu button', () => {
  test('is initially shown', () => {
    // setup
    render(<Navigation {...mockProps} />);
    // verify
    expect(screen.getByRole('button', {name: 'Menu'})).toBeVisible();
  });
  test('is replaced with the back button when clicked', () => {
    // setup
    render(<Navigation {...mockProps} />);
    // execute
    userEvent.click(screen.getByRole('button', {name: 'Menu'}));
    // verify
    expect(
      screen.queryByRole('button', {name: 'Menu'}),
    ).not.toBeInTheDocument();
  });
  test('is shown again after clicking the back button', () => {
    // setup
    render(<Navigation {...mockProps} />);
    userEvent.click(screen.getByRole('button', {name: 'Menu'}));
    // execute
    userEvent.click(screen.getByRole('button', {name: 'Back to main content'}));
    // verify
    expect(screen.getByRole('button', {name: 'Menu'})).toBeVisible();
  });
});
describe('back button', () => {
  test('is not initially shown', () => {
    // setup
    render(<Navigation {...mockProps} />);
    // verify
    expect(
      screen.queryByRole('button', {name: 'Back to main content'}),
    ).not.toBeInTheDocument();
  });
  test('is shown when the hamburger menu button is clicked', () => {
    // setup
    render(<Navigation {...mockProps} />);
    // execute
    userEvent.click(screen.getByRole('button', {name: 'Menu'}));
    // verify
    expect(
      screen.getByRole('button', {name: 'Back to main content'}),
    ).toBeVisible();
  });
  test('is not shown again after clicking the back button', () => {
    // setup
    render(<Navigation {...mockProps} />);
    userEvent.click(screen.getByRole('button', {name: 'Menu'}));
    // execute
    userEvent.click(screen.getByRole('button', {name: 'Back to main content'}));
    // verify
    expect(
      screen.queryByRole('button', {name: 'Back to main content'}),
    ).not.toBeInTheDocument();
  });
});

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
