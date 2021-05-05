import React from 'react';
import {render} from '@testing-library/react';

import H1 from './H1';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<H1 ryoanji {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Cormorant SC','Times New Roman',serif;
        font-size: 3.1331rem;
        font-weight: 700;
        line-height: 0.7065;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      @media only screen and (min-width:38.9424rem) {
        .c0 {
          font-size: 5.2218rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 6.4505rem;
        }
      }

      @media only screen and (min-width:38.9424rem) {
        .c0 {
          margin: 0 auto;
          width: 34.5153rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          margin: 0;
          width: auto;
        }
      }

      @media only screen and (min-width:48.6522rem) {
        .c0 {
          margin: 0 auto;
          width: 42.6366rem;
        }
      }

      <div>
        <h1
          class="c0"
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
      .c0 {
        background-color: hsla(193,50%,26%,0.9);
        background-image: linear-gradient( 35deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0.5) 55%,hsla(0,0%,100%,0.5) 65%,hsla(0,0%,100%,0) );
        color: #eee;
        padding-left: 1.3281rem;
        padding-right: 1.3281rem;
        padding-top: 0.5313rem;
        width: 100%;
      }

      @media only screen and (min-width:31.6802rem) {
        .c0 {
          background-color: transparent;
          background-image: none;
          bottom: 0;
          color: #000;
          left: 0;
          padding-left: 2.2135rem;
          padding-right: 2.2135rem;
          padding-top: 0rem;
          position: absolute;
          z-index: 1;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-left: 3.0078rem;
          padding-right: 3.0078rem;
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
