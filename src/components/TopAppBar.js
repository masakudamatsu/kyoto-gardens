import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from 'src/blocks/Header';
import SiteTitle from 'src/components/SiteTitle';

import {colour} from 'src/utils/colorScheme';

const SiteTitleInWhite = styled(SiteTitle)`
  fill: ${colour.header.color};
`;

const TopAppBar = () => {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    let scrollPosition = 0;

    // for dealing with Safari
    const pageHeight = document.body.offsetHeight;
    const viewportHeight = window.innerHeight;

    function handleScroll() {
      const newScrollPosition = window.pageYOffset; // returns the Y coordinate of the top edge of the current viewport. https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset

      if (newScrollPosition === scrollPosition) {
        return;
      }

      // Deal with Safari which updates the window.pageYOffset value when the page bounces back at the top and bottom.
      if (
        newScrollPosition < 0 ||
        newScrollPosition > pageHeight - viewportHeight
      ) {
        return;
      }

      const shouldShow = newScrollPosition < scrollPosition;

      setShow(shouldShow);

      scrollPosition = newScrollPosition;
    }

    // set scroll listener
    window.addEventListener('scroll', handleScroll, {passive: true});

    // clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header hide={!show} show={show}>
      <SiteTitleInWhite />
    </Header>
  );
};

TopAppBar.propTypes = {};

export default TopAppBar;
