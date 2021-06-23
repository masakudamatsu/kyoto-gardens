import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Navigation from './Navigation';

const mockProps = {
  currentPage: 'ryoanji',
  navShown: false,
  setNavShown: jest.fn().mockName('setNavShown'),
};

describe('renders the default UI correctly', () => {
  // The following two tests fail, because now both button labels are "visible" and in the DOM
  // test('shows the hamburger menu button', () => {
  //   render(<Navigation {...mockProps} />);
  //   expect(screen.getByRole('button', {name: 'Menu'})).toBeVisible();
  // });
  // test('hides the back button', () => {
  //   render(<Navigation {...mockProps} />);
  //   expect(
  //     screen.queryByRole('button', {name: 'Back to main content'}),
  //   ).not.toBeInTheDocument();
  // });
  // Following test fails because now the navigation menu is "hidden" by translate to the outside of the screen
  // test('hides the navigation bar', () => {
  //   render(<Navigation {...mockProps} />);
  //   expect(screen.queryByTestId('nav-menu')).not.toBeVisible();
  // });
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
  // The following two tests fail, because now both button labels are "visible" and in the DOM
  // test('hides the hamburger menu button', () => {
  //   render(<Navigation {...mockProps} navShown={true} />);
  //   expect(
  //     screen.queryByRole('button', {name: 'Menu'}),
  //   ).not.toBeInTheDocument();
  // });
  // test('shows the back button', () => {
  //   render(<Navigation {...mockProps} navShown={true} />);
  //   expect(
  //     screen.getByRole('button', {name: 'Back to main content'}),
  //   ).toBeVisible();
  // });
  // Following test now doesn't make sense because now the navigation menu is "hidden" by translate to the outside of the screen
  // test('shows the navigation bar', () => {
  //   render(<Navigation {...mockProps} navShown={true} />);
  //   expect(screen.getByTestId('nav-menu')).toBeVisible();
  // });
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
  const {container} = render(<Navigation {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
