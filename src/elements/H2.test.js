import React from 'react';
import {render, screen} from '@testing-library/react';

import H2 from './H2';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<H2 {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .Main__Kohoan-sc-126eniy-2 .c1 {
      color: #eee;
      font-family: 'Playfair Display',serif;
      font-size: 1.7193rem;
      font-weight: 600;
      -webkit-letter-spacing: 0.01em;
      -moz-letter-spacing: 0.01em;
      -ms-letter-spacing: 0.01em;
      letter-spacing: 0.01em;
      line-height: 1.236;
      padding-bottom: 0.8457rem;
      padding-top: 0.7207rem;
      text-indent: -0.125rem;
      margin: 0 auto;
      max-width: 34.5153rem;
    }

    .Main__Ryoanji-sc-126eniy-1 .c1 {
      color: rgb(238,238,238);
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

    .Main__Kohoan-sc-126eniy-2 .c0 {
      background-color: hsla(193,50%,26%,0.9);
      background-image: linear-gradient( 35deg, hsla(0,0%,100%,0) 0, hsla(0,0%,100%,0.5) 55%, hsla(0,0%,100%,0.5) 65%, hsla(0,0%,100%,0) );
      padding: 0 1.0625rem;
    }

    .Main__Ryoanji-sc-126eniy-1 .c0 {
      background-color: hsla(193,50%,26%,0.9);
      background-image: linear-gradient( 35deg, hsla(0,0%,100%,0) 0, hsla(0,0%,100%,0.5) 55%, hsla(0,0%,100%,0.5) 65%, hsla(0,0%,100%,0));
      padding: 0 1.3281rem;
    }

    @media only screen and (min-width:728px) {
      .Main__Kohoan-sc-126eniy-2 .c1 {
        font-size: 2.1238rem;
        padding-bottom: 1.0704rem;
        padding-top: 0.8516rem;
      }
    }

    @media only screen and (min-width:728px) {
      .Main__Kohoan-sc-126eniy-2 .c1 {
        max-width: 42.6366rem;
      }
    }

    @media only screen and (min-width:728px) {
      .Main__Ryoanji-sc-126eniy-1 .c1 {
        font-size: 2.7208rem;
        padding-bottom: 1.1842rem;
        padding-top: 1.2155rem;
      }
    }

    @media only screen and (min-width:728px) {
      .Main__Ryoanji-sc-126eniy-1 .c1 {
        max-width: 42.6366rem;
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
