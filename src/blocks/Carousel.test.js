import React from 'react';
import {render, screen} from '@testing-library/react';

import Carousel from './Carousel';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Carousel {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        overflow: hidden;
      }

      .c1 {
        height: 74.7078vw;
        max-width: 941px;
        position: relative;
        width: 100%;
      }

      @media only screen and (min-width:941px) {
        .c1 {
          height: 703px;
        }
      }

      <div>
        <figure
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Spring', () => {
    const {container} = render(<Carousel.Spring {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        height: auto;
        margin: auto;
        max-width: 100%;
      }

      .c1 {
        -webkit-animation: dvnCyE 16s linear infinite;
        animation: dvnCyE 16s linear infinite;
        position: absolute;
      }

      <div>
        <img
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Summer', () => {
    const {container} = render(<Carousel.Summer {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        height: auto;
        margin: auto;
        max-width: 100%;
      }

      .c1 {
        -webkit-animation: iIBqBc 16s linear infinite;
        animation: iIBqBc 16s linear infinite;
        position: absolute;
      }

      <div>
        <img
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Autumn', () => {
    const {container} = render(<Carousel.Autumn {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        height: auto;
        margin: auto;
        max-width: 100%;
      }

      .c1 {
        -webkit-animation: kMBdxc 16s linear infinite;
        animation: kMBdxc 16s linear infinite;
        position: absolute;
      }

      <div>
        <img
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Winter', () => {
    const {container} = render(<Carousel.Winter {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        height: auto;
        margin: auto;
        max-width: 100%;
      }

      .c1 {
        -webkit-animation: cdzHzA 16s linear infinite;
        animation: cdzHzA 16s linear infinite;
        position: absolute;
      }

      <div>
        <img
          class="c0 c1"
        />
      </div>
    `);
  });
});
