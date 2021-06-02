import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {index} from 'src/utils/specIndex';
import remify from 'src/utils/remify';
import {breakpoint} from 'src/utils/hspaceScheme';

import {seigaihaPattern, shippoPattern} from 'src/utils/patterns';

import {colour} from 'src/utils/colorScheme';
import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

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
  color: ${colour.index.main.color};
  margin: 0 auto;
  max-width: ${remify(index.main.maxWidth)};
  overflow: hidden; /* to set height large enough to contain floated child elements; see https://www.internetingishard.com/html-and-css/floats/#floats-for-grids */
  ${getPaddingBottom('index')}
  & a,
  & a:visited {
    color: ${colour.index.main.color};
  }
`;

function getPaddingBottom(pageName) {
  return css`
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

Main.propTypes = {};

export default Main;
