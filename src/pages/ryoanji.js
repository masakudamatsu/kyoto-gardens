import Head from 'next/head';

import Abbr from '../elements/Abbr';
import Article from '../blocks/Article';
import Carousel from '../blocks/Carousel';
import FigCaption from '../elements/FigCaption';
import Figure from '../blocks/Figure';
import FigureWithMargin from '../blocks/FigureWithMargin';
import H1 from '../elements/H1';
import H2 from '../elements/H2';
import H3 from '../elements/H3';
import Italic from '../elements/Italic';
import Link from '../elements/Link';
import P from '../elements/P';
import Spacer from '../elements/Spacer';
import Span from '../elements/Span';
import Section from '../blocks/Section';

import {maxPhotoWidth} from 'src/utils/designSpec';
import {ryoanji} from 'src/utils/metadata';

export default function Ryoanji() {
  return (
    <>
      <Head>
        <title>{ryoanji.title}</title>
        <meta name="description" content={ryoanji.description} />
      </Head>
      <Article>
        <Article.Header>
          <H1.Wrapper>
            <H1 aria-label="Ryoan-ji Rock Garden">
              <H1.Ryoanji>Ryoan-ji</H1.Ryoanji>
              <H1.RockGarden>Rock Garden</H1.RockGarden>
            </H1>
          </H1.Wrapper>{' '}
          <Carousel>
            <Carousel.Spring
              src="/images/ryoanji-banner-spring-small.jpg"
              srcSet={`/images/ryoanji-banner-spring-large.jpg ${
                maxPhotoWidth * 2
              }w, 
                  /images/ryoanji-banner-spring-small.jpg ${maxPhotoWidth}w`}
              sizes={`(min-width: ${maxPhotoWidth}px) ${maxPhotoWidth}px, 100vw`}
              width="941"
              height="703"
              alt="Ryoan-ji Rock Garden in spring"
            />
            <Carousel.Summer
              src="/images/ryoanji-banner-summer-small.jpg"
              srcSet={`/images/ryoanji-banner-summer-large.jpg ${
                maxPhotoWidth * 2
              }w, 
                  /images/ryoanji-banner-summer-small.jpg ${maxPhotoWidth}w`}
              sizes={`(min-width: ${maxPhotoWidth}px) ${maxPhotoWidth}px, 100vw`}
              width="941"
              height="703"
              alt="Ryoan-ji Rock Garden in summer"
            />
            <Carousel.Autumn
              src="/images/ryoanji-banner-autumn-small.jpg"
              srcSet={`/images/ryoanji-banner-autumn-large.jpg ${
                maxPhotoWidth * 2
              }w, 
                  /images/ryoanji-banner-autumn-small.jpg ${maxPhotoWidth}w`}
              sizes={`(min-width: ${maxPhotoWidth}px) ${maxPhotoWidth}px, 100vw`}
              width="941"
              height="705"
              alt="Ryoan-ji Rock Garden in autumn"
            />
            <Carousel.Winter
              src="/images/ryoanji-banner-winter-small.jpg"
              srcSet={`/images/ryoanji-banner-winter-large.jpg ${
                maxPhotoWidth * 2
              }w, 
                  /images/ryoanji-banner-winter-small.jpg ${maxPhotoWidth}w`}
              sizes={`(min-width: ${maxPhotoWidth}px) ${maxPhotoWidth}px, 100vw`}
              width="941"
              height="705"
              alt="Ryoan-ji Rock Garden in winter"
            />
          </Carousel>
        </Article.Header>
        <Section>
          <H2 hidden>Introduction</H2>
          <P belowBoxParagraph>
            <Span smallcaps>Pick any</Span> travel guide for Kyoto. I'm sure
            you’ll find Ryoan-ji, a Zen Buddhist temple famous for its Rock
            Garden (pictured above).
          </P>
          <P belowTextParagraph>
            This zen garden is made of fifteen rocks, surrounded by patches of
            moss, laid out in the ocean of gravels on a walled rectangular plot.
          </P>
          <P belowTextParagraph>And that's it…</P>
          <P belowTextParagraph>
            If you have been to this garden, you must have been utterly puzzled
            during your visit. Too abstract and too minimal. I also scratched my
            head during my first visit to the garden. My second visit a year
            later didn’t help me figure out anything, either.
          </P>
          <P belowTextParagraph>
            During the third visit, however, the whole garden started to make
            sense to me. It taught me how to live a happy life, with the layout
            of the fifteen rocks as the “textbook”.
          </P>
        </Section>
        <Section>
          <H2.Wrapper>
            <H2>Get the Viewpoint Right</H2>
          </H2.Wrapper>
          <P belowBoxParagraph>
            The key to understand this cryptic garden is to see it from where
            you're supposed to: halfway between the left and right edges of this
            rectangular garden, indicated with the gray arrow in the floor plan
            below:
          </P>
          <FigureWithMargin belowTextLine bordered>
            <FigureWithMargin.Img
              src="/images/ryoanji-jardin-seco-plano-mapa.jpg"
              width="497"
              height="313"
              alt=""
            />
            <FigCaption>
              The floor plan of Ryoan-ji <Span nowrap>Rock Garden</Span>
              <FigCaption.Footer>
                Adapted from{' '}
                <Link
                  href="https://www.google.co.jp/books/edition/_/M_k4AQAAIAAJ"
                  target="_blank"
                >
                  Slawson (1987)
                </Link>
                , p. 96.
              </FigCaption.Footer>
            </FigCaption>
          </FigureWithMargin>
          <P belowBoxParagraph>
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
        <Section>
          <H2.Wrapper>
            <H2>No Focal Point in the Garden</H2>
          </H2.Wrapper>
          <P belowBoxParagraph>
            Once I sit down and see the garden from the correct viewpoint, the
            layout of fifteen rocks starts taking on its meaning:{' '}
            <Italic>there is nothing emphasized in this garden</Italic>.
          </P>
          <section>
            <Spacer betweenParagraphs aboveSubsectionTitle />
            <H3>Straight ahead</H3>
            <Spacer betweenLines belowSubsectionTitle />
            <Figure>
              <Figure.Img
                src="/images/ryoanji-banner-summer-small.jpg"
                srcSet={`/images/ryoanji-banner-summer-large.jpg ${
                  maxPhotoWidth * 2
                }w,
                      /images/ryoanji-banner-summer-small.jpg ${maxPhotoWidth}w`}
                sizes={`(min-width: ${maxPhotoWidth}px) ${maxPhotoWidth}px, 100vw`}
                width="941"
                height="703"
                alt="Central view of Ryoan-ji Zen Garden"
              />
            </Figure>
            <P belowBoxLine>
              There is no stone at the center of gaze when I look straight
              ahead. The landscape composition is split between two groups of
              rocks on the right and on the left. Nothing is really emphasized.
            </P>
          </section>
          <section>
            <Spacer betweenParagraphs aboveSubsectionTitle />
            <H3>Leftward</H3>
            <Spacer betweenLines belowSubsectionTitle />
            <Figure>
              <Figure.Img
                src="/images/ryoanji-look-left-small.jpg"
                srcSet={`/images/ryoanji-look-left-large.jpg ${
                  maxPhotoWidth * 2
                }w,
                      /images/ryoanji-look-left-small.jpg ${maxPhotoWidth}w`}
                sizes={`(min-width: ${maxPhotoWidth}px) ${maxPhotoWidth}px, 100vw`}
                width="941"
                height="703"
                alt="Leftward view of Ryoan-ji Zen Garden"
              />
            </Figure>
            <P belowBoxLine>
              Next, I turn my head to the left while sitting in the same
              viewpoint. There is again nothing in the center of my vision. The
              view is split. Nothing is emphasised.
            </P>
          </section>
          <section>
            <Spacer betweenParagraphs aboveSubsectionTitle />
            <H3>Rightward</H3>
            <Spacer betweenLines belowSubsectionTitle />
            <Figure>
              <Figure.Img
                src="/images/ryoanji-look-right-small.jpg"
                srcSet={`/images/ryoanji-look-right-large.jpg ${
                  maxPhotoWidth * 2
                }w,
                      /images/ryoanji-look-right-small.jpg ${maxPhotoWidth}w`}
                sizes={`(min-width: ${maxPhotoWidth}px) ${maxPhotoWidth}px, 100vw`}
                width="941"
                height="703"
                alt="Rightward view of Ryoan-ji Zen Garden"
              />
            </Figure>
            <P belowBoxLine>
              Finally, I turn my head to the right while still staying at the
              same viewpoint. There are three groups of rocks, but none of them
              stand out clearly. Location in the middle usually casts the
              spotlight, but the two rocks in the middle group look rather
              modest and are located off the center. Nothing is stressed in this
              view, either.
            </P>
          </section>
        </Section>
        <Section>
          <H2.Wrapper>
            <H2>No Single Rock Dominates</H2>
          </H2.Wrapper>
          <P belowBoxParagraph>
            The lack of emphasis, I then notice, penetrates into how fifteen
            rocks are arranged into five clusters, each surrounded by a patch of
            moss. Let’s start looking at the middle three clusters.
          </P>
          <section>
            <Spacer betweenParagraphs aboveSubsectionTitle />
            <H3>Middle-left</H3>
            <Spacer betweenLines belowSubsectionTitle />
            <FigureWithMargin>
              <FigureWithMargin.Img
                src="/images/ryoanji-middle-left.jpg"
                width="892"
                height="442"
                alt="The front view of the middle-left group of two rocks in Ryoan-ji Zen Garden"
              />
            </FigureWithMargin>
            <P belowBoxLine>
              The middle-left cluster consists of two rocks. There is no center.
              The right elongated one dominates, but it is located to the right
              side, not at the center.
            </P>
          </section>
          <section>
            <Spacer betweenParagraphs aboveSubsectionTitle />
            <H3>Middle</H3>
            <Spacer betweenLines belowSubsectionTitle />
            <FigureWithMargin>
              <FigureWithMargin.Img
                src="/images/ryoanji-middle-right.jpg"
                width="747"
                height="381"
                alt="The front view of the middle-right group of three rocks in Ryoan-ji Zen Garden"
              />
            </FigureWithMargin>
            <P belowBoxLine>
              The middle cluster consists of three rocks. One on the left
              dominates, but it is again not located at the center but to the
              side.
            </P>
          </section>
          <section>
            <Spacer betweenParagraphs aboveSubsectionTitle />
            <H3>Middle-right</H3>
            <Spacer betweenLines belowSubsectionTitle />
            <FigureWithMargin>
              <FigureWithMargin.Img
                src="/images/ryoanji-second-right.jpg"
                width="706"
                height="388"
                alt="The front view of the second-from-right group of two rocks in Ryoan-ji Zen Garden"
              />
            </FigureWithMargin>
            <P belowBoxLine>
              The middle-right cluster consists of two rocks, each in a peculiar
              shape. But neither is emphasized more than the other.
            </P>
          </section>
          <section>
            <Spacer betweenParagraphs aboveSubsectionTitle />
            <H3>Leftmost</H3>
            <Spacer betweenLines belowSubsectionTitle />
            <FigureWithMargin>
              <FigureWithMargin.Img
                src="/images/ryoanji-leftmost.jpg"
                width="1490"
                height="695"
                alt="The front view of the leftmost group of five rocks in Ryoan-ji Zen Garden"
              />
            </FigureWithMargin>
            <P belowBoxLine>
              The group of rocks furthest to the the left is the most
              magnificent composition in this garden if seen from the front of
              it. One large, well-shaped rock stands in the middle, flanked by
              two small standing rocks and two flat stones farther away. But the
              whole group is marginalized at the left edge of the garden, not at
              the center. When seen from the viewpoint, the symmetric
              composition is thus destroyed.
            </P>
          </section>
          <section>
            <Spacer betweenParagraphs aboveSubsectionTitle />
            <H3>Rightmost</H3>
            <Spacer betweenLines belowSubsectionTitle />
            <FigureWithMargin>
              <FigureWithMargin.Img
                src="/images/ryoanji-rightmost.jpg"
                width="1496"
                height="713"
                alt="The front view of the rightmost group of three rocks in Ryoan-ji Zen Garden"
              />
            </FigureWithMargin>
            <P belowBoxLine>
              The group of rocks furthest to the right is made of three rocks.
              One large lying stone is flanked by two flat stones. This
              symmetric composition, however, is also marginalized at the edge
              of the garden, not in the center. The right flat stone even
              disappears from sight when seen from the viewpoint, as it hides
              behind the large rock.
            </P>
          </section>
        </Section>
        <Section>
          <H2.Wrapper>
            <H2>The Rock Garden’s Message</H2>
          </H2.Wrapper>
          <P belowBoxParagraph>
            Now it is clear that nothing is emphasized throughout this garden. I
            start wondering why. The designer of this garden, who remains
            anonymous despite many attempts of historians to identify, must have
            had a purpose. What message did he or she try to convey to the
            visitors of this garden?
          </P>
          <P belowTextParagraph>
            I remember that each rock in a zen garden is often interpreted as an
            unfulfilled desire in our mind. Once I see the rocks in Ryoan-ji
            Rock Garden as my own unfulfilled desires, the walled rectangular
            garden space begins to look like a metaphor of my inner self.
          </P>
          <P belowTextParagraph>
            No emphasis on any of the fifteen rocks, I conclude, can therefore
            be interpreted as the following message:
          </P>
          <P belowTextParagraph message>
            <Italic>
              Don’t fixate on <Span nowrap>one particular thing</Span>{' '}
              <Span nowrap>in our mind.</Span>
            </Italic>
          </P>
          <P belowTextParagraph>
            This idea is central to the preaching of Zen Buddhism to live a
            happy life. Don’t keep regretting what you’ve done in the past.
            Don’t always be worried about your uncertain future. Nothing should
            be at the center of your mind, just like the arrangement of these
            fifteen rocks within the walled rectangular plot.
          </P>
        </Section>{' '}
        <Section>
          <H2.Wrapper>
            <H2>Garden as a Reminder</H2>
          </H2.Wrapper>
          <P belowBoxParagraph>
            Ever since I managed to interpret the meaning of Ryoan-ji Rock
            Garden as described above, I've been paying a visit to this zen
            garden whenever I get too much preoccupied with my unfulfilled
            desires.
          </P>
          <P belowTextParagraph>
            The best way to appreciate the garden is to arrive early in the
            morning before tourists start flocking to Ryoan-ji Temple. I arrive
            there when the temple opens its gate at 8<Abbr>am</Abbr> (or at 8:30
            <Abbr>am</Abbr> from December to February). I sit down at the
            viewpoint explained above. Then I observe how the rising sun
            constantly changes its way of illuminating the garden as the time
            passes by—no fixation on a particular moment.
          </P>
          <P belowTextParagraph>
            By 10<Abbr>am</Abbr>, a flock of tourists start arriving and
            counting how many rocks there are—which is totally off the point
            about this garden. I leave the rock garden and take a stroll around
            the pond garden outside, which I realize also avoids creating any
            focal point.
          </P>
          <P belowTextParagraph>
            With the 21st century's life overloaded with information, it is so
            easy to forget the simple principle of happiness that the Buddha
            discovered in the 5th century <Abbr>BC</Abbr>. With its minimal, yet
            profound composition of 15 rocks, Ryoan-ji Rock Garden has been
            there since the early 16th century to reminds us of the teaching of
            the Buddha.
          </P>
        </Section>{' '}
        <Section as="footer">
          <P>
            Written, photographed, designed, and coded by Masa Kudamatsu in
            2021.
          </P>
        </Section>
        <Section as="aside">
          <H2.Wrapper>
            <H2>References</H2>
          </H2.Wrapper>
          <P belowBoxParagraph>
            Slawson, David A. (1987).{' '}
            <Italic>
              <Link
                href="https://www.google.co.jp/books/edition/_/M_k4AQAAIAAJ"
                target="_blank"
              >
                Secret Teachings in the Art of Japanese gardens
              </Link>
            </Italic>
            . Tokyo: Kodansha.
          </P>
          <P belowTextParagraph>
            Tanaka, Shozo. (2002).{' '}
            <Italic>
              <Link
                href="https://www.google.co.jp/books/edition/_/rIjoPQAACAAJ?hl=en"
                target="_blank"
              >
                ‘Nihon Teien’ no Mikata
              </Link>
            </Italic>{' '}
            [The Way of Appreciating ‘Japanese Gardens’]. Tokyo: Shogakukan.
          </P>
        </Section>
      </Article>
    </>
  );
}
