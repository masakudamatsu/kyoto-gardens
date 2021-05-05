import React from 'react';
import {render, screen} from '@testing-library/react';

import FigCaption from './FigCaption';

const mockProps = {};

describe('renders UI correctly', () => {
  test('FigCaption', () => {
    const {container} = render(<FigCaption ryoanji {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Cormorant SC','Times New Roman',serif;
        font-size: 1.1279rem;
        font-weight: 600;
        line-height: 1.1775;
        margin-right: 5px;
        text-align: right;
      }

      .c0 a:link,
      .c0 a:visited {
        background: rgb(240,240,240);
        background: linear-gradient( to bottom,currentColor 100%,currentColor );
        background-position: 0 1.125rem;
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

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 1.3933rem;
          line-height: 1.29525;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 a:link,
        .c0 a:visited {
          background: rgb(240,240,240);
          background: linear-gradient( to bottom,currentColor 100%,currentColor );
          background-position: 0 1.375rem;
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

      <div>
        <figcaption
          class="c0"
        />
      </div>
    `);
  });
  test('FigCaption.Footer', () => {
    render(<FigCaption.Footer data-testid="footer" />);
    expect(screen.getByTestId('footer')).toHaveStyle(
      `color: rgb(100, 100, 100)`,
    );
  });
});
