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

const SiteTitle = ({ariaHidden, className}) => {
  return (
    <Svg
      viewBox="0 0 320 181"
      role="img"
      aria-labelledby="alt-text"
      aria-hidden={ariaHidden}
      className={className} // to change style with styled-components; see https://spectrum.chat/styled-components/general/styling-an-existing-component~e79a3695-db96-417f-809f-b4abed9f3c82?m=MTU1MTYzNzQyMTAyNA==
    >
      <title id="alt-text">Translating Japanese Gardens</title>
      <text>
        <tspan id="Translating" dx="0 1 2 -2 -2 0 0 -1 1 -1 -2" x="19" y="58">
          Translating
        </tspan>
        <tspan id="Japanese" dx="0 -1 -1 -1 -2 -2 0 -1" x="109.896" y="107">
          Japanese
        </tspan>
        <tspan id="Gardens" dx="0 -1 -1 0 -2 -1 -2" x="47.12" y="163">
          Gardens
        </tspan>
      </text>
    </Svg>
  );
};

SiteTitle.propTypes = {
  ariaHidden: PropTypes.bool,
};

export default SiteTitle;
