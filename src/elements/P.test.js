import React from 'react';
import {render, screen} from '@testing-library/react';

import P from './P';
import {breakpoint, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {getPaddingTop} from 'src/utils/whitespaceCssFactory';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('with belowBoxLine prop', () => {
    const {container} = render(<P belowBoxLine {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
        padding-left: 1.3281rem;
        padding-right: 1.3281rem;
        padding-top: 0.5457rem;
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
          padding-top: 0.761rem;
        }
      }

      <div>
        <p
          class="c0"
        />
      </div>
    `);
  });
  test('with belowBoxParagraph prop', () => {
    const {container} = render(<P belowBoxParagraph {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
        padding-left: 1.3281rem;
        padding-right: 1.3281rem;
        padding-top: 1.7448rem;
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
          padding-top: 2.3516rem;
        }
      }

      <div>
        <p
          class="c0"
        />
      </div>
    `);
  });
  test('with belowTextParagraph prop', () => {
    const {container} = render(<P belowTextParagraph {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
        padding-left: 1.3281rem;
        padding-right: 1.3281rem;
        padding-top: 1.1991rem;
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
          padding-top: 1.5906rem;
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
  // This test doesn't work...
  // test.skip('with belowTextParagraph prop', () => {
  //   render(<P message data-testid="paragraph" />);
  //   const paragraph = screen.getByTestId('paragraph');
  //   expect(paragraph).toHaveStyleRule(
  //     `padding-top`,
  //     getPaddingTop({message: true}, 'mobile'),
  //   );
  //   expect(paragraph).toHaveStyleRule(
  //     `padding-top`,
  //     getPaddingTop({message: true}, 'desktop'),
  //     {
  //       media: breakpoint.fontSize, // This media query doesn't get recognized...
  //     },
  //   );
  // });
});
