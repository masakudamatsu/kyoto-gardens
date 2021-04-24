import React from 'react';
import {render, screen} from '@testing-library/react';

import FigurePhoto from './FigurePhoto';
import {color} from 'src/utils/specColor';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<FigurePhoto />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      margin: 0 -1.3281rem;
      overflow: hidden;
    }

    @media only screen and (min-width:31.6802rem) {
      .c0 {
        margin: 0 -2.2135rem;
      }
    }

    <div>
      <figure
        class="c0"
      />
    </div>
  `);
});
