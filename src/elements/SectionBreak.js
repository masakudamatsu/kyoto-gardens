import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';

const asteriskHeight = {
  mobile: 8,
  desktop: 10,
}; // Cormorant Garamond wiht x-height
const spaceByDefault = {
  above: {
    mobile: 13,
    desktop: 17.5,
  },
};

const getPaddingTop = screenWidth => {
  const targetHeight = whitespace(screenWidth).betweenParagraphs;
  return remify(targetHeight - spaceByDefault.above[screenWidth]);
};

const getPaddingBottom = screenWidth => {
  return remify(
    whitespace(screenWidth).betweenParagraphs + asteriskHeight[screenWidth],
  );
};

const SectionBreak = styled.hr`
  /* https://stackoverflow.com/a/32146824/11847654 */
  border: none;
  padding-bottom: ${getPaddingBottom('mobile')};
  padding-top: ${getPaddingTop('mobile')};
  @media only screen and ${breakpoint.fontSize} {
    padding-bottom: ${getPaddingBottom('desktop')};
    padding-top: ${getPaddingTop('desktop')};
  }
  &::before {
    // eslint-disable-next-line no-irregular-whitespace
    content: '* * *';
    display: block;
    text-align: center;
  }
`;

SectionBreak.propTypes = {};
export default SectionBreak;
