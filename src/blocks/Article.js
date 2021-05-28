import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, setSpace} from 'src/utils/designSpec';
import {cssLinkText} from 'src/utils/cssLinkText';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';

const Article = styled.article`
  margin: 0 auto;
  ${Main.Kohoan} & {
    background-image: ${colour.kohoan.article.background};
    color: ${colour.kohoan.article.color};
    font-family: ${kohoan.article.fontFamily};
    font-size: ${remify(kohoan.article.fontSize.mobile)};
    font-weight: ${kohoan.article.fontWeight};
    line-height: ${kohoan.article.lineHeight.mobile};
    max-width: ${ryoanji.figure.maxWidth}px; // TODO: to be replaced
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(kohoan.article.fontSize.desktop)};
      line-height: ${kohoan.article.lineHeight.desktop};
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
    font-family: ${ryoanji.article.fontFamily};
    font-size: ${remify(ryoanji.article.fontSize.mobile)};
    font-weight: ${ryoanji.article.fontWeight};
    line-height: ${ryoanji.article.lineHeight.mobile};
    max-width: ${ryoanji.figure.maxWidth}px;
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(ryoanji.article.fontSize.desktop)};
      line-height: ${ryoanji.article.lineHeight.desktop};
    }
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
