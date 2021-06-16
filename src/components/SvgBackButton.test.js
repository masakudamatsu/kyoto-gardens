import React from 'react';
import {render} from '@testing-library/react';
import {axe} from 'jest-axe';

import SvgBackButton from './SvgBackButton';

const mockProps = {};
test('renders UI correctly', () => {
  const {container} = render(<SvgBackButton {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Reforma 1918',sans-serif;
      font-size: 33px;
      font-weight: 300;
      height: 100%;
    }

    <div>
      <svg
        aria-labelledby="back-button"
        class="c0"
        role="img"
        viewBox="0 0 25 48"
      >
        <title
          id="back-button"
        >
          Back to main content
        </title>
        <text
          x="0"
          y="36.5"
        >
          &lt;
        </text>
      </svg>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<SvgBackButton {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
