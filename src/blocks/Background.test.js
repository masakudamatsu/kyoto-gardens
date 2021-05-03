import React from 'react';
import {render, screen} from '@testing-library/react';

import Background from './Background';

const mockProps = {};

describe('changes UI by prop value', () => {
  test('ryoanji', () => {
    const {container} = render(<Background ryoanji data-testid="Background" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(240,240,240);
        background-image: radial-gradient( circle closest-side,transparent 91%,#ffffff 100%,transparent ),radial-gradient( circle closest-side,rgb(240,240,240) 91%,#ffffff 100%,rgb(240,240,240) );
        background-position: 0 0,1.75rem 1.75rem;
        background-repeat: repeat;
        background-size: 3.5rem 3.5rem;
      }

      <div>
        <div
          class="c0"
          data-testid="Background"
        />
      </div>
    `);
  });
});
