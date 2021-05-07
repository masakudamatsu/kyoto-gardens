import React from 'react';
import {render, screen} from '@testing-library/react';

import P from './P';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('without prop', () => {
    const {container} = render(<P {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        text-align: left;
      }

      .MainRyoanji-sc-11d35pr-0 .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
        padding: 0 1.3281rem;
      }

      @media only screen and (min-width:728px) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          max-width: 48.6522rem;
        }
      }

      @media only screen and (min-width:31.6802rem) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          padding: 0 2.2135rem;
        }
      }

      @media only screen and (min-width:728px) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          padding: 0 3.0078rem;
        }
      }

      <div>
        <p
          class="c0 c1"
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
