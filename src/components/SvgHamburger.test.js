import React from 'react';
import {render, screen} from '@testing-library/react';
import {axe} from 'jest-axe';

import SvgHamburger from './SvgHamburger';

test(`Alt text is 'Menu'`, () => {
  render(<SvgHamburger />);
  expect(screen.getByTitle('Menu')).toBeInTheDocument();
});

test('is accessible', async () => {
  const {container} = render(<SvgHamburger />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
