import React from 'react';
import {render, screen} from '@testing-library/react';

import Header from './Header';

import {animation} from 'src/utils/specAnimation';
import {header} from 'src/utils/specLayout';
import remify from 'src/utils/remify';

const mockProps = {};

describe('changes style by props values', () => {
  test('show', () => {
    render(<Header show {...mockProps} data-testid="header" />);
    expect(screen.getByTestId('header')).toHaveStyle(
      `
        transform: translate(0,0);
        transition: transform ${animation.header.show.duration} ${animation.header.show.easing};
      `,
    );
  });
  test('hide', () => {
    render(<Header hide {...mockProps} data-testid="header" />);
    expect(screen.getByTestId('header')).toHaveStyle(
      `
        transform: translate(0,-${remify(header.height)});
        transition: transform ${animation.header.hide.duration} ${
        animation.header.hide.easing
      };
      `,
    );
  });
});

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Header {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: #03dac6;
        border-bottom-color: #000000;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 2.875rem;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        z-index: 1;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 3.4375rem;
        }
      }

      <div>
        <header
          class="c0"
        />
      </div>
    `);
  });
  test('H1', () => {
    const {container} = render(<Header.H1 {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c1 {
        padding-bottom: 0.9375rem;
        padding-top: 0.9375rem;
      }

      @media only screen and (min-width:38.9424rem) {
        .c0 {
          margin: 0 auto;
          width: 34.5153rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c0 {
          margin: 0;
          width: auto;
        }
      }

      @media only screen and (min-width:48.6522rem) {
        .c0 {
          margin: 0 auto;
          width: 42.6366rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          padding-bottom: 1.125rem;
          padding-top: 1.125rem;
        }
      }

      <div>
        <h1
          class="c0 c1"
        />
      </div>
    `);
  });
  test('OuterWrapper', () => {
    const {container} = render(<Header.OuterWrapper {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      @media only screen and (min-width:39.375rem) {
        .c0 {
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
          padding: 0 0.625rem;
          width: 39.375rem;
        }
      }

      @media only screen and (min-width:58.75rem) {
        .c0 {
          width: 58.75rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('InnerWrapper', () => {
    const {container} = render(<Header.InnerWrapper {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        width: 18.9375rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          width: 22.725rem;
        }
      }

      @media only screen and (min-width:39.375rem) {
        .c0 {
          width: 100%;
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
