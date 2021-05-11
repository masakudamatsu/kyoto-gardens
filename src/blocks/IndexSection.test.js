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
        font-size: 1.8218rem;
        font-weight: 600;
        font-style: italic;
        padding-bottom: 0;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 60px;
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
        overflow: hidden;
      }

      .c2 {
        margin-top: 60px;
        position: relative;
      }

      .c2::before {
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1;
      }

      .IndexSection-ff5g7u-0:nth-of-type(odd) .c0::before {
        background-image: linear-gradient( to bottom, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 98% ), linear-gradient( to top right, rgba(255,255,255,0) 80%, rgba(255,255,255,0.8) );
      }

      .IndexSection-ff5g7u-0:nth-of-type(even) .c0::before {
        background-image: linear-gradient( to bottom, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 98% ), linear-gradient( to top left, rgba(255,255,255,0) 80%, rgba(255,255,255,0.8) );
      }

      <div>
        <figure
          class="c0 c1 c2"
        />
      </div>
    `);
  });
  test('Kanji', () => {
    const {container} = render(<IndexSection.Kanji {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-family: 'Shippori Mincho',serif;
        font-size: 0.85em;
        font-weight: 500;
      }

      .c2 {
        color: #0a0a0a;
        font-family: 'Shippori Mincho B1',serif;
        font-size: 3em;
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

      .IndexSection-ff5g7u-0:nth-of-type(odd) .c0 {
        left: auto;
        right: 0;
      }

      .IndexSection-ff5g7u-0:nth-of-type(even) .c0 {
        left: 0;
        right: auto;
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
        color: #0a0a0a;
        margin-top: -40px;
        padding: 0 10px;
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
        padding: 0 10px;
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
