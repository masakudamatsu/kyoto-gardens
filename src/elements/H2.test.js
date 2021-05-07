import React from 'react';
import {render, screen} from '@testing-library/react';

import H2 from './H2';

const mockProps = {};

describe('Props work as intended', () => {
  test('visuallyHidden', () => {
    const {container} = render(<H2 visuallyHidden />);
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
        />
      </div>
    `);
  });
});

test('renders UI correctly', () => {
  const {container} = render(<H2 {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .MainRyoanji-sc-11d35pr-0 .c1 {
      color: #eee;
      font-family: 'Cormorant','Times New Roman',serif;
      font-size: 2.2025rem;
      font-weight: 700;
      -webkit-letter-spacing: 0.01em;
      -moz-letter-spacing: 0.01em;
      -ms-letter-spacing: 0.01em;
      letter-spacing: 0.01em;
      line-height: 1.0452000000000001;
      padding-bottom: 0.9765rem;
      padding-top: 1.0078rem;
      text-indent: -0.125rem;
      margin: 0 auto;
      max-width: 34.5153rem;
    }

    .MainRyoanji-sc-11d35pr-0 .c0 {
      background-color: hsla(193,50%,26%,0.9);
      background-image: linear-gradient( 35deg, hsla(0,0%,100%,0) 0, hsla(0,0%,100%,0.5) 55%, hsla(0,0%,100%,0.5) 65%, hsla(0,0%,100%,0));
      padding: 0 1.3281rem;
    }

    @media only screen and (min-width:728px) {
      .MainRyoanji-sc-11d35pr-0 .c1 {
        font-size: 2.7208rem;
        padding-bottom: 1.1842rem;
        padding-top: 1.2155rem;
      }
    }

    @media only screen and (min-width:728px) {
      .MainRyoanji-sc-11d35pr-0 .c1 {
        max-width: 42.6366rem;
      }
    }

    @media only screen and (min-width:31.6802rem) {
      .MainRyoanji-sc-11d35pr-0 .c0 {
        padding: 0 2.2135rem;
      }
    }

    @media only screen and (min-width:728px) {
      .MainRyoanji-sc-11d35pr-0 .c0 {
        padding: 0 3.0078rem;
      }
    }

    <div>
      <div
        class="c0 "
      >
        <h2
          class="c1 "
        />
      </div>
    </div>
  `);
});
