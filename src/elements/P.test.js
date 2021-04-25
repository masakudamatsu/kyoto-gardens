import React from 'react';
import {render, screen} from '@testing-library/react';

import P from './P';
import {whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('without props', () => {
    const {container} = render(<P {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Cormorant Garamond','Times New Roman',serif;
      font-size: 1.3348rem;
      font-weight: 600;
      line-height: 1.393;
      margin: 0 auto;
      max-width: 38.9424rem;
      padding: 0 1.3281rem;
      text-align: left;
    }

    @media only screen and (min-width:31.6802rem) {
      .c0 {
        padding: 0 2.2135rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c0 {
        font-size: 1.6489rem;
        line-height: 1.4925;
        max-width: 48.6522rem;
        padding: 0 3.0078rem;
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
      padding: 0px ${remify(whitespace().sideMargin * 2)};
      text-align: center;
    `);
  });
});
