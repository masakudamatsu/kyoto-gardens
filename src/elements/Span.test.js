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
  test('smallcaps', () => {
    const {container} = render(<Span smallcaps />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Cormorant SC',Times New Roman,serif;
      }

      <div>
        <span
          class="c0"
        />
      </div>
    `);
  });
});
