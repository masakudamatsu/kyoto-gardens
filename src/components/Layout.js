import {useState} from 'react';
import PropTypes from 'prop-types';
import FocusLock from 'react-focus-lock';

import DivScrim from 'src/elements/DivScrim';
import Footer from 'src/blocks/Footer';
import Navigation from 'src/components/Navigation';
import Timeline from 'src/components/Timeline';
import TopAppBar from 'src/components/TopAppBar';

import {footer} from 'src/utils/metadata';

export default function Layout({children, currentPage}) {
  const [navShown, setNavShown] = useState(false);

  return (
    <>
      <FocusLock disabled={!navShown}>
        <TopAppBar
          navigation={
            <Navigation
              currentPage={currentPage}
              navShown={navShown}
              setNavShown={setNavShown}
            />
          }
        />
      </FocusLock>
      <DivScrim navShown={navShown} />
      {children}
      <Footer>
        <Footer.TopBackground>
          <Footer.P>
            <Footer.DropCap /> {footer.text}
          </Footer.P>
          <Footer.P>
            Currently, essays on the following gardens are available:
          </Footer.P>
        </Footer.TopBackground>
        <Timeline currentPage={currentPage} />
        <Footer.BottomBackground>
          <Footer.P centerAligned>
            <Footer.Small>{footer.copyrightNotice}</Footer.Small>
          </Footer.P>
        </Footer.BottomBackground>
      </Footer>
    </>
  );
}

Layout.propTypes = {
  currentPage: PropTypes.string,
};
