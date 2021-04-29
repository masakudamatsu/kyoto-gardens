import React from 'react';
import {render, screen} from '@testing-library/react';

import H2 from './H2';

const mockProps = {};

describe('Props work as intended', () => {
  test('hidden', () => {
    const {container} = render(<H2 hidden />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-clip: rect(1px 1px 1px 1px);
        clip: rect(1px 1px 1px 1px);
        -webkit-clip: rect(1px,1px,1px,1px);
        clip: rect(1px,1px,1px,1px);
        -webkit-clip-path: inset(50%);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      <div>
        <h2
          class="c0"
          hidden=""
        />
      </div>
    `);
  });
});

test('renders UI correctly', () => {
  const {container} = render(<H2 {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      color: #eee;
      font-family: 'Cormorant','Times New Roman',serif;
      font-size: 2.2025rem;
      font-weight: 700;
      line-height: 1.0452000000000001;
      padding-bottom: 0.9765rem;
      padding-top: 1.039rem;
      text-indent: -0.125rem;
    }

    .c0 {
      background-color: hsla(193,50%,26%,0.9);
      background-image: linear-gradient( 35deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0.5) 55%,hsla(0,0%,100%,0.5) 65%,hsla(0,0%,100%,0) );
      padding-left: 1.3281rem;
      padding-right: 1.3281rem;
    }

    @media only screen and (min-width:38.9424rem) {
      .c1 {
        margin: 0 auto;
        width: 34.5153rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        font-size: 2.7208rem;
        margin: 0;
        width: auto;
      }
    }

    @media only screen and (min-width:48.6522rem) {
      .c1 {
        margin: 0 auto;
        width: 42.6366rem;
      }
    }

    @media only screen and (min-width:31.6802rem) {
      .c0 {
        padding-left: 2.2135rem;
        padding-right: 2.2135rem;
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
      >
        <h2
          class="c1"
        />
      </div>
    </div>
  `);
});
