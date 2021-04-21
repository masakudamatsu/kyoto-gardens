import Head from 'next/head';

import {title, description} from '../metadata/ryoanji';
import Carousel from '../blocks/Carousel';
import P from '../elements/P';

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
      <P>
        Pick any travel guide for Kyoto. I'm sure you’ll find Ryoan-ji, a Zen
        Buddhist temple famous for its Rock Garden (pictured above).
      </P>
      <div style={{height: '15px', width: '100%'}}></div>
      <P>
        This zen garden is made of fifteen rocks, surrounded by patches of moss,
        laid out in the ocean of gravels on a walled rectangular plot.
      </P>
    </>
  );
}

export default Ryoanji;
