import React from 'react';
import {render, screen} from '@testing-library/react';

import SubSection from './SubSection';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<SubSection {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <section
          class="SubSection-gjxtor-0"
        />
      </div>
    `);
  });
});
