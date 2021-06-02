import React from 'react';
import {render, screen} from '@testing-library/react';

import NavTimeline from './NavTimeline';

const mockProps = {};

// describe('Props work as intended', () => {
//   test('testProp', () => {
//     render(<NavTimeline testProp data-testid="NavTimeline" />);
//     expect(screen.getByTestId('NavTimeline')).toHaveStyle(
//       `display: inline-block`,
//     );
//   });
// });

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<NavTimeline {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(255,255,255);
        color: rgb(10,10,10);
        margin: 0 auto;
        max-width: 58.8125rem;
        overflow: hidden;
        padding-bottom: 2.3325rem;
      }

      .c0 a,
      .c0 a:visited {
        color: rgb(10,10,10);
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-bottom: 3.0833rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          margin-left: 2.1875rem;
          margin-right: 2.1875rem;
        }
      }

      @media only screen and (min-width:63.1875rem) {
        .c0 {
          margin-left: auto;
          margin-right: auto;
        }
      }

      <div>
        <nav
          class="c0"
        />
      </div>
    `);
  });
});
