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
        color: rgb(255,255,255);
        height: auto;
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
        color: inherit;
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

describe('NavTop.Li renders UI correctly', () => {
  test('when currentPage and pageName props are different', () => {
    const {container} = render(
      <NavTop.Li currentPage="kohoan" pageName="ryoanji" />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(33,79,89);
        border-bottom: 1px solid rgba(255,255,255,0.42);
        font-family: 'Reforma 1918',serif;
        font-size: 1.3333rem;
        font-weight: 300;
        line-height: normal;
        padding-bottom: 0.625rem;
        padding-left: 1rem;
        padding-top: 0.5313rem;
        position: relative;
      }

      .c0 a,
      .c0 a:visited {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 a:focus,
      .c0 a:hover {
        outline: none;
      }

      .c0 a::after {
        content: '>';
        height: 100%;
        left: 0;
        padding-bottom: 0.625rem;
        padding-right: 1rem;
        padding-top: 0.5313rem;
        position: absolute;
        text-align: right;
        top: 0;
        width: 100%;
      }

      .c0 a:focus::after,
      .c0 a:hover::after {
        background-color: rgba(255,255,255,0.42);
      }

      <div>
        <li
          class="c0"
        />
      </div>
    `);
  });
  test('when currentPage and pageName props are the same', () => {
    const {container} = render(
      <NavTop.Li
        currentPage="kohoan"
        pageName="kohoan"
        data-testid="destination"
      />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgba(33,79,89,0.58);
        border-bottom: 1px solid rgba(255,255,255,0.42);
        font-family: 'Reforma 1918',serif;
        font-size: 1.3333rem;
        font-weight: 300;
        line-height: normal;
        padding-bottom: 0.625rem;
        padding-left: 1rem;
        padding-top: 0.5313rem;
        position: relative;
      }

      .c0 a,
      .c0 a:visited {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 a:focus,
      .c0 a:hover {
        outline: none;
      }

      .c0 a::after {
        content: '';
        height: 100%;
        left: 0;
        padding-bottom: 0.625rem;
        padding-right: 1rem;
        padding-top: 0.5313rem;
        position: absolute;
        text-align: right;
        top: 0;
        width: 100%;
      }

      .c0 a:focus::after,
      .c0 a:hover::after {
        background-color: transparent;
      }

      <div>
        <li
          class="c0"
          data-testid="destination"
        />
      </div>
    `);
  });
});
