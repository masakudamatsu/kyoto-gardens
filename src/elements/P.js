import styled from 'styled-components';
import PropTypes from 'prop-types';

import Main from 'src/blocks/Main';

import {setHorizontalSpace} from 'src/utils/designSpec';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';

const P = styled.p`
  text-align: ${props => (props.centerAligned ? 'center' : 'left')};
  ${Main.Kohoan} & {
    ${setHorizontalSpace('text', kohoan).innerMerged}
    ${setHorizontalSpace('text', kohoan).outer}
  }
  ${Main.Ryoanji} & {
    ${setHorizontalSpace('text', ryoanji).innerMerged}
    ${setHorizontalSpace('text', ryoanji).outer}
  }
`;

P.propTypes = {
  centerAligned: PropTypes.bool,
};

export default P;
