import styled from 'styled-components';
import PropTypes from 'prop-types';

import MainRyoanji from 'src/blocks/MainRyoanji';
import {horizontalSpacing} from 'src/utils/horizontalSpacing';

const P = styled.p`
  text-align: ${props => (props.message ? 'center' : 'left')};
  ${MainRyoanji} & {
    ${horizontalSpacing.text['ryoanji'].innerMerged}
    ${horizontalSpacing.text['ryoanji'].outer}
  }
`;

P.propTypes = {
  message: PropTypes.bool,
};

export default P;
