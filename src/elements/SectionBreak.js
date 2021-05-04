import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, paragraph, whitespace} from 'src/utils/designSpec';
import {color} from 'src/utils/specColor';
import {getFontSize} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

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
  color: ${color.sectionBreak};
  font-family: ${paragraph.mobile.fontFamily};
  font-size: ${remify(getFontSize(paragraph.mobile))};
  font-weight: ${paragraph.mobile.fontWeight};
  padding-bottom: ${getPaddingBottom('mobile')};
  padding-top: ${getPaddingTop('mobile')};
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(getFontSize(paragraph.desktop))};
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