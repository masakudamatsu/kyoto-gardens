import styled from 'styled-components';
import PropTypes from 'prop-types';

import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {setHorizontalSpace} from 'src/utils/designSpec';

import {colour} from 'src/utils/colorScheme';

// prettier-ignore
const FigureWithBorder = styled.figure`
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
    border-bottom: 1px solid ${colour.ryoanji.figure.border};
    border-top: 1px solid ${colour.ryoanji.figure.border};
    padding: ${ryoanji.figure.paddingInsideBorder}px;
    @media only screen and ${ryoanji.breakpoint.sideMargin} {
      border-left: 1px solid ${colour.ryoanji.figure.border};
      border-right: 1px solid ${colour.ryoanji.figure.border};
    }
  }
`;

FigureWithBorder.propTypes = {};

export default FigureWithBorder;
