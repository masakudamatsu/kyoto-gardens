import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  fill: #215563;
  font-family: 'Reforma 1918';
  font-size: 48px;
  font-weight: 500;
  width: 100%;
`;

const SiteTitle = ({ariaHidden}) => {
  return (
    <Svg
      viewBox="0 0 320 181"
      role="img"
      aria-labelledby="alt-text"
      aria-hidden={ariaHidden}
    >
      <title id="alt-text">Translating Japanese Gardens</title>
      <text id="Translating" x="19" y="58">
        Translating
      </text>
      <text id="Japanese" x="109.896" y="107">
        Japanese
      </text>
      <text id="Gardens" x="47.12" y="163">
        Gardens
      </text>
    </Svg>
  );
};

SiteTitle.propTypes = {
  ariaHidden: PropTypes.bool,
};

export default SiteTitle;
