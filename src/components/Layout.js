// components/Layout.js

import TopAppBar from 'src/components/TopAppBar';
import Footer from 'src/components/Footer';
import Timeline from 'src/components/Timeline';

export default function Layout({children}) {
  return (
    <>
      <TopAppBar />
      {children}
      <Footer>
        <Footer.TopBackground>
          <Footer.P>
            <Footer.DropCap /> presents alternative takes on historical gardens
            in Japan, attempting to uncover the intentions behind their
            landscape design. The entire site is a one-person project: articles
            are written, photographs taken (unless otherwise indicated), and web
            pages designed and coded, by Masa Kudamatsu, a native Japanese
            speaker who loves living in Kyoto for its amazing gardens.
          </Footer.P>
          <Footer.P>
            Currently, essays on the following gardens are available:
          </Footer.P>
        </Footer.TopBackground>
        <Timeline />
        <Footer.BottomBackground>
          <Footer.P centerAligned>
            <Footer.Small>
              &copy; 2021 Masayuki Kudamatsu. All rights reserved.
            </Footer.Small>
          </Footer.P>
        </Footer.BottomBackground>
      </Footer>
    </>
  );
}
