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
const FigureWithMargin = styled(Figure)`
`;

FigureWithMargin.Border = styled.div`
  border-bottom: 1px solid ${ryoanji.figure.borderColor};
  border-top: 1px solid ${ryoanji.figure.borderColor};
  padding: ${figureBordered.padding}px;
  @media only screen and ${breakpoint.sideMargin} {
    border-left: 1px solid ${ryoanji.figure.borderColor};
    border-right: 1px solid ${ryoanji.figure.borderColor};
  }
`;

FigureWithMargin.propTypes = {};

export default FigureWithMargin;
