import styled from 'styled-components';
import PropTypes from 'prop-types';

import FigCaption from 'src/elements/FigCaption';
import Main from 'src/blocks/Main';

import {hspace} from 'src/utils/hspaceScheme';

// prettier-ignore
const FigureWithMargin = styled.figure`
  ${Main.Kohoan} & {
  }
  ${Main.Ryoanji} & {
    ${hspace.ryoanji.maxWidth.body}
    ${hspace.ryoanji.paddingSide.tablet}
    ${hspace.ryoanji.paddingSide.desktop}
  }
`;

FigureWithMargin.FigCaption = styled(FigCaption)`
  ${Main.Kohoan} & {
    ${hspace.kohoan.maxWidth.body}
    ${hspace.kohoan.paddingSide.mobile}
    ${hspace.kohoan.paddingSide.tablet}
    ${hspace.kohoan.paddingSide.desktop}
  }
`;

FigureWithMargin.propTypes = {
  diagram: PropTypes.bool,
};

export default FigureWithMargin;
