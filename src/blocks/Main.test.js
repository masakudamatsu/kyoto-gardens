import React from 'react';
import {render, screen} from '@testing-library/react';

import Main from './Main';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Ryoanji', () => {
    const {container} = render(<Main.Ryoanji {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-top: 3.75rem;
      }

      .c1 {
        background-color: rgb(240,240,240);
        background-image: radial-gradient( circle closest-side,transparent 91%,rgb(255,255,255) 100%,transparent ),radial-gradient( circle closest-side,rgb(240,240,240) 91%,rgb(255,255,255) 100%,rgb(240,240,240) );
        background-position: 0 0,1.75rem 1.75rem;
        background-repeat: repeat;
        background-size: 3.5rem 3.5rem;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-top: 3.75rem;
        }
      }

      <div>
        <main
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Kohoan', () => {
    const {container} = render(<Main.Kohoan {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-top: 3.75rem;
      }

      .c1 {
        background-color: rgb(17,17,17);
        background-image: radial-gradient( circle farthest-side at 50% 150%, rgb(17,17,17) 16.666666666666664%, rgb(124,124,124) 20.666666666666664%, rgb(124,124,124) 21%, rgb(17,17,17) 25%, rgb(17,17,17) 33.33333333333333%, rgb(124,124,124) 37.33333333333333%, rgb(124,124,124) 37.666666666666664%, rgb(17,17,17) 41.666666666666664%, rgb(17,17,17) 50%, rgb(124,124,124) 54%, rgb(124,124,124) 54.33333333333333%, rgb(17,17,17) 58.33333333333333%, rgb(17,17,17) 66.66666666666666%, transparent 66.66666666666666%, transparent ),radial-gradient( circle farthest-corner at 0% 100%, rgb(17,17,17) 12.5%, rgb(124,124,124) 15.5%, rgb(124,124,124) 15.75%, rgb(17,17,17) 18.75%, rgb(17,17,17) 25%, rgb(124,124,124) 28%, rgb(124,124,124) 28.25%, rgb(17,17,17) 31.25%, rgb(17,17,17) 37.5%, rgb(124,124,124) 40.5%, rgb(124,124,124) 40.75%, rgb(17,17,17) 43.75%, rgb(17,17,17) 50%, transparent 50%, transparent ),radial-gradient( circle farthest-corner at 100% 100%, rgb(17,17,17) 12.5%, rgb(124,124,124) 15.5%, rgb(124,124,124) 15.75%, rgb(17,17,17) 18.75%, rgb(17,17,17) 25%, rgb(124,124,124) 28%, rgb(124,124,124) 28.25%, rgb(17,17,17) 31.25%, rgb(17,17,17) 37.5%, rgb(124,124,124) 40.5%, rgb(124,124,124) 40.75%, rgb(17,17,17) 43.75%, rgb(17,17,17) 50%, transparent 50%, transparent ),radial-gradient(circle farthest-corner at 50% 50%, rgb(17,17,17) 25%, rgb(124,124,124) 31%, rgb(124,124,124) 31.5%, rgb(17,17,17) 37.5%, rgb(17,17,17) 50%, rgb(124,124,124) 56%, rgb(124,124,124) 56.5%, rgb(17,17,17) 62.5%, rgb(17,17,17) 75%, rgb(124,124,124) 81%, rgb(124,124,124) 81.5%, rgb(17,17,17) 87.5%, rgb(17,17,17) 100%, transparent 100%, transparent );
        background-repeat: repeat;
        background-size: 3.031088913245535rem 1.75rem;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-top: 3.75rem;
        }
      }

      <div>
        <main
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Index', () => {
    const {container} = render(<Main.Index {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(255,255,255);
        margin: 0 auto;
        max-width: 58.8125rem;
      }

      <div>
        <main
          class="c0"
        />
      </div>
    `);
  });
  // unskipp once top bar is introduced
  test.skip('MarginTop', () => {
    const {container} = render(<Main.MarginTop {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 0.9375rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 1.125rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
