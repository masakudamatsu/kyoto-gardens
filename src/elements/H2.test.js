import React from 'react';
import {render, screen} from '@testing-library/react';

import H2 from './H2';

const mockProps = {};

describe('Props work as intended', () => {
  test('hidden', () => {
    const {container} = render(<H2 hidden />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-clip: rect(1px 1px 1px 1px);
        clip: rect(1px 1px 1px 1px);
        -webkit-clip: rect(1px,1px,1px,1px);
        clip: rect(1px,1px,1px,1px);
        -webkit-clip-path: inset(50%);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      <div>
        <h2
          class="c0"
          hidden=""
        />
      </div>
    `);
  });
});

test('renders UI correctly', () => {
  const {container} = render(<H2 {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <h2
        class="H2-sc-1qm5jfi-0"
      />
    </div>
  `);
});
