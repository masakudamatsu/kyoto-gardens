import React from 'react';
import {render, screen} from '@testing-library/react';

import FigureWithMargin from './FigureWithMargin';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<FigureWithMargin />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      overflow: hidden;
    }

    .c1 {
      margin: 0 auto;
      max-width: 38.9424rem;
    }

    @media only screen and (min-width:31.6802rem) {
      .c1 {
        padding-left: 2.2135rem;
        padding-right: 2.2135rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        max-width: 48.6522rem;
        padding-left: 3.0078rem;
        padding-right: 3.0078rem;
      }
    }

    <div>
      <figure
        class="c0 c1"
      />
    </div>
  `);
});
