import React from 'react';
import {render, screen} from '@testing-library/react';

import Article from './Article';

const mockProps = {};

describe('Parent chnages UI by prop value', () => {
  test('ryoanji', () => {
    const {container} = render(<Article />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        margin: 0 auto;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        background-color: #ffffff;
        color: #0a0a0a;
        font-family: 'Cormorant Garamond','Times New Roman',serif;
        font-size: 1.3348rem;
        font-weight: 600;
        line-height: 1.393;
        max-width: 941px;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:link,
      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited {
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

      .Main__Ryoanji-sc-126eniy-1 .c0 a:focus,
      .Main__Ryoanji-sc-126eniy-1 .c0 a:hover {
        background: rgb(240,240,240);
        outline: none;
        text-shadow: none;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:active {
        background: none;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:focus,
      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:hover {
        background: rgb(240,240,240);
        outline: none;
        text-shadow: none;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:active {
        background: none;
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          font-size: 1.6489rem;
          line-height: 1.4925;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 a:link,
        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited {
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

        .Main__Ryoanji-sc-126eniy-1 .c0 a:focus,
        .Main__Ryoanji-sc-126eniy-1 .c0 a:hover {
          background: rgb(240,240,240);
          outline: none;
          text-shadow: none;
        }

        .Main__Ryoanji-sc-126eniy-1 .c0 a:active {
          background: none;
        }

        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:focus,
        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:hover {
          background: rgb(240,240,240);
          outline: none;
          text-shadow: none;
        }

        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:active {
          background: none;
        }
      }

      <div>
        <article
          class="c0 c1"
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
