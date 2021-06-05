import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, hspace, sideMargin} from 'src/utils/hspaceScheme';
import {colour} from 'src/utils/colorScheme';

const ButtonMenu = styled.button.attrs(props => ({
  type: 'button',
}))`
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
  &:focus,
  &:hover {
    outline: none;
    text-shadow: 0 0 3px ${colour.buttonMenu.focus};
  }
  &:active {
    text-shadow: none;
  }
  & svg {
    fill: ${colour.buttonMenu.default};
  }
  &:focus svg,
  &:hover svg {
    fill: ${colour.buttonMenu.focus};
  }
  &:active svg {
    fill: ${colour.buttonMenu.default};
  }
`;

ButtonMenu.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
export default ButtonMenu;
