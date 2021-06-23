import React from 'react';
import {render, screen} from '@testing-library/react';
import {axe} from 'jest-axe';

import SvgHamburger from './SvgHamburger';

test(`Alt text is 'Menu'`, () => {
  render(<SvgHamburger />);
  expect(screen.getByTitle('Menu')).toBeInTheDocument();
});

test('gets shown from screen readers by default', () => {
  render(<SvgHamburger navShown={false} />);
  expect(screen.queryByTestId('hamburger')).toHaveAttribute(
    'aria-hidden',
    'false',
  );
});

test('gets hidden to screen readers with navShown prop', () => {
  render(<SvgHamburger navShown />);
  expect(screen.queryByTestId('hamburger')).toHaveAttribute(
    'aria-hidden',
    'true',
  );
});

test('is accessible', async () => {
  const {container} = render(<SvgHamburger />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
