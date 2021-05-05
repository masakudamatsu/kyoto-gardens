import React from 'react';
import {render, screen} from '@testing-library/react';

import Strong from './Strong';

const mockProps = {};

test('renders UI as expected', () => {
  const {container} = render(<Strong />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <strong
        class="Strong-sc-1vpgu6n-0"
      />
    </div>
  `);
});
