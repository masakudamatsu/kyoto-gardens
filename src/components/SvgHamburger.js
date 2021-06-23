import React from 'react';
import PropTypes from 'prop-types';

import Button from 'src/elements/Button';

const SvgHamburger = ({className, navShown}) => {
  return (
    <Button.SvgSurface
      aria-hidden={navShown}
      aria-labelledby="hamburger"
      className={className} // to change style with styled-components; see https://spectrum.chat/styled-components/general/styling-an-existing-component~e79a3695-db96-417f-809f-b4abed9f3c82?m=MTU1MTYzNzQyMTAyNA==
      data-testid="hamburger"
      role="img"
      viewBox="0 0 25 48"
    >
      <title id="hamburger">Menu</title>
      <text
        transform="translate(12.500000, 24.000000) rotate(90.000000) translate(-12.500000, -24.000000)" // translate() moves the origin of rotation to the center of the image
      >
        <tspan x="-6" y="36.5">
          III
        </tspan>
      </text>
    </Button.SvgSurface>
  );
};

SvgHamburger.propTypes = {
  navShown: PropTypes.bool,
};

export default SvgHamburger;
