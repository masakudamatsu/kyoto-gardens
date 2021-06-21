import React from 'react';
import {render, screen} from '@testing-library/react';
import {axe} from 'jest-axe';

import SvgBackButton from './SvgBackButton';

test(`Alt text is 'Back to main content'`, () => {
  render(<SvgBackButton />);
  expect(screen.getByTitle('Back to main content')).toBeInTheDocument();
});

test('is accessible', async () => {
  const {container} = render(<SvgBackButton />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
