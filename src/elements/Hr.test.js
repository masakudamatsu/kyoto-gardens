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
      color: rgb(255,255,255);
      padding-bottom: 1.97rem;
      padding-top: 0.9896rem;
    }

    @media only screen and (min-width:728px) {
      .Main__Kohoan-sc-126eniy-2 .c0 {
        padding-bottom: 2.6353rem;
        padding-top: 1.3672rem;
      }
    }

    <div>
      <hr
        class="c0 c1"
      />
    </div>
  `);
});
