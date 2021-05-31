import styled from 'styled-components';
import PropTypes from 'prop-types';

import Main from 'src/blocks/Main';

import {hspace} from 'src/utils/hspaceScheme';

const P = styled.p`
  text-align: ${props => (props.centerAligned ? 'center' : 'left')};
  ${Main.Kohoan} & {
    ${hspace.kohoan.maxWidth.body}
    ${hspace.kohoan.paddingSide.mobile}
    ${hspace.kohoan.paddingSide.tablet}
    ${hspace.kohoan.paddingSide.desktop}
  }
  ${Main.Ryoanji} & {
    ${hspace.ryoanji.maxWidth.body}
    ${hspace.ryoanji.paddingSide.mobile}
    ${hspace.ryoanji.paddingSide.tablet}
    ${hspace.ryoanji.paddingSide.desktop}
  }
`;

P.propTypes = {
  centerAligned: PropTypes.bool,
};

export default P;
