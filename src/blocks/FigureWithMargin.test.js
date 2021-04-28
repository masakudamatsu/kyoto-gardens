import React from 'react';
import {render, screen} from '@testing-library/react';

import FigureWithMargin from './FigureWithMargin';
import {color} from 'src/utils/specColor';

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
  test('with belowTextLine and bordered props', () => {
    const {container} = render(<FigureWithMargin belowTextLine bordered />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        overflow: hidden;
      }

      .c1 {
        border-bottom: 1px solid hsla(193,50%,26%,0.2);
        border-top: 1px solid hsla(193,50%,26%,0.2);
        margin-top: 0.8281rem;
        padding: 15.564px;
      }

      @media only screen and (min-width:528.128px) {
        .c1 {
          border-left: 1px solid hsla(193,50%,26%,0.2);
          border-right: 1px solid hsla(193,50%,26%,0.2);
          margin-left: 2.2135rem;
          margin-right: 2.2135rem;
        }
      }

      @media only screen and (min-width:38.9424rem) {
        .c1 {
          margin-left: auto;
          margin-right: auto;
          width: 34.5153rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          margin-left: 3.0078rem;
          margin-right: 3.0078rem;
          margin-top: 1.0547rem;
          width: auto;
          width: auto;
        }
      }

      @media only screen and (min-width:48.6522rem) {
        .c1 {
          margin-left: auto;
          margin-right: auto;
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
