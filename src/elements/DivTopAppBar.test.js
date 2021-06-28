import React from 'react';
import {render, screen} from '@testing-library/react';

import DivTopAppBar from './DivTopAppBar';

import {animation} from 'src/utils/specAnimation';
import {vspace} from 'src/utils/vspaceScheme';
import remify from 'src/utils/remify';

const mockProps = {};

describe('changes style by props values', () => {
  test('show', () => {
    render(<DivTopAppBar show {...mockProps} data-testid="header" />);
    expect(screen.getByTestId('header')).toHaveStyle(
      `
        transform: translate(0,0);
        transition: transform ${animation.header.show.duration} ${animation.header.show.easing};
      `,
    );
  });
  test('hide', () => {
    render(<DivTopAppBar hide {...mockProps} data-testid="header" />);
    expect(screen.getByTestId('header')).toHaveStyle(
      `
        transform: translate(0,-${remify(vspace.header.height.mobile)});
        transition: transform ${animation.header.hide.duration} ${
        animation.header.hide.easing
      };
      `,
    );
  });
});

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<DivTopAppBar {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(56,75,85);
        border-bottom-color: rgba(255,255,255,0.42);
        border-bottom-style: solid;
        border-bottom-width: 1px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 3.75rem;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        z-index: 2;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 3.75rem;
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
