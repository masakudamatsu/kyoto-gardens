import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  font-family: 'Reforma 1918', sans-serif; /* 'sans-serif' to make the fallback look like a standard hamburger menu icon */
  font-size: 33px; /* to make the 'height' of uppercase I 25px long */
  font-weight: 300;
  height: 100%; /* i.e. 48px set in ButtonMenu.js */
`;

const Hamburger = ({className}) => {
  return (
    <Svg
      viewBox="0 0 25 48"
      role="img"
      aria-labelledby="hamburger"
      className={className} // to change style with styled-components; see https://spectrum.chat/styled-components/general/styling-an-existing-component~e79a3695-db96-417f-809f-b4abed9f3c82?m=MTU1MTYzNzQyMTAyNA==
    >
      <title id="hamburger">Menu</title>
      <text
        transform="translate(12.500000, 24.000000) rotate(90.000000) translate(-12.500000, -24.000000)" // translate() moves the origin of rotation to the center of the image
      >
        <tspan x="-6" y="36.5">
          III
        </tspan>
      </text>
    </Svg>
  );
};

Hamburger.propTypes = {};

export default Hamburger;
