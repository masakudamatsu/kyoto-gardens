import React from 'react';
import {render, screen} from '@testing-library/react';

import Main from './Main';

const mockProps = {};

// describe('Props work as intended', () => {
//   test('prop 1', () => {
//     render(<Main testProp data-testid="Main" />);
//     expect(screen.getByTestId('Main')).toHaveStyle(`display: inline-block`);
//   });
// });

describe('renders UI correctly', () => {
  test('Ryoanji', () => {
    const {container} = render(<Main.Ryoanji {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(240,240,240);
        background-image: radial-gradient( circle closest-side,transparent 91%,rgb(255,255,255) 100%,transparent ),radial-gradient( circle closest-side,rgb(240,240,240) 91%,rgb(255,255,255) 100%,rgb(240,240,240) );
        background-position: 0 0,1.75rem 1.75rem;
        background-repeat: repeat;
        background-size: 3.5rem 3.5rem;
      }

      <div>
        <main
          class="Main-sc-126eniy-0  c0"
        />
      </div>
    `);
  });
  test('Kohoan', () => {
    const {container} = render(<Main.Kohoan {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: #111;
        background-image: radial-gradient( circle farthest-side at 50% 150%, #111 16.666666666666664%, #7c7c7c 20.666666666666664%, #7c7c7c 21%, #111 25%, #111 33.33333333333333%, #7c7c7c 37.33333333333333%, #7c7c7c 37.666666666666664%, #111 41.666666666666664%, #111 50%, #7c7c7c 54%, #7c7c7c 54.33333333333333%, #111 58.33333333333333%, #111 66.66666666666666%, transparent 66.66666666666666%, transparent ),radial-gradient( circle farthest-corner at 0% 100%, #111 12.5%, #7c7c7c 15.5%, #7c7c7c 15.75%, #111 18.75%, #111 25%, #7c7c7c 28%, #7c7c7c 28.25%, #111 31.25%, #111 37.5%, #7c7c7c 40.5%, #7c7c7c 40.75%, #111 43.75%, #111 50%, transparent 50%, transparent ),radial-gradient( circle farthest-corner at 100% 100%, #111 12.5%, #7c7c7c 15.5%, #7c7c7c 15.75%, #111 18.75%, #111 25%, #7c7c7c 28%, #7c7c7c 28.25%, #111 31.25%, #111 37.5%, #7c7c7c 40.5%, #7c7c7c 40.75%, #111 43.75%, #111 50%, transparent 50%, transparent ),radial-gradient(circle farthest-corner at 50% 50%, #111 25%, #7c7c7c 31%, #7c7c7c 31.5%, #111 37.5%, #111 50%, #7c7c7c 56%, #7c7c7c 56.5%, #111 62.5%, #111 75%, #7c7c7c 81%, #7c7c7c 81.5%, #111 87.5%, #111 100%, transparent 100%, transparent );
        background-repeat: repeat;
        background-size: 3.031088913245535rem 1.75rem;
      }

      <div>
        <main
          class="Main-sc-126eniy-0  c0"
        />
      </div>
    `);
  });
  test('Index', () => {
    const {container} = render(<Main.Index {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 0 auto;
        max-width: 51.875rem;
        padding-bottom: 3.3203rem;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-bottom: 5.013rem;
        }
      }

      <div>
        <main
          class="Main-sc-126eniy-0  c0"
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
