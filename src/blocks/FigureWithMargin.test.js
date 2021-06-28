import React from 'react';
import {render, screen} from '@testing-library/react';

import FigureWithMargin from './FigureWithMargin';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<FigureWithMargin />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Ryoanji-sc-126eniy-1 .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          max-width: 48.6522rem;
        }
      }

      @media only screen and (min-width:31.6802rem) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          padding-left: 2.2135rem;
          padding-right: 2.2135rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          padding-left: 3.0078rem;
          padding-right: 3.0078rem;
        }
      }

      <div>
        <figure
          class="c0 "
        />
      </div>
    `);
  });
  test('FigCaption', () => {
    const {container} = render(<FigureWithMargin.FigCaption />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Kohoan-sc-126eniy-2 .c0 {
        font-family: 'Playfair Display SC',serif;
        font-size: 0.8709rem;
        font-weight: 400;
        font-variant-ligatures: none;
        line-height: 1.525;
        margin-right: 0px;
        text-align: left;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 a:link,
      .Main__Kohoan-sc-126eniy-2 .c0 a:visited {
        background: rgb(156,147,143);
        background: linear-gradient( to bottom,currentColor 100%,currentColor );
        background-position: 0 1.0625rem;
        background-repeat: no-repeat;
        background-size: 100% 1px;
        color: inherit;
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-shadow: 0.03em 0 transparent,-0.03em 0 transparent,0 0.03em transparent,0 -0.03em transparent;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 a:focus,
      .Main__Kohoan-sc-126eniy-2 .c0 a:hover {
        background: rgb(156,147,143);
        outline: none;
        text-shadow: none;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 a:active {
        background: none;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 a:visited:focus,
      .Main__Kohoan-sc-126eniy-2 .c0 a:visited:hover {
        background: rgb(156,147,143);
        outline: none;
        text-shadow: none;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 a:visited:active {
        background: none;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        font-family: 'Cormorant SC','Times New Roman',serif;
        font-size: 1.1279rem;
        font-weight: 600;
        font-variant-ligatures: normal;
        line-height: 1.1775;
        margin-right: 5px;
        text-align: right;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:link,
      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited {
        background: rgba(59,105,114,0.2);
        background: linear-gradient( to bottom,currentColor 100%,currentColor );
        background-position: 0 1.125rem;
        background-repeat: no-repeat;
        background-size: 100% 1px;
        color: inherit;
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-shadow: 0.03em 0 transparent,-0.03em 0 transparent,0 0.03em transparent,0 -0.03em transparent;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:focus,
      .Main__Ryoanji-sc-126eniy-1 .c0 a:hover {
        background: rgba(59,105,114,0.2);
        outline: none;
        text-shadow: none;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:active {
        background: none;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:focus,
      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:hover {
        background: rgba(59,105,114,0.2);
        outline: none;
        text-shadow: none;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:active {
        background: none;
      }

      .Main__Kohoan-sc-126eniy-2 .c1 {
        margin: 0 auto;
        max-width: 38.057rem;
        padding-left: 1.0625rem;
        padding-right: 1.0625rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          font-size: 1.0758rem;
          line-height: 1.6775;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 a:link,
        .Main__Kohoan-sc-126eniy-2 .c0 a:visited {
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

        .Main__Kohoan-sc-126eniy-2 .c0 a:focus,
        .Main__Kohoan-sc-126eniy-2 .c0 a:hover {
          background: rgb(156,147,143);
          outline: none;
          text-shadow: none;
        }

        .Main__Kohoan-sc-126eniy-2 .c0 a:active {
          background: none;
        }

        .Main__Kohoan-sc-126eniy-2 .c0 a:visited:focus,
        .Main__Kohoan-sc-126eniy-2 .c0 a:visited:hover {
          background: rgb(156,147,143);
          outline: none;
          text-shadow: none;
        }

        .Main__Kohoan-sc-126eniy-2 .c0 a:visited:active {
          background: none;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          font-size: 1.3933rem;
          line-height: 1.29525;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 a:link,
        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited {
          background: rgba(59,105,114,0.2);
          background: linear-gradient( to bottom,currentColor 100%,currentColor );
          background-position: 0 1.375rem;
          background-repeat: no-repeat;
          background-size: 100% 1px;
          color: inherit;
          cursor: pointer;
          -webkit-text-decoration: none;
          text-decoration: none;
          text-shadow: 0.03em 0 transparent,-0.03em 0 transparent,0 0.03em transparent,0 -0.03em transparent;
        }

        .Main__Ryoanji-sc-126eniy-1 .c0 a:focus,
        .Main__Ryoanji-sc-126eniy-1 .c0 a:hover {
          background: rgba(59,105,114,0.2);
          outline: none;
          text-shadow: none;
        }

        .Main__Ryoanji-sc-126eniy-1 .c0 a:active {
          background: none;
        }

        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:focus,
        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:hover {
          background: rgba(59,105,114,0.2);
          outline: none;
          text-shadow: none;
        }

        .Main__Ryoanji-sc-126eniy-1 .c0 a:visited:active {
          background: none;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c1 {
          max-width: 47.5584rem;
        }
      }

      @media only screen and (min-width:30.7948rem) {
        .Main__Kohoan-sc-126eniy-2 .c1 {
          padding-left: 1.7708rem;
          padding-right: 1.7708rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c1 {
          padding-left: 2.4609rem;
          padding-right: 2.4609rem;
        }
      }

      <div>
        <figcaption
          class="c0 c1 "
        />
      </div>
    `);
  });
});
