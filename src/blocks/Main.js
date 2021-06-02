import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, maxColumnWidth} from 'src/utils/hspaceScheme';
import {colour} from 'src/utils/colorScheme';
import remify from 'src/utils/remify';
import {seigaihaPattern, shippoPattern} from 'src/utils/patterns';
import {vspace} from 'src/utils/vspaceScheme';

const Main = styled.main`
  padding-top: ${remify(vspace.header.height.mobile)};
  @media only screen and ${breakpoint.fontSize} {
    padding-top: ${remify(vspace.header.height.desktop)};
  }
`; // common style for all non-index pages

Main.Ryoanji = styled(Main)`
  ${shippoPattern}
`;

Main.Kohoan = styled(Main)`
  ${seigaihaPattern}
`;

Main.Index = styled.main`
  background-color: ${colour.index.main.background};
  margin: 0 auto;
  max-width: ${remify(maxColumnWidth)};
`;

Main.propTypes = {};

export default Main;
