import React from 'react';
import {render, screen} from '@testing-library/react';

import Footer from './Footer';

import {footer} from 'src/utils/specLayout';
import remify from 'src/utils/remify';

const mockProps = {};

// describe('changes UI with props', () => {
//   test('... if the ... prop is provided', () => {
//     render(<Footer testProp data-testid="Footer" />);
//     expect(screen.getByTestId('Footer')).toHaveStyle(`display: inline-block`);
//   });
// });

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Footer {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: #018786;
        border-top: 1px solid #000000;
        color: #000000;
        max-width: 33em;
        width: 100%;
      }

      <div>
        <footer
          class="c0"
        />
      </div>
    `);
  });
  test.skip('Paragraph', () => {
    const {container} = render(<Footer.Paragraph {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: left;
      }

      <div>
        <p
          class="Footer__Paragraph-n0a7ft-1 c0"
        />
      </div>
    `);
  });
  test('Whitespace', () => {
    const {container} = render(<Footer.Whitespace {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.0969rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 1.3163rem;
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
