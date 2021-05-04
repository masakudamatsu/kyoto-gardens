import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, lineLength, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {getPaddingTop} from 'src/utils/whitespaceCssFactory';

function getSidePadding(props) {
  return props.message
    ? remify(whitespace().sideMargin * 2)
    : remify(whitespace().sideMargin);
}

const P = styled.p`
  margin: 0 auto;
  max-width: ${remify(
    lineLength.max.mobile + whitespace('mobile').sideMarginLarge * 2,
  )};
  padding-left: ${props => getSidePadding(props)};
  padding-right: ${props => getSidePadding(props)};
  padding-top: ${props => getPaddingTop(props, 'mobile')};
  text-align: ${props => (props.message ? 'center' : 'left')};
  @media only screen and ${breakpoint.sideMargin} {
    padding-left: ${remify(whitespace().sideMarginLarge)};
    padding-right: ${remify(whitespace().sideMarginLarge)};
  }
  @media only screen and ${breakpoint.fontSize} {
    max-width: ${remify(
      lineLength.max.desktop + whitespace('desktop').sideMarginLarge * 2,
    )};
    padding-left: ${remify(whitespace('desktop').sideMarginLarge)};
    padding-right: ${remify(whitespace('desktop').sideMarginLarge)};
    padding-top: ${props => getPaddingTop(props, 'desktop')};
  }
`;

P.propTypes = {
  belowBoxLine: PropTypes.bool,
  belowBoxParagraph: PropTypes.bool,
  belowTextParagraph: PropTypes.bool,
  message: PropTypes.bool,
};

export default P;
