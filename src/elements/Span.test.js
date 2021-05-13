import React from 'react';
import {render, screen} from '@testing-library/react';

import Span from './Span';

const mockProps = {};

describe('Props work as intended', () => {
  test('LeadIn', () => {
    const {container} = render(<Span.LeadIn />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Ryoanji-sc-126eniy-1 .c0 {
        font-family: 'Cormorant SC','Times New Roman',serif;
        -webkit-letter-spacing: 0.01em;
        -moz-letter-spacing: 0.01em;
        -ms-letter-spacing: 0.01em;
        letter-spacing: 0.01em;
        word-spacing: -0.05em;
      }

      <div>
        <span
          class="c0 "
        />
      </div>
    `);
  });
  test('NoWrap', () => {
    const {container} = render(<Span.NoWrap />);
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
  test('Source', () => {
    const {container} = render(<Span.Source />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Ryoanji-sc-126eniy-1 .c0 {
        color: rgb(100,100,100);
      }

      <div>
        <span
          class="c0 "
        />
      </div>
    `);
  });
});
