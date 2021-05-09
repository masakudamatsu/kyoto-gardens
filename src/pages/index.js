import Head from 'next/head';

import {Main} from 'src/blocks/Main';
import Figure from 'src/blocks/Figure';
import H2Index from 'src/elements/H2Index';
import ImageWithPlaceholder from '../elements/ImageWithPlaceholder';
import Section from 'src/blocks/Section';
import {index} from 'src/utils/specIndex';

const webfont = {
  server: 'https://fonts.gstatic.com',
  stylesheet:
    'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&family=Shippori+Mincho:wght@500&display=swap',
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
        <Section>
          <H2Index>
            <span>circa</span> 1480
          </H2Index>
          <Figure>
            <ImageWithPlaceholder
              src="/images/ryoanji-banner-spring-large.jpg"
              width={1882}
              height={1405}
              alt="A view of Ryoanji Rock Garden"
            />
          </Figure>
        </Section>
        <Section>
          <H2Index>1643</H2Index>
          <Figure>
            <ImageWithPlaceholder
              src="/kohoan/bosen-garden-view.jpg"
              width={1200}
              height={800}
              alt="A view of Kohoan Bosen Teahouse Garden"
            />
          </Figure>
        </Section>
      </Main.Index>
    </>
  ); // see https://codepen.io/masakudamatsu/pen/QWpbELb
}

export default HomePage;
