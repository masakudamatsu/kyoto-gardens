import React from 'react';
import {render, screen} from '@testing-library/react';

import Button from './Button';

// describe('Props work as intended', () => {
//   test('testProp', () => {
//     render(<Button testProp data-testid="Button" />);
//     expect(screen.getByTestId('Button')).toHaveStyle(`display: inline-block`);
//   });
// });

describe('Button renders UI correctly', () => {
  test('without any prop', () => {
    const {container} = render(<Button />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 100%;
        width: 100%;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: relative;
        -webkit-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transition-duration: 250ms;
        transition-duration: 250ms;
        -webkit-transition-timing-function: cubic-bezier(0,0,0.2,1);
        transition-timing-function: cubic-bezier(0,0,0.2,1);
      }

      .c0:focus,
      .c0:hover {
        outline: none;
      }

      <div>
        <button
          class="c0"
        />
      </div>
    `);
  });
  test('with navShown prop', () => {
    render(<Button navShown data-testid="button" />);
    expect(screen.getByTestId('button')).toHaveStyle(`
      transform: rotateY(180deg)
    `);
    expect(screen.getByTestId('button')).toHaveStyle(`
      transition-duration: 300ms
    `);
  });
});

describe('Button.DivFrame renders UI correctly', () => {
  test('when currentPage is ryoanji', () => {
    const {container} = render(<Button.DivFrame currentPage="ryoanji" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 48px;
        width: 48px;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        position: absolute;
        left: 9.75px;
        background-color: rgb(2,19,28);
        -webkit-perspective: 40rem;
        -moz-perspective: 40rem;
        -ms-perspective: 40rem;
        perspective: 40rem;
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
        <div
          class="c0"
        />
      </div>
    `);
  });

  test('when currentPage is kohoan', () => {
    const {container} = render(<Button.DivFrame currentPage="kohoan" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 48px;
        width: 48px;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        position: absolute;
        left: 5.5px;
        background-color: rgb(2,19,28);
        -webkit-perspective: 40rem;
        -moz-perspective: 40rem;
        -ms-perspective: 40rem;
        perspective: 40rem;
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
        <div
          class="c0"
        />
      </div>
    `);
  });
});

describe('Button.SvgSurface renders UI correctly', () => {
  test('without any prop', () => {
    const {container} = render(<Button.SvgSurface />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-family: 'Reforma 1918',sans-serif;
        font-size: 33px;
        font-weight: 300;
        height: 100%;
        background-color: rgb(33,79,89);
        height: 100%;
        width: 100%;
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
      }

      .Button-sc-6yjgzo-0 .c0 {
        border: 1px solid rgb(33,79,89);
        fill: rgba(255,255,255,0.42);
      }

      .Button-sc-6yjgzo-0:focus .c0,
      .Button-sc-6yjgzo-0:hover .c1 {
        fill: rgb(255,255,255);
        border: 1px solid rgb(2,19,28);
      }

      <div>
        <svg
          class="c0 c1"
        />
      </div>
    `);
  });
  test('with backside prop', () => {
    render(<Button.SvgSurface data-testid="backside" backside />);
    expect(screen.getByTestId('backside')).toHaveStyle(`
      transform: rotateY(180deg)
    `);
  });
});
