import React from 'react';
import {render, screen} from '@testing-library/react';

import P from './P';
import {breakpoint, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {getPaddingTop} from 'src/utils/whitespaceCssFactory';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('without prop', () => {
    const {container} = render(<P {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
        padding-left: 1.3281rem;
        padding-right: 1.3281rem;
        text-align: left;
      }

      @media only screen and (min-width:31.6802rem) {
        .c0 {
          padding-left: 2.2135rem;
          padding-right: 2.2135rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          max-width: 48.6522rem;
          padding-left: 3.0078rem;
          padding-right: 3.0078rem;
        }
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
      padding-left: ${remify(whitespace().sideMargin * 2)};
      padding-right: ${remify(whitespace().sideMargin * 2)};
      text-align: center;
    `);
  });
});
