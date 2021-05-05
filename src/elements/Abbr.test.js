import React from 'react';
import {render, screen} from '@testing-library/react';

import Abbr from './Abbr';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Abbr title="title" />);
  expect(container).toMatchInlineSnapshot(`
    .c0[title] {
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    <div>
      <abbr
        class="c0"
        title="title"
      />
    </div>
  `);
});
