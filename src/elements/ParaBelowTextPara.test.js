import React from 'react';
import {render, screen} from '@testing-library/react';

import ParaBelowBoxPara from './ParaBelowBoxPara';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<ParaBelowBoxPara {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      margin: 0 auto;
      max-width: 38.9424rem;
      padding-left: 1.3281rem;
      padding-right: 1.3281rem;
      text-align: left;
    }

    @media only screen and (min-width:31.6802rem) {
      .c0 {
        padding-left: 2.2135rem;
        padding-right: 2.2135rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c0 {
        max-width: 48.6522rem;
        padding-left: 3.0078rem;
        padding-right: 3.0078rem;
      }
    }

    <div>
      <p
        class="ParaBelowBoxPara-sc-1r97b9c-0 c0"
      />
    </div>
  `);
});
