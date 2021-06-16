import styled from 'styled-components';
import PropTypes from 'prop-types';

import {animation} from 'src/utils/specAnimation';
import {breakpoint} from 'src/utils/hspaceScheme';
import {colour} from 'src/utils/colorScheme';
import {elevation} from 'src/utils/elevationScheme';
import remify from 'src/utils/remify';
import {vspace} from 'src/utils/vspaceScheme';

const cssAnimation = {
  show: `
    transform: translate(0, 0);
    transition: transform ${animation.header.show.duration} ${animation.header.show.easing};
  `,
  hide: `
    transform: translate(0, -${remify(
      vspace.header.height.mobile,
    )}); /* Leave the bottom border visible, to indicate it's hiding behind the screen frame */
    transition: transform ${animation.header.hide.duration} ${
    animation.header.hide.easing
  };
    @media only screen and ${breakpoint.fontSize} {
      transform: translate(0, -${remify(vspace.header.height.desktop)});
    }
  `,
};

// Center-align child elements rather than setting side margins
const DivTopAppBar = styled.div`
  background-color: ${colour.header.background};
  border-bottom-color: ${colour.header.borderBottom};
  border-bottom-style: solid;
  border-bottom-width: ${vspace.header.borderBottom}px;
  display: flex;
  height: ${remify(vspace.header.height.mobile)};
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: ${elevation.topAppBar};

  ${props => props.show && cssAnimation.show}
  ${props => props.hide && cssAnimation.hide}

  @media only screen and ${breakpoint.fontSize} {
    height: ${remify(vspace.header.height.desktop)};
  }
`;

DivTopAppBar.propTypes = {
  hide: PropTypes.bool,
  show: PropTypes.bool,
};

export default DivTopAppBar;
