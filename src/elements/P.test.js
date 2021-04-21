import React from 'react';
import {render, screen} from '@testing-library/react';

import P from './P';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<P {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Cormorant Garamond','Times New Roman',serif;
      font-size: 1.2579rem;
      font-weight: 500;
      line-height: 1.393;
      padding: 0 2.0859rem;
    }

    @media only screen and (min-width:45.5rem) {
      .c0 {
        font-size: 1.4675rem;
      }
    }

    <div>
      <p
        class="c0"
      />
    </div>
  `);
});
