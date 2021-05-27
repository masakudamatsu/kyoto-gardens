import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import Kanji from 'src/elements/Kanji';

import {h1FontStyle} from 'src/utils/h1FontStyle';
import {index} from 'src/utils/specIndex';
import remify from 'src/utils/remify';

const IndexSection = styled.section`
  display: flex;
  &:nth-of-type(odd) {
    flex-direction: row;
  }
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
  @media only screen and (min-width: ${index.section.maxWidth}px) {
    width: ${index.section.maxWidth}px;
    &:nth-of-type(odd) {
      float: right;
    }
    &:nth-of-type(even) {
      float: left;
    }
  }
`;

const h2FontStyle = css`
  font-family: ${index.h2.fontFamily};
  font-size: ${remify(index.h2.fontSize.mobile)};
  font-weight: ${index.h2.fontWeight};
  font-style: ${index.h2.fontStyle};
`;

IndexSection.H2 = styled.h2`
  ${h2FontStyle}
  padding-bottom: 0;
  padding-left: ${index.h2.paddingSide}px;
  padding-right: ${index.h2.paddingSide}px;
  padding-top: ${-index.kanji.top}px;
`;

IndexSection.Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  & a {
    text-decoration: none;
  }
  & a:focus,
  & a:hover {
    outline: none;
  }
  & a::after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3; /* To overlay over Kanji and Latin */
  }
  & a:focus::after,
  & a:hover::after {
    background-color: ${index.card.backgroundColorOnHover};
  }
`;

IndexSection.Kanji = styled(Kanji)`
  color: ${index.kanji.color};
  font-family: ${index.kanji.fontFamily};
  font-size: ${index.kanji.fontSize};
  font-weight: ${index.kanji
    .fontWeight}; /* to match with stroke width of Cormorant Garamond SemiBold (600) */
  line-height: ${index.kanji.lineHeight};
  padding: ${index.kanji.paddingTop}px;
  position: absolute;
  top: 0;
  writing-mode: vertical-rl;
  z-index: 2; /* above scrim */
  ${IndexSection}:nth-of-type(odd) & {
    left: auto;
    right: 0;
  }
  ${IndexSection}:nth-of-type(even) & {
    left: 0;
    right: auto;
  }
`;

IndexSection.Figure = styled.figure`
  margin-top: ${-index.kanji.top}px;
  position: relative;
  /* Scrim */
  &::before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1; /* above image */
  }
  ${IndexSection}:nth-of-type(odd) & {
    &::before {
      background-image: ${index.figure.scrim.odd};
    }
  }
  ${IndexSection}:nth-of-type(even) & {
    &::before {
      background-image: ${index.figure.scrim.even};
    }
  }
`;

IndexSection.Latin = styled.p`
  color: ${index.latin.color};
  margin-top: ${index.latin.marginTop}px;
  padding: 0 ${index.latin.paddingSide}px;
  position: relative;
  z-index: 2; /* above scrim */
  ${({gardenName}) => h1FontStyle[gardenName]}
  ${IndexSection}:nth-of-type(odd) & {
    text-align: left;
  }
  ${IndexSection}:nth-of-type(even) & {
    text-align: right;
  }
`;

IndexSection.Latin.propTypes = {
  gardenName: PropTypes.string,
};

IndexSection.P = styled.p`
  font-family: ${index.p.fontFamily};
  font-size: ${remify(index.p.fontSize.mobile)};
  padding: 0 ${index.p.paddingSide}px;
  ${IndexSection}:nth-of-type(odd) & {
    text-align: left;
  }
  ${IndexSection}:nth-of-type(even) & {
    text-align: right;
  }
`;

export default IndexSection;
