import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import Kanji from 'src/elements/Kanji';
import {getFontSizeFromX} from 'src/utils/fontCssFactory';
import {scale, xHeight} from 'src/utils/designSpec';
import {index} from 'src/utils/specIndex';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';

import {colour} from 'src/utils/colorScheme';

const latinFontStyle = {
  kohoan: css`
    font-family: ${kohoan.h1.fontFamily};
    font-size: ${remify(
      getFontSizeFromX(
        xHeight('mobile') * Math.pow(scale, 2),
        kohoan.h1.fontMetrics,
      ),
    )};
    font-weight: ${kohoan.h1.fontWeight};
    letter-spacing: ${kohoan.h1.letterSpacig};
    line-height: ${kohoan.h1.lineHeight};
    transform: translateX(
      5px
    ); /* text-indent won't work with right-aligned text */
  `,
  ryoanji: css`
    font-family: ${ryoanji.h1.fontFamily};
    font-size: ${remify(
      getFontSizeFromX(
        xHeight('mobile') * Math.pow(scale, 2),
        ryoanji.h1.fontMetrics,
      ),
    )};
    font-weight: ${ryoanji.h1.fontWeight};
    letter-spacing: ${ryoanji.h1.letterSpacig};
    line-height: ${ryoanji.h1.lineHeight};
    text-indent: -5px;
  `,
};

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
  padding-top: ${-index.kanji.top.mobile - index.h2.ascender.mobile}px;
  @media only screen and ${index.kanji.breakpoint} {
    font-size: ${remify(index.h2.fontSize.tablet)};
    padding-top: ${-index.kanji.top.tablet - index.h2.ascender.tablet}px;
  }
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
    background-color: ${colour.index.link.onHoverBackground};
  }
`;

IndexSection.Kanji = styled(Kanji)`
  font-family: ${index.kanji.fontFamily};
  font-size: ${index.kanji.fontSize.mobile};
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
  @media only screen and ${index.kanji.breakpoint} {
    font-size: ${index.kanji.fontSize.tablet};
  }
`;

IndexSection.Figure = styled.figure`
  margin-top: ${-index.kanji.top.mobile}px;
  position: relative;
  @media only screen and ${index.kanji.breakpoint} {
    margin-top: ${-index.kanji.top.tablet}px;
  }
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
      background-image: ${colour.index.figure.scrim.right};
    }
  }
  ${IndexSection}:nth-of-type(even) & {
    &::before {
      background-image: ${colour.index.figure.scrim.left};
    }
  }
`;

IndexSection.Latin = styled.p`
  /* Font */
  ${({gardenName}) => latinFontStyle[gardenName]}
  /* Layout */
  margin-top: ${index.latin.marginTop}px;
  position: relative;
  z-index: 2; /* above scrim */
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
  font-family: ${index.article.fontFamily};
  font-size: ${remify(index.article.fontSize.mobile)};
  line-height: ${index.article.lineHeight.mobile};
  ${IndexSection}:nth-of-type(odd) & {
    padding-right: ${index.p.paddingSide}px;
    text-align: left;
  }
  ${IndexSection}:nth-of-type(even) & {
    padding-left: ${index.p.paddingSide}px;
    text-align: right;
  }
`;

export default IndexSection;
