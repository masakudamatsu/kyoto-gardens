import React from 'react';
import {render, screen} from '@testing-library/react';

import {
  SpacerBoxLineToText,
  SpacerBoxParagraphToText,
  SpacerH3LineToBox,
  SpacerTextLineToBox,
  SpacerTextParagraphToBox,
  SpacerTextParagraphToText,
} from './Spacer';

const mockProps = {};

describe('renders UI correctly', () => {
  test('BoxLineToText', () => {
    const {container} = render(<SpacerBoxLineToText {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .MainRyoanji-sc-11d35pr-0 .c0 {
        height: 0.0457rem;
      }

      @media only screen and (min-width:728px) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          height: 0.011rem;
        }
      }

      <div>
        <div
          class="c0 c1"
        />
      </div>
    `);
  });
  test('BoxParagraphToText', () => {
    const {container} = render(<SpacerBoxParagraphToText {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .MainRyoanji-sc-11d35pr-0 .c0 {
        height: 1.7448rem;
      }

      @media only screen and (min-width:728px) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          height: 2.3516rem;
        }
      }

      <div>
        <div
          class="c0 c1"
        />
      </div>
    `);
  });
  test('H3LineToBox', () => {
    const {container} = render(<SpacerH3LineToBox {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .MainRyoanji-sc-11d35pr-0 .c0 {
        height: 0.7644rem;
      }

      @media only screen and (min-width:728px) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          height: 1.1047rem;
        }
      }

      <div>
        <div
          class="c0 c1"
        />
      </div>
    `);
  });
  test('TextLineToBox', () => {
    const {container} = render(<SpacerTextLineToBox {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .MainRyoanji-sc-11d35pr-0 .c0 {
        height: 0.8281rem;
      }

      @media only screen and (min-width:728px) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          height: 1.0547rem;
        }
      }

      <div>
        <div
          class="c0 c1"
        />
      </div>
    `);
  });
  test('TextParagraphToBox', () => {
    const {container} = render(<SpacerTextParagraphToBox {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('TextParagraphToText', () => {
    const {container} = render(<SpacerTextParagraphToText {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .MainRyoanji-sc-11d35pr-0 .c0 {
        height: 1.1991rem;
      }

      @media only screen and (min-width:728px) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          height: 1.5906rem;
        }
      }

      <div>
        <div
          class="c0 c1"
        />
      </div>
    `);
  });
});
