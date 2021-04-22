import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a`
  &:link,
  &:visited {
    /* Fallback for Opera Mini */
    background: hsla(193, 50%, 26%, 0.1);
    /* Customize the underline style (this overrides the fallback )*/
    background: linear-gradient(
        to bottom,
        transparent 50%,
        hsla(193, 50%, 26%, 0.9) 50%,
        hsla(193, 50%, 26%, 0.9)
      )
      no-repeat 0 0.973em; /* 0.925em is the baseline height on MacOS. We add 1px or 1px/20.752px = 0.48em for iOS because the underline touches the baseline with 0.925em. */
    background-size: 100% 2px;
    /* set the color to be the same as the body text */
    color: inherit;
    /* Remove the default underline */
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: hsla(193, 50%, 26%, 0.9);
  }
`;

Link.propTypes = {};
export default Link;
