import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import Figure from 'src/blocks/Figure';
import FigCaption from 'src/elements/FigCaption';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {setHorizontalSpace} from 'src/utils/designSpec';

// prettier-ignore
const FigureWithBorder = styled(Figure)`
  ${Main.Kohoan} & {
    ${setHorizontalSpace('text', kohoan).innerMerged}
    ${setHorizontalSpace('text', kohoan).outer}
  }
  ${Main.Ryoanji} & {
    ${setHorizontalSpace('figure', ryoanji).innerMerged}
    ${setHorizontalSpace('figure', ryoanji).outer}
  }
`;

FigureWithBorder.Border = styled.div`
  ${Main.Kohoan} & {
    border-bottom: 1px solid ${kohoan.figure.borderColor};
    border-top: 1px solid ${kohoan.figure.borderColor};
    padding: ${kohoan.figure.paddingInsideBorder}px;
  }
  ${Main.Ryoanji} & {
    border-bottom: 1px solid ${ryoanji.figure.borderColor};
    border-top: 1px solid ${ryoanji.figure.borderColor};
    padding: ${ryoanji.figure.paddingInsideBorder}px;
    @media only screen and ${ryoanji.breakpoint.sideMargin} {
      border-left: 1px solid ${ryoanji.figure.borderColor};
      border-right: 1px solid ${ryoanji.figure.borderColor};
    }
  }
`;

FigureWithBorder.FigCaption = styled(FigCaption)``;

FigureWithBorder.propTypes = {};

export default FigureWithBorder;
