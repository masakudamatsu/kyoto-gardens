import React from 'react';
import {render, screen} from '@testing-library/react';

import Figure from './Figure';
import {color} from 'src/utils/specColor';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Figure with belowH3 prop', () => {
    const {container} = render(<Figure belowH3 />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        overflow: hidden;
        padding-top: 0.7644rem;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-top: 1.1047rem;
        }
      }

      <div>
        <figure
          class="c0"
        />
      </div>
    `);
  });
  test('Figure.Img', () => {
    const {container} = render(<Figure.Img />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        height: auto;
        margin: auto;
        max-width: 100%;
      }

      <div>
        <img
          class="c0"
        />
      </div>
    `);
  });
});
