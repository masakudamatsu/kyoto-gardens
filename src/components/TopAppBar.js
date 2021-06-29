import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DivTopAppBar from 'src/elements/DivTopAppBar';
import SiteTitle from 'src/components/SiteTitle';
import Header from 'src/elements/Header';

import {colour} from 'src/utils/colorScheme';

const SiteTitleInWhite = styled(SiteTitle)`
  fill: ${colour.header.font};
`;

const TopAppBar = ({navigation}) => {
  // Hide/Show the top app bar when scrolling down/up

  const [show, setShow] = useState(true);

  useEffect(() => {
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
    <DivTopAppBar hide={!show} show={show} data-testid="top-app-bar">
      {navigation}
      <Header>
        <SiteTitleInWhite />
      </Header>
    </DivTopAppBar>
  );
};

TopAppBar.propTypes = {
  navigation: PropTypes.element,
};

export default TopAppBar;
