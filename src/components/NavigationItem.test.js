import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import NavigationItem from './NavigationItem';

const mockProps = {
  currentPage: 'ryoanji',
  pageName: 'ryoanji',
  textContent: 'Ryoan-ji',
};

test('renders correctly', () => {
  // setup
  const {container} = render(<NavigationItem {...mockProps} />);
  // verify
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background-color: white;
      color: black;
      border-bottom: 1px solid gray;
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
      content: '';
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
      background-color: transparent;
    }

    <div>
      <li
        class="c0"
      >
        <a>
          Ryoan-ji
        </a>
      </li>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(
    <ul>
      <NavigationItem {...mockProps} />
    </ul>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
