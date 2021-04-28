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

      @media only screen and (min-width:728px) {
        .c0 {
          padding-bottom: 4.263rem;
        }
      }

      <div>
        <section
          class="c0"
        />
      </div>
    `);
  });
});
