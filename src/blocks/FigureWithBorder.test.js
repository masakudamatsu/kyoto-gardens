import React from 'react';
import {render, screen} from '@testing-library/react';

import FigureWithBorder from './FigureWithBorder';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<FigureWithBorder />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Kohoan-sc-126eniy-2 .c0 {
        margin: 0 auto;
        max-width: 38.057rem;
        padding-left: 1.0625rem;
        padding-right: 1.0625rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          max-width: 47.5584rem;
        }
      }

      @media only screen and (min-width:30.7948rem) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          padding-left: 1.7708rem;
          padding-right: 1.7708rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          padding-left: 2.4609rem;
          padding-right: 2.4609rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          max-width: 48.6522rem;
        }
      }

      @media only screen and (min-width:31.6802rem) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          padding-left: 2.2135rem;
          padding-right: 2.2135rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          padding-left: 3.0078rem;
          padding-right: 3.0078rem;
        }
      }

      <div>
        <figure
          class="c0 "
        />
      </div>
    `);
  });
  test('Border', () => {
    const {container} = render(<FigureWithBorder.Border />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Kohoan-sc-126eniy-2 .c0 {
        border-bottom: 1px solid rgb(200,200,200);
        border-top: 1px solid rgb(200,200,200);
        padding: 17px;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        border-bottom: 1px solid hsla(193,30%,57%,0.2);
        border-top: 1px solid hsla(193,30%,57%,0.2);
        padding: 15.25px;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          padding: 23.625px;
        }
      }

      @media only screen and (min-width:31.6802rem) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          border-left: 1px solid hsla(193,30%,57%,0.2);
          border-right: 1px solid hsla(193,30%,57%,0.2);
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          padding: 22.875px;
        }
      }

      <div>
        <div
          class="c0 "
        />
      </div>
    `);
  });
});
