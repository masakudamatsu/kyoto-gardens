import React from 'react';
import {render, screen} from '@testing-library/react';

import Subsection from './Subsection';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<Subsection {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-top: 1.4323rem;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-top: 1.9141rem;
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
