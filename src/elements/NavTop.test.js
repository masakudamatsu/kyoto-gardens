import React from 'react';
import {render, screen} from '@testing-library/react';

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

describe('NavTop.Ul renders UI correctly', () => {
  test('without any prop', () => {
    const {container} = render(<NavTop.Ul {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: hsla(193,50%,26%,0.9);
        color: rgb(238,238,238);
        height: 85vh;
        left: 0;
        list-style: none;
        max-width: 320px;
        position: fixed;
        top: 60px;
        width: 85vw;
        -webkit-transform: translateX(-85vw);
        -ms-transform: translateX(-85vw);
        transform: translateX(-85vw);
        -webkit-transition-duration: 250ms;
        transition-duration: 250ms;
        -webkit-transition-timing-function: cubic-bezier(0,0,0.2,1);
        transition-timing-function: cubic-bezier(0,0,0.2,1);
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
  test('with navShown prop', () => {
    render(<NavTop.Ul {...mockProps} navShown data-testid="nav-menu" />);
    expect(screen.getByTestId('nav-menu')).toHaveStyle(`
      transform: translateX(0)`);
  });
});
