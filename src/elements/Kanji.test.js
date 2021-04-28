import React from 'react';
import {render, screen} from '@testing-library/react';

import Kanji from './Kanji';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Kanji {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Shippori Mincho',serif;
      font-size: 0.85em;
      font-weight: 500;
    }

    <div>
      <span
        class="c0"
        lang="ja"
      />
    </div>
  `);
});
