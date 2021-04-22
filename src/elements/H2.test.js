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
    .c0 {
      background-color: hsla(193,50%,26%,0.9);
      background-image: linear-gradient( 35deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0.5) 55%,hsla(0,0%,100%,0.5) 65%,hsla(0,0%,100%,0) );
      color: #eee;
      font-family: 'Cormorant','Times New Roman',serif;
      font-size: 3.2491rem;
      font-weight: 700;
      line-height: 1.0452000000000001;
      margin: 0 -2.0859rem;
      padding-bottom: 1.3984rem;
      padding-left: 2.0859rem;
      padding-top: 1.4609rem;
      text-indent: -0.125rem;
    }

    @media only screen and (min-width:728px) {

    }

    <div>
      <h2
        class="c0"
      />
    </div>
  `);
});