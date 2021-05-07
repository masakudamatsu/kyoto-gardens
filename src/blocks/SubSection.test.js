import React from 'react';
import {render, screen} from '@testing-library/react';

import SubSection from './SubSection';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<SubSection {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .MainRyoanji-sc-11d35pr-0 .c0 {
        padding-top: 1.4323rem;
      }

      @media only screen and (min-width:728px) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          padding-top: 1.9141rem;
        }
      }

      <div>
        <section
          class="c0 "
        />
      </div>
    `);
  });
});
