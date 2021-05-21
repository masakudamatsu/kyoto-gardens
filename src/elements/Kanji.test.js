import React from 'react';
import {render, screen} from '@testing-library/react';

import Kanji from './Kanji';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Kanji {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .Main__Kohoan-sc-126eniy-2 .c0 {
      font-family: 'Shippori Mincho',serif;
      font-size: 1.025em;
      font-weight: 500;
    }

    .Main__Ryoanji-sc-126eniy-1 .c0 {
      font-family: 'Shippori Mincho',serif;
      font-size: 0.85em;
      font-weight: 500;
    }

    <div>
      <span
        class="c0 "
        lang="ja"
      />
    </div>
  `);
});
