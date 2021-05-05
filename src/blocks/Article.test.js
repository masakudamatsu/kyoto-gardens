import React from 'react';
import {render, screen} from '@testing-library/react';

import Article from './Article';

const mockProps = {};

describe('Parent chnages UI by prop value', () => {
  test('kohoan', () => {
    const {container} = render(<Article kohoan />);
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
    const {container} = render(<Article ryoanji />);
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

      .c0 .CiteItalic-aqgrgi-0 {
        font-style: italic;
        font-weight: 600;
      }

      .c0 strong {
        font-style: italic;
        font-weight: 600;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 1.6489rem;
          line-height: 1.4925;
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
