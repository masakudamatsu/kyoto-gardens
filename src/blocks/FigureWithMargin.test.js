import React from 'react';
import {render, screen} from '@testing-library/react';

import FigureWithMargin from './FigureWithMargin';

const mockProps = {};

describe('renders UI correctly', () => {
  test('with belowTextLine prop', () => {
    const {container} = render(<FigureWithMargin belowTextLine />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        overflow: hidden;
      }

      .c1 {
        padding-top: 0.8281rem;
      }

      @media only screen and (min-width:31.6802rem) {
        .c1 {
          padding-left: 2.2135rem;
          padding-right: 2.2135rem;
        }
      }

      @media only screen and (min-width:38.9424rem) {
        .c1 {
          margin-left: auto;
          margin-right: auto;
          width: 38.9424rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          margin: 0;
          padding-left: 3.0078rem;
          padding-right: 3.0078rem;
          padding-top: 1.0547rem;
          width: auto;
        }
      }

      @media only screen and (min-width:48.6522rem) {
        .c1 {
          margin-left: auto;
          margin-right: auto;
          width: 48.6522rem;
        }
      }

      <div>
        <figure
          class="c0 c1"
        />
      </div>
    `);
  });
});
