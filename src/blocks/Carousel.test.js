import React from 'react';
import {render, screen} from '@testing-library/react';

import Carousel from './Carousel';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Carousel />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        overflow: hidden;
      }

      .c1 {
        height: 74.7078vw;
        max-height: 703px;
        max-width: 941px;
        position: relative;
        width: 100%;
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
        -webkit-animation: dvnCyE 16s linear infinite;
        animation: dvnCyE 16s linear infinite;
        position: absolute;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Summer', () => {
    const {container} = render(<Carousel.Summer {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation: iIBqBc 16s linear infinite;
        animation: iIBqBc 16s linear infinite;
        position: absolute;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Autumn', () => {
    const {container} = render(<Carousel.Autumn {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation: kMBdxc 16s linear infinite;
        animation: kMBdxc 16s linear infinite;
        position: absolute;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Winter', () => {
    const {container} = render(<Carousel.Winter {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation: cdzHzA 16s linear infinite;
        animation: cdzHzA 16s linear infinite;
        position: absolute;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
