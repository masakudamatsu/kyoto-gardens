import React from 'react';
import {render, screen} from '@testing-library/react';

import Spacer from './Spacer';

describe('Props work as intended', () => {
  test('betweenParagraphs with textOnly', () => {
    const {container} = render(<Spacer betweenParagraphs textOnly />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.1991rem;
        width: 100%;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('betweenSections with textOnly', () => {
    const {container} = render(<Spacer betweenSections textOnly />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 2.6748rem;
        width: 100%;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
