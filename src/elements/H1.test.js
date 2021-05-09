import React from 'react';
import {render} from '@testing-library/react';

import H1 from './H1';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<H1 {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        font-family: 'Cormorant SC','Times New Roman',serif;
        font-size: 3.1331rem;
        font-weight: 700;
        -webkit-letter-spacing: 0.05em;
        -moz-letter-spacing: 0.05em;
        -ms-letter-spacing: 0.05em;
        letter-spacing: 0.05em;
        line-height: 0.7065;
        margin: 0 auto;
        max-width: 34.5153rem;
      }

      @media only screen and (min-width:38.9424rem) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          font-size: 5.2218rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          font-size: 6.4505rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          max-width: 42.6366rem;
        }
      }

      <div>
        <h1
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Ryoanji', () => {
    const {container} = render(<H1.Ryoanji {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-bottom: 0.3438rem;
        text-indent: -0.1875rem;
      }

      @media only screen and (min-width:38.9424rem) {
        .c0 {
          text-indent: -0.375rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-bottom: 0.3438rem;
          text-indent: -0.5rem;
        }
      }

      <div>
        <span
          class="c0"
        />
      </div>
    `);
  });
  test('RockGarden', () => {
    const {container} = render(<H1.RockGarden {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 0.4444em;
        padding-bottom: 0.5313rem;
        word-spacing: -0.2em;
      }

      @media only screen and (min-width:38.9424rem) {
        .c0 {
          text-indent: -0.125rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-bottom: 0.5938rem;
          text-indent: -0.125rem;
        }
      }

      <div>
        <span
          class="c0"
        />
      </div>
    `);
  });
  test('Wrapper', () => {
    const {container} = render(<H1.Wrapper {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Ryoanji-sc-126eniy-1 .c0 {
        padding: 0 1.3281rem;
        background-color: hsla(193,50%,26%,0.9);
        background-image: linear-gradient( 35deg, hsla(0,0%,100%,0) 0, hsla(0,0%,100%,0.5) 55%, hsla(0,0%,100%,0.5) 65%, hsla(0,0%,100%,0));
        color: #eee;
        padding-top: 0.5313rem;
        width: 100%;
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

      @media only screen and (min-width:31.6802rem) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          background-color: transparent;
          background-image: none;
          bottom: 0;
          color: #000;
          left: 0;
          padding-top: 0rem;
          position: absolute;
          z-index: 1;
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
