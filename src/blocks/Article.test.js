import React from 'react';
import {render, screen} from '@testing-library/react';

import Article from './Article';

const mockProps = {};

describe('Parent chnages UI by prop value', () => {
  test('kohoan', () => {
    const {container} = render(<Article page="kohoan" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Libre Baskerville','Verdana',serif;
        font-size: 0.993rem;
        font-weight: 400;
        line-height: 1.8725;
        margin: 0 auto;
        max-width: 941px;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 1.2266rem;
          line-height: 2.00625;
        }
      }

      <div>
        <article
          class="c0"
        />
      </div>
    `);
  });
  test('ryoanji', () => {
    const {container} = render(<Article page="ryoanji" />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: #ffffff;
        color: #0a0a0a;
        font-family: 'Cormorant Garamond','Times New Roman',serif;
        font-size: 1.3348rem;
        font-weight: 600;
        line-height: 1.393;
        margin: 0 auto;
        max-width: 941px;
      }

      .c0 a:link,
      .c0 a:visited {
        background: rgb(240,240,240);
        background: linear-gradient( to bottom,currentColor 100%,currentColor );
        background-position: 0 1.3125rem;
        background-repeat: no-repeat;
        background-size: 100% 1px;
        color: inherit;
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-shadow: 0.03em 0 #ffffff,-0.03em 0 #ffffff,0 0.03em #ffffff,0 -0.03em #ffffff;
      }

      .c0 a:focus,
      .c0 a:hover {
        background: rgb(240,240,240);
        outline: none;
        text-shadow: none;
      }

      .c0 a:active {
        background: none;
      }

      .c0 a:visited:focus,
      .c0 a:visited:hover {
        background: rgb(240,240,240);
        outline: none;
        text-shadow: none;
      }

      .c0 a:visited:active {
        background: none;
      }

      .c0 .Abbr-sc-1i3jv68-0 {
        font-family: 'Cormorant SC','Times New Roman',serif;
        -webkit-letter-spacing: 0.01em;
        -moz-letter-spacing: 0.01em;
        -ms-letter-spacing: 0.01em;
        letter-spacing: 0.01em;
        text-transform: lowercase;
      }

      .c0 .CiteItalic-aqgrgi-0 {
        font-style: italic;
        font-weight: 600;
      }

      .c0 .LeadIn-sc-1qpem54-0 {
        font-family: 'Cormorant SC','Times New Roman',serif;
        -webkit-letter-spacing: 0.01em;
        -moz-letter-spacing: 0.01em;
        -ms-letter-spacing: 0.01em;
        letter-spacing: 0.01em;
        word-spacing: -0.05em;
      }

      .c0 .SectionBreak-m1vk1l-0 {
        color: hsla(193,50%,26%,0.9);
      }

      .c0 .Source-r09bvo-0 {
        color: rgb(100,100,100);
      }

      .c0 .Strong-sc-1vpgu6n-0 {
        font-style: italic;
        font-weight: 600;
      }

      .c0 .Section-yfzme9-0 {
        padding-bottom: 3.1892rem;
      }

      .c0 .SubSection-gjxtor-0 {
        padding-top: 1.4323rem;
      }

      .c0 .ParaBelowTextPara-fp0lgu-0 {
        padding-top: 1.1991rem;
      }

      .c0 .ParaBelowBoxPara-sc-1r97b9c-0 {
        padding-top: 1.7448rem;
      }

      .c0 .ParaBelowBoxLine-wuj758-0 {
        padding-top: 0.0457rem;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 1.6489rem;
          line-height: 1.4925;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 a:link,
        .c0 a:visited {
          background: rgb(240,240,240);
          background: linear-gradient( to bottom,currentColor 100%,currentColor );
          background-position: 0 1.625rem;
          background-repeat: no-repeat;
          background-size: 100% 1px;
          color: inherit;
          cursor: pointer;
          -webkit-text-decoration: none;
          text-decoration: none;
          text-shadow: 0.03em 0 #ffffff,-0.03em 0 #ffffff,0 0.03em #ffffff,0 -0.03em #ffffff;
        }

        .c0 a:focus,
        .c0 a:hover {
          background: rgb(240,240,240);
          outline: none;
          text-shadow: none;
        }

        .c0 a:active {
          background: none;
        }

        .c0 a:visited:focus,
        .c0 a:visited:hover {
          background: rgb(240,240,240);
          outline: none;
          text-shadow: none;
        }

        .c0 a:visited:active {
          background: none;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 .Section-yfzme9-0 {
          padding-bottom: 4.263rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 .SubSection-gjxtor-0 {
          padding-top: 1.9141rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 .ParaBelowTextPara-fp0lgu-0 {
          padding-top: 1.5906rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 .ParaBelowBoxPara-sc-1r97b9c-0 {
          padding-top: 2.3516rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 .ParaBelowBoxLine-wuj758-0 {
          padding-top: 0.011rem;
        }
      }

      <div>
        <article
          class="c0"
        />
      </div>
    `);
  });
});

describe('renders UI correctly', () => {
  test('Header', () => {
    const {container} = render(<Article.Header />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
      }

      <div>
        <header
          class="c0"
        />
      </div>
    `);
  });
});
