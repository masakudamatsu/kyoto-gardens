// components/Layout.js

import TopAppBar from 'src/components/TopAppBar';
import Footer from 'src/blocks/Footer';
import Timeline from 'src/components/Timeline';

import {footer} from 'src/utils/metadata';

export default function Layout({children}) {
  return (
    <>
      <TopAppBar />
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
        <Timeline />
        <Footer.BottomBackground>
          <Footer.P centerAligned>
            <Footer.Small>{footer.copyrightNotice}</Footer.Small>
          </Footer.P>
        </Footer.BottomBackground>
      </Footer>
    </>
  );
}
