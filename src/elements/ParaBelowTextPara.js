import styled from 'styled-components';
import PropTypes from 'prop-types';

import P from './P';

const ParaBelowTextPara = styled(P)``;

ParaBelowTextPara.propTypes = {
  message: PropTypes.bool,
};

export default ParaBelowTextPara;
