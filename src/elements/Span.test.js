import React from 'react';
import {render, screen} from '@testing-library/react';

import Span from './Span';

const mockProps = {};

describe('Props work as intended', () => {
  test('nowrap', () => {
    const {container} = render(<Span nowrap />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        white-space: nowrap;
      }

      <div>
        <span
          class="c0"
        />
      </div>
    `);
  });
});
