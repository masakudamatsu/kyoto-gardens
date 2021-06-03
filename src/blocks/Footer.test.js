import React from 'react';
import {render, screen} from '@testing-library/react';

import Footer from './Footer';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Footer {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(255,255,255);
      }

      <div>
        <footer
          class="c0"
        />
      </div>
    `);
  });
  test('TopBackground', () => {
    const {container} = render(<Footer.TopBackground {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: hsla(193,50%,26%,0.9);
        padding-top: 1.2109rem;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-top: 1.7344rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('BottomBackground', () => {
    const {container} = render(<Footer.BottomBackground {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: hsla(193,50%,26%,0.9);
        padding-top: 1.2109rem;
      }

      .c1 {
        padding-bottom: 2.9453rem;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-top: 1.7344rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          padding-bottom: 3.9948rem;
        }
      }

      <div>
        <div
          class="c0 c1"
        />
      </div>
    `);
  });
  test('DropCap', () => {
    const {container} = render(<Footer.DropCap {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        fill: hsla(193,50%,26%,0.9);
        font-family: 'Reforma 1918',serif;
        font-size: 48px;
        font-weight: 500;
        width: 100%;
      }

      .c2 {
        font-feature-settings: 'salt';
      }

      .c1 {
        fill: rgb(238,238,238);
        float: left;
        -webkit-transform: translate(-8px,15px);
        -ms-transform: translate(-8px,15px);
        transform: translate(-8px,15px);
        width: 160px;
      }

      @media only screen and (min-width:31.2375rem) {
        .c1 {
          width: 253px;
          -webkit-transform: translate(-10px,0px);
          -ms-transform: translate(-10px,0px);
          transform: translate(-10px,0px);
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          width: 364px;
          -webkit-transform: translate(-10px,0px);
          -ms-transform: translate(-10px,0px);
          transform: translate(-10px,0px);
        }
      }

      <div>
        <svg
          aria-labelledby="alt-text"
          class="c0 c1"
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
              <tspan
                class="c2"
              >
                T
              </tspan>
              ranslating
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
      </div>
    `);
  });
  test('P', () => {
    const {container} = render(<Footer.P {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        color: rgb(238,238,238);
        font-family: 'Reforma 1918',serif;
        font-size: 1.0931rem;
        font-weight: 300;
        line-height: 1.5795;
        margin: 0 auto;
        max-width: 38.4997rem;
        padding-left: 1.1953rem;
        padding-right: 1.1953rem;
        text-align: left;
      }

      .c0 + .c0 {
        padding-bottom: 0.8203rem;
        padding-top: 1.1484rem;
      }

      @media only screen and (min-width:728px) {
        .c1 {
          font-size: 1.3503rem;
          line-height: 1.701;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 + .c0 {
          padding-bottom: 1.0781rem;
          padding-top: 1.5156rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          max-width: 48.1053rem;
        }
      }

      @media only screen and (min-width:31.2375rem) {
        .c1 {
          padding-left: 1.9922rem;
          padding-right: 1.9922rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          padding-left: 2.7344rem;
          padding-right: 2.7344rem;
        }
      }

      <div>
        <p
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Small', () => {
    const {container} = render(<Footer.Small {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 77.45966692414834%;
      }

      <div>
        <small
          class="c0"
        />
      </div>
    `);
  });
});
