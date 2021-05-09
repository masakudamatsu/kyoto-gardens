import React from 'react';
import {render, screen} from '@testing-library/react';

import {Spacer} from './Spacer';

const mockProps = {};

describe('renders UI correctly', () => {
  test('BoxLineToText', () => {
    const {container} = render(<Spacer.BoxLineToText {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        height: 0.0457rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          height: 0.011rem;
        }
      }

      <div>
        <div
          class="c0 c1 "
        />
      </div>
    `);
  });
  test('BoxParagraphToText', () => {
    const {container} = render(<Spacer.BoxParagraphToText {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        height: 1.7448rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          height: 2.3516rem;
        }
      }

      <div>
        <div
          class="c0 c1 "
        />
      </div>
    `);
  });
  test('H3LineToBox', () => {
    const {container} = render(<Spacer.H3LineToBox {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        height: 0.7644rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          height: 1.1047rem;
        }
      }

      <div>
        <div
          class="c0 c1 "
        />
      </div>
    `);
  });
  test('TextLineToBox', () => {
    const {container} = render(<Spacer.TextLineToBox {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        height: 0.8281rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          height: 1.0547rem;
        }
      }

      <div>
        <div
          class="c0 c1 "
        />
      </div>
    `);
  });
  test('TextParagraphToBox', () => {
    const {container} = render(<Spacer.TextParagraphToBox {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
      }

      <div>
        <div
          class="Spacer__TextParagraphToBox-sc-1ug26uc-5 c0"
        />
      </div>
    `);
  });
  test('TextParagraphToText', () => {
    const {container} = render(<Spacer.TextParagraphToText {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        height: 1.1991rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          height: 1.5906rem;
        }
      }

      <div>
        <div
          class="c0 c1 "
        />
      </div>
    `);
  });
});
