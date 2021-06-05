import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {colour} from 'src/utils/colorScheme';
import {font} from 'src/utils/fontScheme';

const Svg = styled.svg`
  fill: ${colour.index.siteTitle.color};
  font-family: ${font.index.siteTitle.family};
  font-size: ${font.index.siteTitle.size};
  font-weight: ${font.index.siteTitle.weight};
  width: 100%;
`;

const AlternateCap = styled.tspan`
  font-feature-settings: 'salt';
`;

const SiteTitle = ({ariaHidden, className}) => {
  return (
    <Svg
      viewBox="0 0 320 181"
      role="img"
      aria-labelledby="site-title"
      aria-hidden={ariaHidden}
      className={className} // to change style with styled-components; see https://spectrum.chat/styled-components/general/styling-an-existing-component~e79a3695-db96-417f-809f-b4abed9f3c82?m=MTU1MTYzNzQyMTAyNA==
      data-testid="site-title"
    >
      <title id="site-title">Translating Japanese Gardens</title>
      <text>
        <tspan id="Translating" dx="0 1 2 -2 -2 0 0 -1 1 -1 -2" x="19" y="58">
          <AlternateCap>T</AlternateCap>ranslating
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
