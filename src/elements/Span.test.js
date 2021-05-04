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
    const {container} = render(<Span ryoanji smallcaps />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Cormorant SC','Times New Roman',serif;
        -webkit-letter-spacing: 0.01em;
        -moz-letter-spacing: 0.01em;
        -ms-letter-spacing: 0.01em;
        letter-spacing: 0.01em;
      }

      <div>
        <span
          class="c0"
        />
      </div>
    `);
  });
  test('source', () => {
    const {container} = render(<Span source />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        color: rgb(100,100,100);
      }

      <div>
        <span
          class="c0"
        />
      </div>
    `);
  });
});
