import React from 'react';
import {render, screen} from '@testing-library/react';

import P from './P';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('without prop', () => {
    const {container} = render(<P {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        text-align: left;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 {
        margin: 0 auto;
        max-width: 38.057rem;
        padding: 0 1.0625rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
        padding: 0 1.3281rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          max-width: 47.5584rem;
        }
      }

      @media only screen and (min-width:30.7948rem) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          padding: 0 1.7708rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          padding: 0 2.4609rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          max-width: 48.6522rem;
        }
      }

      @media only screen and (min-width:31.6802rem) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          padding: 0 2.2135rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          padding: 0 3.0078rem;
        }
      }

      <div>
        <p
          class="c0 c1"
        />
      </div>
    `);
  });
  test('with centerAligned prop', () => {
    render(<P centerAligned data-testid="paragraph" />);
    expect(screen.getByTestId('paragraph')).toHaveStyle(`
      text-align: center;
    `);
  });
});
