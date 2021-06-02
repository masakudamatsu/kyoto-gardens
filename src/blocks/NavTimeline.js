import styled from 'styled-components';
import PropTypes from 'prop-types';

import {colour} from 'src/utils/colorScheme';
import {breakpoint, hspace, maxColumnWidth} from 'src/utils/hspaceScheme';
import remify from 'src/utils/remify';
import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

const NavTimeline = styled.nav`
  background-color: ${colour.index.main.background};
  color: ${colour.index.main.color};
  margin: 0 auto;
  max-width: ${remify(maxColumnWidth)};
  overflow: hidden; /* to set height large enough to contain floated child elements; see https://www.internetingishard.com/html-and-css/floats/#floats-for-grids */
  ${getPaddingBottom('index')}
  ${hspace.index.marginSide.desktop}
& a,
& a:visited {
    color: ${colour.index.main.color};
  }
`;

function getPaddingBottom(pageName) {
  return `
    padding-bottom: ${remify(
      vspace[pageName].betweenSections.mobile -
        spaceToTrim[pageName].main.bottom.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${remify(
        vspace[pageName].betweenSections.desktop -
          spaceToTrim[pageName].main.bottom.desktop,
      )};
    }
  `;
}

NavTimeline.propTypes = {};

export default NavTimeline;
