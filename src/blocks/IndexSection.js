import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import remify from 'src/utils/remify';

import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';
import {breakpoint, hspace} from 'src/utils/hspaceScheme';
import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

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
    margin-bottom: -${spaceToTrim.index.kohoan.bottom.mobile}px;
    margin-top: -${spaceToTrim.index.kohoan.top.mobile}px;
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
    letter-spacing: ${font.ryoanji.h1.letterSpacing};
    line-height: ${makeLineHeightRatioToBe(
      font.ryoanji.h1.lineHeightRatio.mobile,
      font.ryoanji.h1.metrics,
    )};
    margin-bottom: -${spaceToTrim.index.ryoanji.bottom.mobile}px;
    margin-top: -${spaceToTrim.index.ryoanji.top.mobile}px;
    text-indent: -5px;
  `,
};

const IndexSection = styled.section`
  display: flex;
  &:nth-of-type(odd) {
    flex-direction: row;
    float: right;
  }
  &:nth-of-type(even) {
    flex-direction: row-reverse;
    float: left;
  }
  ${({currentPage, pageName}) => {
    if (currentPage === pageName) {
      return `
        filter: grayscale(1);
        opacity: 0.3;
      `;
    }
  }}
`;

const h2FontStyle = css`
  font-family: ${font.index.h2.family};
  font-size: ${remify(
    makeXHeightToBe(font.index.h2.xHeight.mobile, font.index.h2.metrics),
  )};
  font-weight: ${font.index.h2.weight};
  font-style: ${font.index.h2.style};
  @media only screen and ${breakpoint.kanji} {
    font-size: ${remify(
      makeXHeightToBe(font.index.h2.xHeight.tablet, font.index.h2.metrics),
    )};
  }
`;

IndexSection.H2 = styled.h2`
  ${h2FontStyle}
  ${hspace.index.paddingSide.mobile}
  padding-top: ${-vspace.index.kanji.mobile -
  spaceToTrim.index.h2.top.mobile}px;
  @media only screen and ${breakpoint.kanji} {
    padding-top: ${-vspace.index.kanji.tablet -
    spaceToTrim.index.h2.top.tablet}px;
  }
`;

IndexSection.Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${hspace.index.section.maxWidth}px;
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
  & a:not([href]):focus::after,
  & a:not([href]):hover::after {
    background-color: transparent;
  }
`;

IndexSection.Kanji = styled.span.attrs(props => ({
  lang: 'ja',
}))`
  font-family: ${font.index.kanji.family};
  font-size: ${font.index.kanji.size.mobile};
  font-weight: ${font.index.kanji.weight};
  line-height: ${font.index.kanji.lineHeight};
  ${hspace.index.paddingSide.mobile}
  padding-top: ${remify(vspace.index.xHeight.mobile)};
  position: absolute;
  top: 0;
  writing-mode: ${font.index.kanji.writingMode};
  z-index: 2; /* above scrim */
  ${IndexSection}:nth-of-type(odd) & {
    right: 0;
  }
  ${IndexSection}:nth-of-type(even) & {
    left: 0;
  }
  @media only screen and ${breakpoint.kanji} {
    font-size: ${font.index.kanji.size.tablet};
  }
`;

const mainFontStyle = css`
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
`;

IndexSection.Figure = styled.figure`
  ${mainFontStyle}
  margin-top: ${-vspace.index.kanji.mobile}px;
  position: relative;
  @media only screen and ${breakpoint.kanji} {
    margin-top: ${-vspace.index.kanji.tablet}px;
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
  ${hspace.index.paddingSide.mobile}
  padding-top: ${remify(
    vspace.index.xHeight.mobile - spaceToTrim.index.figure.bottom.mobile,
  )};
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
  ${mainFontStyle}
  ${hspace.index.paddingSide.mobile}
  padding-top: ${remify(
    vspace.index.betweenLines.mobile - spaceToTrim.index.main.top.mobile,
  )};
  ${IndexSection}:nth-of-type(odd) & {
    text-align: left;
  }
  ${IndexSection}:nth-of-type(even) & {
    text-align: right;
  }
`;

IndexSection.propTypes = {
  currentPage: PropTypes.string,
  pageName: PropTypes.string.isRequired,
};
export default IndexSection;
