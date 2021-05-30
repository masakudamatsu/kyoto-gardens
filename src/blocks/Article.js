import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, setSpace} from 'src/utils/designSpec';
import {cssLinkText} from 'src/utils/cssLinkText';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';

const Article = styled.article`
  margin: 0 auto;
  ${Main.Kohoan} & {
    background-image: ${colour.kohoan.article.background};
    color: ${colour.kohoan.article.color};
    font-family: ${font.kohoan.article.family};
    font-size: ${remify(
      makeXHeightToBe(
        font.kohoan.article.xHeight.mobile,
        font.kohoan.article.metrics,
      ),
    )};
    font-weight: ${font.kohoan.article.weight};
    line-height: ${makeLineHeightRatioToBe(
      font.kohoan.article.lineHeightRatio.mobile,
      font.kohoan.article.metrics,
    )};
    max-width: ${kohoan.figure.maxWidth}px; // TODO: to be replaced
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(
        makeXHeightToBe(
          font.kohoan.article.xHeight.desktop,
          font.kohoan.article.metrics,
        ),
      )};
      line-height: ${makeLineHeightRatioToBe(
        font.kohoan.article.lineHeightRatio.desktop,
        font.kohoan.article.metrics,
      )};
    }
  }
  & a {
    ${cssLinkText({
      backgroundColor: 'trasparent', // disable text-shadow
      backgroundColorOnHover: colour.kohoan.link.onHoverBackground,
      linkTextColor: colour.kohoan.link.color,
      underlineColor: colour.kohoan.link.underline,
      baselinePosition: kohoan.article.baselinePosition.mobile,
      lineWidth: kohoan.link.lineWidth,
      spaceBelowBaseline: kohoan.link.spaceBelowBaseline.mobile,
    })}
    @media only screen and ${breakpoint.fontSize} {
      ${cssLinkText({
        backgroundColor: 'transparent', // disable text-shadow
        backgroundColorOnHover: colour.kohoan.link.onHoverBackground,
        linkTextColor: colour.kohoan.link.color,
        baselinePosition: kohoan.article.baselinePosition.desktop,
        lineWidth: kohoan.link.lineWidth,
        spaceBelowBaseline: kohoan.link.spaceBelowBaseline.desktop,
      })}
    }
  }
  ${Main.Ryoanji} & {
    background-color: ${colour.ryoanji.article.background};
    color: ${colour.ryoanji.article.color};
    font-family: ${font.ryoanji.article.family};
    font-size: ${remify(
      makeXHeightToBe(
        font.ryoanji.article.xHeight.mobile,
        font.ryoanji.article.metrics,
      ),
    )};
    font-weight: ${font.ryoanji.article.weight};
    line-height: ${makeLineHeightRatioToBe(
      font.ryoanji.article.lineHeightRatio.mobile,
      font.ryoanji.article.metrics,
    )};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(
        makeXHeightToBe(
          font.ryoanji.article.xHeight.desktop,
          font.ryoanji.article.metrics,
        ),
      )};
      line-height: ${makeLineHeightRatioToBe(
        font.ryoanji.article.lineHeightRatio.desktop,
        font.ryoanji.article.metrics,
      )};
    }
    max-width: ${ryoanji.figure.maxWidth}px;
    & a {
      ${cssLinkText({
        backgroundColor: colour.ryoanji.article.background,
        backgroundColorOnHover: colour.ryoanji.link.onHoverBackground,
        linkTextColor: colour.ryoanji.link.color,
        baselinePosition: ryoanji.article.baselinePosition.mobile,
        lineWidth: ryoanji.link.lineWidth,
        spaceBelowBaseline: ryoanji.link.spaceBelowBaseline.mobile,
      })}
      @media only screen and ${breakpoint.fontSize} {
        ${cssLinkText({
          backgroundColor: colour.ryoanji.article.background,
          backgroundColorOnHover: colour.ryoanji.link.onHoverBackground,
          linkTextColor: colour.ryoanji.link.color,
          baselinePosition: ryoanji.article.baselinePosition.desktop,
          lineWidth: ryoanji.link.lineWidth,
          spaceBelowBaseline: ryoanji.link.spaceBelowBaseline.desktop,
        })}
      }
    }
  }
`;

Article.Header = styled.header`
  position: relative;
  ${Main.Kohoan} & {
    padding-bottom: ${remify(
      setSpace('mobile', kohoan.article.lineHeightRatio.mobile)
        .betweenSections -
        (kohoan.h1.descender.mobile + kohoan.article.ascender.mobile),
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${remify(
        setSpace('desktop', kohoan.article.lineHeightRatio.desktop)
          .betweenSections -
          (kohoan.h1.descender.desktop + kohoan.article.ascender.desktop),
      )};
    }
  }
`;

Article.propTypes = {};

export default Article;
