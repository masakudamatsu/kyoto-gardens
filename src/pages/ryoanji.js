import Head from 'next/head';

import {title, description} from '../metadata/ryoanji';
import Carousel from '../blocks/Carousel';
import FigCaption from '../elements/FigCaption';
import FigureBordered from '../blocks/FigureBordered';
import H2 from '../elements/H2';
import Link from '../elements/Link';
import P from '../elements/P';
import Spacer from '../elements/Spacer';
import Span from '../elements/Span';
import Section from '../blocks/Section';

function Ryoanji() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Carousel>
        <Carousel.Spring
          src="/images/ryoanji-banner-spring-small.jpg"
          srcSet="/images/ryoanji-banner-spring-large.jpg 1882w, 
                  /images/ryoanji-banner-spring-small.jpg 941w"
          sizes="(min-width: 941px) 941px, 100vw"
          alt="Ryoan-ji Rock Garden in spring"
        />
        <Carousel.Summer
          src="/images/ryoanji-banner-summer-small.jpg"
          srcSet="/images/ryoanji-banner-summer-large.jpg 1882w, 
                  /images/ryoanji-banner-summer-small.jpg 941w"
          sizes="(min-width: 941px) 941px, 100vw"
          alt="Ryoan-ji Rock Garden in summer"
        />
        <Carousel.Autumn
          src="/images/ryoanji-banner-autumn-small.jpg"
          srcSet="/images/ryoanji-banner-autumn-large.jpg 1882w, 
                  /images/ryoanji-banner-autumn-small.jpg 941w"
          sizes="(min-width: 941px) 941px, 100vw"
          alt="Ryoan-ji Rock Garden in autumn"
        />
        <Carousel.Winter
          src="/images/ryoanji-banner-winter-small.jpg"
          srcSet="/images/ryoanji-banner-winter-large.jpg 1882w, 
                  /images/ryoanji-banner-winter-small.jpg 941w"
          sizes="(min-width: 941px) 941px, 100vw"
          alt="Ryoan-ji Rock Garden in winter"
        />
      </Carousel>
      <Section>
        <H2 hidden>Introduction</H2>
        <P>
          Pick any travel guide for Kyoto. I'm sure you’ll find Ryoan-ji, a Zen
          Buddhist temple famous for its Rock Garden (pictured above).
        </P>
        <Spacer betweenParagraphs textOnly />
        <P>
          This zen garden is made of fifteen rocks, surrounded by patches of
          moss, laid out in the ocean of gravels on a walled rectangular plot.
        </P>
        <Spacer betweenParagraphs textOnly />
        <P>And that's it…</P>
        <Spacer betweenParagraphs textOnly />
        <P>
          If you have been to this garden, you must have been utterly puzzled
          during your visit. Too abstract and too minimal. I also scratched my
          head during my first visit to the garden. My second visit a year later
          didn’t help me figure out anything, either.
        </P>
        <Spacer betweenParagraphs textOnly />
        <P>
          During the third visit, however, the whole garden started to make
          sense to me. It taught me how to live a happy life, with the layout of
          the fifteen rocks as the “textbook”.
        </P>
      </Section>
      <Spacer betweenSections aboveFigure />
      <Section>
        <H2>Get the Viewpoint Right</H2>
        <Spacer betweenParagraphs belowFigure />
        <P>
          The key to understand this cryptic garden is to see it from where
          you're supposed to: halfway between the left and right edges of this
          rectangular garden, indicated with the gray arrow in the floor plan
          below:
        </P>
        <Spacer betweenLines aboveFigure />
        <FigureBordered>
          <FigureBordered.Img
            src="/images/ryoanji-jardin-seco-plano-mapa.jpg"
            alt=""
          />
          <FigCaption>
            The floor plan of Ryoan-ji <Span nowrap>Rock Garden</Span>
            <FigCaption.Footer>
              Adapted from{' '}
              <Link
                class="link"
                href="https://www.google.co.jp/books/edition/_/M_k4AQAAIAAJ"
                target="_blank"
              >
                Slawson (1987)
              </Link>
              , p. 96.
            </FigCaption.Footer>
          </FigCaption>
        </FigureBordered>
        <Spacer betweenParagraphs belowFigure />
        <P>
          My third visit to the garden was different from the previous ones in
          that I had this piece of knowledge, learned from a book on Japanese
          gardens (
          <Link
            href="https://www.google.co.jp/books/edition/_/rIjoPQAACAAJ?hl=en"
            target="_blank"
          >
            Tanaka 2002
          </Link>
          , pp. 58-59). The book says that the whole garden was constructed to
          be seen from this viewpoint.
        </P>
      </Section>
      <Spacer betweenSections aboveFigure />
    </>
  );
}

export default Ryoanji;
