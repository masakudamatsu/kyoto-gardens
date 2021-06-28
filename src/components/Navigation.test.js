import React from 'react';
import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Navigation from './Navigation';

const mockProps = {
  currentPage: 'ryoanji',
  navShown: false,
  setNavShown: jest.fn().mockName('setNavShown'),
};

describe('renders the default UI correctly', () => {
  test('hides the navigation bar from screen readers', () => {
    render(<Navigation {...mockProps} />);
    expect(screen.queryByTestId('nav-menu')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });
});

describe('calls setNavShown(true) when', () => {
  test('clicking the hamburger menu button', () => {
    render(<Navigation {...mockProps} />);
    // execute
    userEvent.click(screen.getByRole('button'));
    // verify
    expect(mockProps.setNavShown).toHaveBeenCalledTimes(1);
    expect(mockProps.setNavShown).toHaveBeenCalledWith(true);
  });
});

describe('changes UI with the navShown prop', () => {
  test('shows the navigation bar to screen readers', () => {
    render(<Navigation {...mockProps} navShown={true} />);
    expect(screen.getByTestId('nav-menu')).toHaveAttribute(
      'aria-hidden',
      'false',
    );
  });
});

describe('calls setNavShown(false) when', () => {
  test('clicking the back button', () => {
    render(<Navigation {...mockProps} navShown={true} />);
    // execute
    userEvent.click(screen.getByRole('button'));
    // verify
    expect(mockProps.setNavShown).toHaveBeenCalledTimes(1);
    expect(mockProps.setNavShown).toHaveBeenCalledWith(false);
  });
  test('clicking outside the navigation drawer', () => {
    render(<Navigation {...mockProps} navShown={true} />);
    // execute
    userEvent.click(document.body);
    // verify
    expect(mockProps.setNavShown).toHaveBeenCalledTimes(1);
    expect(mockProps.setNavShown).toHaveBeenCalledWith(false);
  });
});

test('is accessible', async () => {
  await act(async () => {
    const {container} = render(<Navigation {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
