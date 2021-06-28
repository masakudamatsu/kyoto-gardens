import styled from 'styled-components';
import PropTypes from 'prop-types';

import {animation} from 'src/utils/specAnimation';
import {colour} from 'src/utils/colorScheme';
import {font, makeCapHeightToBe} from 'src/utils/fontScheme';
import remify from 'src/utils/remify';
import {vspace, spaceToTrim} from 'src/utils/vspaceScheme';

const NavTop = styled.nav`
  display: flex;
`;

NavTop.Ul = styled.ul`
  color: ${colour.navTop.font.ul};
  height: auto;
  left: 0;
  list-style: none;
  max-width: 320px;
  position: fixed;
  top: ${vspace.header.height.mobile}px;
  width: 85vw;
  & a,
  & a:visited {
    color: inherit;
    text-decoration: none;
  }
  /* Animate the appearance/disappearance */
  transform: ${({navShown}) =>
    navShown ? `translateX(0)` : `translateX(-85vw)`};
  ${animation.navTop.speed}
`;
NavTop.Ul.propTypes = {
  navShown: PropTypes.bool,
};

NavTop.Li = styled.li`
  ${({currentPage, pageName}) =>
    currentPage === pageName
      ? `
    background-color: ${colour.navTop.background.currentPage};
  `
      : `
    background-color: ${colour.navTop.background.li};
  `}
  border-bottom: 1px solid ${colour.navTop.border.li};
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
        : colour.navTop.overlayOnFocus.li};
  }
`;
NavTop.Li.propTypes = {
  currentPage: PropTypes.string,
  pageName: PropTypes.string,
};

export default NavTop;
