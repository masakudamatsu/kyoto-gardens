import React from 'react';
import PropTypes from 'prop-types';

import Garden from './Garden';
import NavTimeline from 'src/blocks/NavTimeline';
import Spacer from 'src/elements/Spacer';

const Timeline = ({currentPage}) => {
  return (
    <NavTimeline>
      <Garden
        currentPage={currentPage}
        gardenName={{
          kanji: '龍安寺',
          latin: 'Ryoan-ji',
          lowercase: 'ryoanji',
        }}
        description="Reminding us of the principle of Zen"
        image={{
          src: '/images/ryoanji-banner-spring-large.jpg',
          width: 1882,
          height: 1405,
          alt: 'A view of Ryoanji Rock Garden',
        }}
        year="c.1499"
      />
      <Spacer.Index />
      <Garden
        currentPage={currentPage}
        gardenName={{
          kanji: '孤篷庵',
          latin: 'Koho-an',
          lowercase: 'kohoan',
        }}
        description="Letting us sail at sunset to see the full moon offshore"
        image={{
          src: '/kohoan/bosen-garden-view.jpg',
          width: 1200,
          height: 800,
          alt: 'A view of Kohoan Temple Garden',
        }}
        year="1643"
      />
    </NavTimeline>
  );
};

Timeline.propTypes = {
  currentPage: PropTypes.string,
};

export default Timeline;
