import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {index} from 'src/utils/specIndex';
import remify from 'src/utils/remify';
import {breakpoint} from 'src/utils/hspaceScheme';

import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';

const latinFontStyle = {
  kohoan: css`
    font-family: ${font.kohoan.h1.family};
    font-size: ${remify(
      makeXHeightToBe(font.kohoan.h1.xHeight.tablet, font.kohoan.h1.metrics),
    )};
    font-weight: ${font.kohoan.h1.weight};
    letter-spacing: ${font.kohoan.h1.letterSpacing};
    line-height: ${makeLineHeightRatioToBe(
      font.kohoan.h1.lineHeightRatio.mobile,
      font.kohoan.h1.metrics,
    )};
    transform: translateX(
      5px
    ); /* text-indent won't work with right-aligned text */
  `,
  ryoanji: css`
    font-family: ${font.ryoanji.h1.family};
    font-size: ${remify(
      makeXHeightToBe(font.ryoanji.h1.xHeight.mobile, font.ryoanji.h1.metrics),
    )};
    font-weight: ${font.ryoanji.h1.weight};
    letter-spacing: ${font.ryoanji.h1.letterSpacig};
    line-height: ${makeLineHeightRatioToBe(
      font.ryoanji.h1.lineHeightRatio.mobile,
      font.ryoanji.h1.metrics,
    )};
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
  font-family: ${font.index.h2.family};
  font-size: ${remify(
    makeXHeightToBe(font.index.h2.xHeight.mobile, font.index.h2.metrics),
  )};
  font-weight: ${font.index.h2.weight};
  font-style: ${font.index.h2.style};
  @media only screen and ${index.kanji.breakpoint} {
    font-size: ${remify(
      makeXHeightToBe(font.index.h2.xHeight.tablet, font.index.h2.metrics),
    )};
  }
`;

IndexSection.H2 = styled.h2`
  ${h2FontStyle}
  padding-bottom: 0;
  padding-left: ${index.h2.paddingSide}px;
  padding-right: ${index.h2.paddingSide}px;
  padding-top: ${-index.kanji.top.mobile - index.h2.ascender.mobile}px;
  @media only screen and ${index.kanji.breakpoint} {
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

IndexSection.Kanji = styled.span.attrs(props => ({
  lang: 'ja',
}))`
  font-family: ${font.index.kanji.family};
  font-size: ${font.index.kanji.size.mobile};
  font-weight: ${font.index.kanji.weight};
  line-height: ${font.index.kanji.lineHeight};
  padding: ${index.kanji.paddingTop}px;
  position: absolute;
  top: 0;
  writing-mode: ${font.index.kanji.writingMode};
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
    font-size: ${font.index.kanji.size.tablet};
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
  font-family: ${font.index.main.family};
  font-size: ${remify(
    makeXHeightToBe(font.index.main.xHeight.mobile, font.index.main.metrics),
  )};
  font-weight: ${font.index.main.weight};
  line-height: ${makeLineHeightRatioToBe(
    font.index.main.lineHeightRatio.mobile,
    font.index.main.metrics,
  )};
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(
      makeXHeightToBe(font.index.main.xHeight.desktop, font.index.main.metrics),
    )};
    line-height: ${makeLineHeightRatioToBe(
      font.index.main.lineHeightRatio.desktop,
      font.index.main.metrics,
    )};
  }
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
