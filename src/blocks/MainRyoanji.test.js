import React from 'react';
import {render, screen} from '@testing-library/react';

import MainRyoanji from './MainRyoanji';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<MainRyoanji />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background-color: rgb(240,240,240);
      background-image: radial-gradient( circle closest-side,transparent 91%,#ffffff 100%,transparent ),radial-gradient( circle closest-side,rgb(240,240,240) 91%,#ffffff 100%,rgb(240,240,240) );
      background-position: 0 0,1.75rem 1.75rem;
      background-repeat: repeat;
      background-size: 3.5rem 3.5rem;
    }

    <div>
      <main
        class="c0"
      />
    </div>
  `);
});
