import React from 'react';
import {render, screen} from '@testing-library/react';

import Youtube from './Youtube';

const mockProps = {
  height: 480,
  title: 'YouTube video',
  videoId: 'skogubn',
  width: 640,
};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Youtube {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }

      .c0 {
        height: 0;
        overflow: hidden;
        padding-bottom: 75%;
        position: relative;
      }

      <div>
        <div
          class="c0"
          height="480"
          width="640"
        >
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
            class="c1"
            frameborder="0"
            height="480"
            src="https://www.youtube.com/embed/skogubn?fs=0&modestbranding=1&playsinline=1&rel=0"
            title="YouTube video"
            width="640"
          />
        </div>
      </div>
    `);
  });
});
