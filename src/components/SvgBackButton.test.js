import React from 'react';
import {render, screen} from '@testing-library/react';
import {axe} from 'jest-axe';

import SvgBackButton from './SvgBackButton';

test(`Alt text is 'Back to main content'`, () => {
  render(<SvgBackButton />);
  expect(screen.getByTitle('Back to main content')).toBeInTheDocument();
});

test('gets hidden from screen readers by default', () => {
  render(<SvgBackButton navShown={false} />);
  expect(screen.queryByTestId('back-button')).toHaveAttribute(
    'aria-hidden',
    'true',
  );
});

test('gets shown to screen readers with navShown prop', () => {
  render(<SvgBackButton navShown />);
  expect(screen.queryByTestId('back-button')).toHaveAttribute(
    'aria-hidden',
    'false',
  );
});

test('is accessible', async () => {
  const {container} = render(<SvgBackButton />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
