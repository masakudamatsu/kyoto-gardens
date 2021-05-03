import React from 'react';
import {render, screen} from '@testing-library/react';

import Background from './Background';

const mockProps = {};

describe('changes UI by prop value', () => {
  test('kohoan', () => {
    const {container} = render(<Background kohoan />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(240,240,240);
        background-image: radial-gradient( circle farthest-side at 50% 150%, white 8.333333333333332%,silver 8.333333333333332%, silver 16.666666666666664%,white 16.666666666666664%, white 25%,silver 25%, silver 33.33333333333333%,white 33.33333333333333%, white 41.666666666666664%,silver 41.666666666666664%, silver 50%,white 50%, white 58.33333333333333%,silver 58.33333333333333%, silver 66.66666666666666%,transparent 66.66666666666666%, transparent ),radial-gradient( circle farthest-corner at 0% 100%, white 6.25%,silver 6.25%, silver 12.5%,white 12.5%, white 18.75%,silver 18.75%, silver 25%,white 25%, white 31.25%,silver 31.25%, silver 37.5%,white 37.5%, white 43.75%,silver 43.75%, silver 50%,transparent 50%, transparent ),radial-gradient( circle farthest-corner at 100% 100%, white 6.25%,silver 6.25%, silver 12.5%,white 12.5%, white 18.75%,silver 18.75%, silver 25%,white 25%, white 31.25%,silver 31.25%, silver 37.5%,white 37.5%, white 43.75%,silver 43.75%, silver 50%,transparent 50%, transparent ),radial-gradient(circle farthest-corner at 50% 50%, white 12.5%,silver 12.5%, silver 25%,white 25%, white 37.5%,silver 37.5%, silver 50%,white 50%, white 62.5%,silver 62.5%, silver 75%,white 75%, white 87.5%,silver 87.5%, silver 100%,transparent 100%, transparent );
        background-repeat: repeat;
        background-size: 3.031088913245535rem 1.75rem;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('ryoanji', () => {
    const {container} = render(<Background ryoanji />);
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
        />
      </div>
    `);
  });
});
