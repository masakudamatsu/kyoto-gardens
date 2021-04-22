import React from 'react';
import {render, screen} from '@testing-library/react';

import Italic from './Italic';

const mockProps = {};

test('renders UI as expected', () => {
  const {container} = render(<Italic />);
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
