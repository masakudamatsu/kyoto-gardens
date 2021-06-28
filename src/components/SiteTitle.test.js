import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import SiteTitle from './SiteTitle';

const mockProps = {};
test('renders UI correctly', () => {
  const {container} = render(<SiteTitle {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      fill: rgb(56,75,85);
      font-family: 'Reforma 1918',serif;
      font-size: 48px;
      font-weight: 500;
      width: 100%;
    }

    .c1 {
      font-feature-settings: 'salt';
    }

    <div>
      <svg
        aria-labelledby="site-title"
        class="c0"
        data-testid="site-title"
        role="img"
        viewBox="0 0 320 181"
      >
        <title
          id="site-title"
        >
          Translating Japanese Gardens
        </title>
        <text>
          <tspan
            dx="0 1 2 -2 -2 0 0 -1 1 -1 -2"
            id="Translating"
            x="19"
            y="58"
          >
            <tspan
              class="c1"
            >
              T
            </tspan>
            ranslating
          </tspan>
          <tspan
            dx="0 -1 -1 -1 -2 -2 0 -1"
            id="Japanese"
            x="109.896"
            y="107"
          >
            Japanese
          </tspan>
          <tspan
            dx="0 -1 -1 0 -2 -1 -2"
            id="Gardens"
            x="47.12"
            y="163"
          >
            Gardens
          </tspan>
        </text>
      </svg>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<SiteTitle {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
