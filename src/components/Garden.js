import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import ImageWithPlaceholder from '../elements/ImageWithPlaceholder';
import IndexSection from 'src/blocks/IndexSection';

const Garden = ({currentPage, gardenName, description, image, year}) => {
  return (
    <IndexSection currentPage={currentPage} pageName={gardenName.lowercase}>
      <IndexSection.H2>{year}</IndexSection.H2>
      <IndexSection.Card>
        <IndexSection.Figure>
          <ImageWithPlaceholder
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </IndexSection.Figure>
        <IndexSection.Kanji>{gardenName.kanji}</IndexSection.Kanji>
        {currentPage === gardenName.lowercase ? (
          /* eslint-disable-next-line */
          <a>
            <IndexSection.Latin gardenName={gardenName.lowercase}>
              {gardenName.latin}
            </IndexSection.Latin>
          </a>
        ) : (
          <Link href={`/${gardenName.lowercase}`}>
            {/* eslint-disable-next-line */}
            <a>
              <IndexSection.Latin gardenName={gardenName.lowercase}>
                {gardenName.latin}
              </IndexSection.Latin>
            </a>
          </Link>
        )}
        <IndexSection.P>{description}</IndexSection.P>
      </IndexSection.Card>
    </IndexSection>
  );
};

Garden.propTypes = {
  currentPage: PropTypes.string,
  gardenName: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  year: PropTypes.string.isRequired,
};

export default Garden;
