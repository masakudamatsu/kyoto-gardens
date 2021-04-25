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

const FigureWithMargin = styled(Figure)`
  ${props =>
    props.bordered
      ? `
    border-bottom: 1px solid hsla(193, 50%, 26%, 0.2);
    border-top: 1px solid hsla(193, 50%, 26%, 0.2);
    padding: ${figureBordered.padding}px;
    @media only screen and ${breakpoint.floorPlan} {
      border-left: 1px solid hsla(193, 50%, 26%, 0.2);
      border-right: 1px solid hsla(193, 50%, 26%, 0.2);
      margin: 0 ${remify(whitespace().sideMarginLarge)};
    }
    `
      : ` 
    @media only screen and ${breakpoint.sideMargin} {
      padding: 0 ${remify(whitespace().sideMarginLarge)};
    }`}
  @media only screen and ${breakpoint.floorPlanWidth} {
    margin: 0 auto;
    width: ${props =>
      props.bordered
        ? remify(lineLength.max.mobile)
        : remify(lineLength.max.mobile + whitespace().sideMarginLarge * 2)};
  }
  @media only screen and ${breakpoint.fontSize} {
    ${props =>
      props.bordered
        ? `
      margin: 0 ${remify(whitespace('desktop').sideMarginLarge)};
      width: auto;
    `
        : `
      margin: 0;
      padding: 0 ${remify(whitespace('desktop').sideMarginLarge)};
    `}
    width: auto;
  }
  @media only screen and ${breakpoint.floorPlanWidthDesktop} {
    margin: 0 auto;
    width: ${props =>
      props.bordered
        ? remify(lineLength.max.desktop)
        : remify(
            lineLength.max.desktop + whitespace('desktop').sideMarginLarge * 2,
          )};
  }
`;

FigureWithMargin.Img = styled(Figure.Img)``;

FigureWithMargin.propTypes = {
  bordered: PropTypes.bool,
};

export default FigureWithMargin;
