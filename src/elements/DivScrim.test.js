import React from 'react';
import {render} from '@testing-library/react';

import DivScrim from './DivScrim';

test('renders UI correctly when the shown props is true', () => {
  const {container} = render(<DivScrim />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background-color: black;
      height: 100vh;
      left: 0;
      opacity: 0.5;
      position: fixed;
      top: 60px;
      width: 100vw;
      z-index: 1;
    }

    <div>
      <div
        class="c0"
      />
    </div>
  `);
});
