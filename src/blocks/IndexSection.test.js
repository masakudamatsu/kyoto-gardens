import React from 'react';
import {render, screen} from '@testing-library/react';

import IndexSection from './IndexSection';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<IndexSection {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .c0:nth-of-type(odd) {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }

      .c0:nth-of-type(even) {
        -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      @media only screen and (min-width:500px) {
        .c0 {
          width: 500px;
        }

        .c0:nth-of-type(odd) {
          float: right;
        }

        .c0:nth-of-type(even) {
          float: left;
        }
      }

      <div>
        <section
          class="c0"
        />
      </div>
    `);
  });
  test('H2', () => {
    const {container} = render(<IndexSection.H2 {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Reforma 1918',serif;
        font-size: 1.0931rem;
        font-weight: 600;
        font-style: italic;
        padding-bottom: 0;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 54px;
      }

      @media only screen and (min-width:25.625rem) {
        .c0 {
          font-size: 1.8218rem;
          padding-top: 72px;
        }
      }

      <div>
        <h2
          class="c0"
        />
      </div>
    `);
  });
  test('Card', () => {
    const {container} = render(<IndexSection.Card {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
      }

      .c0 a {
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 a:focus,
      .c0 a:hover {
        outline: none;
      }

      .c0 a::after {
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 3;
      }

      .c0 a:focus::after,
      .c0 a:hover::after {
        background-color: hsla(193,50%,26%,0.2);
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Figure', () => {
    const {container} = render(<IndexSection.Figure {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        margin-top: 65px;
        position: relative;
      }

      .c1::before {
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1;
      }

      .IndexSection-ff5g7u-0:nth-of-type(odd) .c0::before {
        background-image: linear-gradient( to top right, rgba(255,255,255,0) 75%, rgba(255,255,255,0.8) );
      }

      .IndexSection-ff5g7u-0:nth-of-type(even) .c0::before {
        background-image: linear-gradient( to top left, rgba(255,255,255,0) 75%, rgba(255,255,255,0.8) );
      }

      @media only screen and (min-width:25.625rem) {
        .c1 {
          margin-top: 90px;
        }
      }

      <div>
        <figure
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Kanji', () => {
    const {container} = render(<IndexSection.Kanji {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Kohoan-sc-126eniy-2 .c0 {
        font-family: 'Shippori Mincho',serif;
        font-size: 1em;
        font-weight: 500;
        line-height: normal;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        font-family: 'Shippori Mincho',serif;
        font-size: 0.85em;
        font-weight: 500;
      }

      .c2 {
        font-family: 'Shippori Mincho B1',serif;
        font-size: 2em;
        font-weight: 500;
        line-height: 1;
        padding: 10px;
        position: absolute;
        top: 0;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        z-index: 2;
      }

      .IndexSection-ff5g7u-0:nth-of-type(odd) .c1 {
        left: auto;
        right: 0;
      }

      .IndexSection-ff5g7u-0:nth-of-type(even) .c1 {
        left: 0;
        right: auto;
      }

      @media only screen and (min-width:25.625rem) {
        .c2 {
          font-size: 3em;
        }
      }

      <div>
        <span
          class="c0 c1 c2"
          lang="ja"
        />
      </div>
    `);
  });
  test('Latin', () => {
    const {container} = render(<IndexSection.Latin />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        margin-top: 0px;
        position: relative;
        z-index: 2;
      }

      .IndexSection-ff5g7u-0:nth-of-type(odd) .c0 {
        text-align: left;
      }

      .IndexSection-ff5g7u-0:nth-of-type(even) .c0 {
        text-align: right;
      }

      <div>
        <p
          class="c0 c1"
        />
      </div>
    `);
  });
  test('P', () => {
    const {container} = render(<IndexSection.P />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-family: 'Reforma 1918',serif;
        font-size: 1.0931rem;
        line-height: 1.5795;
      }

      .IndexSection-ff5g7u-0:nth-of-type(odd) .c0 {
        padding-right: 10px;
        text-align: left;
      }

      .IndexSection-ff5g7u-0:nth-of-type(even) .c0 {
        padding-left: 10px;
        text-align: right;
      }

      <div>
        <p
          class="c0 c1"
        />
      </div>
    `);
  });
});

describe('props work as expected', () => {
  test(`Latin's gardenName prop`, () => {
    const {rerender} = render(
      <IndexSection.Latin gardenName="kohoan" data-testid="section" />,
    );
    expect(screen.getByTestId('section')).toHaveStyle(`
      font-family: ${kohoan.h1.fontFamily.replace(/,\s/g, ',')}
    `);
    rerender(<IndexSection.Latin gardenName="ryoanji" data-testid="section" />);
    expect(screen.getByTestId('section')).toHaveStyle(`
      font-family: ${ryoanji.h1.fontFamily.replace(/,\s/g, ',')}
    `);
  });
});
