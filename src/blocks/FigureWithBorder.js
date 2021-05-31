import styled from 'styled-components';
import PropTypes from 'prop-types';

import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';
import {breakpoint, hspace} from 'src/utils/hspaceScheme';

// prettier-ignore
const FigureWithBorder = styled.figure`
  ${Main.Kohoan} & {
    ${hspace.kohoan.maxWidth.body}
    ${hspace.kohoan.paddingSide.mobile}
    ${hspace.kohoan.paddingSide.tablet}
    ${hspace.kohoan.paddingSide.desktop}
  }
  ${Main.Ryoanji} & {
    ${hspace.ryoanji.maxWidth.body}
    ${hspace.ryoanji.paddingSide.tablet}
    ${hspace.ryoanji.paddingSide.desktop}
  }
`;

FigureWithBorder.Border = styled.div`
  ${Main.Kohoan} & {
    border-bottom: 1px solid ${colour.kohoan.figure.border};
    border-top: 1px solid ${colour.kohoan.figure.border};
    padding: ${kohoan.figure.paddingInsideBorder}px;
  }
  ${Main.Ryoanji} & {
    border-bottom: 1px solid ${colour.ryoanji.figure.border};
    border-top: 1px solid ${colour.ryoanji.figure.border};
    padding: ${ryoanji.figure.paddingInsideBorder}px;
    @media only screen and ${breakpoint.sideMargin('ryoanji')} {
      border-left: 1px solid ${colour.ryoanji.figure.border};
      border-right: 1px solid ${colour.ryoanji.figure.border};
    }
  }
`;

FigureWithBorder.propTypes = {};

export default FigureWithBorder;
