import styled from 'styled-components';
import PropTypes from 'prop-types';

import {seigaihaPattern, shippoPattern} from 'src/utils/patterns';

const Background = styled.div`
  ${props => props.kohoan && seigaihaPattern}
  ${props => props.ryoanji && shippoPattern}
`;

Background.propTypes = {
  kohoan: PropTypes.bool,
  ryoanji: PropTypes.bool,
};

export default Background;
