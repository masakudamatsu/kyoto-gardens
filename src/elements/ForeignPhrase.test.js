import React from 'react';
import {render, screen} from '@testing-library/react';

import ForeignPhrase from './ForeignPhrase';

const mockProps = {};

test('renders UI as expected', () => {
  const {container} = render(<ForeignPhrase />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-style: italic;
    }

    <div>
      <i
        class="c0"
      />
    </div>
  `);
});
