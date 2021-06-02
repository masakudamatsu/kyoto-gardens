import React from 'react';
import PropTypes from 'prop-types';

import ImageWithPlaceholder from '../elements/ImageWithPlaceholder';
import IndexSection from 'src/blocks/IndexSection';
import NavTimeline from 'src/blocks/NavTimeline';
import Spacer from 'src/elements/Spacer';
import Span from 'src/elements/Span';

const Timeline = () => {
  return (
    <NavTimeline>
      <IndexSection>
        <IndexSection.H2>c.1499</IndexSection.H2>
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
          <IndexSection.P>Reminding us of the principle of Zen</IndexSection.P>
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
            <IndexSection.Latin gardenName="kohoan">Koho-an</IndexSection.Latin>
          </a>
          <IndexSection.Kanji>孤篷庵</IndexSection.Kanji>
          <IndexSection.P>
            Letting us sail at sunset{' '}
            <Span nowrap>to see the full moon offshore</Span>
          </IndexSection.P>
        </IndexSection.Card>
      </IndexSection>
    </NavTimeline>
  );
};

Timeline.propTypes = {};

export default Timeline;
