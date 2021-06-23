import styled from 'styled-components';
import PropTypes from 'prop-types';

import {animation} from 'src/utils/specAnimation';
import {elevation} from 'src/utils/elevationScheme';
import {vspace} from 'src/utils/vspaceScheme';

const DivScrim = styled.div`
  background-color: black;
  height: 100vh;
  left: 0;
  opacity: ${({navShown}) => (navShown ? '0.5' : '0')};
  position: fixed;
  top: ${vspace.header.height.mobile}px;
  width: 100vw;
  z-index: ${elevation.scrim};
  ${animation.navTop.speed}
`;

DivScrim.propTypes = {
  navShown: PropTypes.bool,
};
export default DivScrim;
