import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import Figure from 'src/blocks/Figure';
import FigCaption from 'src/elements/FigCaption';
import {kohoan} from 'src/utils/specKohoan';
import Main from 'src/blocks/Main';

import {setHorizontalSpace} from 'src/utils/designSpec';

// prettier-ignore
const FigureWithBorder = styled(Figure)`
  ${Main.Kohoan} & {
    ${setHorizontalSpace('text', kohoan).innerMerged}
    ${setHorizontalSpace('text', kohoan).outer}
  }
  ${Main.Ryoanji} & {
  }
`;

FigureWithBorder.Border = styled.div`
  ${Main.Kohoan} & {
    ${getBorder(kohoan)}
  }
  ${Main.Ryoanji} & {
  }
`;

function getBorder(spec) {
  return css`
    border-bottom: 1px solid ${spec.figure.borderColor};
    border-top: 1px solid ${spec.figure.borderColor};
    padding: ${spec.figure.paddingInsideBorder}px;
    @media only screen and ${spec.breakpoint.sideMargin} {
    }
  `;
}

FigureWithBorder.FigCaption = styled(FigCaption)``;

FigureWithBorder.propTypes = {};

export default FigureWithBorder;
