import React from 'react';
import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import NavigationItem from './NavigationItem';

const mockProps = {
  currentPage: 'kohoan',
  pageName: 'ryoanji',
  textContent: 'Ryoan-ji',
};

test('renders correctly', () => {
  // setup
  const {container} = render(<NavigationItem {...mockProps} />);
  // verify
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background-color: rgb(33,79,89);
      border-bottom: 1px solid rgba(255,255,255,0.42);
      font-family: 'Reforma 1918',serif;
      font-size: 1.3333rem;
      font-weight: 300;
      line-height: normal;
      padding-bottom: 0.625rem;
      padding-left: 1rem;
      padding-top: 0.5313rem;
      position: relative;
    }

    .c0 a,
    .c0 a:visited {
      color: inherit;
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .c0 a:focus,
    .c0 a:hover {
      outline: none;
    }

    .c0 a::after {
      content: '>';
      height: 100%;
      left: 0;
      padding-bottom: 0.625rem;
      padding-right: 1rem;
      padding-top: 0.5313rem;
      position: absolute;
      text-align: right;
      top: 0;
      width: 100%;
    }

    .c0 a:focus::after,
    .c0 a:hover::after {
      background-color: rgba(255,255,255,0.42);
    }

    .c1 {
      overflow: hidden;
      position: relative;
    }

    .c1 span {
      -webkit-animation: ePEfzm 600ms linear;
      animation: ePEfzm 600ms linear;
      background-color: rgba(255,255,255,0.7);
      border-radius: 50%;
      position: absolute;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
    }

    <div>
      <li
        class="c0 c1"
      >
        <a
          href="/ryoanji"
        >
          Ryoan-ji
        </a>
      </li>
    </div>
  `);
});

test('is accessible', async () => {
  await act(async () => {
    const {container} = render(
      <ul>
        <NavigationItem {...mockProps} />
      </ul>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
