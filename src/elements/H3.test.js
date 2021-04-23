import React from 'react';
import {render, screen} from '@testing-library/react';

import H3 from './H3';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<H3 {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      color: hsla(193,50%,26%,0.9);
      font-family: 'Cormorant','Times New Roman',serif;
      font-size: 1.9495rem;
      font-weight: 700;
      line-height: 1.0452000000000001;
      text-indent: -0.125rem;
    }

    <div>
      <h3
        class="c0"
      />
    </div>
  `);
});
