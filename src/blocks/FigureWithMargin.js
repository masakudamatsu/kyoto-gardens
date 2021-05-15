import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import Figure from 'src/blocks/Figure';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {setHorizontalSpace} from 'src/utils/designSpec';

// prettier-ignore
const FigureWithMargin = styled(Figure)`
  ${Main.Kohoan} & {
    ${setHorizontalSpace('figure', kohoan).innerMerged}
    ${setHorizontalSpace('figure', kohoan).outer}
  }
  ${Main.Ryoanji} & {
    ${setHorizontalSpace('figure', ryoanji).innerMerged}
    ${setHorizontalSpace('figure', ryoanji).outer}
  }
`;

FigureWithMargin.Border = styled.div`
  ${Main.Kohoan} & {
    ${getBorder(kohoan)}
  }
  ${Main.Ryoanji} & {
    ${getBorder(ryoanji)}
  }
`;

function getBorder(spec) {
  return css`
    border-bottom: 1px solid ${spec.figure.borderColor};
    border-top: 1px solid ${spec.figure.borderColor};
    padding: ${spec.figure.paddingInsideBorder}px;
    @media only screen and ${spec.breakpoint.sideMargin} {
      border-left: 1px solid ${spec.figure.borderColor};
      border-right: 1px solid ${spec.figure.borderColor};
    }
  `;
}

FigureWithMargin.propTypes = {};

export default FigureWithMargin;
