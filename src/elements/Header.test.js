import React from 'react';
import {render} from '@testing-library/react';

import Header from './Header';

const mockProps = {};

// describe('Props work as intended', () => {
//   test('testProp', () => {
//     render(<Header testProp data-testid="Header" />);
//     expect(screen.getByTestId('Header')).toHaveStyle(`display: inline-block`);
//   });
// });

test('renders UI correctly', () => {
  const {container} = render(<Header {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    <div>
      <header
        class="c0"
      />
    </div>
  `);
});
