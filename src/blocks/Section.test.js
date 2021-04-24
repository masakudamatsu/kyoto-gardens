import React from 'react';
import {render, screen} from '@testing-library/react';

import Section from './Section';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<Section {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          max-width: 47.0636rem;
        }
      }

      <div>
        <section
          class="c0"
        />
      </div>
    `);
  });
});
