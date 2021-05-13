import React from 'react';
import {render, screen} from '@testing-library/react';

import Abbr from './Abbr';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Abbr title="title" />);
  expect(container).toMatchInlineSnapshot(`
    .c1[title] {
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .Main__Ryoanji-sc-126eniy-1 .c0 {
      font-family: 'Cormorant SC','Times New Roman',serif;
      -webkit-letter-spacing: 0.01em;
      -moz-letter-spacing: 0.01em;
      -ms-letter-spacing: 0.01em;
      letter-spacing: 0.01em;
      text-transform: lowercase;
    }

    <div>
      <abbr
        class="c0 c1"
        title="title"
      />
    </div>
  `);
});
