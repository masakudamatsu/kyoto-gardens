import React from 'react';
import {render, screen} from '@testing-library/react';

import Cite from './Cite';

const mockProps = {};

describe('renders UI as expected', () => {
  test('Italic', () => {
    const {container} = render(<Cite.Italic />);
    expect(container).toMatchInlineSnapshot(`
      .Main__Ryoanji-sc-126eniy-1 .c0 {
        font-style: italic;
      }

      <div>
        <cite
          class="c0 "
        />
      </div>
    `);
  });
  test('Roman', () => {
    const {container} = render(<Cite.Roman />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-style: normal;
      }

      <div>
        <cite
          class="c0"
        />
      </div>
    `);
  });
});
