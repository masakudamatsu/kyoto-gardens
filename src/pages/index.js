import Head from 'next/head';

import Main from 'src/blocks/Main';
import ImageWithPlaceholder from '../elements/ImageWithPlaceholder';
import IndexSection from 'src/blocks/IndexSection';
import {index} from 'src/utils/specIndex';
import SiteTitle from 'src/components/SiteTitle';
import Spacer from 'src/elements/Spacer';
import P from 'src/elements/P';
import Span from 'src/elements/Span';
import VisuallyHidden from 'src/elements/VisuallyHidden';

const webfont = {
  server: 'https://fonts.gstatic.com',
  stylesheet:
    'https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@700&family=Playfair+Display+SC:wght@400&family=Shippori+Mincho+B1:wght@500&display=swap',
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
        <IndexSection>
          <IndexSection.H2>
            <span>circa</span> 1499
          </IndexSection.H2>
          <IndexSection.Card>
            <IndexSection.Figure>
              <ImageWithPlaceholder
                src="/images/ryoanji-banner-spring-large.jpg"
                width={1882}
                height={1405}
                alt="A view of Ryoanji Rock Garden"
              />
            </IndexSection.Figure>
            <IndexSection.Kanji>龍安寺</IndexSection.Kanji>
            <a href="ryoanji">
              <IndexSection.Latin gardenName="ryoanji">
                Ryoan-ji
              </IndexSection.Latin>
            </a>
            <IndexSection.P>
              Reminding us of the principle of Zen
            </IndexSection.P>
          </IndexSection.Card>
        </IndexSection>
        <Spacer.Index />
        <IndexSection>
          <IndexSection.H2>1643</IndexSection.H2>
          <IndexSection.Card>
            <IndexSection.Figure>
              <ImageWithPlaceholder
                src="/kohoan/bosen-garden-view.jpg"
                width={1200}
                height={800}
                alt="A view of Kohoan Bosen Teahouse Garden"
              />
            </IndexSection.Figure>
            <a href="kohoan">
              <IndexSection.Latin gardenName="kohoan">
                Koho-an
              </IndexSection.Latin>
            </a>
            <IndexSection.Kanji>孤篷庵</IndexSection.Kanji>
            <IndexSection.P>
              Letting us sail at sunset{' '}
              <Span nowrap>to see the full moon offshore</Span>
            </IndexSection.P>
          </IndexSection.Card>
        </IndexSection>
      </Main.Index>
    </>
  ); // see https://codepen.io/masakudamatsu/pen/QWpbELb
}

export default HomePage;
