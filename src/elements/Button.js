import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, hspace, sideMargin} from 'src/utils/hspaceScheme';
import {colour} from 'src/utils/colorScheme';

const Button = styled.button`
  height: 100%;
  width: 100%;

  &:focus,
  &:hover {
    outline: none;
    text-shadow: 0 0 3px ${colour.buttonMenu.focus};
  }
  &:active {
    text-shadow: none;
  }
`;
Button.propTypes = {};

Button.DivFrame = styled.div`
  /* minimum touch target size: https://web.dev/accessible-tap-targets/ */
  height: ${hspace.buttonMenu.width}px;
  width: ${hspace.buttonMenu.width}px;
  /* vertical spacing */
  align-self: center;
  /* horizontal spacing */
  position: absolute;
  ${({currentPage}) => `
    left: ${sideMargin(currentPage).mobile - hspace.buttonMenu.paddingLeft}px;
    @media only screen and ${breakpoint.sideMargin(currentPage)} {
      left: ${sideMargin(currentPage).tablet - hspace.buttonMenu.paddingLeft}px;
    }
    @media only screen and ${breakpoint.fontSize} {
      left: ${
        sideMargin(currentPage).desktop - hspace.buttonMenu.paddingLeft
      }px;
    }
  `}
`;
Button.DivFrame.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

Button.SvgSurface = styled.svg`
  font-family: 'Reforma 1918', sans-serif; /* 'sans-serif' to make the fallback look like a standard hamburger menu icon */
  font-size: 33px; /* to make the 'height' of uppercase I 25px long */
  font-weight: 300;
  height: 100%; /* i.e. 48px set in NavTop.Button.js */
  ${Button} & {
    fill: ${colour.buttonMenu.default};
  }
  ${Button}:focus &,
  ${Button}:hover & {
    fill: ${colour.buttonMenu.focus};
  }
  ${Button}:active & {
    fill: ${colour.buttonMenu.default};
  }
  /* Add the background and border */
  background-color: ${colour.header.background};
  border: 1px solid ${colour.buttonMenu.border};
  border-radius: 4px;
  height: 100%;
  width: 100%;
`;

export default Button;
