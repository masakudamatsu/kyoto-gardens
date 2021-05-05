import React from 'react';
import {render, screen} from '@testing-library/react';

import Em from './Em';

const mockProps = {};

test('renders UI as expected', () => {
  const {container} = render(<Em />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-style: italic;
      font-weight: 700;
    }

    <div>
      <em
        class="c0"
      />
    </div>
  `);
});
