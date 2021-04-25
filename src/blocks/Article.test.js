import React from 'react';
import {render, screen} from '@testing-library/react';

import Article from './Article';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Article {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: #ffffff;
        margin: 0 auto;
        max-width: 941px;
      }

      <div>
        <article
          class="c0"
        />
      </div>
    `);
  });
});