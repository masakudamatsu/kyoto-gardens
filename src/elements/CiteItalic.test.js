import React from 'react';
import {render, screen} from '@testing-library/react';

import CiteItalic from './CiteItalic';

const mockProps = {};

test('renders UI as expected', () => {
  const {container} = render(<CiteItalic />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <cite
        class="CiteItalic-aqgrgi-0"
      />
    </div>
  `);
});
