import React from 'react';
import {render, screen} from '@testing-library/react';

import DivScrim from './DivScrim';

test('renders UI correctly when the shown props is true', () => {
  const {container} = render(<DivScrim />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background-color: black;
      height: 100vh;
      left: 0;
      opacity: 0;
      position: fixed;
      top: 60px;
      width: 100vw;
      z-index: 1;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
      -webkit-transition-timing-function: cubic-bezier(0,0,0.2,1);
      transition-timing-function: cubic-bezier(0,0,0.2,1);
    }

    <div>
      <div
        class="c0"
      />
    </div>
  `);
});
test('opacity and transition-duration changes with navShown prop', () => {
  render(<DivScrim navShown={true} data-testid="scrim" />);
  expect(screen.getByTestId('scrim')).toHaveStyle(`
    opacity: 0.5
  `);
  expect(screen.getByTestId('scrim')).toHaveStyle(`
    transition-duration: 300ms
  `);
});
