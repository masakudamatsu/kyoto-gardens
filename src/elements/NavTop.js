import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, hspace, sideMargin} from 'src/utils/hspaceScheme';
import {colour} from 'src/utils/colorScheme';
import {font, makeCapHeightToBe} from 'src/utils/fontScheme';
import remify from 'src/utils/remify';
import {vspace, spaceToTrim} from 'src/utils/vspaceScheme';

const NavTop = styled.nav`
  display: flex;
`;

NavTop.Ul = styled.ul`
  background-color: ${colour.header.background};
  color: ${colour.header.color};
  height: 85vh;
  left: 0;
  list-style: none;
  max-width: 320px;
  position: fixed;
  top: ${vspace.header.height.mobile}px;
  width: 85vw;
  & a,
  & a:visited {
    color: ${colour.header.color};
    text-decoration: none;
  }
`;
NavTop.Ul.propTypes = {};

NavTop.Li = styled.li`
  ${({currentPage, pageName}) =>
    currentPage === pageName
      ? `
    background-color: white;
    color: black;
  `
      : `
    background-color: inherit;
    color: inherit;
  `}
  border-bottom: 1px solid gray;
  font-family: ${font.topAppBar.family};
  font-size: ${remify(
    makeCapHeightToBe(font.topAppBar.capHeight.mobile, font.topAppBar.metrics),
  )};
  font-weight: ${font.topAppBar.weight};
  line-height: normal;
  padding-bottom: ${remify(
    vspace.topAppBar.bottom.mobile - spaceToTrim.topAppBar.bottom.mobile,
  )};
  padding-left: ${remify(vspace.topAppBar.top.mobile)};
  padding-top: ${remify(
    vspace.topAppBar.top.mobile - spaceToTrim.topAppBar.top.mobile,
  )};
  position: relative;
  & a,
  & a:visited {
    color: inherit;
    text-decoration: none;
  }
  & a:focus,
  & a:hover {
    outline: none;
  }
  & a::after {
    content: ${({currentPage, pageName}) =>
      currentPage === pageName ? `''` : `'>'`};
    height: 100%;
    left: 0;
    padding-bottom: ${remify(
      vspace.topAppBar.bottom.mobile - spaceToTrim.topAppBar.bottom.mobile,
    )};
    padding-right: ${remify(vspace.topAppBar.top.mobile)};
    padding-top: ${remify(
      vspace.topAppBar.top.mobile - spaceToTrim.topAppBar.top.mobile,
    )};
    position: absolute;
    text-align: right;
    top: 0;
    width: 100%;
  }
  & a:focus::after,
  & a:hover::after {
    background-color: ${({currentPage, pageName}) =>
      currentPage === pageName
        ? `transparent`
        : colour.index.link.onHoverBackground};
  }
`;
NavTop.Li.propTypes = {
  currentPage: PropTypes.string,
  pageName: PropTypes.string,
};

export default NavTop;
