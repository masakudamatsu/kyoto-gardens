import React from 'react';
import {render, screen} from '@testing-library/react';

import H2Index from './H2Index';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<H2Index {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Reforma 1918',serif;
      font-size: 1.8218rem;
      font-weight: 600;
      font-style: italic;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      padding: 0 10px;
    }

    <div>
      <div
        class="c0"
      />
    </div>
  `);
});
