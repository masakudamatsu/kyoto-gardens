import React from 'react';
import {render, screen} from '@testing-library/react';

import Background from './Background';

const mockProps = {};

describe('changes UI by prop value', () => {
  test('kohoan', () => {
    const {container} = render(<Background page="kohoan" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(240,240,240);
        background-image: radial-gradient( circle farthest-side at 50% 150%, rgb(240,240,240) 8.333333333333332%,white 8.333333333333332%, white 16.666666666666664%,rgb(240,240,240) 16.666666666666664%, rgb(240,240,240) 25%,white 25%, white 33.33333333333333%,rgb(240,240,240) 33.33333333333333%, rgb(240,240,240) 41.666666666666664%,white 41.666666666666664%, white 50%,rgb(240,240,240) 50%, rgb(240,240,240) 58.33333333333333%,white 58.33333333333333%, white 66.66666666666666%,transparent 66.66666666666666%, transparent ),radial-gradient( circle farthest-corner at 0% 100%, rgb(240,240,240) 6.25%,white 6.25%, white 12.5%,rgb(240,240,240) 12.5%, rgb(240,240,240) 18.75%,white 18.75%, white 25%,rgb(240,240,240) 25%, rgb(240,240,240) 31.25%,white 31.25%, white 37.5%,rgb(240,240,240) 37.5%, rgb(240,240,240) 43.75%,white 43.75%, white 50%,transparent 50%, transparent ),radial-gradient( circle farthest-corner at 100% 100%, rgb(240,240,240) 6.25%,white 6.25%, white 12.5%,rgb(240,240,240) 12.5%, rgb(240,240,240) 18.75%,white 18.75%, white 25%,rgb(240,240,240) 25%, rgb(240,240,240) 31.25%,white 31.25%, white 37.5%,rgb(240,240,240) 37.5%, rgb(240,240,240) 43.75%,white 43.75%, white 50%,transparent 50%, transparent ),radial-gradient(circle farthest-corner at 50% 50%, rgb(240,240,240) 12.5%,white 12.5%, white 25%,rgb(240,240,240) 25%, rgb(240,240,240) 37.5%,white 37.5%, white 50%,rgb(240,240,240) 50%, rgb(240,240,240) 62.5%,white 62.5%, white 75%,rgb(240,240,240) 75%, rgb(240,240,240) 87.5%,white 87.5%, white 100%,transparent 100%, transparent );
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
    const {container} = render(<Background page="ryoanji" />);
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
