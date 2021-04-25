import React from 'react';
import {render, screen} from '@testing-library/react';

import FigurePhoto from './FigurePhoto';
import {color} from 'src/utils/specColor';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<FigurePhoto />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      overflow: hidden;
    }

    @media only screen and (min-width:31.6802rem) {
      .c0 {
        padding: 0 2.2135rem;
      }
    }

    @media only screen and (min-width:38.9424rem) {
      .c0 {
        margin: 0 auto;
        width: 38.9424rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c0 {
        margin: 0;
        padding: 0 3.0078rem;
        width: auto;
      }
    }

    @media only screen and (min-width:48.6522rem) {
      .c0 {
        margin: 0 auto;
        width: 48.6522rem;
      }
    }

    <div>
      <figure
        class="c0"
      />
    </div>
  `);
});
