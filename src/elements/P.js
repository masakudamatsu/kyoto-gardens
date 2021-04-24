import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, paragraph, whitespace} from 'src/utils/designSpec';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

const P = styled.p`
  font-family: ${paragraph.mobile.fontFamily};
  font-size: ${remify(getFontSize(paragraph.mobile))};
  font-weight: ${paragraph.mobile.fontWeight};
  line-height: ${getLineHeight(paragraph.mobile)};
  padding: 0 ${remify(whitespace().sideMargin)};
  @media only screen and ${breakpoint.sideMargin} {
    padding: 0 ${remify(whitespace().sideMarginLarge)};
  }
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(getFontSize(paragraph.desktop))};
    line-height: ${getLineHeight(paragraph.desktop)};
    padding: 0 ${remify(whitespace('desktop').sideMarginLarge)};
  }
`;

P.propTypes = {};

export default P;
