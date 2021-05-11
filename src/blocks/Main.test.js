import React from 'react';
import {render, screen} from '@testing-library/react';

import {Main} from './Main';

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
        background-image: radial-gradient( circle closest-side,transparent 91%,#ffffff 100%,transparent ),radial-gradient( circle closest-side,rgb(240,240,240) 91%,#ffffff 100%,rgb(240,240,240) );
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
  test('Index', () => {
    const {container} = render(<Main.Index {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 0 auto;
        max-width: 51.875rem;
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
