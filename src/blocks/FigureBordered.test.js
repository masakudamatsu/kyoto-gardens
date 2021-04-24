import React from 'react';
import {render, screen} from '@testing-library/react';

import FigureBordered from './FigureBordered';
import {color} from 'src/utils/specColor';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<FigureBordered />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      border-bottom: 1px solid hsla(193,50%,26%,0.2);
      border-top: 1px solid hsla(193,50%,26%,0.2);
      overflow: hidden;
      padding: 15.564px;
    }

    @media only screen and (min-width:528.128px) {
      .c0 {
        border-left: 1px solid hsla(193,50%,26%,0.2);
        border-right: 1px solid hsla(193,50%,26%,0.2);
        margin: 0 2.2135rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c0 {
        margin: 0 3.0078rem;
      }
    }

    <div>
      <figure
        class="c0"
      />
    </div>
  `);
});
