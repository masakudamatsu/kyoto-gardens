import React from 'react';
import {render, screen} from '@testing-library/react';

import Hr from './Hr';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Hr {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      border: none;
    }

    .c1::before {
      content: '* * *';
      display: block;
      text-align: center;
    }

    .Main__Kohoan-sc-126eniy-2 .c0 {
      color: #ffffff;
      padding-bottom: 2.2708rem;
      padding-top: 0.9583rem;
    }

    .Main__Ryoanji-sc-126eniy-1 .c0 {
      color: hsla(193,50%,26%,0.9);
      padding-bottom: 2.7135rem;
      padding-top: 1.401rem;
    }

    @media only screen and (min-width:728px) {
      .Main__Kohoan-sc-126eniy-2 .c0 {
        padding-bottom: 3.0859rem;
        padding-top: 1.3672rem;
      }
    }

    @media only screen and (min-width:728px) {
      .Main__Ryoanji-sc-126eniy-1 .c0 {
        padding-bottom: 3.6328rem;
        padding-top: 1.9141rem;
      }
    }

    <div>
      <hr
        class="c0 c1"
      />
    </div>
  `);
});
