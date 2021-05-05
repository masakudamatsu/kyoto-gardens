import React from 'react';
import {render, screen} from '@testing-library/react';

import Source from './Source';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Source />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        class="Source-r09bvo-0"
      />
    </div>
  `);
});
