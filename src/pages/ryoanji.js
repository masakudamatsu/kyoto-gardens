import Head from 'next/head';

import Abbr from '../elements/Abbr';
import Article from '../blocks/Article';
import Carousel from '../blocks/Carousel';
import Cite from '../elements/Cite';
import FigCaption from '../elements/FigCaption';
import FigureFullbleed from '../blocks/FigureFullbleed';
import FigureWithBorder from '../blocks/FigureWithBorder';
import FigureWithMargin from '../blocks/FigureWithMargin';
import H1 from '../elements/H1';
import H2 from '../elements/H2';
import H3 from '../elements/H3';
import ImageWithPlaceholder from '../elements/ImageWithPlaceholder';
import Main from '../blocks/Main';
import P from '../elements/P';
import Span from '../elements/Span';
import Section from '../blocks/Section';
import Hr from '../elements/Hr';
import Layout from '../components/Layout';
import Spacer from 'src/elements/Spacer';
import Strong from '../elements/Strong';
import SubSection from '../blocks/SubSection';
import VisuallyHidden from '../elements/VisuallyHidden';
import {index, ryoanji} from 'src/utils/metadata';

export default function Ryoanji() {
  const webfont = {
    server: 'https://fonts.gstatic.com',
    stylesheet: `https://fonts.googleapis.com/css2?${ryoanji.googleFonts.join(
      '&',
    )}&${index.googleFonts.join('&')}&display=swap`,
  }; // See https://csswizardry.com/2020/05/the-fastest-google-fonts/
  return (
    <>
      <Head>
        <title>{ryoanji.title}</title>
        <meta name="description" content={ryoanji.description} />
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
      <Layout>
        <Main.Ryoanji>
          <Article>
            <Article.Header>
              <H1.Wrapper>
                <H1 aria-label="Ryoan-ji Rock Garden">
                  <H1.Ryoanji>Ryoan-ji</H1.Ryoanji>
                  <H1.RockGarden>Rock Garden</H1.RockGarden>
                </H1>
              </H1.Wrapper>{' '}
              <Carousel>
                <Carousel.Spring>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-banner-spring-large.jpg"
                    width={1882}
                    height={1405}
                    alt="Ryoan-ji Rock Garden in spring"
                    quality={100}
                    priority
                  />
                </Carousel.Spring>
                <Carousel.Summer>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-banner-summer-large.jpg"
                    width={1882}
                    height={1405}
                    alt="Ryoan-ji Rock Garden in summer"
                    quality={100}
                    priority
                  />
                </Carousel.Summer>
                <Carousel.Autumn>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-banner-autumn-large.jpg"
                    width={1882}
                    height={1411}
                    alt="Ryoan-ji Rock Garden in autumn"
                    quality={100}
                    priority
                  />
                </Carousel.Autumn>
                <Carousel.Winter>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-banner-winter-large.jpg"
                    width={1882}
                    height={1411}
                    alt="Ryoan-ji Rock Garden in winter"
                    quality={100}
                    priority
                  />
                </Carousel.Winter>
              </Carousel>
            </Article.Header>
            <Section>
              <VisuallyHidden as="h2">Introduction</VisuallyHidden>
              <Spacer.BoxParagraphToText />
              <P>
                <Span.LeadIn>Pick any</Span.LeadIn> travel guide for Kyoto. I’m
                sure you’ll find Ryoan-ji, a Zen Buddhist temple famous for its
                Rock Garden (pictured above).
              </P>
              <Spacer.TextParagraphToText />
              <P>
                This zen garden is made of fifteen rocks, surrounded by patches
                of moss, laid out in the ocean of gravels on a walled
                rectangular plot.
              </P>
              <Spacer.TextParagraphToText />
              <P>And that’s it…</P>
              <Spacer.TextParagraphToText />
              <P>
                If you have been to this garden, you must have been utterly
                puzzled during your visit. Too abstract and too minimal. I also
                scratched my head during my first visit to the garden. My second
                visit a year later didn’t help me figure out anything, either.
              </P>
              <Spacer.TextParagraphToText />
              <P>
                During the third visit, however, the whole garden started to
                make sense to me. It taught me how to live a happy life, with
                the layout of the fifteen rocks as the “textbook”.
              </P>
            </Section>
            <Section>
              <H2>Get the Viewpoint Right</H2>
              <Spacer.BoxParagraphToText />
              <P>
                The key to understand this cryptic garden is to see it from
                where You’re supposed to: halfway between the left and right
                edges of this rectangular garden, indicated with the gray arrow
                in the floor plan below:
              </P>
              <Spacer.TextLineToBox />
              <FigureWithBorder>
                <FigureWithBorder.Border>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-jardin-seco-plano-mapa.jpg"
                    width={497}
                    height={313}
                    alt="An architectural drawing shows a bird‘s-eye view of Ryoanji Rock Garden with the temple's veranda below. The gray arrow is drawn on the veranda, pointing vertically towards the center of the garden."
                  />
                  <FigCaption>
                    The floor plan of{' '}
                    <Span.NoWrap>Ryoan-ji Rock Garden</Span.NoWrap>
                    <Span.Source as="footer">
                      Adapted from{' '}
                      <a
                        href="https://www.google.co.jp/books/edition/_/M_k4AQAAIAAJ"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Slawson (1987)
                      </a>
                      , p. 96.
                    </Span.Source>
                  </FigCaption>
                </FigureWithBorder.Border>
              </FigureWithBorder>
              <Spacer.BoxParagraphToText />
              <P>
                My third visit to the garden was different from the previous
                ones in that I had this piece of knowledge, learned from a book
                on Japanese gardens{' '}
                <Span.Source>
                  (
                  <a
                    href="https://www.google.co.jp/books/edition/_/rIjoPQAACAAJ?hl=en"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Tanaka 2002
                  </a>
                  , pp. 58-59)
                </Span.Source>
                . The book says that the whole garden was constructed to be seen
                from this viewpoint.
              </P>
            </Section>
            <Section>
              <H2>No Focal Point in the Garden</H2>
              <Spacer.BoxParagraphToText />
              <P>
                Once I sit down and see the garden from the correct viewpoint,
                the layout of fifteen rocks starts taking on its meaning:{' '}
                <Strong>there is nothing emphasized in this garden</Strong>.
              </P>
              <SubSection>
                <H3>Straight ahead</H3>
                <Spacer.H3LineToBox />
                <FigureFullbleed>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-banner-summer-large.jpg"
                    width={1882}
                    height={1405}
                    alt="The garden's ground is covered with light gray gravels on which two rocks are placed on a patch of moss on the left, three on the right, and nothing in between."
                    quality={100}
                  />
                </FigureFullbleed>
                <Spacer.BoxLineToText image />
                <P>
                  There is no stone at the center of gaze when I look straight
                  ahead. The landscape composition is split between two groups
                  of rocks on the right and on the left. Nothing is really
                  emphasized.
                </P>
              </SubSection>
              <SubSection>
                {' '}
                <H3>Leftward</H3>
                <Spacer.H3LineToBox />
                <FigureFullbleed>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-look-left-large.jpg"
                    width={1882}
                    height={1405}
                    alt="The garden's ground is covered with gravels on which the two rocks are placed on the right, another set of five rocks on the left, and nothing in between."
                    quality={100}
                  />
                </FigureFullbleed>
                <Spacer.BoxLineToText image />
                <P>
                  Next, I turn my head to the left while sitting in the same
                  viewpoint. There is again nothing in the center of my vision.
                  The view is split. Nothing is emphasised.
                </P>
              </SubSection>
              <SubSection>
                <H3>Rightward</H3>
                <Spacer.H3LineToBox />
                <FigureFullbleed>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-look-right-large.jpg"
                    width={1882}
                    height={1405}
                    alt="The garden's ground is covered with gravels on which the three rocks are placed on the left, a pair of rocks on the middle-left, and another group of rocks on the right."
                    quality={100}
                  />
                </FigureFullbleed>
                <Spacer.BoxLineToText image />
                <P>
                  Finally, I turn my head to the right while still staying at
                  the same viewpoint. There are three groups of rocks, but none
                  of them stand out clearly. Location in the middle usually
                  casts the spotlight, but the two rocks in the middle group
                  look rather modest and are located off the center. Nothing is
                  stressed in this view, either.
                </P>
              </SubSection>
            </Section>
            <Section>
              <H2>No Single Rock Dominates</H2>
              <Spacer.BoxParagraphToText />
              <P>
                The lack of emphasis, I then notice, penetrates into how fifteen
                rocks are arranged into five clusters, each surrounded by a
                patch of moss. Let’s start looking at the middle three clusters.
              </P>
              <SubSection>
                <H3>Middle left</H3>
                <Spacer.H3LineToBox />
                <FigureWithMargin>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-middle-left.jpg"
                    width={892}
                    height={442}
                    alt="An elongated large rock on the right and a small one on the middle-left, both on a patch of moth."
                    quality={100}
                  />
                </FigureWithMargin>
                <Spacer.BoxLineToText image />
                <P>
                  The middle-left cluster consists of two rocks. There is no
                  center. The right elongated one dominates, but it is located
                  to the right side, not at the center.
                </P>
              </SubSection>
              <SubSection>
                <H3>Middle</H3>
                <Spacer.H3LineToBox />
                <FigureWithMargin>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-middle-right.jpg"
                    width={747}
                    height={381}
                    alt="A squarish rock stands on the middle left, a smaller rock lies on the back right, an even smaller rock sits on the front right, all on a patch of moss."
                    quality={100}
                  />
                </FigureWithMargin>
                <Spacer.BoxLineToText image />
                <P>
                  The middle cluster consists of three rocks. One on the left
                  dominates, but it is again not located at the center but to
                  the side.
                </P>
              </SubSection>
              <SubSection>
                <H3>Middle right</H3>
                <Spacer.H3LineToBox />
                <FigureWithMargin>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-second-right.jpg"
                    width={706}
                    height={388}
                    alt="A long medium-sized rock on the left, a smaller angular rock on the right, both on a patch of moss."
                    quality={100}
                  />
                </FigureWithMargin>
                <Spacer.BoxLineToText image />
                <P>
                  The middle-right cluster consists of two rocks, each in a
                  peculiar shape. But neither is emphasized more than the other.
                </P>
              </SubSection>
              <SubSection>
                <H3>Leftmost</H3>
                <Spacer.H3LineToBox />
                <FigureWithMargin>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-leftmost.jpg"
                    width={1490}
                    height={695}
                    alt="A large rough-looking rock in the middle, flanked by a pair of smaller rocks, all of which sit on a patch of moss. One flat-top rock embedded in the gravel ground to the left of the moss patch, and another to the right."
                    quality={100}
                  />
                </FigureWithMargin>
                <Spacer.BoxLineToText image />
                <P>
                  The group of rocks furthest to the the left is the most
                  magnificent composition in this garden if seen from the front
                  of it. One large, well-shaped rock stands in the middle,
                  flanked by two small standing rocks and two flat stones
                  farther away. But the whole group is marginalized at the left
                  edge of the garden, not at the center. When seen from the
                  viewpoint, the symmetric composition is thus destroyed.
                </P>
              </SubSection>
              <SubSection>
                <H3>Rightmost</H3>
                <Spacer.H3LineToBox />
                <FigureWithMargin>
                  <ImageWithPlaceholder
                    src="/images/ryoanji-rightmost.jpg"
                    width={1496}
                    height={713}
                    alt="A medium-sized rock sits in the center of a moss patch, flanked by a pair of flat-top rocks embedded in the moss."
                    quality={100}
                  />
                </FigureWithMargin>
                <Spacer.BoxLineToText image />
                <P>
                  The group of rocks furthest to the right is made of three
                  rocks. One large lying stone is flanked by two flat stones.
                  This symmetric composition, however, is also marginalized at
                  the edge of the garden, not in the center. The right flat
                  stone even disappears from sight when seen from the viewpoint,
                  as it hides behind the large rock.
                </P>
              </SubSection>
            </Section>
            <Section>
              <H2>The Rock Garden’s Message</H2>
              <Spacer.BoxParagraphToText />
              <P>
                Now it is clear that nothing is emphasized throughout this
                garden. I start wondering why. The designer of this garden, who
                remains anonymous despite many attempts of historians to
                identify, must have had a purpose. What message did he or she
                try to convey to the visitors of this garden?
              </P>
              <Spacer.TextParagraphToText />
              <P>
                I remember that each rock in a zen garden is often interpreted
                as an unfulfilled desire in our mind. Once I see the rocks in
                Ryoan-ji Rock Garden as my own unfulfilled desires, the walled
                rectangular garden space begins to look like a metaphor of my
                inner self.
              </P>
              <Spacer.TextParagraphToText />
              <P>
                No emphasis on any of the fifteen rocks, I conclude, can
                therefore be interpreted as the following message:
              </P>
              <Spacer.TextParagraphToText />
              <P centerAligned>
                <Strong>
                  Don’t fixate on{' '}
                  <Span.NoWrap>one particular thing</Span.NoWrap>{' '}
                  <Span.NoWrap>in our mind.</Span.NoWrap>
                </Strong>
              </P>
              <Spacer.TextParagraphToText />
              <P>
                This idea is central to the preaching of Zen Buddhism to live a
                happy life. Don’t keep regretting what you’ve done in the past.
                Don’t always be worried about your uncertain future. Nothing
                should be at the center of your mind, just like the arrangement
                of these fifteen rocks within the walled rectangular plot.
              </P>
            </Section>{' '}
            <Section>
              <H2>Garden as a Reminder</H2>
              <Spacer.BoxParagraphToText />
              <P>
                Ever since I managed to interpret the meaning of Ryoan-ji Rock
                Garden as described above, I’ve been paying a visit to this zen
                garden whenever I get too much preoccupied with my unfulfilled
                desires.
              </P>
              <Spacer.TextParagraphToText />
              <P>
                The best way to appreciate the garden is to arrive early in the
                morning before tourists start flocking to Ryoan-ji Temple. I
                arrive there when the temple opens its gate at 8<Abbr>am</Abbr>{' '}
                (or at 8:30
                <Abbr>am</Abbr> from December to February). I sit down at the
                viewpoint explained above. Then I observe how the rising sun
                constantly changes its way of illuminating the garden as the
                time passes by—no fixation on a particular moment.
              </P>
              <Spacer.TextParagraphToText />
              <P>
                By 10<Abbr>am</Abbr>, a flock of tourists start arriving and
                counting how many rocks there are—which is totally off the point
                about this garden. I leave the rock garden and take a stroll
                around the pond garden outside, which I realize also avoids
                creating any focal point.
              </P>
              <Spacer.TextParagraphToText />
              <P>
                With the 21st century’s life overloaded with information, it is
                so easy to forget the simple principle of happiness that the
                Buddha discovered in the 5th century <Abbr>BC</Abbr>. With its
                minimal, yet profound composition of 15 rocks, Ryoan-ji Rock
                Garden has been there since the early 16th century to reminds us
                of the teaching of the Buddha.
              </P>
            </Section>
            <Section as="aside">
              <H2>References</H2>
              <Spacer.BoxParagraphToText />
              <P>
                Slawson, David A. (1987).{' '}
                <Cite.Italic>
                  <a
                    href="https://www.google.co.jp/books/edition/_/M_k4AQAAIAAJ"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Secret Teachings in the Art of Japanese gardens
                  </a>
                </Cite.Italic>
                . Tokyo: Kodansha.
              </P>
              <Spacer.TextParagraphToText />
              <P>
                Tanaka, Shozo. (2002).{' '}
                <Cite.Italic>
                  <a
                    href="https://www.google.co.jp/books/edition/_/rIjoPQAACAAJ?hl=en"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ‘Nihon Teien’ no Mikata
                  </a>
                </Cite.Italic>{' '}
                [The Way of Appreciating ‘Japanese Gardens’]. Tokyo: Shogakukan.
              </P>
            </Section>
          </Article>
        </Main.Ryoanji>
      </Layout>{' '}
    </>
  );
}
