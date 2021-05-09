import React from 'react';
import {render, screen} from '@testing-library/react';

import Section from './Section';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<Section {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Index-sc-126eniy-2 .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .Main__Index-sc-126eniy-2 .c0:nth-child(odd) {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }

      .Main__Index-sc-126eniy-2 .c0:nth-child(even) {
        -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        padding-bottom: 3.1892rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          padding-bottom: 4.263rem;
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
