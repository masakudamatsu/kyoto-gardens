import React from 'react';
import {render, screen} from '@testing-library/react';

import Section from './Section';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<Section {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-bottom: 3.1892rem;
      }

      <div>
        <section
          class="c0"
        />
      </div>
    `);
  });
});
