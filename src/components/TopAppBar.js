import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DivTopAppBar from 'src/elements/DivTopAppBar';
import SiteTitle from 'src/components/SiteTitle';
import SvgHamburger from 'src/elements/SvgHamburger';
import Header from 'src/elements/Header';
import NavTop from 'src/elements/NavTop';

import {colour} from 'src/utils/colorScheme';

const SiteTitleInWhite = styled(SiteTitle)`
  fill: ${colour.header.color};
`;

const TopAppBar = ({currentPage}) => {
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

  const [hidden, setHidden] = useState(true);

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  };

  const node = useRef();
  useOnClickOutside(node, () => setHidden(true));

  return (
    <DivTopAppBar hide={!show} show={show}>
      <NavTop>
        <NavTop.Button
          aria-controls="navigation-drawer"
          aria-expanded={!hidden}
          currentPage={currentPage}
          onClick={() => setHidden(!hidden)}
          type="button"
        >
          <SvgHamburger />
        </NavTop.Button>
        <NavTop.Ul
          data-testid="nav-menu"
          hidden={hidden}
          id="navigation-drawer"
          ref={node}
        >
          <li>About</li>
          <li>
            <a>Byodo-in</a> (coming soon)
          </li>
          <li>
            <a>Daisen-in</a> (coming soon)
          </li>
          <li>
            <a href="kohoan">Koho-an</a>
          </li>
          <li>
            <a>Osawa Pond</a> (coming soon)
          </li>
          <li>
            <a href="ryoanji">Ryoan-ji</a>
          </li>
          <li>
            <a>Saiho-ji</a> (coming soon)
          </li>
        </NavTop.Ul>
      </NavTop>
      <Header>
        <SiteTitleInWhite />
      </Header>
    </DivTopAppBar>
  );
};

TopAppBar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default TopAppBar;
