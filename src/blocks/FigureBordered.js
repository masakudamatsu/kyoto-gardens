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
import {ryoanji} from 'src/utils/specRyoanji';

// prettier-ignore
const FigureBordered = styled(Figure)`
  border-bottom: 1px solid ${ryoanji.figure.borderColor};
  border-top: 1px solid ${ryoanji.figure.borderColor};
  padding: ${figureBordered.padding}px;
  @media only screen and ${breakpoint.floorPlan} {
    border-left: 1px solid ${ryoanji.figure.borderColor};
    border-right: 1px solid ${ryoanji.figure.borderColor};
    margin-left: ${remify(whitespace().sideMarginLarge)};
    margin-right: ${remify(whitespace().sideMarginLarge)};
  }
  @media only screen and ${breakpoint.floorPlanWidth} {
    margin-left: auto;
    margin-right: auto;
    width: ${
      remify(lineLength.max.mobile)
    };
  }
  @media only screen and ${breakpoint.fontSize} {
    margin-left: ${remify(whitespace('desktop').sideMarginLarge)};
    margin-right: ${remify(whitespace('desktop').sideMarginLarge)};
    width: auto;
  }
  @media only screen and ${breakpoint.floorPlanWidthDesktop} {
    margin-left: auto;
    margin-right: auto;
    width: ${remify(lineLength.max.desktop)};
  }
`;

FigureBordered.propTypes = {};

export default FigureBordered;
