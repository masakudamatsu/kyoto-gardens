import React from 'react';
import {render, screen} from '@testing-library/react';

import Figure from './Figure';
import {color} from 'src/utils/specColor';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Figure with belowH3 prop', () => {
    const {container} = render(<Figure />);
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
