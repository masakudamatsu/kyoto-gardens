import Head from 'next/head';

import Article from '../blocks/Article';
import Cite from '../elements/Cite';
import FigCaption from '../elements/FigCaption';
import Figure from '../blocks/Figure';
import FigureWithMargin from '../blocks/FigureWithMargin';
import ForeignPhrase from '../elements/ForeignPhrase';
import H1 from '../elements/H1';
import H2 from '../elements/H2';
import H3 from '../elements/H3';
import ImageWithPlaceholder from '../elements/ImageWithPlaceholder';
import Kanji from '../elements/Kanji';
import Main from '../blocks/Main';
import P from '../elements/P';
import Section from '../blocks/Section';
import Hr from '../elements/Hr';
import Spacer from '../elements/Spacer';
import Span from '../elements/Span';
import SubSection from '../blocks/SubSection';

import {kohoan} from 'src/utils/specKohoan';

export default function Kohoan() {
  const webfont = {
    server: 'https://fonts.gstatic.com',
    stylesheet:
      'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@600&display=swap',
  }; // See https://csswizardry.com/2020/05/the-fastest-google-fonts/
  return (
    <>
      <Head>
        <title>{kohoan.title}</title>
        <meta name="description" content={kohoan.description} />
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
      <Main.Kohoan>
        <Article kohoan style={{backgroundColor: '#', color: '#eee'}}>
          <H1>Koho-an Temple</H1>
          <Figure>
            <ImageWithPlaceholder
              src="/kohoan/bosen-garden-view.jpg"
              width={1200}
              height={800}
            />
            <FigCaption>
              A view of teahouse garden from inside Teahouse Bosen
              <Span.Source>
                [Image source:{' '}
                <a href="https://kotonarijuku.kyotoshunju.com/experience/286.html">
                  Kyoto Shunju (2020b)
                </a>
                ]
              </Span.Source>
            </FigCaption>
          </Figure>

          <Section>
            <H2>The Front Gate</H2>
            <Spacer.BoxParagraphToText />
            <P>
              The spatial experience of Koho-an Temple begins before you enter
              the temple. Approaching from the left side of the front gate, the
              first thing you notice is an empty moat along the wall:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-moat.jpeg"
                width={400}
                height={300}
              />
              <FigCaption>
                The moat around Koho-an Temple{' '}
                <Span.Source>
                  [Image source:{' '}
                  <a href="http://rabbitah.jugem.jp/?eid=671">Usagi (2015)</a>]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              When you reach the front gate, you’ll walk over a stone bridge to
              enter the temple:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-frontgate.jpeg"
                width={640}
                height={458}
              />
              <FigCaption>
                The front gate and stone bridge of Koho-an Temple{' '}
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://30047809.at.webry.info/201410/article_10.html">
                    Anonymous (2014)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              When I myself walked over the stone bridge, I felt something
              strange. I’ve been to many temples in Kyoto, but it’s quite rare
              to cross a moat to enter. A moat is very common for Japanese
              castles, but it is an unusual design feature for a temple.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              As far as I know, no one tries to understand why there is a moat
              along the walls of Koho-an Temple. One possible reason I’ve come
              up with is that the moat is meant to make the entire temple look
              like a structure built above the water along the shore.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Imagine you are visiting a habour. There is a building complex
              built on stilts above the water. When you enter the building, you
              will notice a gap between the shore and the floor of the building,
              through which you see the water beneath. The moat and the stone
              bridge may be intended to create such a scene in a visitor’s mind.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              This interpretation might sound absurd to you. But it is not
              totally out of the context because the name of the temple, Koho (
              <Kanji>孤篷</Kanji>), means a solitary boat{' '}
              <Span source>
                (
                <a href="http://www.enshuryu.com/enshuryu/enshu/kenchiku/">
                  Enshu Sado Soke 2020a
                </a>
                )
              </Span>
              .
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Koho-an Temple was designed by{' '}
              <a href="https://en.wikipedia.org/wiki/Kobori_Ensh%C5%AB">
                Kobori Enshu
              </a>
              , a 17th-century master of tea ceremony who also excelled at
              architecture and garden design—some people liken Enshu as Japan’s
              equivalent of Leonardo Da Vinci{' '}
              <Span source>
                (
                <a href="https://www.amazon.co.jp/dp/4811303105">
                  Tanakadate 1996
                </a>
                )
              </Span>
              . As written in every guidebook on the temple{' '}
              <Span source>(e.g., Kyoto Shunju 2020a)</Span>, its design concept
              was a solitary boat floating on{' '}
              <a href="https://en.wikipedia.org/wiki/Lake_Biwa">Lake Biwa</a>,
              Japan’s largest lake near Enshu’s hometown to the east of Kyoto.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              I think the entire site of Koho-an Temple represents a harbour
              where boats arrive and depart. If I see the temple this way, all
              of its design features will start making perfect sense to me. Keep
              on reading to see if it will make sense to you as well.
            </P>
          </Section>
          <Section>
            <H2>Entrance Garden</H2>
            <Spacer.BoxParagraphToText />
            <P>
              After passing through the front gate, you’ll find yourself walking
              on paving stones arranged to form a straight footpath (called{' '}
              <ForeignPhrase as="i">nobedan</ForeignPhrase> in Japanese garden
              terminology):
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-stone-pavement.jpeg"
                width={427}
                height={640}
              />
              <FigCaption>
                Stone pavement in the entrance garden of Koho-an Temple{' '}
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://vinfo06.at.webry.info/201208/article_4.html">
                    Vinfo 2012
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>{' '}
            <Spacer.BoxParagraphToText />
            <P>
              Stones of various shapes and textures are laid out with as narrow
              gaps as possible, to make a long rectangle. Imagine you yourself
              are asked to lay out these stones in this manner, and you’ll
              understand how laborious it must have been. When I saw this
              footpath, I was struck with awe.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              As you walk, you’ll notice the long and narrow rectangular stones
              rhythmically arranged on both sides: left, right, left, right—as
              if they had responded to the movement of your feet. It made me
              want to walk further ahead.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              If you look to your right while walking on the pavement, you’ll
              see the inner entrance of Koho-an Temple.
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-inner-entrance.jpeg"
                width={640}
                height={480}
              />
              <FigCaption>
                The inner entrance of Koho-an Temple{' '}
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://30047809.at.webry.info/201410/article_10.html">
                    Anonymous (2014)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>{' '}
            <Spacer.BoxParagraphToText />
            <P>
              When I visited the temple, I was asked to enter the building from
              here. For the true experience of visiting Koho-an Temple, however,
              you’re expected to walk further down the straight stone pavement.
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-stone-pavement-middle.jpg"
                width={1260}
                height={1680}
              />
              <FigCaption>
                A view at halfway up of the stone pavement in the entrance
                garden of Koho-an Temple{' '}
                <Span.Source>
                  [Photographed by the author around 1<Span smallcaps>pm</Span>{' '}
                  on 13 December, 2020]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              At the end of the path stands a pine tree in front of which the
              path turns to the right at a right angle:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-stone-pavement-end.jpeg"
                width={1316}
                height={2248}
              />
              <FigCaption>
                Stone pavement turns at a right angle in the entrance garden of
                Koho-an Temple. The structure behind the pine tree is
                “soto-machiai” — a roofed bench where the invited guests to a
                tea ceremony would take a rest until the host comes to greet
                them.{' '}
                <Span.Source>
                  [Image source:{' '}
                  <a href="http://www.pauch.com/kss/g063.html">
                    Yamaguchi (2012)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              As pointed out by{' '}
              <a href="https://vinfo06.at.webry.info/201208/article_4.html">
                Vinfo (2012)
              </a>{' '}
              and{' '}
              <a href="http://www.pauch.com/kss/g063.html">Yamaguchi (2012)</a>,
              the long, narrow stone at the top-left corner of the pavement
              gently curves to the right on the inner side, inviting your
              footsteps to the right. Did you ever imagine that a pavement can
              be considerate this much?
            </P>
            <P>
              Just like the empty moat around the temple, no one discusses the
              design intention behind the long, straight stone pavement in the
              entrance garden. If the entire site of Koho-an Temple were a
              harbour on the shore of Lake Biwa, then I imagine this stone
              pavement would be a{' '}
              <a href="https://en.wikipedia.org/wiki/Pier">pier</a>. The pier
              stretches straight and then extends further to the side at a right
              angle. The boat is not parked at the end of the straight stretch,
              but on the side of the pier or at the end of the right-angled side
              stretch.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              At the very end of the right-angled side stretch, there is indeed
              the main entrance of Koho-an Temple that resembles the entrance of
              a houseboat.
            </P>
          </Section>
          <Section>
            <H2>Main Entrance</H2>
            <FigureWithMargin belowBoxParagraph>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-main-entrance.jpeg"
                width={1280}
                height={851}
              />
              <FigCaption>
                Main Entrance of Koho-an Temple
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://commons.wikimedia.org/wiki/File:Daitokuji_Koho-an140524NI3.JPG">
                    Atelier Verde via Wikimedia Commons
                  </a>
                  ]
                </Span.Source>{' '}
              </FigCaption>
            </FigureWithMargin>{' '}
            <P belowBoxLine>
              According to the chief priest of Koho-an Temple, the roof of the
              main entrance is meant to be that of a{' '}
              <a href="https://pds.exblog.jp/pds/1/201402/14/39/c0041039_16345100.jpg">
                houseboat of the time
              </a>
              . The roof could have been more elaborate and magnificent to
              welcome guests, but that wouldn’t fit the design concept of the
              temple: a solitary boat floating on Lake Biwa. Houseboat roofs are
              simple with the straight edge of eaves. The design of the main
              entrance roof is faithful to it.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              The simple shape disguises how elaborate the roof design actually
              is, however. According to the chief priest, the roof is
              constructed with an unusual method called{' '}
              <ForeignPhrase as="i">yoroi-buki</ForeignPhrase> (armour
              thatching). The roof is made of alternating layers of{' '}
              <ForeignPhrase as="i">hiwada</ForeignPhrase> (the bark of Japanese
              cypress), used for the roofs of major shrines in Kyoto, and{' '}
              <ForeignPhrase as="i">kokera</ForeignPhrase>
              (very thin, 2–3mm thick wood panels), employed for the roofs of
              temples such as{' '}
              <a href="https://en.wikipedia.org/wiki/Ginkaku-ji">Ginkaku-ji</a>
              ), to create a striped pattern that resembles the texture of{' '}
              <a href="https://en.wikipedia.org/wiki/Japanese_armour">
                samurai armours of the time
              </a>
              .
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-main-entrance-roof.png"
                width={1260}
                height={1141}
              />
              <FigCaption>
                The “armour-thatching” roof of Koho-an Temple’s Main Entrance
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://commons.wikimedia.org/wiki/File:Daitokuji_Koho-an140524NI3.JPG">
                    Atelier Verde via Wikimedia Commons
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              This striped pattern emphasizes the straight edge of the eave. It
              also corresponds to the straight line of the stone pavement you
              walked on to get here.
            </P>
          </Section>
          <Section>
            <H2>Main Hall Front Garden</H2>
            <Spacer.BoxParagraphToText />
            <P>
              When you pass through the main entrance, that is, when you board
              the “houseboat”, you’ll see a garden spread out on the left:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-main-hall-garden-from-entrance.jpeg"
                width={1323}
                height={1803}
              />
              <FigCaption>
                A view of Koho-an Temple’s Main Hall Front Garden from inside
                the main entrance
                <Span.Source>
                  [Image source:{' '}
                  <a href="http://www.pauch.com/kss/g063.html">
                    Yamaguchi (2012)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              And directly in front of you, the wide veranda of the main hall
              stretches straight out:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-main-hall-veranda.jpeg"
                width={270}
                height={360}
              />
              <FigCaption>
                The veranda of Koho-an Temple’s Main Hall, viewed from the main
                entrance
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://knaw.exblog.jp/15349309/">Nakao (2010)</a>]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <P belowBoxLine>
              It looks like the deck of a boat, don’t you think?
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Take off your shoes and step up onto the veranda, and see the
              garden on your left again:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-main-hall-garden-on-left.jpeg"
                width={350}
                height={225}
              />
              <FigCaption>
                Main Hall Front Garden of Koho-an Temple
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://arischan.exblog.jp/23115582/">
                    ayayay0003 (2014)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              This garden is very simple and purely geometric: linearly trimmed
              hedges and sandy soil. It is believed that this garden represents
              the waving surface of Lake Biwa{' '}
              <Span source>
                (
                <a href="https://www.amazon.co.jp/dp/4794964269">Uchida 2000</a>
                , page 164, and{' '}
                <a href="https://vinfo06.at.webry.info/201208/article_4.html">
                  Vinfo 2012
                </a>
                )
              </Span>
              . If the veranda were the deck of a boat, the hedge on the near
              side of the sandy ground, trimmed in a straight line, would be a
              wave caused by the boat moving forward. The two-tiered hedge on
              the far side of the sand would be the waves coming forward to lap
              against the boat. As you walk on the veranda looking at the
              garden, you can feel as if you were on a boat heading somewhere.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              The above photo is not accurate colour-wise, by the way. The photo
              below is closer to the real view, taken from an angle looking back
              after walking along the veranda for a while:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-main-hall-garden-on-right.jpeg"
                width={1200}
                height={800}
              />
              <FigCaption>
                Main Hall Front Garden of Koho-an Temple
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://kotonarijuku.kyotoshunju.com/experience/286.html">
                    Kyoto Shunju (2020b)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              If you’re surprised by colour in the above photo, you’re a
              connoisseur of Japanese garden design: red clay is rarely used in
              historical gardens in Japan. According to the chief priest, red
              clay is characteristic of the area around Koho-an Temple. But
              doesn’t it contradict with the design concept, a solitary boat on
              Lake Biwa? How can red clay represent the water surface of a lake?
              In karesansui rock gardens, water surface is represented by the
              spread of gravels, not reddish sand.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Personally, red clay reminds me of a wilderness in North America.
              But that’s an association I’ve learned by watching TV. For the
              Japanese people in the 17th century, of course, this association
              cannot be the design intention.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              I speculate that red clay is meant to represent the water surface
              of Lake Biwa tinted orange at sunset. Again, no one suggests this
              interpretation. But it will make sense later during your visit to
              Koho-an Temple. Bear with me for a moment.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              One last thing about the Main Hall Front Garden: according to the
              chief priest, Funaoka-yama, a small hill in the neighborhood, was
              originally part of the garden view — a garden design technique
              known as the borrowed scenery. The shape of the hill would
              resemble a boat floating in the distance on Lake Biwa, according
              to the priest:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/funaoka-yama.jpg"
                width={800}
                height={216}
              />
              <FigCaption>
                Funaoka-yama, a hill in northwest Kyoto
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://commons.wikimedia.org/wiki/File:Mt.Funaoka_(Kyoto,_Japan).jpg">
                    Ilovekyoto via Wikimedia Commons
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              In the latter half of the 20th century, high-rise buildings rose
              up between the temple and the hill. Tall trees have been planted
              around Koho-an Temple to keep modernity out of the 17th-century
              garden view. Today it is impossible to see the “boat floating in
              the distance”.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Many gardens with borrowed scenery in Kyoto have suffered from the
              same fate. With high population density typical of East Asia, it
              is not easy to preserve the historical landscape in Japan.
            </P>
          </Section>
          <Section>
            <H2>Teahouse Garden</H2>
            <Spacer.BoxParagraphToText />
            <P>
              At the rear end of the veranda is a staircase that leads to the
              garden on the other side of the Main Hall. While the guided tour
              during my visit continued inside the Main Hall, those guests
              invited to a tea ceremony would go down the stairs to the garden.
              If the Main Hall were a boat, you would get off the boat here,
              where you would see this view of the garden:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-southwest-garden.jpeg"
                width={1470}
                height={1126}
              />
              <FigCaption>
                The garden on the southwest of Koho-an Temple’s Main Hall
                <Span.Source>
                  {' '}
                  [Image source:{' '}
                  <a href="http://www.pauch.com/kss/g063.html">
                    Yamaguchi (2012)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <P belowBoxLine>
              According to the chief priest, the pebbles in the foreground are
              meant to resemble water surface. Stepping stones lead to the
              private garden representing the Eight Best Views of Lake Biwa (
              <ForeignPhrase as="i">Oumi hakkei</ForeignPhrase>{' '}
              <Kanji>近江八景</Kanji>).
            </P>
            <Spacer.TextParagraphToText />
            <P>
              But you as a guest to Koho-an Temple are supposed to turn right
              here, and you’ll see a straight line of stepping stones embedded
              in <ForeignPhrase as="i">tataki</ForeignPhrase>, an earthen floor
              made of red clay, slaked lime (calcium hydroxide) and bittern (the
              leftover from extracting salt out of sea water, used to make tofu
              in Japan):
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-tea-house-garden.jpeg"
                width={1143}
                height={1428}
              />

              <FigCaption>
                Stepping stones leading to the teahouse of Koho-an Temple
                <Span.Source>
                  {' '}
                  [Image source:{' '}
                  <a href="http://www.pauch.com/kss/g063.html">
                    Yamaguchi (2012)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <P belowBoxLine>
              At the end of the earthen floor stands{' '}
              <ForeignPhrase as="i">chozu-bachi</ForeignPhrase>, a hand basin
              made of stone—typical of Japanese garden furniture. When you reach
              this point and turn to the right, you’ll find the entrance to the
              teahouse, where a tea ceremony is going to take place.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Laid out on the left of the footpath are the pebbles to represent
              water surface. They made me imagine fine water ripples across the
              surface of water.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Although not shown in the photo, the eaves of the roof extend over
              this earthen floor to keep it dry on rainy days.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              One thing is very clear: the stepping stones and the hand basin
              will make visitors to expect that the entrance to a teahouse is
              just around the corner.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Both stepping stones and hand basins are commonly found in
              Japanese gardens. But they were originally invented as scenery to
              decorate the footpath to a teahouse during the late 16th century{' '}
              <Span source>
                (<a href="https://www.amazon.co.jp/dp/404703455X">Kozu 2009</a>,
                Ch.4 Sec.4 and Ch.5 Sec.5)
              </Span>
              . Koho-an Temple was built in the mid-17th century, when people
              must have had the idea that the stepping stones and the hand basin
              would signify the pathway to a teahouse.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              As I’ll explain later, the entrance to a teahouse is the climax of
              the spatial experience of Koho-an Temple. At this point,
              therefore, it is necessary to make the guests well-prepared for
              the impending experience.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Now, what about the story of sailing across Lake Biwa that Koho-an
              Temple’s spatial design has told us so far? What does walking on
              the earthen floor signify in this context?
            </P>
            <Spacer.TextParagraphToText />
            <P>
              As far as I know, no one tries to interpret this earthen floor
              with embedded stepping stones. In other words, there is room for
              imagination to have fun. :-) I think there are two
              interpretations.
            </P>
            <SubSection>
              <H3>I. Sailing on a small boat</H3>
              <Spacer.H3ParagraphToText />
              <P>
                One interpretation is sailing on a smaller boat. A teahouse is
                typically a small hut. So it cannot be entered by a large boat
                of the scale of the Main Hall. In fact, as we’ll see below, the
                entrance to Koho-an Temple’s teahouse is structured in a similar
                way to a water entrance in which a boat can directly enter into
                the building.
              </P>
              <Spacer.TextParagraphToText />
              <P>
                However, if that were the case, it would be more appropriate to
                place the stepping stones in the midst of the pebbles that
                resemble the rippling surface of water, instead of making them
                embedded in the earthen floor.
              </P>
            </SubSection>
            <SubSection>
              <H3>II. Transferring to board a small boat</H3>
              <Spacer.H3ParagraphToText />
              <P>
                An alternative interpretation is that the earthen floor
                represents a pier to transfer to another boat called a teahouse.
                With this interpretation, the straight arrangement of stepping
                stones makes sense. Stepping stones usually represent a winding
                mountain path so that a teahouse in the middle of a city will
                turn into a hut deep in the mountain in a visitor’s mind. To
                represent a pier, therefore, a winding path of stepping stones
                would be inappropriate.
              </P>
              <Spacer.TextParagraphToText />
              <P>
                As far as I know, however, no one interprets the teahouse of
                Koho-an Temple as a boat. There is no interior design feature in
                the teahouse that evokes a ship.
              </P>
            </SubSection>
            <Hr />
            <P>
              I’ll revisit the question of which interpretation is more
              appropriate, once we sit down in the teahouse.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Now is the climax of the spatial experience of Koho-an Temple:
              entering the teahouse called Bosen (<Kanji>忘筌</Kanji>).
            </P>
          </Section>
          <Section>
            <H2>Teahouse Bosen</H2>
            <Spacer.BoxParagraphToText />
            <P>
              Unfortunately, there is no photo available for how the entrance to
              Bosen looks like when seen from the outside. Seen from inside the
              building, the entrance looks like this:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/bosen-entrance.png"
                width={509}
                height={640}
              />

              <FigCaption>
                Entrance to Teahouse Bosen
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://blog.goo.ne.jp/gooogami/e/390c896448b5606e95904b450cc7d822">
                    Shimoyama (2019)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <P belowBoxLine>
              The cylindrical hand basin in this photo is the one you saw at the
              end of the straight stepping stones. Therefore, when you reach the
              hand basin and turn to your right, you’ll see paper screens
              hanging from above with the lower half open, through which you can
              enter the teahouse.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Some people{' '}
              <Span source>
                (e.g.,{' '}
                <a href="http://www.enshuryu.com/enshuryu/enshu/kenchiku/">
                  Enshu Sado Soke 2020a
                </a>
                )
              </Span>{' '}
              point out that this entrance resembles the water entrance hall
              where visitors get off their boat and directly land on the inside
              of a building. A real example is found in Hiun-kaku Pavilion at
              Nishi-Hongwanji Temple, also in Kyoto:
            </P>
            <FigureWithMargin belowTextLine>
              <FigureWithMargin.Border>
                <ImageWithPlaceholder
                  src="/kohoan/hiun-kaku-water-entrance.jpg"
                  width={570}
                  height={380}
                />

                <FigCaption>
                  The water entrance hall of Hiun-kaku Pavilion
                  <Span.Source>
                    [Image source:{' '}
                    <a href="https://www.hongwanji.kyoto/see/hiunkaku.html">
                      Nishi-Hongwan-ji (2021)
                    </a>
                    ]
                  </Span.Source>
                </FigCaption>
              </FigureWithMargin.Border>
            </FigureWithMargin>
            <P belowBoxLine>
              It is indeed similar-looking. This is why walking on the straight
              stepping stones before entering Bosen may be interpreted as
              sailing on a small boat.
            </P>
            <Hr />
            <P>
              To appreciate the significance of this entrance, we need a bit of
              knowledge on the social background of 17th-century Japan and the
              tradition of tea ceremony.{' '}
            </P>
            <Spacer.TextParagraphToText />
            <P>
              The gap under the paper screens is lower than one’s height. This
              is a big deal in the 17th-century feudal society of Japan, where
              those ranked higher than others would never bow his head. To enter
              Teahouse Bosen, even the most powerful samurai would have to bow
              his head.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Forcing guests to bow while entering a teahouse was not a new
              idea. It was the idea invented by Sen no Rikyu (
              <Kanji>千利休</Kanji>) with a teahouse entrance known as{' '}
              <ForeignPhrase as="i">nijiri-guchi</ForeignPhrase> (
              <Kanji>躙口</Kanji>
              ):
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <FigureWithMargin.Border>
                <ImageWithPlaceholder
                  src="/kohoan/nijiri-guchi.png"
                  width={1000}
                  height={419}
                />

                <FigCaption>
                  How to enter a teahouse through nijiri-guchi
                  <Span.Source>
                    [Image source:{' '}
                    <a href="https://www.japan-architecture.org/nijiri-guchi/">
                      Japan Architecture (2021)
                    </a>
                    ]
                  </Span.Source>
                </FigCaption>
              </FigureWithMargin.Border>
            </FigureWithMargin>
            <P belowBoxLine>
              It is an architectural device that makes everyone—noble and
              humble—equal inside the teahouse. A revolutionary idea of the
              time.
            </P>
            <Spacer.BoxParagraphToText />
            <P>
              What makes Teahouse Bosen unique is the way it achieves the same
              idea, not with the use of{' '}
              <ForeignPhrase as="i">nijiri-guchi</ForeignPhrase> but with the
              hanging paper screens. There is no other example of a teahouse
              entrance like this one.
            </P>
            <Hr />
            <P>
              When you bend your head, pass under the hanging paper screens and
              then look up, you’ll see a view of teahouse interior spread out:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/bosen-interior.jpeg"
                width={1200}
                height={805}
              />
              <FigCaption>
                The interior of Teahouse Bosen
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://kotonarijuku.kyotoshunju.com/experience/286.html">
                    Kyoto Shunju (2020b)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              If you feel something weird with this view, you’re a connoisseur
              of Japanese architecture. Notice that the tie beams (the
              horizontal pieces of timber placed at the upper middle of pillars)
              are of the same height across the room, including{' '}
              <ForeignPhrase as="i">tokonoma</ForeignPhrase> (
              <Kanji>床の間</Kanji>) on the right half of the back wall.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              <ForeignPhrase as="i">Tokonoma</ForeignPhrase> is an alcove with a
              tatami floor to display a hanging scroll (as shown in the above
              photo) and/or other ornamental items such as ikebana flower
              arrangement. For a typical Japanese room, the alcove’s tie beam is
              sightly higher up than the rest of the room:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <FigureWithMargin.Border>
                <ImageWithPlaceholder
                  src="/kohoan/tokonoma.jpg"
                  width={640}
                  height={427}
                />

                <FigCaption>
                  An example of the Japanese architectural interior with a
                  tokonoma alcove
                  <Span.Source>
                    [Image source:{' '}
                    <a href="https://commons.wikimedia.org/wiki/File:Kannonin_Tottori16s4470.jpg">
                      663highland (2010) via Wikimedia Commons
                    </a>
                    ]
                  </Span.Source>
                </FigCaption>
              </FigureWithMargin.Border>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              According to the chief priest, this special arrangement prevents
              the ceiling from looking too high when you bend your head to enter
              the room. In other words, this teahouse is not a place for the
              host to show off his dignity to the bowing guests, but a place to
              make them feel at ease.
            </P>
            <Hr />
            <P>
              After entering the room, the guests turn around to face the
              entrance and purify their hands by scooping water from the hand
              basin. From the porch of the teahouse, the hand basin looks like
              this:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/bosen-chozubachi.jpg"
                width={256}
                height={368}
              />

              <FigCaption>
                Tsuyu-musubi hand basin seen from the inside of Bosen
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://www.amazon.co.jp/dp/4766105109">
                    Yoshikawa (1989)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <P belowBoxLine>
              The inscribed Chinese characters read <a>tsuyu-musubi</a>, meaning
              a form of knots that resemble the ear of a rabbit:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <FigureWithMargin.Border>
                <ImageWithPlaceholder
                  src="/kohoan/tsuyu-musubi.png"
                  width={217}
                  height={300}
                />

                <FigCaption>
                  Tsuyu-musubi knots
                  <Span.Source>
                    [Image source:{' '}
                    <a href="https://kotobank.jp/word/%E9%9C%B2%E7%B5%90-2064295">
                      Shogakukan (2006) via Kotobank
                    </a>
                    ]
                  </Span.Source>
                </FigCaption>
              </FigureWithMargin.Border>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              Why rabbit ear knots? It refers to the rabbits that appear in a
              passage from an ancient Chinese philosophy book called{' '}
              <a href="https://en.wikipedia.org/wiki/Zhuangzi_(book)">
                Zhuangzi
              </a>
              , from which the name of the teahouse — Bosen (<Kanji>忘筌</Kanji>
              ) — is also derived:
            </P>
            <blockquote>
              <p>
                <Kanji>
                  筌者所以在魚、得魚而忘筌。蹄者所以在兔、得兔而忘蹄。
                </Kanji>
                [A fish trap [<Kanji>筌</Kanji>] exists to catch fish; thus,
                once you catch fish, you will forget about the trap [
                <Kanji>忘筌</Kanji>]. A rabbit trap exists to catch rabbits;
                thus, once you catch rabbits, you will forget about the rabbit
                trap (my translation).]
              </p>{' '}
            </blockquote>
            <P belowTextParagraph>
              The passage reminds us of the importance of remembering the
              purpose (catching fish or rabbits), not the means to achieve it
              (the trap).
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Some people{' '}
              <Span source>
                (e.g.,{' '}
                <a href="https://kyotofukoh.jp/report703.html">
                  Kyotofukoh (2006)
                </a>
                )
              </Span>{' '}
              suggests that the shape of the{' '}
              <ForeignPhrase as="i">tsuyu-musubi</ForeignPhrase> hand basin
              resembles a mortar used to make{' '}
              <ForeignPhrase as="i">mochi</ForeignPhrase> (rice cakes). Since
              ancient times the Japanese people have likened the shape of lunar
              craters to a rabbit making{' '}
              <ForeignPhrase as="i">mochi</ForeignPhrase>:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <FigureWithMargin.Border>
                <ImageWithPlaceholder
                  src="/kohoan/moon-rabbit.png"
                  width={579}
                  height={234}
                />
                <FigCaption>
                  The Moon and an imaginary rabbit on the moon
                  <Span.Source>
                    Adapted from{' '}
                    <a href="https://allabout.co.jp/gm/gc/220559/">
                      Miura (2020)
                    </a>
                  </Span.Source>
                </FigCaption>
              </FigureWithMargin.Border>
            </FigureWithMargin>
            <P belowBoxLine>
              In case you have no idea how{' '}
              <ForeignPhrase as="i">mochi</ForeignPhrase> is traditionally made
              in Japan:
            </P>
            <Spacer.TextLineToBox />{' '}
            <FigureWithMargin>
              <FigureWithMargin.Border>
                <ImageWithPlaceholder
                  src="/kohoan/mochi-tsuki.jpeg"
                  width={570}
                  height={427}
                />
                <FigCaption>
                  Traditional mochi-making
                  <Span.Source>
                    [Image source:{' '}
                    <a href="https://h-takarajima.com/detail/index/4879">
                      Hokkaido Taiken (2018)
                    </a>
                    ]
                  </Span.Source>
                </FigCaption>
              </FigureWithMargin.Border>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              If you carefully watch the full moon rising to the southern sky,
              you'll notice that the moon slowly rotates clockwise. I imagine
              ancient Japanese people would liken the rotation of the moon
              surface to a rabbit hammering down the pestle onto the mortar.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Just a single stone hand basin sparks a variety of cultural
              knowledge into our mind. It is a piece of art.
            </P>
            <Hr />
            <P>
              Now back to the garden. Once the guests are seated on the tatami
              floor of the teahouse (remember: Japanese people would
              historically take seats on the floor inside a house) and look at
              the direction they came from, they will see this view:
            </P>
            {/* the belowTextLine prop not working */}
            <Figure belowTextLine>
              <ImageWithPlaceholder
                src="/kohoan/bosen-garden-view.jpg"
                width={1200}
                height={800}
              />
              <FigCaption>
                A view of teahouse garden from inside Teahouse Bosen
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://kotonarijuku.kyotoshunju.com/experience/286.html">
                    Kyoto Shunju (2020b)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </Figure>
            <P belowBoxLine>
              Water surface, represented by the pebbles, and the land beyond,
              represented by the greenery, are seen through the “water entrance
              hall”. The stone lantern may be meant to be a lighthouse visible
              offshore.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              The sky is invisible from this teahouse. It reminds me of how
              Japanese aristocrats during the Heian period (794–1192) would have
              admired the full moon: they wouldn’t look up to see the moon
              directly but look down on its reflection on the surface of a pond{' '}
              <Span source>
                (
                <a href="https://www.okeihan.net/navi/kyoto_tsu/tsu201209.php">
                  Wakamura 2012
                </a>
                )
              </Span>
              . Enshu, the designer of Koho-an Temple, is known to be a fan of
              the Japanese aristocratic culture, such as waka poetry{' '}
              <Span source>
                (
                <a href="https://www.enshuryu.com/enshuryu/enshu/shoga/">
                  Enshu Sado Soke 2020b
                </a>
                )
              </Span>
              .
            </P>
            <Spacer.TextParagraphToText />
            <P>
              As I'm thinking about it, the top of the hand basin suddenly looks
              to me like the moon reflected on the water surface:
            </P>{' '}
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/bosen-garden-view-zoomed.jpg"
                width={570}
                height={360}
              />
              <FigCaption>
                A zoomed view of the teahouse garden of Koho-an Temple, seen
                from Teahouse Bosen
                <Span.Source>
                  [Image source: Masaki Miyano via{' '}
                  <a href="http://www.kyobunka.or.jp/tearoom/part_02/index.html">
                    Kirisako (undated)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              As mentioned above, the hand basin is associated with rabbits
              making rice cakes on the moon. Also, if the red soil in the Main
              Hall Front Garden were Lake Biwa dyed orange at sunset, then by
              the time you arrived at this teahouse, the sun would have set with
              the full moon rising in the sky.
            </P>
            <Spacer.TextParagraphToText />
            <P>Every dot is connected now.</P>
            <Spacer.TextParagraphToText />
            <P>
              It may be only me who interprets Koho-an Temple this way. But the
              reflection of light on water surface that reaches inside the
              teahouse was indeed the design intention of Enshu. Take another
              look at the ceiling:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/bosen-interior.jpeg"
                width={1200}
                height={805}
              />
              <FigCaption>
                The interior of Teahouse Bosen (reproduced)
                <Span.Source>
                  [Image source:{' '}
                  <a href="https://kotonarijuku.kyotoshunju.com/experience/286.html">
                    Kyoto Shunju (2020b)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <P belowBoxLine>
              The wood grain of cedar is vividly highlighted on the ceiling.
              According to the chief priest, the grain is meant to be the
              reflection of light from the rippling surface of the water
              represented by the pebbles in the teahouse garden.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              If you’ve never seen the reflection of water ripples on the
              ceiling, here is a real example:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <FigureWithMargin.Border>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/VQaoRnDjZMw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <FigCaption>
                  The reflection of water ripples on the ceiling of Ukimi-do on
                  a pond in Nara Park
                  <Span.Source>
                    [Source:{' '}
                    <a href="https://www.youtube.com/watch?v=VQaoRnDjZMw">
                      hallhorns (2010)
                    </a>
                    ]
                  </Span.Source>
                </FigCaption>
              </FigureWithMargin.Border>
            </FigureWithMargin>
            <Spacer.BoxParagraphToText />
            <P>
              After seeing all these, it now seems a bit unreasonable to liken
              the entrance to the teahouse as the water entrance hall. The view
              through the water entrance hall cannot be this rich. It is also
              difficult to imagine that the reflected moonlight reaches the
              ceiling through the water entrance hall.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              A more natural interpretation is that Teahouse Bosen is meant to
              be a small boat floating on Lake Biwa on a full moon night. The
              view seen from under the hanging paper screens may be the view
              seen under the eaves of the roof of a houseboat. A real example
              can be seen at a moon-viewing event held on the Mid-autumn
              Festival at Osawa Pond, a massive garden pond built in west Kyoto
              in 810:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <FigureWithMargin.Border>
                <ImageWithPlaceholder
                  src="/kohoan/osawa-pond.jpg"
                  width={350}
                  height={240}
                />
                <FigCaption>
                  The moon-viewing event at Osawa Pond on the Mid-autumn
                  Festival
                  <Span.Source>
                    [Image source:{' '}
                    <a href="https://www.okeihan.net/navi/kyoto_tsu/tsu201209.php">
                      Wakamura (2012)
                    </a>
                    ]
                  </Span.Source>
                </FigCaption>
              </FigureWithMargin.Border>
            </FigureWithMargin>
            <Hr />
            <P>
              Perhaps you’re fully satisfied with your virtual visit to Koho-an
              Temple by now. For those who practice tea ceremony, however, there
              is one more special feature in this teahouse. Maybe it’s too much
              for you to read any further. So I will discuss it in another
              article.
            </P>
          </Section>
          <Section>
            <H2>Plan of Koho-an Temple</H2>
            <Spacer.BoxParagraphToText />
            <P>
              To conclude the virtual tour of Kono-an Temple gardens, let me
              show you the plan of the temple, with the indication of how this
              article took you through the journey of experiencing the gardens
              of Koho-an Temple:
            </P>
            <Spacer.TextLineToBox />
            <FigureWithMargin>
              <ImageWithPlaceholder
                src="/kohoan/kohoan-floor-plan.png"
                width={745}
                height={700}
              />

              <FigCaption>
                Plan of Koho-an Temple with the indication of how this article
                walked you through
                <Span.Source>
                  [Adapted from{' '}
                  <a href="http://www.pauch.com/kss/g063.html">
                    Yamaguchi (2012)
                  </a>
                  ]
                </Span.Source>
              </FigCaption>
            </FigureWithMargin>
            <P belowBoxLine>
              We started our journey from the black triangle at the bottom left.
              We walked straight up from there, turned right at 90 degrees,
              walked straight facing rightwards, turned right again, walked
              straight downwards, turned right again to enter Teahouse Bosen
              (which is actually a room in the Koho-an Temple’s Main Hall).
            </P>
            <Spacer.TextParagraphToText />
            <P>
              I’m more than happy if you now feel like you’ve actually visited
              Koho-an Temple. :-)
            </P>
          </Section>
          <Section>
            <H2>Acknowledgement</H2>
            <Spacer.BoxParagraphToText />
            <P>
              I thank Kyoto Shunju Kotonari-juku for organizing the guided tour
              of Koho-an Temple and tea ceremony at Teahouse Bosen on 13
              December, 2020, and the Chief Priest of Koho-an for explaining
              various details of the spatial design of Koho-an Temple.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              This article is the English edition of my own article written in
              Japanese on 3 January, 2021.
            </P>
          </Section>
          <Section>
            <H2>References</H2>
            <P>
              Enshu Sado Soke (2020a){' '}
              <cite>“Kobori Enshu – kenchiku & sakutei”</cite>{' '}
              <Kanji>小堀遠州 — 建築・作庭</Kanji> [Kobori Enshu — architecture
              and garden design], Enshu Sado Soke Website.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Enshu Sado Soke (2020b) <cite>“Kobori Enshu – shoga & waka”</cite>{' '}
              <Kanji>小堀遠州 — 書画・和歌</Kanji> [Kobori Enshu — calligraphy
              and Japanese poetry], Enshu Sado Soke Website.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Kozu, Asao (2009) <cite italic>Chanoyu no rekisi</cite>{' '}
              <Kanji>茶の湯の歴史</Kanji>
              [History of the tea ceremony]. Tokyo: Kadokawa.
            </P>
            <Spacer.TextParagraphToText />
            <P>Kyotofukoh (2006) “Koho-an Temple”, Kyotofukoh.</P>
            <Spacer.TextParagraphToText />
            <P>
              Kyoto Shunju (2020) <cite>“Daitoku-ji Koho-an”</cite>{' '}
              <Kanji>大徳寺孤篷庵</Kanji>
              [Daitoku-ji Koho-an], Leaflet given to the visitors to Koho-an.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              {' '}
              Tanakadate, Tetsuhiko (1996){' '}
              <cite italic>
                Kobori Enshu monogatari – nihon no Reonarudo Da Vinchi
              </cite>
              <Kanji>小堀遠州物語 ― 日本のレオナルド・ダ・ヴィンチ</Kanji> [The
              Story of Kobori Enshu — Japan’s equivalent of Leonardo Da Vinci].
              Tokyo: Chobun-sha.
            </P>
            <P>
              Uchida, Shigeru (2000) <cite italic>Interia to nihonjin</cite>{' '}
              <Kanji>インテリアと日本人</Kanji> [Interior and the Japanese
              people]. Tokyo: Shobun-sha.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              {' '}
              Vinfo (2012) <cite>“Daitoku-ji Koho-an sono 4”</cite>{' '}
              <Kanji>大徳寺 孤篷庵 その４</Kanji> [Daitoku-ji Koho-an Part 4],
              <cite italic>Memories of Wandering</cite>, Aug. 11, 2012.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Wakamura, Ryo (2012) <cite>“Kangetsu gyoji”</cite>{' '}
              <Kanji>観月行事</Kanji> [Moon-viewing Events],{' '}
              <cite italic>Okeihan.net</cite>.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Yamaguchi, Sumio (2012) <cite>“Koho-an teien”</cite>
              <Kanji>孤篷庵庭園</Kanji> [Koho-an Garden],{' '}
              <cite italic>
                Kyoto Historical Site Walking Association Monthly
              </cite>
              , issue 63, Feb. 19, 2012.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Usagi (2015) “
              <a href="http://rabbitah.jugem.jp/?eid=671">Daitoku-ji Koho-an</a>
              ”, <Cite.Italic>Usagi no Blog</Cite.Italic>, Aug. 3, 2015.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Anonymous (2014) “
              <a href="https://30047809.at.webry.info/201410/article_10.html">
                Kobori Enshu ga konryu shita Daitoku-ji Tacchu Koho-an he
              </a>
              ”, <Cite.Italic>Kodera to oshiro no tabi nikki II</Cite.Italic>,
              Oct. 17, 2014.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Nakao, Katsuharu (2010) “
              <a href="https://knaw.exblog.jp/15349309/">
                Daitoku-ji Koho-an Bozen
              </a>
              ”,{' '}
              <Cite.Italic>
                Futsu no Ie Futsu no Kurashi wo Motomete
              </Cite.Italic>
              , Oct. 25, 2010.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              ayayay0003 (2014) “
              <a href="https://arischan.exblog.jp/23115582/">
                Daitoku-ji Tacchu Koho-an
              </a>
              ”, <Cite.Italic>Arisu no Trip</Cite.Italic>, Oct. 14, 2014.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Kyoto Shunju (2020b) “
              <a href="https://kotonarijuku.kyotoshunju.com/experience/286.html">
                Daitoku-ji Koho-an tokubetsu haikan to juyo bunkazai ‘Bozen’
                deno ochakai
              </a>
              ”, <Cite.Italic>Kyoto Shunju Kotonari Juku</Cite.Italic>, Oct. 14,
              2014.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Shimoyama, Shinji (2019) “
              <a href="https://blog.goo.ne.jp/gooogami/e/390c896448b5606e95904b450cc7d822">
                Daitoku-ji Koho-an
              </a>
              ”,{' '}
              <Cite.Italic>Nihon no mokuzo kenchiku koho no tenkai</Cite.Italic>{' '}
              [<Kanji>日本の木造建築工法の展開</Kanji>], Chap. 4, Sec. 2-3.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Nishi-Hongwan-ji (2021) “
              <a href="https://www.hongwanji.kyoto/see/hiunkaku.html">
                Hiun-kaku
              </a>
              ”, The website for Nishi-Hongwan-ji Temple.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Japan Architecture (2021) “
              <a href="https://www.japan-architecture.org/nijiri-guchi/">
                Nijiri-guchi
              </a>
              ”, Japan Architecture.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Yoshikawa, Isao (1989){' '}
              <Cite.Italic>
                <a href="https://www.amazon.co.jp/dp/4766105109">
                  Stone Basins: The Accents of Japanese Gardens
                </a>
              </Cite.Italic>
              , Tokyo: Graphic-sha.
            </P>
            <Spacer.TextParagraphToText />
            <P>
              Miura, Yasuko (2020) “
              <a href="https://allabout.co.jp/gm/gc/220559/">
                Tsuki de usagi ga mochi-tsuki shiteiru nowa naze? Kaigai deno
                tsuki no moyo no mirare-kata
              </a>
              ”, All About.
            </P>
            <a href="https://h-takarajima.com/detail/index/4879">
              Hokkaido Taiken (2018)
            </a>
            <a href="https://www.okeihan.net/navi/kyoto_tsu/tsu201209.php">
              Wakamura (2012)
            </a>{' '}
          </Section>
        </Article>
      </Main.Kohoan>{' '}
    </>
  );
}
