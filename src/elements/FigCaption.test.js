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
        margin-right: 5px;
        padding-top: 0.5rem;
        text-align: right;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 1.3933rem;
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
