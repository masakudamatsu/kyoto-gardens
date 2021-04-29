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
      font-size: 1.3215rem;
      font-weight: 700;
      line-height: 1.0452000000000001;
      margin: 0 auto;
      max-width: 38.9424rem;
      padding: 0 1.3281rem;
      text-transform: uppercase;
    }

    @media only screen and (min-width:31.6802rem) {
      .c0 {
        padding: 0 2.2135rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c0 {
        font-size: 1.6325rem;
        max-width: 48.6522rem;
        padding: 0 3.0078rem;
      }
    }

    <div>
      <h3
        class="c0"
      />
    </div>
  `);
});
