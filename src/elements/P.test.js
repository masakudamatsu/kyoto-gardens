import React from 'react';
import {render, screen} from '@testing-library/react';

import P from './P';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('without prop', () => {
    const {container} = render(<P {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: left;
      }

      <div>
        <p
          class="c0"
        />
      </div>
    `);
  });
  test('with message prop', () => {
    render(<P message data-testid="paragraph" />);
    expect(screen.getByTestId('paragraph')).toHaveStyle(`
      text-align: center;
    `);
  });
});
