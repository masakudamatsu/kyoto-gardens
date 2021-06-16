import React from 'react';
import {render} from '@testing-library/react';
import {axe} from 'jest-axe';

import SvgHamburger from './SvgHamburger';

const mockProps = {};
test('renders UI correctly', () => {
  const {container} = render(<SvgHamburger {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Reforma 1918',sans-serif;
      font-size: 33px;
      font-weight: 300;
      height: 100%;
    }

    <div>
      <svg
        aria-labelledby="hamburger"
        class="c0"
        role="img"
        viewBox="0 0 25 48"
      >
        <title
          id="hamburger"
        >
          Menu
        </title>
        <text
          transform="translate(12.500000, 24.000000) rotate(90.000000) translate(-12.500000, -24.000000)"
        >
          <tspan
            x="-6"
            y="36.5"
          >
            III
          </tspan>
        </text>
      </svg>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<SvgHamburger {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
