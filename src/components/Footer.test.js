import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Footer from './Footer';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Footer {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c3 {
      fill: #215563;
      font-family: 'Reforma 1918';
      font-size: 48px;
      font-weight: 500;
      width: 100%;
    }

    .c0 {
      background-color: hsla(193,50%,26%,0.9);
      clear: both;
      margin: 0 auto;
      padding-top: 15px;
      padding-bottom: 3.3203rem;
    }

    .c4 {
      fill: #fff;
      float: left;
      -webkit-transform: translate(-8px,15px);
      -ms-transform: translate(-8px,15px);
      transform: translate(-8px,15px);
      width: 160px;
    }

    .c2 {
      color: #fff;
      font-family: 'Reforma 1918',serif;
      font-size: 1.0931rem;
      font-weight: 300;
      line-height: 1.5795;
      margin: 0 auto;
      max-width: 38.4997rem;
      padding: 0 1.1953rem;
      text-align: left;
    }

    .c1 + .c1 {
      padding-top: 1.9922rem;
    }

    .c5 {
      color: #fff;
      font-family: 'Reforma 1918',serif;
      font-size: 1.0931rem;
      font-weight: 300;
      line-height: 1.5795;
      margin: 0 auto;
      max-width: 38.4997rem;
      padding: 0 1.1953rem;
      text-align: center;
    }

    .c1 + .c1 {
      padding-top: 1.9922rem;
    }

    .c6 {
      font-size: 80%;
    }

    @media only screen and (min-width:728px) {
      .c0 {
        padding-bottom: 5.013rem;
      }
    }

    @media only screen and (min-width:31.2375rem) {
      .c4 {
        width: 253px;
        -webkit-transform: translate(-10px,0px);
        -ms-transform: translate(-10px,0px);
        transform: translate(-10px,0px);
      }
    }

    @media only screen and (min-width:728px) {
      .c4 {
        width: 364px;
        -webkit-transform: translate(-10px,0px);
        -ms-transform: translate(-10px,0px);
        transform: translate(-10px,0px);
      }
    }

    @media only screen and (min-width:728px) {
      .c2 {
        font-size: 1.3503rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c2 {
        max-width: 48.6522rem;
      }
    }

    @media only screen and (min-width:31.2375rem) {
      .c2 {
        padding: 0 1.9922rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c2 {
        padding: 0 3.0078rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 + .c1 {
        padding-top: 3.0078rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c5 {
        font-size: 1.3503rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c5 {
        max-width: 48.6522rem;
      }
    }

    @media only screen and (min-width:31.2375rem) {
      .c5 {
        padding: 0 1.9922rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c5 {
        padding: 0 3.0078rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 + .c1 {
        padding-top: 3.0078rem;
      }
    }

    <div>
      <footer
        class="c0"
      >
        <p
          class="c1 c2"
        >
          <svg
            aria-labelledby="alt-text"
            class="c3 c4"
            role="img"
            viewBox="0 0 320 181"
          >
            <title
              id="alt-text"
            >
              Translating Japanese Gardens
            </title>
            <text>
              <tspan
                dx="0 1 2 -2 -2 0 0 -1 1 -1 -2"
                id="Translating"
                x="19"
                y="58"
              >
                Translating
              </tspan>
              <tspan
                dx="0 -1 -1 -1 -2 -2 0 -1"
                id="Japanese"
                x="109.896"
                y="107"
              >
                Japanese
              </tspan>
              <tspan
                dx="0 -1 -1 0 -2 -1 -2"
                id="Gardens"
                x="47.12"
                y="163"
              >
                Gardens
              </tspan>
            </text>
          </svg>
           presents alternative takes on historical gardens in Japan, attempting to uncover the intentions of their design. It is a one-person project: articles are written, photographs taken (unless otherwise indicated), and web pages designed and coded, by Masa Kudamatsu, a native Japanese speaker who loves living in Kyoto for its amazing gardens.
        </p>
        <p
          class="c1 c5"
        >
          <small
            class="c6"
          >
            © 2021 Masayuki Kudamatsu. All rights reserved.
          </small>
        </p>
      </footer>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Footer {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
