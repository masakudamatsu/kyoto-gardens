import React from 'react';
import {render, screen} from '@testing-library/react';

import ButtonMenu from './ButtonMenu';

describe('renders UI correctly', () => {
  test('when currentPage is ryoanji', () => {
    const {container} = render(<ButtonMenu currentPage="ryoanji" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 48px;
        width: 48px;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        position: absolute;
        left: 9.75px;
      }

      .c0:focus,
      .c0:hover {
        outline: none;
        text-shadow: 0 0 3px hsl(0,0%,100%);
      }

      .c0 svg {
        fill: hsl( 0,0%,78% );
      }

      .c0:focus svg,
      .c0:hover svg {
        fill: hsl(0,0%,100%);
      }

      @media only screen and (min-width:31.6802rem) {
        .c0 {
          left: 23.91666666666667px;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          left: 36.625px;
        }
      }

      <div>
        <button
          class="c0"
          type="button"
        />
      </div>
    `);
  });

  test('when currentPage is kohoan', () => {
    const {container} = render(<ButtonMenu currentPage="kohoan" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 48px;
        width: 48px;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        position: absolute;
        left: 5.5px;
      }

      .c0:focus,
      .c0:hover {
        outline: none;
        text-shadow: 0 0 3px hsl(0,0%,100%);
      }

      .c0 svg {
        fill: hsl( 0,0%,78% );
      }

      .c0:focus svg,
      .c0:hover svg {
        fill: hsl(0,0%,100%);
      }

      @media only screen and (min-width:30.7948rem) {
        .c0 {
          left: 16.833333333333336px;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          left: 27.875px;
        }
      }

      <div>
        <button
          class="c0"
          type="button"
        />
      </div>
    `);
  });
});
