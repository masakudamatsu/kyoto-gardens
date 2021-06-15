import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import NavigationItem from 'src/components/NavigationItem';
import NavTop from 'src/elements/NavTop';
import SvgHamburger from 'src/elements/SvgHamburger';

const Navigation = ({currentPage}) => {
  // Toggle the modal navigation drawer
  // cf. https://github.com/willmcpo/body-scroll-lock#reactes6-with-refs

  const [hidden, setHidden] = useState(() => {
    return true;
  });
  const navtop = useRef();

  const showModalDrawer = () => {
    setHidden(false);
    disableBodyScroll(navtop);
  };
  const hideModalDrawer = () => {
    setHidden(true);
    enableBodyScroll(navtop);
  };
  const toggleDrawer = event => {
    if (hidden) {
      showModalDrawer();
    } else {
      hideModalDrawer();
    }
  };

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []); // not sure if we need this, though

  // Dismiss the drawer when clicking outside it
  // cf. https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/#close-the-menu-by-clicking-outside-of-it

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

  useOnClickOutside(navtop, hideModalDrawer);

  return (
    <NavTop ref={navtop}>
      <NavTop.Button
        aria-controls="navigation-drawer"
        aria-expanded={!hidden}
        currentPage={currentPage}
        onClick={toggleDrawer}
        type="button"
      >
        <SvgHamburger />
      </NavTop.Button>
      <NavTop.Ul data-testid="nav-menu" hidden={hidden} id="navigation-drawer">
        <NavigationItem
          currentPage={currentPage}
          pageName="byodoin"
          textContent="Byodo-in"
        />
        <NavigationItem
          currentPage={currentPage}
          pageName="daisenin"
          textContent="Daisen-in"
        />
        <NavigationItem
          currentPage={currentPage}
          pageName="kohoan"
          textContent="Koho-an"
        />
        <NavigationItem
          currentPage={currentPage}
          pageName="osawa-pond"
          textContent="Osawa Pond"
        />
        <NavigationItem
          currentPage={currentPage}
          pageName="ryoanji"
          textContent="Ryoan-ji"
        />
        <NavigationItem
          currentPage={currentPage}
          pageName="saihoji"
          textContent="Saiho-ji"
        />
        <NavTop.Li>About</NavTop.Li>
      </NavTop.Ul>
    </NavTop>
  );
};

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Navigation;
