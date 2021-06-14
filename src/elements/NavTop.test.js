import React from 'react';
import {render} from '@testing-library/react';

import NavTop from './NavTop';

const mockProps = {};

// describe('Props work as intended', () => {
//   test('testProp', () => {
//     render(<NavTop testProp data-testid="NavTop" />);
//     expect(screen.getByTestId('NavTop')).toHaveStyle(`display: inline-block`);
//   });
// });

describe('NavTop', () => {
  test('renders UI correctly', () => {
    const {container} = render(<NavTop {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      <div>
        <nav
          class="c0"
        />
      </div>
    `);
  });
});

describe('NavTop.Button renders UI correctly', () => {
  test('when currentPage is ryoanji', () => {
    const {container} = render(<NavTop.Button currentPage="ryoanji" />);
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

      .c0:active {
        text-shadow: none;
      }

      .c0 svg {
        fill: hsl(0,0%,78%);
      }

      .c0:focus svg,
      .c0:hover svg {
        fill: hsl(0,0%,100%);
      }

      .c0:active svg {
        fill: hsl(0,0%,78%);
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
        />
      </div>
    `);
  });

  test('when currentPage is kohoan', () => {
    const {container} = render(<NavTop.Button currentPage="kohoan" />);
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

      .c0:active {
        text-shadow: none;
      }

      .c0 svg {
        fill: hsl(0,0%,78%);
      }

      .c0:focus svg,
      .c0:hover svg {
        fill: hsl(0,0%,100%);
      }

      .c0:active svg {
        fill: hsl(0,0%,78%);
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
        />
      </div>
    `);
  });
});

describe('NavTop.Ul', () => {
  test('renders UI correctly', () => {
    const {container} = render(<NavTop.Ul {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: hsla(193,50%,26%,0.9);
        color: rgb(238,238,238);
        height: 85vh;
        list-style: none;
        max-width: 320px;
        position: fixed;
        top: 60px;
        width: 85vw;
        z-index: 5;
      }

      .c0 a,
      .c0 a:visited {
        color: rgb(238,238,238);
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      <div>
        <ul
          class="c0"
        />
      </div>
    `);
  });
});
