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
      fill: #215563;
      font-family: 'Reforma 1918';
      font-size: 48px;
      font-weight: 500;
      width: 100%;
    }

    <div>
      <svg
        aria-labelledby="alt-text"
        class="c0"
        role="img"
        viewBox="0 0 320 181"
      >
        <title
          id="alt-text"
        >
          Translating Japanese Gardens
        </title>
        <text
          id="Translating"
          x="19"
          y="58"
        >
          Translating
        </text>
        <text
          id="Japanese"
          x="109.896"
          y="107"
        >
          Japanese
        </text>
        <text
          id="Gardens"
          x="47.12"
          y="163"
        >
          Gardens
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
