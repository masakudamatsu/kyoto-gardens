import React from 'react';
import {render, screen} from '@testing-library/react';

import FigureWithMargin from './FigureWithMargin';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<FigureWithMargin />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        overflow: hidden;
      }

      .c1 {
        margin: 0 auto;
        max-width: 38.9424rem;
      }

      @media only screen and (min-width:31.6802rem) {
        .c1 {
          padding: 0 2.2135rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          max-width: 48.6522rem;
          padding: 0 3.0078rem;
        }
      }

      <div>
        <figure
          class="c0 c1"
        />
      </div>
    `);
  });

  test('Border', () => {
    const {container} = render(<FigureWithMargin.Border />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        border-bottom: 1px solid hsla(193,50%,26%,0.2);
        border-top: 1px solid hsla(193,50%,26%,0.2);
        padding: 15.564px;
      }

      @media only screen and (min-width:31.6802rem) {
        .c0 {
          border-left: 1px solid hsla(193,50%,26%,0.2);
          border-right: 1px solid hsla(193,50%,26%,0.2);
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
