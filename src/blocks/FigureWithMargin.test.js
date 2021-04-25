import React from 'react';
import {render, screen} from '@testing-library/react';

import FigureWithMargin from './FigureWithMargin';
import {color} from 'src/utils/specColor';

const mockProps = {};

describe('renders UI correctly', () => {
  test('without props', () => {
    const {container} = render(<FigureWithMargin />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        overflow: hidden;
      }

      @media only screen and (min-width:31.6802rem) {
        .c1 {
          padding: 0 2.2135rem;
        }
      }

      @media only screen and (min-width:38.9424rem) {
        .c1 {
          margin: 0 auto;
          width: 38.9424rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          margin: 0;
          padding: 0 3.0078rem;
          width: auto;
        }
      }

      @media only screen and (min-width:48.6522rem) {
        .c1 {
          margin: 0 auto;
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
  test('with bordered prop', () => {
    const {container} = render(<FigureWithMargin bordered />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        overflow: hidden;
      }

      .c1 {
        border-bottom: 1px solid hsla(193,50%,26%,0.2);
        border-top: 1px solid hsla(193,50%,26%,0.2);
        padding: 15.564px;
      }

      @media only screen and (min-width:528.128px) {
        .c1 {
          border-left: 1px solid hsla(193,50%,26%,0.2);
          border-right: 1px solid hsla(193,50%,26%,0.2);
          margin: 0 2.2135rem;
        }
      }

      @media only screen and (min-width:38.9424rem) {
        .c1 {
          margin: 0 auto;
          width: 34.5153rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          margin: 0 3.0078rem;
          width: auto;
          width: auto;
        }
      }

      @media only screen and (min-width:48.6522rem) {
        .c1 {
          margin: 0 auto;
          width: 42.6366rem;
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
