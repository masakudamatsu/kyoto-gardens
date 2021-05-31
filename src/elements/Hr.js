import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';
import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

const getPaddingTop = (screenWidth, pageName) => {
  return remify(
    vspace[pageName].betweenParagraphs[screenWidth] -
      (spaceToTrim[pageName].article.bottom[screenWidth] +
        spaceToTrim[pageName].hr.top[screenWidth]),
  );
};

const getPaddingBottom = (screenWidth, pageName) => {
  return remify(
    vspace[pageName].betweenParagraphs[screenWidth] -
      (spaceToTrim[pageName].article.top[screenWidth] +
        spaceToTrim[pageName].article.capToX[screenWidth]) +
      (spaceToTrim[pageName].hr.top[screenWidth] +
        spaceToTrim[pageName].hr.asteriskHeight[screenWidth]),
  );
};

const Hr = styled.hr`
  border: none;
  &::before {
    // eslint-disable-next-line no-irregular-whitespace
    content: '* * *';
    display: block;
    text-align: center;
  }
  ${Main.Kohoan} & {
    /* https://stackoverflow.com/a/32146824/11847654 */
    color: ${colour.kohoan.hr.color};
    padding-bottom: ${getPaddingBottom('mobile', 'kohoan')};
    padding-top: ${getPaddingTop('mobile', 'kohoan')};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${getPaddingBottom('desktop', 'kohoan')};
      padding-top: ${getPaddingTop('desktop', 'kohoan')};
    }
  }
`;

Hr.propTypes = {};
export default Hr;
