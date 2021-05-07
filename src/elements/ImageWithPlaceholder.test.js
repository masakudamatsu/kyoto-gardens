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
      .c1 {
        text-align: left;
      }

      .MainRyoanji-sc-11d35pr-0 .c0 {
        margin: 0 auto;
        max-width: 38.9424rem;
        padding: 0 1.3281rem;
      }

      .c2 {
        background-color: rgb(240,240,240);
        background-image: radial-gradient( circle closest-side,transparent 91%,#ffffff 100%,transparent ),radial-gradient( circle closest-side,rgb(240,240,240) 91%,#ffffff 100%,rgb(240,240,240) );
        background-position: 0 0,1.75rem 1.75rem;
        background-repeat: repeat;
        background-size: 3.5rem 3.5rem;
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

      @media only screen and (min-width:728px) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          max-width: 48.6522rem;
        }
      }

      @media only screen and (min-width:31.6802rem) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          padding: 0 2.2135rem;
        }
      }

      @media only screen and (min-width:728px) {
        .MainRyoanji-sc-11d35pr-0 .c0 {
          padding: 0 3.0078rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c2 {
          height: calc(100% - 12px);
        }
      }

      <p
        class="c0 c1 c2"
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
