import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, h3, whitespace} from 'src/utils/designSpec';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

const defaultSpace = {
  mobile: {
    left: 2,
  },
};

const H3 = styled.h3`
  color: hsla(193, 50%, 26%, 0.9);
  font-family: ${h3.mobile.fontFamily};
  font-size: ${remify(getFontSize(h3.mobile))};
  font-weight: ${h3.mobile.fontWeight};
  line-height: ${getLineHeight(h3.mobile)};
  padding: 0 ${remify(whitespace().sideMargin)};
  text-indent: -${remify(defaultSpace.mobile.left)}; /* Optical alignment with paragraphs */
  @media only screen and ${breakpoint.sideMargin} {
    padding: 0 ${remify(whitespace().sideMarginLarge)};
  }
  @media only screen and ${breakpoint.fontSize} {
    padding: 0 ${remify(whitespace('desktop').sideMarginLarge)};
  }
`;

H3.propTypes = {
  hidden: PropTypes.bool,
};
export default H3;
