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
        background-color: rgb(17,17,17);
        background-image: radial-gradient( circle farthest-side at 50% 150%, rgb(17,17,17) 16.666666666666664%, rgb(124,124,124) 20.666666666666664%, rgb(124,124,124) 21%, rgb(17,17,17) 25%, rgb(17,17,17) 33.33333333333333%, rgb(124,124,124) 37.33333333333333%, rgb(124,124,124) 37.666666666666664%, rgb(17,17,17) 41.666666666666664%, rgb(17,17,17) 50%, rgb(124,124,124) 54%, rgb(124,124,124) 54.33333333333333%, rgb(17,17,17) 58.33333333333333%, rgb(17,17,17) 66.66666666666666%, transparent 66.66666666666666%, transparent ),radial-gradient( circle farthest-corner at 0% 100%, rgb(17,17,17) 12.5%, rgb(124,124,124) 15.5%, rgb(124,124,124) 15.75%, rgb(17,17,17) 18.75%, rgb(17,17,17) 25%, rgb(124,124,124) 28%, rgb(124,124,124) 28.25%, rgb(17,17,17) 31.25%, rgb(17,17,17) 37.5%, rgb(124,124,124) 40.5%, rgb(124,124,124) 40.75%, rgb(17,17,17) 43.75%, rgb(17,17,17) 50%, transparent 50%, transparent ),radial-gradient( circle farthest-corner at 100% 100%, rgb(17,17,17) 12.5%, rgb(124,124,124) 15.5%, rgb(124,124,124) 15.75%, rgb(17,17,17) 18.75%, rgb(17,17,17) 25%, rgb(124,124,124) 28%, rgb(124,124,124) 28.25%, rgb(17,17,17) 31.25%, rgb(17,17,17) 37.5%, rgb(124,124,124) 40.5%, rgb(124,124,124) 40.75%, rgb(17,17,17) 43.75%, rgb(17,17,17) 50%, transparent 50%, transparent ),radial-gradient(circle farthest-corner at 50% 50%, rgb(17,17,17) 25%, rgb(124,124,124) 31%, rgb(124,124,124) 31.5%, rgb(17,17,17) 37.5%, rgb(17,17,17) 50%, rgb(124,124,124) 56%, rgb(124,124,124) 56.5%, rgb(17,17,17) 62.5%, rgb(17,17,17) 75%, rgb(124,124,124) 81%, rgb(124,124,124) 81.5%, rgb(17,17,17) 87.5%, rgb(17,17,17) 100%, transparent 100%, transparent );
        background-repeat: repeat;
        background-size: 3.031088913245535rem 1.75rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c1 {
        background-color: rgb(240,240,240);
        background-image: radial-gradient( circle closest-side,transparent 91%,rgb(255,255,255) 100%,transparent ),radial-gradient( circle closest-side,rgb(240,240,240) 91%,rgb(255,255,255) 100%,rgb(240,240,240) );
        background-position: 0 0,1.75rem 1.75rem;
        background-repeat: repeat;
        background-size: 3.5rem 3.5rem;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c0 {
          max-width: 47.5584rem;
        }
      }

      @media only screen and (min-width:30.7948rem) {
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

describe('changes UI by prop values', () => {
  test('with kohoan prop value', () => {
    render(<ImageWithPlaceholder kohoan {...mockProps} />);
    expect(screen.getByTestId('image-wrapper')).toMatchInlineSnapshot(`
      .c5 {
        text-align: left;
      }

      .Main__Kohoan-sc-126eniy-2 .c3 {
        margin: 0 auto;
        max-width: 38.057rem;
        padding: 0 1.0625rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c3 {
        margin: 0 auto;
        max-width: 38.9424rem;
        padding: 0 1.3281rem;
      }

      .c0 {
        position: relative;
      }

      .c1 {
        margin: 0 auto;
        max-width: 38.057rem;
      }

      .c6 {
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

      .Main__Kohoan-sc-126eniy-2 .c4 {
        background-color: rgb(17,17,17);
        background-image: radial-gradient( circle farthest-side at 50% 150%, rgb(17,17,17) 16.666666666666664%, rgb(124,124,124) 20.666666666666664%, rgb(124,124,124) 21%, rgb(17,17,17) 25%, rgb(17,17,17) 33.33333333333333%, rgb(124,124,124) 37.33333333333333%, rgb(124,124,124) 37.666666666666664%, rgb(17,17,17) 41.666666666666664%, rgb(17,17,17) 50%, rgb(124,124,124) 54%, rgb(124,124,124) 54.33333333333333%, rgb(17,17,17) 58.33333333333333%, rgb(17,17,17) 66.66666666666666%, transparent 66.66666666666666%, transparent ),radial-gradient( circle farthest-corner at 0% 100%, rgb(17,17,17) 12.5%, rgb(124,124,124) 15.5%, rgb(124,124,124) 15.75%, rgb(17,17,17) 18.75%, rgb(17,17,17) 25%, rgb(124,124,124) 28%, rgb(124,124,124) 28.25%, rgb(17,17,17) 31.25%, rgb(17,17,17) 37.5%, rgb(124,124,124) 40.5%, rgb(124,124,124) 40.75%, rgb(17,17,17) 43.75%, rgb(17,17,17) 50%, transparent 50%, transparent ),radial-gradient( circle farthest-corner at 100% 100%, rgb(17,17,17) 12.5%, rgb(124,124,124) 15.5%, rgb(124,124,124) 15.75%, rgb(17,17,17) 18.75%, rgb(17,17,17) 25%, rgb(124,124,124) 28%, rgb(124,124,124) 28.25%, rgb(17,17,17) 31.25%, rgb(17,17,17) 37.5%, rgb(124,124,124) 40.5%, rgb(124,124,124) 40.75%, rgb(17,17,17) 43.75%, rgb(17,17,17) 50%, transparent 50%, transparent ),radial-gradient(circle farthest-corner at 50% 50%, rgb(17,17,17) 25%, rgb(124,124,124) 31%, rgb(124,124,124) 31.5%, rgb(17,17,17) 37.5%, rgb(17,17,17) 50%, rgb(124,124,124) 56%, rgb(124,124,124) 56.5%, rgb(17,17,17) 62.5%, rgb(17,17,17) 75%, rgb(124,124,124) 81%, rgb(124,124,124) 81.5%, rgb(17,17,17) 87.5%, rgb(17,17,17) 100%, transparent 100%, transparent );
        background-repeat: repeat;
        background-size: 3.031088913245535rem 1.75rem;
      }

      .Main__Ryoanji-sc-126eniy-1 .c4 {
        background-color: rgb(240,240,240);
        background-image: radial-gradient( circle closest-side,transparent 91%,rgb(255,255,255) 100%,transparent ),radial-gradient( circle closest-side,rgb(240,240,240) 91%,rgb(255,255,255) 100%,rgb(240,240,240) );
        background-position: 0 0,1.75rem 1.75rem;
        background-repeat: repeat;
        background-size: 3.5rem 3.5rem;
      }

      .c2 {
        opacity: 0;
        -webkit-transition: opacity 500ms linear;
        transition: opacity 500ms linear;
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c3 {
          max-width: 47.5584rem;
        }
      }

      @media only screen and (min-width:30.7948rem) {
        .Main__Kohoan-sc-126eniy-2 .c3 {
          padding: 0 1.7708rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Kohoan-sc-126eniy-2 .c3 {
          padding: 0 2.4609rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c3 {
          max-width: 48.6522rem;
        }
      }

      @media only screen and (min-width:31.6802rem) {
        .Main__Ryoanji-sc-126eniy-1 .c3 {
          padding: 0 2.2135rem;
        }
      }

      @media only screen and (min-width:728px) {
        .Main__Ryoanji-sc-126eniy-1 .c3 {
          padding: 0 3.0078rem;
        }
      }

      @media only screen and (min-width:101px) {
        .c1 {
          padding: 0 1.0625rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          max-width: 47.5584rem;
        }
      }

      @media only screen and (min-width:30.7948rem) {
        .c1 {
          padding: 0 1.7708rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          padding: 0 2.4609rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c6 {
          height: calc(100% - 12px);
        }
      }

      <div
        class="c0 c1"
        data-testid="image-wrapper"
        width="100"
      >
        <div
          style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;"
        >
          <div
            style="box-sizing: border-box; display: block; max-width: 100%;"
          >
            <img
              alt=""
              aria-hidden="true"
              role="presentation"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              style="max-width: 100%; display: block; margin: 0px; padding: 0px;"
            />
          </div>
          <noscript />
          <img
            alt="alt-text"
            class="c2"
            decoding="async"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
          />
        </div>
        <p
          class="c3 c4 c5 c6"
        >
          Loading...
        </p>
      </div>
    `);
  });
});
