import React from 'react';
import {render, screen} from '@testing-library/react';

import P from './P';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<P {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Cormorant Garamond','Times New Roman',serif;
      font-size: 1.3348rem;
      font-weight: 600;
      line-height: 1.393;
    }

    @media only screen and (min-width:728px) {
      .c0 {
        font-size: 1.6489rem;
      }
    }

    <div>
      <p
        class="c0"
      />
    </div>
  `);
});
