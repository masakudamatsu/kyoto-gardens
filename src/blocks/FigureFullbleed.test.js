import React from 'react';
import {render, screen} from '@testing-library/react';

import FigureFullbleed from './FigureFullbleed';
import {color} from 'src/utils/specColor';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<FigureFullbleed />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        overflow: hidden;
      }

      <div>
        <figure
          class="c0"
        />
      </div>
    `);
  });
});
