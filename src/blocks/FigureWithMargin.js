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
import {getPaddingTop} from 'src/utils/whitespaceCssFactory';

// prettier-ignore
const FigureWithMargin = styled(Figure)`
  ${props => props.bordered? `
    border-bottom: 1px solid hsla(193, 50%, 26%, 0.2);
    border-top: 1px solid hsla(193, 50%, 26%, 0.2);
    margin-top: ${getPaddingTop(props, 'mobile')};
    padding: ${figureBordered.padding}px;
    @media only screen and ${breakpoint.floorPlan} {
      border-left: 1px solid hsla(193, 50%, 26%, 0.2);
      border-right: 1px solid hsla(193, 50%, 26%, 0.2);
      margin-left: ${remify(whitespace().sideMarginLarge)};
      margin-right: ${remify(whitespace().sideMarginLarge)};
    }
  ` : ` 
    padding-top: ${getPaddingTop(props, 'mobile')};
    @media only screen and ${breakpoint.sideMargin} {
      padding-left: ${remify(whitespace().sideMarginLarge)};
      padding-right: ${remify(whitespace().sideMarginLarge)};
    }
  `}
  @media only screen and ${breakpoint.floorPlanWidth} {
    margin-left: auto;
    margin-right: auto;
    width: ${
      props => props.bordered
      ? remify(lineLength.max.mobile)
      : remify(lineLength.max.mobile + whitespace().sideMarginLarge * 2)
    };
  }
  @media only screen and ${breakpoint.fontSize} {
    ${props => props.bordered? `
      margin-left: ${remify(whitespace('desktop').sideMarginLarge)};
      margin-right: ${remify(whitespace('desktop').sideMarginLarge)};
      margin-top: ${getPaddingTop(props, 'desktop')};
      width: auto;
    ` : `
      margin: 0;
      padding-left: ${remify(whitespace('desktop').sideMarginLarge)};
      padding-right: ${remify(whitespace('desktop').sideMarginLarge)};
      padding-top: ${getPaddingTop(props, 'desktop')};
      `}
    width: auto;
  }
  @media only screen and ${breakpoint.floorPlanWidthDesktop} {
    margin-left: auto;
    margin-right: auto;
    width: ${
      props => props.bordered
      ? remify(lineLength.max.desktop)
      : remify(
        lineLength.max.desktop + whitespace('desktop').sideMarginLarge * 2,
      )
    };
  }
`;

FigureWithMargin.Img = styled(Figure.Img)``;

FigureWithMargin.propTypes = {
  belowTextLine: PropTypes.bool,
  bordered: PropTypes.bool,
};

export default FigureWithMargin;
