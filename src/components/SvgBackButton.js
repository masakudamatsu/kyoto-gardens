import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  font-family: 'Reforma 1918', sans-serif; /* 'sans-serif' to make the fallback look like a standard hamburger menu icon */
  font-size: 33px; /* to make the 'height' of uppercase I 25px long */
  font-weight: 300;
  height: 100%; /* i.e. 48px set in NavTop.Button.js */
`;

const SvgBackButton = ({className}) => {
  return (
    <Svg
      aria-labelledby="back-button"
      className={className} // to change style with styled-components; see https://spectrum.chat/styled-components/general/styling-an-existing-component~e79a3695-db96-417f-809f-b4abed9f3c82?m=MTU1MTYzNzQyMTAyNA==
      role="img"
      viewBox="0 0 25 48"
    >
      <title id="back-button">Back to main content</title>
      <text x="0" y="36.5">
        {`<`}
      </text>
    </Svg>
  );
};

SvgBackButton.propTypes = {};

export default SvgBackButton;
