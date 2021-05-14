import React from 'react';
import {render, screen} from '@testing-library/react';

import SubSection from './SubSection';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<SubSection {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Kohoan-sc-126eniy-2 .c0 {
        padding-top: 0.9583rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        padding-top: 1.4323rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          padding-top: 1.3672rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
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
