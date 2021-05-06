import styled from 'styled-components';
import PropTypes from 'prop-types';

import P from './P';

const ParaBelowBoxPara = styled(P)``;

ParaBelowBoxPara.propTypes = {
  message: PropTypes.bool,
};

export default ParaBelowBoxPara;
