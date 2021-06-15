import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

import NavTop from 'src/elements/NavTop';

const NavigationItem = ({currentPage, pageName, textContent}) => {
  return (
    <NavTop.Li currentPage={currentPage} pageName={pageName}>
      {currentPage === pageName ? (
        /* eslint-disable-next-line */
        <a>{textContent}</a>
      ) : (
        <a href={pageName}>{textContent}</a>
      )}
    </NavTop.Li>
  );
};

NavigationItem.propTypes = {
  currentPage: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};

export default NavigationItem;
