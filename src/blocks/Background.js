import styled from 'styled-components';
import PropTypes from 'prop-types';

import {seigaihaPattern, shippoPattern} from 'src/utils/patterns';

const Background = styled.div`
  ${({page}) => page === 'kohoan' && seigaihaPattern}
  ${({page}) => page === 'ryoanji' && shippoPattern}
`;

Background.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Background;
