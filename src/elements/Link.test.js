import React from 'react';
import {render, screen} from '@testing-library/react';

import Link from './Link';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Link {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0:link,
    .c0:visited {
      background: rgb(240,240,240);
      background: linear-gradient( to bottom,transparent 50%,currentColor 50%,currentColor );
      background-position: 0 0.9830em;
      background-repeat: no-repeat;
      background-size: 100% 2px;
      color: inherit;
      cursor: pointer;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-shadow: 0.03em 0 #ffffff,-0.03em 0 #ffffff,0 0.03em #ffffff,0 -0.03em #ffffff;
    }

    .c0:focus,
    .c0:hover {
      background: rgb(240,240,240);
      outline: none;
      text-shadow: none;
    }

    .c0:active {
      background: none;
    }

    .c0:visited:focus,
    .c0:visited:hover {
      background: rgb(240,240,240);
      outline: none;
      text-shadow: none;
    }

    .c0:visited:active {
      background: none;
    }

    <div>
      <a
        class="c0"
      />
    </div>
  `);
});
