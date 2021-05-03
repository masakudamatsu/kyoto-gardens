import styled from 'styled-components';
import PropTypes from 'prop-types';

import {shippoPattern} from 'src/utils/patterns';

const Background = styled.div`
  ${props => props.ryoanji && shippoPattern}
`;

Background.propTypes = {
  ryoanji: PropTypes.bool,
};

export default Background;
