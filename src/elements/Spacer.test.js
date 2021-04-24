import React from 'react';
import {render, screen} from '@testing-library/react';

import Spacer from './Spacer';

describe('Props work as intended', () => {
  test('betweenLines with aboveFigure', () => {
    const {container} = render(<Spacer betweenLines aboveFigure />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 0.8281rem;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 1.3047rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('betweenLines with belowFigure', () => {
    const {container} = render(<Spacer betweenLines belowFigure />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 0.8918rem;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 1.4422rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('betweenLines with belowSubsectionTitle', () => {
    const {container} = render(<Spacer betweenLines belowSubsectionTitle />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 0.9531rem;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 1.4297rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('betweenParagraphs with textOnly', () => {
    const {container} = render(<Spacer betweenParagraphs textOnly />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.1991rem;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 1.5906rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('betweenParagraphs with belowFigure', () => {
    const {container} = render(<Spacer betweenParagraphs belowFigure />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.7772rem;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 2.6453rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('betweenParagraphs with aboveSubsectionTitle', () => {
    const {container} = render(
      <Spacer betweenParagraphs aboveSubsectionTitle />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.3385rem;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 2.1328rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('betweenSections with aboveFigure', () => {
    const {container} = render(<Spacer betweenSections aboveFigure />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 3.1892rem;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 4.513rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
