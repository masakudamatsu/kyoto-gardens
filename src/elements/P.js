import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  breakpoint,
  lineLength,
  paragraph,
  whitespace,
} from 'src/utils/designSpec';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

function getSidePadding(props) {
  return props.message
    ? remify(whitespace().sideMargin * 2)
    : remify(whitespace().sideMargin);
}

const P = styled.p`
  font-family: ${paragraph.mobile.fontFamily};
  font-size: ${remify(getFontSize(paragraph.mobile))};
  font-weight: ${paragraph.mobile.fontWeight};
  line-height: ${getLineHeight(paragraph.mobile)};
  margin: 0 auto;
  max-width: ${remify(
    lineLength.max.mobile + whitespace('mobile').sideMarginLarge * 2,
  )};
  padding-left: ${props => getSidePadding(props)};
  padding-right: ${props => getSidePadding(props)};
  text-align: ${props => (props.message ? 'center' : 'left')};
  @media only screen and ${breakpoint.sideMargin} {
    padding-left: ${remify(whitespace().sideMarginLarge)};
    padding-right: ${remify(whitespace().sideMarginLarge)};
  }
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(getFontSize(paragraph.desktop))};
    line-height: ${getLineHeight(paragraph.desktop)};
    max-width: ${remify(
      lineLength.max.desktop + whitespace('desktop').sideMarginLarge * 2,
    )};
    padding-left: ${remify(whitespace('desktop').sideMarginLarge)};
    padding-right: ${remify(whitespace('desktop').sideMarginLarge)};
  }
`;

P.propTypes = {};

export default P;
