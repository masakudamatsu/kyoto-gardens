import styled from 'styled-components';
import PropTypes from 'prop-types';

import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';
import {breakpoint, hspace} from 'src/utils/hspaceScheme';
import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

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

function getPadding(pageName, screenWidth) {
  if (pageName === 'ryoanji') {
    return (
      vspace['ryoanji'].betweenLines[screenWidth] -
      spaceToTrim['ryoanji'].floorplan.top
    ); // make the top of the floor plan symmetric with the baseline of the previous paragraph across the figure border
  } else if (pageName === 'kohoan') {
    return vspace['kohoan'].betweenLines[screenWidth];
  }
}

FigureWithBorder.Border = styled.div`
  ${Main.Kohoan} & {
    border-bottom: 1px solid ${colour.kohoan.figure.border};
    border-top: 1px solid ${colour.kohoan.figure.border};
    padding: ${getPadding('kohoan', 'mobile')}px;
    @media only screen and ${breakpoint.fontSize} {
      padding: ${getPadding('kohoan', 'desktop')}px;
    }
  }
  ${Main.Ryoanji} & {
    border-bottom: 1px solid ${colour.ryoanji.figure.border};
    border-top: 1px solid ${colour.ryoanji.figure.border};
    padding: ${getPadding('ryoanji', 'mobile')}px;
    @media only screen and ${breakpoint.sideMargin('ryoanji')} {
      border-left: 1px solid ${colour.ryoanji.figure.border};
      border-right: 1px solid ${colour.ryoanji.figure.border};
    }
    @media only screen and ${breakpoint.fontSize} {
      padding: ${getPadding('ryoanji', 'desktop')}px;
    }
  }
`;

FigureWithBorder.propTypes = {};

export default FigureWithBorder;
