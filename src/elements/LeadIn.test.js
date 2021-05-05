import React from 'react';
import {render, screen} from '@testing-library/react';

import LeadIn from './LeadIn';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<LeadIn />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        class="LeadIn-sc-1qpem54-0"
      />
    </div>
  `);
});
