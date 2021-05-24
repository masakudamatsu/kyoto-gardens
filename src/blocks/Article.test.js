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

      .Main__Kohoan-sc-126eniy-2 .c0 {
        background-image: linear-gradient(to bottom,#575757,#111111);
        color: #ffffff;
        font-family: 'Libre Baskerville','Verdana',serif;
        font-size: 0.993rem;
        font-weight: 400;
        line-height: 1.605;
        max-width: 941px;
      }

      .c1 a:link,
      .c1 a:visited {
        background: #9c938f;
        background: linear-gradient( to bottom,rgba(255,255,255,0.8) 100%,rgba(255,255,255,0.8) );
        background-position: 0 1.0625rem;
        background-repeat: no-repeat;
        background-size: 100% 1px;
        color: inherit;
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-shadow: 0.03em 0 trasparent,-0.03em 0 trasparent,0 0.03em trasparent,0 -0.03em trasparent;
      }

      .c1 a:focus,
      .c1 a:hover {
        background: #9c938f;
        outline: none;
        text-shadow: none;
      }

      .c1 a:active {
        background: none;
      }

      .c1 a:visited:focus,
      .c1 a:visited:hover {
        background: #9c938f;
        outline: none;
        text-shadow: none;
      }

      .c1 a:visited:active {
        background: none;
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
        .Main__Kohoan-sc-126eniy-2 .c0 {
          font-size: 1.2266rem;
          line-height: 1.73875;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 a:link,
        .c1 a:visited {
          background: #9c938f;
          background: linear-gradient( to bottom,currentColor 100%,currentColor );
          background-position: 0 1.3125rem;
          background-repeat: no-repeat;
          background-size: 100% 1px;
          color: inherit;
          cursor: pointer;
          -webkit-text-decoration: none;
          text-decoration: none;
          text-shadow: 0.03em 0 transparent,-0.03em 0 transparent,0 0.03em transparent,0 -0.03em transparent;
        }

        .c1 a:focus,
        .c1 a:hover {
          background: #9c938f;
          outline: none;
          text-shadow: none;
        }

        .c1 a:active {
          background: none;
        }

        .c1 a:visited:focus,
        .c1 a:visited:hover {
          background: #9c938f;
          outline: none;
          text-shadow: none;
        }

        .c1 a:visited:active {
          background: none;
        }
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
      .c1 {
        position: relative;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 {
        padding-bottom: 2.2951rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          padding-bottom: 3.1328rem;
        }
      }

      <div>
        <header
          class="c0 c1"
        />
      </div>
    `);
  });
});
