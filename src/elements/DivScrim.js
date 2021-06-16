import styled from 'styled-components';
import PropTypes from 'prop-types';

import {elevation} from 'src/utils/elevationScheme';
import {vspace} from 'src/utils/vspaceScheme';

const DivScrim = styled.div`
  background-color: black;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: ${vspace.header.height.mobile}px;
  width: 100vw;
  z-index: ${elevation.scrim};
`;

DivScrim.propTypes = {};
export default DivScrim;
