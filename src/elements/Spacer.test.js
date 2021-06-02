import React from 'react';
import {render, screen} from '@testing-library/react';

import Spacer from './Spacer';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Index', () => {
    const {container} = render(<Spacer.Index {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
      }

      .c1 {
        clear: both;
        height: 12.291666666666668px;
      }

      @media only screen and (min-width:(min-width:728px)px) {
        .c1 {
          height: 15.5px;
        }
      }

      <div>
        <div
          class="c0 c1"
        />
      </div>
    `);
  });
  test('BoxLineToText without prop', () => {
    const {container} = render(<Spacer.BoxLineToText {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 {
        height: 0.4804rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        height: 0.5457rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          height: 0.6509rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          height: 0.761rem;
        }
      }

      <div>
        <div
          class="c0 c1 "
        />
      </div>
    `);
  });
  test('BoxLineToText with image prop', () => {
    const {container} = render(<Spacer.BoxLineToText image />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 {
        height: 0.0429rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        height: 0.0457rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          height: 0.0259rem;
        }
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
  test('BoxParagraphToBox', () => {
    const {container} = render(<Spacer.BoxParagraphToBox {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 {
        height: 1.7708rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          height: 2.4609rem;
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

      .Main__Kohoan-sc-126eniy-2 .c0 {
        height: 1.4271rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        height: 1.7448rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          height: 1.9297rem;
        }
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
  test('CaptionParagraphToText', () => {
    const {container} = render(
      <Spacer.CaptionParagraphToText {...mockProps} />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 {
        height: 1.1146rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          height: 1.4922rem;
        }
      }

      <div>
        <div
          class="c0 c1 "
        />
      </div>
    `);
  });
  test('H3ParagrahToText', () => {
    const {container} = render(<Spacer.H3ParagraphToText {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        width: 100%;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 {
        height: 0.9075rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          height: 1.2915rem;
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

      .Main__Kohoan-sc-126eniy-2 .c0 {
        height: 0.625rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        height: 0.8281rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          height: 0.8516rem;
        }
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
          class="Spacer__TextParagraphToBox-sc-1ug26uc-8 c0"
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

      .Main__Kohoan-sc-126eniy-2 .c0 {
        height: 0.9896rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        height: 1.2448rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          height: 1.3047rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          height: 1.6016rem;
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
