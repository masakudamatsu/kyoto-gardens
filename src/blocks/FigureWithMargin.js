import styled from 'styled-components';
import PropTypes from 'prop-types';

import Figure from 'src/blocks/Figure';
import {
  breakpoint,
  figureBordered,
  lineLength,
  whitespace,
} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {getPaddingTopAboveBox} from 'src/utils/whitespaceCssFactory';

// prettier-ignore
const FigureWithMargin = styled(Figure)`
  margin: 0 auto;
  max-width: ${remify(lineLength.max.mobile + whitespace().sideMarginLarge * 2)};
  @media only screen and ${breakpoint.sideMargin} {
    padding-left: ${remify(whitespace().sideMarginLarge)};
    padding-right: ${remify(whitespace().sideMarginLarge)};
  }
  @media only screen and ${breakpoint.fontSize} {
    max-width: ${remify(lineLength.max.desktop + whitespace('desktop').sideMarginLarge * 2,)};
    padding-left: ${remify(whitespace('desktop').sideMarginLarge)};
    padding-right: ${remify(whitespace('desktop').sideMarginLarge)};
  }
`;

FigureWithMargin.propTypes = {};

export default FigureWithMargin;
