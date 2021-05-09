import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Main} from 'src/blocks/Main';

import {horizontalSpacing} from 'src/utils/horizontalSpacing';

const P = styled.p`
  text-align: ${props => (props.centerAligned ? 'center' : 'left')};
  ${Main.Ryoanji} & {
    ${horizontalSpacing.text['ryoanji'].innerMerged}
    ${horizontalSpacing.text['ryoanji'].outer}
  }
`;

P.propTypes = {
  centerAligned: PropTypes.bool,
};

export default P;
