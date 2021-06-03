import Head from 'next/head';

import Footer from 'src/components/Footer';
import Main from 'src/blocks/Main';
import {index} from 'src/utils/metadata';
import SiteTitle from 'src/components/SiteTitle';
import Timeline from 'src/components/Timeline';
import VisuallyHidden from 'src/elements/VisuallyHidden';

const webfont = {
  server: 'https://fonts.gstatic.com',
  stylesheet: `https://fonts.googleapis.com/css2?${index.googleFonts.join(
    '&',
  )}&display=swap`,
}; // See https://csswizardry.com/2020/05/the-fastest-google-fonts/

function HomePage() {
  return (
    <>
      <Head>
        <title>{index.title}</title>
        <meta name="description" content={index.description} />
        {/*** Web font loading ***/}
        <link rel="preconnect" href={webfont.server} />
        {/* For faster web font loading. */}
        <link rel="preload" as="style" href={webfont.stylesheet} />
        {/* For faster web font loading. */}
        <link
          rel="stylesheet"
          href={webfont.stylesheet}
          media="print"
          onLoad="this.media='all'"
        />
        {/* For actually reading the @font-face stylesheet. It's also a fallback for browsers incompatible with <link rel="preload" />. */}
        <noscript>
          <link rel="stylesheet" href={webfont.stylesheet} />
        </noscript>
        {/* Fallback for JavaScript-disabled browsers.  */}
      </Head>
      <Main.Index>
        <VisuallyHidden as="h1">Translating Japanese Gardens</VisuallyHidden>
        <SiteTitle ariaHidden />
        <Timeline />
      </Main.Index>
      <Footer />
    </>
  ); // see https://codepen.io/masakudamatsu/pen/QWpbELb
}

export default HomePage;
