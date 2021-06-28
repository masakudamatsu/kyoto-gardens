import React from 'react';
import {render, screen} from '@testing-library/react';

import IndexSection from './IndexSection';
import {font} from 'src/utils/fontScheme';

const mockProps = {
  currentPage: 'garden',
  pageName: 'another-garden',
};

describe('props work as expected', () => {
  test('currentPage and pageName', () => {
    const styleToApply = {
      desaturated: `filter: grayscale(1)`,
      opaque: `opacity: 0.3`,
    };
    const {rerender} = render(
      <IndexSection {...mockProps} data-testid="index" />,
    );
    const index = screen.getByTestId('index');
    expect(index).not.toHaveStyle(styleToApply.desaturated);
    expect(index).not.toHaveStyle(styleToApply.opaque);
    rerender(
      <IndexSection
        {...mockProps}
        currentPage={mockProps.pageName}
        data-testid="index"
      />,
    );
    expect(index).toHaveStyle(styleToApply.desaturated);
    expect(index).toHaveStyle(styleToApply.opaque);
  });
  test(`Latin's gardenName prop`, () => {
    const {rerender} = render(
      <IndexSection.Latin gardenName="kohoan" data-testid="section" />,
    );
    expect(screen.getByTestId('section')).toHaveStyle(`
      font-family: ${font.kohoan.h1.family.replace(/,\s/g, ',')}
    `);
    rerender(<IndexSection.Latin gardenName="ryoanji" data-testid="section" />);
    expect(screen.getByTestId('section')).toHaveStyle(`
      font-family: ${font.ryoanji.h1.family.replace(/,\s/g, ',')}
    `);
  });
});

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
        float: right;
      }

      .c0:nth-of-type(even) {
        -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        float: left;
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
        padding-left: 0.5313rem;
        padding-right: 0.5313rem;
        padding-top: 48px;
      }

      @media only screen and (min-width:25.625rem) {
        .c0 {
          font-size: 1.8218rem;
        }
      }

      @media only screen and (min-width:25.625rem) {
        .c0 {
          padding-top: 67px;
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
        max-width: 471px;
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
        background-color: rgba(59,105,114,0.2);
      }

      .c0 a:not([href]):focus::after,
      .c0 a:not([href]):hover::after {
        background-color: transparent;
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
        font-family: 'Reforma 1918',serif;
        font-size: 1.0931rem;
        font-weight: 300;
        line-height: 1.3365;
        margin-top: 59px;
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

      @media only screen and (min-width:728px) {
        .c1 {
          font-size: 1.3503rem;
          line-height: 1.458;
        }
      }

      @media only screen and (min-width:25.625rem) {
        .c1 {
          margin-top: 85px;
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
      .c1 {
        font-family: 'Shippori Mincho B1',serif;
        font-size: 2em;
        font-weight: 500;
        line-height: 1;
        padding-left: 0.5313rem;
        padding-right: 0.5313rem;
        padding-top: 0.5313rem;
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

      @media only screen and (min-width:25.625rem) {
        .c1 {
          font-size: 3em;
        }
      }

      <div>
        <span
          class="c0 c1"
          lang="ja"
        />
      </div>
    `);
  });
  test('Latin for Koho-an', () => {
    const {container} = render(<IndexSection.Latin gardenName="kohoan" />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-family: 'Playfair Display',serif;
        font-size: 2.8654rem;
        font-weight: 600;
        -webkit-letter-spacing: 0.05em;
        -moz-letter-spacing: 0.05em;
        -ms-letter-spacing: 0.05em;
        letter-spacing: 0.05em;
        line-height: 1.03;
        margin-bottom: -5px;
        margin-top: -9.5px;
        -webkit-transform: translateX( 5px );
        -ms-transform: translateX( 5px );
        transform: translateX( 5px );
        padding-left: 0.5313rem;
        padding-right: 0.5313rem;
        padding-top: 0.2813rem;
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
  test('Latin for Ryoan-ji', () => {
    const {container} = render(<IndexSection.Latin gardenName="ryoanji" />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-family: 'Cormorant SC','Times New Roman',serif;
        font-size: 3.1331rem;
        font-weight: 700;
        -webkit-letter-spacing: 0.05em;
        -moz-letter-spacing: 0.05em;
        -ms-letter-spacing: 0.05em;
        letter-spacing: 0.05em;
        line-height: 0.7065;
        margin-bottom: -2px;
        margin-top: -1.5px;
        text-indent: -5px;
        padding-left: 0.5313rem;
        padding-right: 0.5313rem;
        padding-top: 0.2813rem;
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
        font-weight: 300;
        line-height: 1.3365;
        padding-left: 0.5313rem;
        padding-right: 0.5313rem;
        padding-top: 0.5859rem;
      }

      .IndexSection-ff5g7u-0:nth-of-type(odd) .c0 {
        text-align: left;
      }

      .IndexSection-ff5g7u-0:nth-of-type(even) .c0 {
        text-align: right;
      }

      @media only screen and (min-width:728px) {
        .c1 {
          font-size: 1.3503rem;
          line-height: 1.458;
        }
      }

      <div>
        <p
          class="c0 c1"
        />
      </div>
    `);
  });
});
