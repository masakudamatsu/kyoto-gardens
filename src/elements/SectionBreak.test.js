import React from 'react';
import {render, screen} from '@testing-library/react';

import SectionBreak from './SectionBreak';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<SectionBreak {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      border: none;
      color: hsla(193,50%,26%,0.9);
      padding-bottom: 2.7135rem;
      padding-top: 1.401rem;
    }

    .c0::before {
      content: '* * *';
      display: block;
      text-align: center;
    }

    @media only screen and (min-width:728px) {
      .c0 {
        padding-bottom: 3.6328rem;
        padding-top: 1.9141rem;
      }
    }

    <div>
      <hr
        class="c0"
      />
    </div>
  `);
});
