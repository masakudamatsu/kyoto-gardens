import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, hspace, sideMargin} from 'src/utils/hspaceScheme';

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
    text-shadow: 0 0 3px hsl(0, 0%, 100%);
  }
  & svg {
    fill: hsl(
      0,
      0%,
      78%
    ); /* 4.5 to 1 against the primary color: https://contrast-ratio.com/#hsl%280%2C0%25%2C78%25%29-on-hsla%28193%2C%2050%25%2C%2026%25%2C%200.9%29 */
  }
  &:focus svg,
  &:hover svg {
    fill: hsl(0, 0%, 100%);
  }
`;

ButtonMenu.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
export default ButtonMenu;
