import styled from 'styled-components';
import PropTypes from 'prop-types';

import Figure from 'src/blocks/Figure';
import {ryoanji} from 'src/utils/specRyoanji';
import MainRyoanji from 'src/blocks/MainRyoanji';
import {horizontalSpacing} from 'src/utils/horizontalSpacing';

// prettier-ignore
const FigureWithMargin = styled(Figure)`
  ${MainRyoanji} & {
    ${horizontalSpacing.figure['ryoanji'].innerMerged}
    ${horizontalSpacing.figure['ryoanji'].outer}
  }
`;

FigureWithMargin.Border = styled.div`
  ${MainRyoanji} & {
    border-bottom: 1px solid ${ryoanji.figure.borderColor};
    border-top: 1px solid ${ryoanji.figure.borderColor};
    padding: ${ryoanji.figure.paddingInsideBorder}px;
    @media only screen and ${ryoanji.breakpoint.sideMargin} {
      border-left: 1px solid ${ryoanji.figure.borderColor};
      border-right: 1px solid ${ryoanji.figure.borderColor};
    }
  }
`;

FigureWithMargin.propTypes = {};

export default FigureWithMargin;
