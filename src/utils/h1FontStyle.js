import {css} from 'styled-components';

import {breakpoint} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';

export const h1FontStyle = {
  ryoanji: css`
    font-family: ${ryoanji.h1.fontFamily};
    font-size: ${remify(ryoanji.h1.fontSize.mobile)};
    font-weight: ${ryoanji.h1.fontWeight};
    letter-spacing: ${ryoanji.h1.letterSpacig};
    line-height: ${ryoanji.h1.lineHeight};
    @media only screen and ${ryoanji.breakpoint.h1} {
      font-size: ${remify(ryoanji.h1.fontSize.tablet)};
    }
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(ryoanji.h1.fontSize.desktop)};
    }
  `,
};
