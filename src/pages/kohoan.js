import Head from 'next/head';

import Article from '../blocks/Article';
import FigCaption from '../elements/FigCaption';
import Figure from '../blocks/Figure';
import H1 from '../elements/H1';
import H2 from '../elements/H2';
import H3 from '../elements/H3';
import Italic from '../elements/Italic';
import Kanji from '../elements/Kanji';
import Link from '../elements/Link';
import P from '../elements/P';
import Section from '../blocks/Section';

import {kohoan} from 'src/utils/metadata';

export default function Kohoan() {
  return (
    <>
      <Head>
        <title>{kohoan.title}</title>
        <meta name="description" content={kohoan.description} />
      </Head>
      <Article>
        <H1>Koho-an Temple</H1>
        <Section>
          <H2>The Front Gate</H2>
          <P>
            The spatial experience of Koho-an Temple begins before you enter the
            temple. Approaching from the left side of the front gate, the first
            thing you notice is an empty moat along the wall:
          </P>
          <Figure>
            <FigCaption>
              The moat around Koho-an Temple{' '}
              <FigCaption.Footer>(image source)</FigCaption.Footer>
            </FigCaption>
          </Figure>
          <P>
            When you reach the front gate, you’ll walk over a stone bridge to
            enter the temple:
          </P>
          <Figure>
            <FigCaption>
              The front gate and stone bridge of Koho-an Temple{' '}
              <FigCaption.Footer>(image source)</FigCaption.Footer>
            </FigCaption>
          </Figure>
          <P>
            When I myself walked over the stone bridge, I felt something
            strange. I’ve been to many temples in Kyoto, but I’ve never crossed
            a moat to enter any temple. A moat is very common for Japanese
            castles, but it is an unusual design feature for a temple.
          </P>
          <P>
            As far as I know, no one tries to understand why there is a moat
            along the walls of Koho-an Temple. One possible reason I’ve come up
            with is that the moat is meant to make the entire temple look like a
            structure built above the water along the shore.
          </P>
          <P>
            Imagine you are visiting a habour. There is a building complex built
            on stilts above the water. When you enter the building, you will
            notice a gap between the shore and the floor of the building,
            through which you see the water beneath. The moat and the stone
            bridge may be intended to create such a scene in a visitor’s mind.
          </P>
          <P>
            This interpretation might sound absurd to you. But it is not totally
            out of the context because the name of the temple, Koho (
            <Kanji>孤篷</Kanji>), means a solitary boat (Enshu Sado Soke 2020a).
          </P>
          <P>
            Koho-an Temple was designed by Kobori Enshu, a 17th-century master
            of tea ceremony who also excelled at architecture and garden design
            — some people liken Enshu as Japan’s equivalent of Leonardo Da Vinci
            (Tanakadate 1996). As written in every guidebook on the temple (e.g.
            Kyoto Shunju 2020), its design concept was a solitary boat floating
            on Lake Biwa, Japan’s largest lake near Enshu’s hometown to the east
            of Kyoto.
          </P>
          <P>
            I think the entire site of Koho-an Temple represents a harbour where
            boats arrive and depart. If I see the temple this way, all of its
            design features will start making perfect sense to me. Keep on
            reading to see if it will make sense to you as well.
          </P>
        </Section>
        <Section>
          <H2>Entrance Garden</H2>
          <P>
            After passing through the front gate, you’ll find yourself walking
            on paving stones arranged to form a straight footpath (called
            nobedan in Japanese garden terminology):
          </P>
          <Figure>
            <FigCaption>
              Stone pavement in the entrance garden of Koho-an Temple{' '}
              <FigCaption.Footer>(image source)</FigCaption.Footer>
            </FigCaption>
          </Figure>{' '}
          <P>
            Stones of various shapes and textures are laid out with as narrow
            gaps as possible, to make a long rectangle. Imagine you yourself are
            asked to lay out these stones in this manner, and you’ll understand
            how laborious it must have been. When I saw this footpath, I was
            struck with awe.
          </P>
          <P>
            As you walk, you’ll notice the long and narrow rectangular stones
            rhythmically arranged on both sides: left, right, left, right — as
            if they had responded to the movement of your feet. It made me want
            to walk further ahead.
          </P>
          <P>
            If you look to your right while walking on the pavement, you’ll see
            the inner entrance of Koho-an Temple.
          </P>
          <Figure>
            <FigCaption>
              The inner entrance of Koho-an Temple{' '}
              <FigCaption.Footer>(image source)</FigCaption.Footer>
            </FigCaption>
          </Figure>{' '}
          <P>
            When I visited the temple, I was asked to enter the building from
            here. For the true experience of visiting Koho-an Temple, however,
            you’re expected to walk further down the straight stone pavement.
          </P>
          <Figure>
            A view at halfway up of the stone pavement in the entrance garden of
            Koho-an Temple (photographed by the author around 1pm on 13
            December, 2020)
          </Figure>
          <P>
            At the end of the path stands a pine tree in front of which the path
            turns to the right at a right angle:
          </P>
          <Figure>
            Stone pavement turns at a right angle in the entrance garden of
            Koho-an Temple. The structure behind the pine tree is “soto-machiai”
            — a roofed bench where the invited guests to a tea ceremony would
            take a rest until the host comes to greet them. (image source)
          </Figure>
          <P>
            As pointed out by Vinfo (2012) and Yamaguchi (2012), the long,
            narrow stone at the top-left corner of the pavement gently curves to
            the right on the inner side, inviting your footsteps to the right.
            Did you ever imagine that a pavement can be considerate this much?
          </P>
          <P>
            Just like the empty moat around the temple, no one discusses the
            design intention behind the long, straight stone pavement in the
            entrance garden. If the entire site of Koho-an Temple were a harbour
            on the shore of Lake Biwa, then I imagine this stone pavement would
            be a pier. The pier stretches straight and then extends further to
            the side at a right angle. The boat is not parked at the end of the
            straight stretch, but on the side of the pier or at the end of the
            right-angled side stretch.
          </P>
          <P>
            At the very end of the right-angled side stretch, there is indeed
            the main entrance of Koho-an Temple that resembles the entrance of a
            houseboat.
          </P>
        </Section>
        <Section>
          <H2>Main Entrance</H2>
          <Figure>
            Main Entrance of Koho-an Temple (image source: Wikimedia Commons)
          </Figure>{' '}
          <P>
            According to the chief priest of Koho-an Temple, the roof of the
            main entrance is meant to be that of a houseboat of the time. The
            roof could have been more elaborate and magnificent to welcome
            guests, but that wouldn’t fit the design concept of the temple: a
            solitary boat floating on Lake Biwa. Houseboat roofs are simple with
            the straight edge of eaves. The design of the main entrance roof is
            faithful to it.
          </P>
          <P>
            The simple shape disguises how elaborate the roof design actually
            is, however. According to the chief priest, the roof is constructed
            with an unusual method called yoroi-buki, or “armour thatching”. The
            roof is made of alternating layers of hiwada (the bark of Japanese
            cypress — used for the roofs of major shrines in Kyoto) and kokera
            (very thin wood panels of 2–3mm thick — used for the roofs of
            temples such as Ginkaku-ji), to create a striped pattern that
            resembles the texture of samurai armours of the time.
          </P>
          <Figure>
            The “armour-thatching” roof of Koho-an Temple’s Main Entrance (image
            source: Wikimedia Commons)
          </Figure>
          <P>
            This striped pattern emphasizes the straight edge of the eave. It
            also corresponds to the straight line of the stone pavement you
            walked on to get here.
          </P>
        </Section>
        <Section>
          <H2>Main Hall Front Garden</H2>
          <P>
            When you pass through the main entrance, that is, when you get on
            the “houseboat”, you’ll see a garden spread out on the left:
          </P>
          <Figure>
            A view of Koho-an Temple’s Main Hall Front Garden from inside the
            main entrance (image source)
          </Figure>
          <P>
            And directly in front of you, the wide veranda of the main hall
            stretches straight out:
          </P>
          <Figure>
            The veranda of Koho-an Temple’s Main Hall, viewed from the main
            entrance (image source)
          </Figure>
          <P>It looks like the deck of a boat, don’t you think?</P>
          <P>
            Take off your shoes and step up onto the veranda, and see the garden
            on your left again:
          </P>
          <Figure>
            Main Hall Front Garden of Koho-an Temple (image source)
          </Figure>
          <P>
            This garden is very simple and purely geometric: linearly trimmed
            hedges and sandy soil. It is believed that this garden represents
            the waving surface of Lake Biwa (Uchida 2000, page 164, and Vinfo
            2012). If the veranda were the deck of a boat, the hedge on the near
            side of the sandy ground, trimmed in a straight line, would be a
            wave caused by the boat moving forward. The two-tiered hedge on the
            far side of the sand would be the waves coming forward to lap
            against the boat. As you walk on the veranda looking at the garden,
            you can feel as if you were on a boat heading somewhere.
          </P>
          <P>
            The above photo is not accurate colour-wise, by the way. The photo
            below is closer to the real view, taken from an angle looking back
            after walking along the veranda for a while:
          </P>
          <Figure>
            Main Hall Front Garden of Koho-an Temple (image source)
          </Figure>
          <P>
            If you’re surprised by colour in the above photo, you’re a
            connoisseur of Japanese garden design: red clay is rarely used in
            historical gardens in Japan. According to the chief priest, red clay
            is characteristic of the area around Koho-an Temple. But doesn’t it
            contradict with the design concept, a solitary boat on Lake Biwa?
            How can red clay represent the water surface of a lake? In
            karesansui rock gardens, water surface is represented by the spread
            of gravels, not reddish sand.
          </P>
          <P>
            Personally, red clay reminds me of a wilderness in North America.
            But that’s an association I’ve learned by watching TV. For the
            Japanese people in the 17th century, of course, this association
            cannot be the design intention.
          </P>
          <P>
            I speculate that red clay is meant to represent the water surface of
            Lake Biwa tinted orange at sunset. Again, no one suggests this
            interpretation. But it will make sense later during your visit to
            Koho-an Temple. Bear with me for a moment.
          </P>
          <P>
            One last thing about the Main Hall Front Garden: according to the
            chief priest, Funaoka-yama, a small hill in the neighborhood, was
            originally part of the garden view — a garden design technique known
            as the borrowed scenery. The shape of the hill would resemble a boat
            floating in the distance on Lake Biwa, according to the priest:
          </P>
          <Figure>
            Funaoka-yama, a hill in northwest Kyoto (image source: Wikimedia
            Commons)
          </Figure>
          <P>
            In the latter half of the 20th century, high-rise buildings rose up
            between the temple and the hill. Tall trees have been planted around
            Koho-an Temple to keep modernity out of the 17th-century garden
            view. Today it is impossible to see the “boat floating in the
            distance”.
          </P>
          <P>
            Many gardens with borrowed scenery in Kyoto have suffered from the
            same fate. With high population density typical of East Asia, it is
            not easy to preserve the historical landscape in Japan.
          </P>
        </Section>
        <Section>
          <H2>Teahouse Garden</H2>
          <P>
            At the rear end of the veranda is a staircase that leads to the
            garden on the other side of the Main Hall. While the guided tour
            during my visit continued inside the Main Hall, those guests invited
            to a tea ceremony would go down the stairs to the garden. If the
            Main Hall were a boat, you would get off the boat here, where you
            would see this view of the garden:
          </P>
          <Figure>
            The garden on the southwest of Koho-an Temple’s Main Hall (image
            source)
          </Figure>
          <P>
            According to the chief priest, the pebbles in the foreground are
            meant to resemble water surface. Stepping stones lead to the private
            garden representing the eight best views of Lake Biwa (
            <Kanji>近江八景</Kanji>).
          </P>
          <P>
            But you as a guest to Koho-an Temple are supposed to turn right
            here, and you’ll see a straight line of stepping stones embedded in
            tataki, an earthen floor made of red clay, slaked lime (calcium
            hydroxide) and bittern (the leftover from extracting salt out of sea
            water, used to make tofu in Japan):
          </P>
          <Figure>
            Stepping stones leading to the teahouse of Koho-an Temple (image
            source)
          </Figure>
          <P>
            At the end of the earthen floor stands a chozu-bachi (a hand basin
            made of stone — typical of Japanese garden furniture). When you
            reach this point and turn to the right, you’ll find the entrance to
            the teahouse, where a tea ceremony is going to take place.
          </P>
          <P>
            Laid out on the left of the footpath are the pebbles to represent
            water surface. They made me imagine fine water ripples across the
            surface of water.
          </P>
          <P>
            Although not shown in the photo, the eaves of the roof extend over
            this earthen floor to keep it dry on rainy days.
          </P>
          <P>
            As far as I know, no one tries to interpret this earthen floor with
            embedded stepping stones. In other words, there is room for
            imagination to have fun. :-) I think there are two interpretations.
          </P>
          <H3>1. Suggesting the entrance of a teahouse</H3>
          <P>
            One thing is very clear: the stepping stones and the hand basin will
            make visitors to expect that the entrance to a teahouse is just
            around the corner.
          </P>
          <P>
            Both stepping stones and hand basins are commonly found in Japanese
            gardens. But they were originally invented as scenery to decorate
            the way to a teahouse during the late 16th century (Kozu 2009,
            Section 4 of Chapter 4 and Section 5 of Chapter 5). Koho-an Temple
            was built in the mid-17th century, when people must have had the
            idea that the stepping stones and the hand basin would signify the
            pathway to a teahouse.
          </P>
          <P>
            As I’ll explain later, the entrance to a teahouse is the climax of
            the spatial experience of Koho-an Temple. At this point, therefore,
            it is necessary to make the guests well-prepared for the impending
            experience.
          </P>
          <H3>2. Changing to board a smaller boat</H3>
          <P>
            What about the story of sailing across Lake Biwa that Koho-an
            Temple’s spatial design has told us so far? What does walking on the
            earthen floor signify in this context?
          </P>
          <P>
            One interpretation is sailing on a smaller boat. A teahouse is
            typically a small hut. So it cannot be entered by a large boat of
            the scale of the Main Hall. In fact, as we’ll see below, the
            entrance to Koho-an Temple’s teahouse is structured in a similar way
            to a water entrance in which a boat can directly enter into the
            building.
          </P>
          <P>
            However, if that were the case, it would be more appropriate to
            place the stepping stones in the midst of the pebbles that resemble
            the rippling surface of water, instead of making them embedded in
            the earthen floor.
          </P>
          <P>
            An alternative interpretation is that the earthen floor represents a
            pier to transfer to another boat called a teahouse. With this
            interpretation, the straight arrangement of stepping stones makes
            sense. Stepping stones usually represent a winding mountain path so
            that a teahouse in the middle of a city will turn into a hut deep in
            the mountain in a visitor’s mind. To represent a pier, therefore, a
            winding path of stepping stones would be inappropriate.
          </P>
          <P>
            As far as I know, however, no one interprets the teahouse of Koho-an
            Temple as a boat. There is no interior design feature in the
            teahouse that evokes a ship.
          </P>
          <P>
            I’ll revisit the question of which interpretation is more
            appropriate, once we sit down in the teahouse.
          </P>
          <hr />
          <P>
            Now is the climax of the spatial experience of Koho-an Temple:
            entering the teahouse called Bosen (<Kanji>忘筌</Kanji>).
          </P>
        </Section>
        <Section>
          <H2>Teahouse Bozen</H2>
          <P>
            Seen from inside the building, the entrance to Teahouse Bosen looks
            like this:
          </P>
          <Figure>Entrance to Teahouse Bosen (image source)</Figure>
          <P>
            The cylindrical hand basin in this photo is the one you saw at the
            end of the straight stepping stones. Therefore, when you reach the
            hand basin and turn to your right, you’ll see paper screens hanging
            from the ceiling with the lower half open, through which you can
            enter the teahouse.
          </P>
          <P>
            Some people (e.g. Enshu Sado Soke 2020a) point out that this
            entrance resembles the water entrance hall where visitors get off
            their boat and directly land on the inside of a building. A real
            example is found in Hiun-kaku Pavilion at Nishi-Hongwanji Temple,
            also in Kyoto:
          </P>
          <Figure>
            The water entrance hall of Hiun-kaku Pavilion at Nishi-Hongwan-ji
            Temple (image source: Nishi-Hongwan-ji)
          </Figure>
          <P>
            It is indeed similar-looking. This is why walking on the straight
            stepping stones may be interpreted as sailing on a small boat.
          </P>
          <P>
            The gap under the paper screens is lower than one’s height. This is
            a big deal in the 17th-century feudal society of Japan, where those
            ranked higher than others would never bow his head. To enter
            Teahouse Bosen, even the most powerful samurai would have to bow his
            head.
          </P>
          <P>
            Making guests bow to enter a teahouse was not a new idea. It was the
            idea invented by Sen no Rikyu (<Kanji>千利休</Kanji>) with a
            teahouse entrance known as nijiri-guchi (<Kanji>躙口</Kanji>):
          </P>
          <Figure>
            How to enter a teahouse through nijiri-guchi (image source: Japan
            Architecture)
          </Figure>
          <P>
            What makes Teahouse Bosen unique is the way it achieves the same
            idea without nijiri-guchi. That is, the hanging paper screens. There
            is no other example of a teahouse entrance like this one.
          </P>
          <P>
            When you bend your head and then look up after passing under the
            hanging paper screens, you’ll see a view of teahouse interior spread
            out:
          </P>
          <Figure>
            The interior of Teahouse Bosen at Koho-an Temple (image source)
          </Figure>
          <P>
            If you feel something weird with this view, you’re a connoisseur of
            Japanese architecture. Notice that the tie beams (the horizontal
            pieces of timber placed at the upper middle of pillars) are of the
            same height across the room, including tokonoma (
            <Kanji>床の間</Kanji>) on the right half of the back wall.
          </P>
          <P>
            Tokonoma is an alcove with a tatami floor to display a hanging
            scroll (as shown in the above photo) and/or other ornamental items
            such as ikebana flower arrangement. For a typical Japanese room, the
            alcove’s tie beam is sightly higher up than the rest of the room.
          </P>
          <P>
            According to the chief priest, this special arrangement prevents the
            ceiling from looking too high when you bend your head to enter the
            room. In other words, this teahouse is not a place for the host to
            show off his dignity to the bowing guests, but a place to make them
            feel at ease.
          </P>
          <P>
            After entering the room, the guests turn around to face the entrance
            and purify their hands by scooping water from the hand basin. From
            the porch of the teahouse, the hand basin looks like this:
          </P>
          <Figure>
            Tsuyu-musubi hand basin in front of Teahouse Bosen at Koho-an Temple
            (image source)
          </Figure>
          <P>
            The inscribed Chinese characters read “tsuyu-musubi”, meaning a form
            of knots that resemble the ear of a rabbit:
          </P>
          <Figure>Tsuyu-musubi knots (image source)</Figure>
          <P>
            Why rabbit ear knots? It comes from the rabbits that appear in a
            passage in an ancient Chinese philosophy book called Zhuangzi, from
            which the name of the teahouse — Bosen (<Kanji>忘筌</Kanji>) — is
            also derived:
          </P>
          <blockquote>
            <p>
              <Kanji>
                筌者所以在魚、得魚而忘筌。蹄者所以在兔、得兔而忘蹄。
              </Kanji>
            </p>{' '}
            <p>
              Since a fish trap exists to catch fish, you will forget about the
              trap once you catch fish. Since a rabbit trap exists to catch
              rabbits, you will forget about the rabbit trap once you catch
              rabbits. (Translation by the author of this article)
            </p>
          </blockquote>
          <P>
            The passage reminds us of the importance of remembering the purpose
            (catching fish or rabbits), not the means to achieve it (the trap).
          </P>
          <P>
            Kyotofukoh (2006) suggests that the shape of the tsuyu-musubi hand
            basin resembles a mortar used by rabbits to make mochi (rice cakes)
            on the moon. Since ancient times the Japanese people have likened
            the shape of lunar craters to a rabbit making mochi:
          </P>
          <Figure>
            The Moon and an imaginary rabbit on the moon (adapted by the author
            from image source)
          </Figure>
          <P>
            In case you have no idea how mochi is traditionally made in Japan:
          </P>
          <Figure>Traditional mochi-making (image source)</Figure>
          <P>
            The full moon slowly rotates clockwise as it rises to the southern
            sky. I imagine ancient Japanese people would liken the rotation of
            the moon surface to a rabbit hammering down the pestle onto the
            mortar.
          </P>
          <hr />
          <P>
            Once the guests are seated on the tatami floor of the teahouse
            (remember: Japanese people would historically take seats on the
            floor inside a house) and look at the direction they came from, they
            will see this view:
          </P>
          <Figure>
            A view of teahouse garden from inside Teahouse Bosen (image source)
          </Figure>
          <P>
            Water surface, represented by the pebbles, and the land beyond,
            represented by the greenery, are seen through the “water entrance
            hall”. The stone lantern may be meant to be a lighthouse visible
            offshore.
          </P>
          <P>
            The sky is invisible from this teahouse. It reminds me of how
            Japanese aristocrats during the Heian period (794–1192) would have
            admired the full moon: they wouldn’t look up to see the moon
            directly but look down on its reflection on the surface of a pond
            (Wakamura 2012). Enshu, the designer of Koho-an Temple, is known to
            be a fan of the Japanese aristocratic culture, such as waka poetry
            (Enshu Sado Soke 2020b).
          </P>
          <P>
            Thinking about it, the top of the hand basin suddenly looks to me
            like the moon reflected on the water surface:
          </P>{' '}
          <Figure>
            A zoomed view of the teahouse garden of Koho-an Temple, seen from
            Teahouse Bosen (image source)
          </Figure>
          <P>
            As mentioned above, the hand basin is associated with rabbits making
            rice cakes on the moon. Also, if the red soil in the Main Hall Front
            Garden were Lake Biwa dyed orange at sunset, then by the time you
            arrived at this teahouse, the sun would have set with the full moon
            rising in the sky.
          </P>
          <P>Every dot is connected now.</P>
          <P>
            It may be only me who interprets Koho-an Temple this way. But the
            reflection of light on water surface that reaches inside the
            teahouse was indeed the design intention of Enshu. Take another look
            at the ceiling:
          </P>
          <Figure>The interior of Teahouse Bosen (image source)</Figure>
          <P>
            The wood grain of cedar is vividly highlighted on the ceiling.
            According to the chief priest, the grain is meant to be the
            reflection of light from the rippling surface of the water
            represented by the pebbles in the teahouse garden.
          </P>
          <P>
            If you’ve never seen the reflection of water ripples on the ceiling,
            here is a real example:
          </P>
          <Figure>
            The reflection of water ripples on the ceiling of Ukimi-do on a pond
            in Nara Park (source)
          </Figure>
          <P>
            After seeing all these, it now seems a bit unreasonable to liken the
            entrance to the teahouse as the water entrance hall. The view
            through the water entrance hall cannot be this rich. It is also
            difficult to imagine that the reflected moonlight reaches the
            ceiling through the water entrance hall.
          </P>
          <P>
            A more natural interpretation is that Teahouse Bosen is meant to be
            a small boat floating on Lake Biwa on a full moon night. The view
            seen from under the hanging paper screens may be the view seen under
            the eaves of the roof of a houseboat. A real example can be seen at
            a moon-viewing event held on the Mid-autumn Festival at Osawa Pond,
            a massive garden pond built in west Kyoto in 810:
          </P>
          <Figure>
            The moon-viewing event at Osawa Pond on the Mid-autumn Festival
            (image source)
          </Figure>
          <hr />
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
          <P>
            To conclude the virtual tour of Kono-an Temple gardens, let me show
            you the plan of the temple, with the indication of how this article
            took you through the journey of experiencing the gardens of Koho-an
            Temple:
          </P>
          <Figure>
            Plan of Koho-an Temple with the indication of how this article
            walked you through (adapted from image source)
          </Figure>
          <P>
            We started our journey from the black triangle at the bottom left.
            We walked straight up from there, turned right at 90 degrees, walked
            straight facing rightwards, turned right again, walked straight
            downwards, turned right again to enter Teahouse Bosen (which is
            actually a room in the Koho-an Temple’s Main Hall).
          </P>
          <P>
            I’m more than happy if you now feel like you’ve actually visited
            Koho-an Temple. :-)
          </P>
        </Section>
        <Section>
          <H2>Acknowledgement</H2>
          <P>
            I thank Kyoto Shunju Kotonari-juku for organizing the guided tour of
            Koho-an Temple and tea ceremony at Teahouse Bosen on 13 December,
            2020, and the Chief Priest of Koho-an for explaining various details
            of the spatial design of Koho-an Temple.
          </P>
          <P>
            This article is the English edition of my own article written in
            Japanese on 3 January, 2021.
          </P>
        </Section>
        <Section>
          <H2>References</H2>
          <P>
            Enshu Sado Soke (2020a) <Kanji>「小堀遠州 — 建築・作庭」</Kanji>{' '}
            (“Kobori Enshu — Architecture and Garden Design”), Enshu Sado Soke
            Website.
          </P>
          <P>
            Enshu Sado Soke (2020b) <Kanji>「小堀遠州 — 書画・和歌」</Kanji>{' '}
            (“Kobori Enshu — Calligraphy and Japanese Poetry”), Enshu Sado Soke
            Website.
          </P>
          <P>
            Kozu, Asao (2009) <Kanji>『茶の湯の歴史』</Kanji> (
            <Italic>History of the Tea Ceremony</Italic>). Tokyo: Kadokawa.
          </P>
          <P>Kyotofukoh (2006) “Koho-an Temple”, Kyotofukoh.</P>
          <P>
            Kyoto Shunju (2020) <Kanji>『大徳寺孤篷庵』</Kanji> (
            <Italic>Daitoku-ji Koho-an</Italic>), Leaflet given to the visitors
            to Koho-an.
          </P>
          <P>
            {' '}
            Tanakadate, Tetsuhiko (1996)
            <Kanji>『小堀遠州物語 ― 日本のレオナルド・ダ・ヴィンチ』</Kanji> (
            <Italic>
              The Story of Kobori Enshu — Japan’s equivalent of Leonardo Da
              Vinci
            </Italic>
            ). Tokyo: Chobun-sha.
          </P>{' '}
          <P>
            Uchida, Shigeru (2000) <Kanji>『インテリアと日本人』</Kanji> (
            <Italic>Interior and the Japanese people</Italic>). Tokyo:
            Shobun-sha.
          </P>
          <P>
            {' '}
            Vinfo (2012) <Kanji>「大徳寺 孤篷庵 その４」</Kanji> (“Daitoku-ji
            Koho-an Part 4)”,
            <Italic>Memories of Wandering</Italic>, Aug. 11, 2012.
          </P>
          <P>
            Wakamura, Ryo (2012) <Kanji>「観月行事」</Kanji> (“Moon-viewing
            Events)”, <Italic>Okeihan.net</Italic>.
          </P>
          <P>
            Yamaguchi, Sumio (2012) <Kanji>「孤篷庵庭園」</Kanji> (“Koho-an
            Garden”),{' '}
            <Italic>Kyoto Historical Site Walking Association Monthly</Italic>,
            issue 63, Feb. 19, 2012.
          </P>
        </Section>
      </Article>
    </>
  );
}
