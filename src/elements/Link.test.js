import React from 'react';
import {render, screen} from '@testing-library/react';

import Link from './Link';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Link {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0:link,
    .c0:visited {
      background: hsla(193,50%,26%,0.1);
      background: linear-gradient( to bottom,transparent 50%,hsla(193,50%,26%,0.9) 50%,hsla(193,50%,26%,0.9) ) no-repeat 0 0.973em;
      background-size: 100% 2px;
      color: inherit;
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .c0:hover,
    .c0:active {
      color: hsla(193,50%,26%,0.9);
    }

    <div>
      <a
        class="c0"
      />
    </div>
  `);
});
