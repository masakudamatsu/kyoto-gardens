import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';

import ImageWithPlaceholder from './ImageWithPlaceholder';

const mockProps = {
  src: '/dummy.jpg',
  width: 100,
  height: 100,
  alt: 'alt-text',
};

describe('renders the UI correctly during the loading time', () => {
  beforeEach(() => {
    render(<ImageWithPlaceholder {...mockProps} />);
  });
  test('Wrapper', () => {
    expect(screen.getByTestId('image-wrapper')).toHaveStyle(
      `position:relative;`,
    );
  });
  test('Image component', () => {
    expect(screen.getByAltText('alt-text')).toHaveStyle(`
      opacity: 0;
      transition: opacity 500ms linear;
    `);
  });
  test('Placeholder', () => {
    expect(screen.getByText('Loading...')).toMatchInlineSnapshot(`
      .c2 {
        text-align: left;
      }

      .Main__Kohoan-sc-126eniy-2 .c0 {
        margin: 0 auto;
        max-width: 38.057rem;
        padding: 0 1.0625rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
        padding: 0 1.3281rem;
      }

      .c3 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        bottom: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        height: calc(100% - 8px);
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
      }

      .Main__Kohoan-sc-126eniy-2 .c1 {
        color: hsla(193,50%,26%,0.9);
        background-color: rgb(240,240,240);
        background-image: radial-gradient( circle farthest-side at 50% 150%, rgb(240,240,240) 8.333333333333332%,white 8.333333333333332%, white 16.666666666666664%,rgb(240,240,240) 16.666666666666664%, rgb(240,240,240) 25%,white 25%, white 33.33333333333333%,rgb(240,240,240) 33.33333333333333%, rgb(240,240,240) 41.666666666666664%,white 41.666666666666664%, white 50%,rgb(240,240,240) 50%, rgb(240,240,240) 58.33333333333333%,white 58.33333333333333%, white 66.66666666666666%,transparent 66.66666666666666%, transparent ),radial-gradient( circle farthest-corner at 0% 100%, rgb(240,240,240) 6.25%,white 6.25%, white 12.5%,rgb(240,240,240) 12.5%, rgb(240,240,240) 18.75%,white 18.75%, white 25%,rgb(240,240,240) 25%, rgb(240,240,240) 31.25%,white 31.25%, white 37.5%,rgb(240,240,240) 37.5%, rgb(240,240,240) 43.75%,white 43.75%, white 50%,transparent 50%, transparent ),radial-gradient( circle farthest-corner at 100% 100%, rgb(240,240,240) 6.25%,white 6.25%, white 12.5%,rgb(240,240,240) 12.5%, rgb(240,240,240) 18.75%,white 18.75%, white 25%,rgb(240,240,240) 25%, rgb(240,240,240) 31.25%,white 31.25%, white 37.5%,rgb(240,240,240) 37.5%, rgb(240,240,240) 43.75%,white 43.75%, white 50%,transparent 50%, transparent ),radial-gradient(circle farthest-corner at 50% 50%, rgb(240,240,240) 12.5%,white 12.5%, white 25%,rgb(240,240,240) 25%, rgb(240,240,240) 37.5%,white 37.5%, white 50%,rgb(240,240,240) 50%, rgb(240,240,240) 62.5%,white 62.5%, white 75%,rgb(240,240,240) 75%, rgb(240,240,240) 87.5%,white 87.5%, white 100%,transparent 100%, transparent );
        background-repeat: repeat;
        background-size: 3.031088913245535rem 1.75rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c1 {
        background-color: rgb(240,240,240);
        background-image: radial-gradient( circle closest-side,transparent 91%,#ffffff 100%,transparent ),radial-gradient( circle closest-side,rgb(240,240,240) 91%,#ffffff 100%,rgb(240,240,240) );
        background-position: 0 0,1.75rem 1.75rem;
        background-repeat: repeat;
        background-size: 3.5rem 3.5rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          max-width: 47.5584rem;
        }
      }

      @media only screen and (min-width:31.6802rem) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          padding: 0 1.7708rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          padding: 0 2.4609rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          max-width: 48.6522rem;
        }
      }

      @media only screen and (min-width:31.6802rem) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          padding: 0 2.2135rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c0 {
          padding: 0 3.0078rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c3 {
          height: calc(100% - 12px);
        }
      }

      <p
        class="c0 c1 c2 c3"
      >
        Loading...
      </p>
    `);
  });
});

describe('After the image is successfully loaded', () => {
  beforeEach(() => {
    render(<ImageWithPlaceholder {...mockProps} />);
    fireEvent.load(screen.getByAltText('alt-text'));
  });
  test('Image component gets rendered', () => {
    expect(screen.getByAltText('alt-text')).toHaveStyle(`
      opacity: 1;
    `);
  });
  test('Loading message disappears', async () => {
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  });
});

describe('After the image fails to be loaded', () => {
  beforeEach(() => {
    render(<ImageWithPlaceholder {...mockProps} />);
    fireEvent.error(screen.getByAltText('alt-text'));
  });
  test('Alt text is shown', async () => {
    await waitFor(() => {
      expect(screen.getByText(mockProps.alt)).toBeVisible();
    });
  });
});
