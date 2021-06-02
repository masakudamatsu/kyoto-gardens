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
        max-width: 941px;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 {
        background-image: linear-gradient(to bottom,rgb(87,87,87),rgb(17,17,17));
        color: rgb(255,255,255);
        font-family: 'Libre Baskerville','Verdana',serif;
        font-size: 0.993rem;
        font-weight: 400;
        line-height: 1.605;
      }

      .c1 a:link,
      .c1 a:visited {
        background: rgb(156,147,143);
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
        background: rgb(156,147,143);
        outline: none;
        text-shadow: none;
      }

      .c1 a:active {
        background: none;
      }

      .c1 a:visited:focus,
      .c1 a:visited:hover {
        background: rgb(156,147,143);
        outline: none;
        text-shadow: none;
      }

      .c1 a:visited:active {
        background: none;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        background-color: rgb(255,255,255);
        color: rgb(10,10,10);
        font-family: 'Cormorant Garamond','Times New Roman',serif;
        font-size: 1.3348rem;
        font-weight: 600;
        line-height: 1.393;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:link,
      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited {
        background: hsla(193,30%,57%,0.2);
        background: linear-gradient( to bottom,currentColor 100%,currentColor );
        background-position: 0 1.3125rem;
        background-repeat: no-repeat;
        background-size: 100% 1px;
        color: inherit;
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-shadow: 0.03em 0 rgb(255,255,255),-0.03em 0 rgb(255,255,255),0 0.03em rgb(255,255,255),0 -0.03em rgb(255,255,255);
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:focus,
      .Main__Ryoanji-sc-126eniy-1 .c0 a:hover {
        background: hsla(193,30%,57%,0.2);
        outline: none;
        text-shadow: none;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:active {
        background: none;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:focus,
      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:hover {
        background: hsla(193,30%,57%,0.2);
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
        .c1 {
          margin-left: 2.4609rem;
          margin-right: 2.4609rem;
        }
      }

      @media only screen and (min-width:63.7344rem) {
        .c1 {
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 a:link,
        .c1 a:visited {
          background: rgb(156,147,143);
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
          background: rgb(156,147,143);
          outline: none;
          text-shadow: none;
        }

        .c1 a:active {
          background: none;
        }

        .c1 a:visited:focus,
        .c1 a:visited:hover {
          background: rgb(156,147,143);
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
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          margin-left: 3.0078rem;
          margin-right: 3.0078rem;
        }
      }

      @media only screen and (min-width:64.8281rem) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 a:link,
        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited {
          background: hsla(193,30%,57%,0.2);
          background: linear-gradient( to bottom,currentColor 100%,currentColor );
          background-position: 0 1.625rem;
          background-repeat: no-repeat;
          background-size: 100% 1px;
          color: inherit;
          cursor: pointer;
          -webkit-text-decoration: none;
          text-decoration: none;
          text-shadow: 0.03em 0 rgb(255,255,255),-0.03em 0 rgb(255,255,255),0 0.03em rgb(255,255,255),0 -0.03em rgb(255,255,255);
        }

        .Main__Ryoanji-sc-126eniy-1 .c0 a:focus,
        .Main__Ryoanji-sc-126eniy-1 .c0 a:hover {
          background: hsla(193,30%,57%,0.2);
          outline: none;
          text-shadow: none;
        }

        .Main__Ryoanji-sc-126eniy-1 .c0 a:active {
          background: none;
        }

        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:focus,
        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:hover {
          background: hsla(193,30%,57%,0.2);
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
